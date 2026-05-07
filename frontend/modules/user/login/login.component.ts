import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientService } from '../../../services/patient.service'; 
import { environment } from '../../../src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(
    private router: Router,
    private http: HttpClient,
    private patientService: PatientService   
  ) {}

  onLogin() {
    console.log('Login data:', this.loginData);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(`${environment.apiUrl}/users/login`, this.loginData, { headers }).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);

      
        localStorage.setItem('user', JSON.stringify(response));

        if (response.role === 'patient') {

          this.http.get(`${environment.apiUrl}/patients/user/${response.id}`).subscribe({
            next: (patientData: any) => {
              console.log('✅ Loaded patient record:', patientData);

              localStorage.setItem('patientId', patientData.id.toString());

              this.patientService.setPatient(patientData);

              this.router.navigate(['/patient/dashboard']);
            },
            error: (err) => {
              console.error(' Failed to load patient:', err);
              alert('Could not load patient record.');
            }
          });

        } else if (response.role === 'doctor') {
          this.router.navigate(['/doctor/dashboard']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error: (error) => {
        console.error(' Login failed:', error);
        alert('Invalid email or password');
      }
    });
  }
}
