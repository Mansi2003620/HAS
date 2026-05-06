import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  patient = {
    user: {
      name: '',
      email: '',
      password: '',
      role: 'patient'
    },
      name: '', 
    phone: '',
    age: '',
    gender: '',
    medicalHistory: '',
    address: ''
  };

  constructor(private patientService: PatientService, private router: Router) {}

 onSubmit() {
  // Copy user name into patient name
  this.patient.name = this.patient.user.name;

  console.log(' Sending patient:', this.patient);

  this.patientService.create(this.patient).subscribe({
    next: (res) => {
      alert(' Patient added successfully');

      this.patientService.setPatient(res);

      localStorage.setItem('user', JSON.stringify({
        patientId: res.id,
        name: res.user?.name,
        email: res.user?.email,
        role: res.user?.role
      }));

      this.router.navigate(['/patient/dashboard']);
    },
    error: (err) => {
      console.error(' Error adding patient:', err);
      alert('Error adding patient');
    }
  });
}
}
