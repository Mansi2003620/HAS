import { Component } from '@angular/core';
import { AppointmentService } from '../../../services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addappointment',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  appointment = {
    patientId: '',
    doctorId: '',
    date: '',
    status: ''
  };

  constructor(private appointmentService: AppointmentService, private router: Router) {}

  onSubmit(): void {
    const { patientId, doctorId, date } = this.appointment;

   const jsDate = new Date(date);
  const localISO =
    jsDate.getFullYear() +
    '-' +
    String(jsDate.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(jsDate.getDate()).padStart(2, '0') +
    'T' +
    String(jsDate.getHours()).padStart(2, '0') +
    ':' +
    String(jsDate.getMinutes()).padStart(2, '0') +
    ':00';

  console.log('Formatted for backend:', localISO); 

    this.appointmentService.bookAppointment(
      Number(patientId),
      Number(doctorId),
    localISO
    ).subscribe({
      next: () => {
        alert('Appointment booked successfully!');
        this.router.navigate(['/appointment/list']);
      },
      error: (err) => {
        console.error('Error booking appointment:', err);
        alert('Failed to book appointment — check backend date format.');
      }
    });
  }
}
