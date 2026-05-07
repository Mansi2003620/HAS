import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  // private baseUrl = 'http://localhost:8080/doctors';
    private baseUrl = `${environment.apiUrl}/doctors`;

  private doctor: any; // ✅ local cache for dashboard use

  constructor(private http: HttpClient) {}

  // ======== 🔹 API Calls =========
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/list`);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  create(doctor: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, doctor);
  }

  update(id: number, doctor: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, doctor);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // ======== 🔹 Local Storage for Dashboard =========
  setDoctor(doctorData: any) {
    this.doctor = doctorData;
    localStorage.setItem('doctor', JSON.stringify(doctorData));
  }

  getDoctor() {
    if (!this.doctor) {
          const savedDoctor = localStorage.getItem('doctor');
    this.doctor = savedDoctor ? JSON.parse(savedDoctor) : null;

    }
    return this.doctor;
  }

  clearDoctor() {
    this.doctor = null;
    localStorage.removeItem('doctor');
  }
getDoctorByUserId(userId: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/doctors/user/${userId}`);
}


}
