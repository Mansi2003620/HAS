import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  appointments: any[] = [];
  role: string = '';
  id?: number;
  isFilteredView: boolean = false;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.role = this.route.snapshot.paramMap.get('role') || '';
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? Number(idParam) : undefined;

    if (this.role && this.id) {
      this.isFilteredView = true;
      this.loadFilteredAppointments();
    } else {
      this.isFilteredView = false;
      this.loadAllAppointments();
    }
  }

  // 🔹 Load all appointments (Admin)
  loadAllAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe({
      next: (res) => {
        this.appointments = res;
        console.log('All appointments loaded:', res);
      },
      error: (err) => console.error('Error loading all appointments:', err),
    });
  }

  //  Load appointments for specific role
  loadFilteredAppointments(): void {
    if (this.role === 'doctor') {
      this.appointmentService.getAppointmentByDoctor(this.id!).subscribe({
        next: (res) => {
          this.appointments = res;
          console.log('Doctor appointments loaded:', res);
        },
        error: (err) => console.error('Error loading doctor appointments:', err),
      });
    } else if (this.role === 'patient') {
      this.appointmentService.getAppointmentByPatient(this.id!).subscribe({
        next: (res) => {
          this.appointments = res;
          console.log('Patient appointments loaded:', res);
        },
        error: (err) => console.error('Error loading patient appointments:', err),
      });
    }
  }

  //  Edit appointment
  onEdit(id: number): void {
    this.router.navigate(['/appointment/edit', id]);
  }

  //  Cancel appointment
  cancel(id: number): void {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      this.appointmentService.cancelAppointment(id).subscribe({
        next: () => {
          alert('Appointment cancelled successfully!');
          this.isFilteredView ? this.loadFilteredAppointments() : this.loadAllAppointments();
        },
        error: (err) => {
          console.error('Failed to cancel appointment:', err);
          alert('Failed to cancel appointment.');
        },
      });
    }
  }
}
