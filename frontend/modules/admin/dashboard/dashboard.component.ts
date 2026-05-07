import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stats = {
    doctors: 0,
    patients: 0,
    appointments: 0,
    prescriptions: 0,
    medicalHistories: 0,
    users: 0
  };
 doctors: any[] = [];
  patients: any[] = [];
    showDashboards = false;

  
  private baseUrl = '${environment.apiUrl}';
  

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadDashboardStats();
     
  }

  loadDashboardStats(): void {
    this.http.get<any[]>(`${this.baseUrl}/doctors/list`).subscribe({
      next: (data) => this.stats.doctors = data.length,
      error: (err) => console.error('Error loading doctors:', err)
    });

    this.http.get<any[]>(`${this.baseUrl}/patients`).subscribe({
   next: (data) => {
    console.log('🩺 Patient data received:', data);
    this.stats.patients = data.length;
  },
  error: (err) => console.error('Error loading patients:', err)
    });

    this.http.get<any[]>(`${this.baseUrl}/api/appointments/list`).subscribe({
      next: (data) => this.stats.appointments = data.length,
      error: (err) => console.error('Error loading appointments:', err)
    });

    this.http.get<any[]>(`${this.baseUrl}/api/presciption/list`).subscribe({
      next: (data) => this.stats.prescriptions = data.length,
      error: (err) => console.error('Error loading prescriptions:', err)
    });

    this.http.get<any[]>(`${this.baseUrl}/api/medicalhist/list`).subscribe({
      next: (data) => this.stats.medicalHistories = data.length,
      error: (err) => console.error('Error loading medical histories:', err)
    });

    this.http.get<any[]>(`${this.baseUrl}/users/list`).subscribe({
      next: (data) => this.stats.users = data.length,
      error: (err) => console.error('Error loading users:', err)
    });
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

    loadDoctors(): void {
    this.http.get<any[]>(`${this.baseUrl}/doctors/list`).subscribe({
      next: (data) => this.doctors = data,
      error: (err) => console.error('Error loading doctors:', err)
    });
  }

  loadPatients(): void {
    this.http.get<any[]>(`${this.baseUrl}/patients`).subscribe({
      next: (data) => this.patients = data,
      error: (err) => console.error('Error loading patients:', err)
    });
  }

   viewDoctorDashboard(id: number): void {
    this.router.navigate([`/doctor/dashboard/${id}`]);
  }

  viewPatientDashboard(id: number): void {
    this.router.navigate([`/patient/dashboard/${id}`]);
  }
 
  toggleViewDashboards(): void {
    this.showDashboards = !this.showDashboards;
    if (this.showDashboards) {
      this.loadDoctors();
      this.loadPatients();
    }
  }
 logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
  
}
