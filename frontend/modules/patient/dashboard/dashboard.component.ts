import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  patient: any = {};
  appointments: any[] = [];
  medicalHistories: any[] = [];
  prescriptions: any[] = [];

  loading: boolean = true;

  constructor(
    private router: Router,
    private http: HttpClient,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    // Disable route caching so refresh works correctly
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.loadPatientData();
  }

  // 🩺 Load logged-in patient details
  private loadPatientData(): void {
    this.loading = true;

    const user = JSON.parse(localStorage.getItem('user')!);
    if (!user || !user.id) {
      console.warn(' No logged-in user found in localStorage');
      this.loading = false;
      return;
    }

    //  Fetch patient by userId (not patientId)
    this.patientService.getPatientByUserId(user.id).subscribe({
      next: (data: any) => {
        console.log(' Loaded patient:', data);
        this.patient = data;
        this.loading = false;

        if (data && data.id) {
          this.loadAppointments(data.id);
        }
      },
      error: (err) => {
        console.error(' Failed to load patient data:', err);
        this.loading = false;
      }
    });
  }

  // 🗓 Load appointments for this patient
loadAppointments(patientId: number): void {
  this.http.get<any[]>(`http://localhost:8080/api/appointments/patient/${patientId}`).subscribe({
    next: (appointments) => {
      console.log(' Raw appointments from backend:', appointments);

      this.appointments = appointments.map(a => ({
        ...a,
        doctorName: a.doctor?.name ?? 'Unknown',
        patientName: a.patient?.name ?? 'Unknown',
        appointmentDate: a.appointmentDate
      }));

      console.log(' Mapped appointments:', this.appointments);
    },
    error: (err) => {
      console.error(' Error loading appointments:', err);
    }
  });
}



  //  Book Appointment
  bookAppointment(): void {
    this.router.navigate(['/appointment/add']).then(() => {
      window.location.reload();
    });
  }

  //  Edit Patient Profile
  onEdit(): void {
    if (this.patient.id) {
      this.router.navigate(['/patient/edit', this.patient.id]);
    } else {
      alert(' No patient found to edit.');
    }
  }

  onEditAppointment(id: number): void {
    this.router.navigate(['/appointment/add', { queryParams: { editId: id } }]);
  }

  viewMedicalHistory() {
    this.http
      .get<any[]>(`http://localhost:8080/api/medicalhist/patient/${this.patient.id}`)
      .subscribe({
        next: (data) => {
          this.medicalHistories = data;
          console.log('Medical History:', data);
          alert('Medical history fetched successfully!');
        },
        error: (err) => {
          console.error('Error fetching medical history:', err);
          alert('Failed to fetch medical history.');
        },
      });
  }

  viewPrescription(medicalHistoryId: number) {
    this.http
      .get<any[]>(`http://localhost:8080/api/presciption/history/${medicalHistoryId}`)
      .subscribe({
        next: (data) => {
          this.prescriptions = data;
          console.log('Prescriptions:', data);
          alert('Prescriptions fetched successfully!');
        },
        error: (err) => {
          console.error('Error fetching prescriptions:', err);
          alert('Failed to fetch prescriptions.');
        },
      });
  }
 logout() {
  localStorage.removeItem('patient'); 
  this.router.navigate(['/user/login']); 
}
  onCancel(id: number): void {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      this.http.put(`http://localhost:8080/api/appointments/${id}/cancel`, {}).subscribe({
        next: () => {
          console.log('✅ Appointment cancelled successfully.');
          const appt = this.appointments.find((a) => a.id === id);
          if (appt) appt.status = 'Cancelled';
          alert('Appointment cancelled successfully.');
        },
        error: (err) => {
          console.error(' Error cancelling appointment:', err);
          alert('Failed to cancel appointment.');
        },
      });
    }
  }
}
