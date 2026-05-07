import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoctorService } from '../../../services/doctor.service';
import { Router } from '@angular/router';
import { PrescriptionService } from '../../../services/prescription.service';
import { MedicalHistoryService } from '../../../services/medical-history.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  doctor: any = null;
  loading = true;
  errorMessage = '';
  appointments: any[] = [];

  medicalHistories: any[] = [];
  
  // private baseUrl = 'http://localhost:8080';
  private baseUrl = '${environment.apiUrl}';
  

  constructor(
    private doctorService: DoctorService,
    private http: HttpClient,
    private prescriptionService:PrescriptionService,
    private router: Router,
    private medicalHistoryService:MedicalHistoryService,
    private activatedRoute:ActivatedRoute
  ) {}

  doctorId!: number;
  ngOnInit() {
    // this.doctor = this.doctorService.getDoctor();

    // if (this.doctor && this.doctor.id) {
    //   console.log(' Doctor found locally:', this.doctor);

    //   this.http.get(`${this.baseUrl}/doctors/${this.doctor.id}`).subscribe({
    //     next: (data: any) => {
    //       console.log(' Doctor data loaded from backend:', data);
    //       this.doctor = data;
    //       this.loadAppointments(this.doctor.id);
    //       this.loading = false;
    //     },
    //     error: (err) => {
    //       console.error(' Failed to load doctor data:', err);
    //       this.errorMessage = 'Failed to load doctor data';
    //       this.loading = false;
          
    //     }
    //   });
    // } else {
    //   console.warn(' No doctor found in service or localStorage');
    //   this.loading = false;
    // }
    const doctorUser = JSON.parse(localStorage.getItem('user')!);
if (!doctorUser || !doctorUser.id) {
  console.warn(' No logged-in doctor found.');
  return;
}

this.http.get(`${this.baseUrl}/doctors/user/${doctorUser.id}`).subscribe({
  next: (data: any) => {
    this.doctor = data;
    this.loadAppointments(data.id);
    this.loading = false;
  },
  error: (err) => {
    console.error(' Failed to load doctor:', err);
    this.loading = false;
  }
});
  }


  loadAppointments(doctorId: number) {
  this.appointments = []; 
  this.http.get(`${this.baseUrl}/api/appointments/doctor/${doctorId}`).subscribe({
    next: (res: any) => {
      console.log(' Appointments loaded:', res);
      this.appointments = res;
    },
    error: (err) => {
      console.error(' Error loading appointments:', err);
    }
  });
}


  onCancel(appointmentId: number) {
    if (confirm('Cancel this appointment?')) {
      this.http.put(`${this.baseUrl}/api/appointments/${appointmentId}/cancel`, {}).subscribe({
        next: () => {
          alert(' Appointment cancelled successfully.');
          this.loadAppointments(this.doctor.id);
        },
        error: (err) => {
          console.error('❌ Error cancelling appointment:', err);
          alert('Failed to cancel appointment.');
        }
      });
    }
  }

  onEditDoctor() {
    if (this.doctor && this.doctor.id) {
      this.router.navigate(['/doctor/edit', this.doctor.id]);
    } else {
      alert('Doctor details not available to edit.');
    }
  }

  viewMedicalHistory() {
    this.router.navigate([`/medical-history/list`]);
  }
   viewMedicalHistoryId(patientId: number): void {
    this.router.navigate(['/medical-history/list', patientId]);
  }

  addMedicalHistory(patientId: number) {
    this.router.navigate([`/medical-history/add/${patientId}`]);
  }
onBookAppointment() {
  this.router.navigate(['/appointment/add']);
}

 prescribeMedicine(patientId: number) {
   console.log('Fetching medical history for patient:', patientId);

    this.medicalHistoryService.getPatientById(patientId).subscribe({
      next: (histories) => {
        if (histories && histories.length > 0) {
          const latestHistory = histories[histories.length - 1]; // use latest entry
          console.log('Found medical history ID:', latestHistory.id);
          this.router.navigate([`/prescription/add/${latestHistory.id}`]);
        } else {
          alert('No medical history found for this patient. Please add one first.');
        }
      },
      error: (err) => {
        console.error('Error fetching medical history:', err);
        alert('Failed to fetch medical history for patient.');
      }
    });
  }



  viewPrescriptions() {
  this.router.navigate(['/prescription/list']);
}
 logout() {
  localStorage.removeItem('doctor'); 
  this.router.navigate(['/user/login']); 
}

 loadPrescriptions(medicalHistoryId: number): void {
    this.prescriptionService.getPrescriptionByHistory(medicalHistoryId).subscribe({
      next: (data) => {
        console.log('Prescriptions:', data);
        // you can store and show these in the dashboard
      },
      error: (err) => {
        console.error('Error fetching prescriptions:', err);
      }
    });
  }



}


