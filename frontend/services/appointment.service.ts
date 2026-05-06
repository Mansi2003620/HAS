import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl='http://localhost:8080/api/appointments';
  constructor(private http:HttpClient) { }

  bookAppointment(patientId: number, doctorId: number, date: string): Observable<any> {
  const url = `${this.baseUrl}/book?patientId=${patientId}&doctorId=${doctorId}&date=${date}`;
  return this.http.post(url, {}); 
}


  cancelAppointment(id:number):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}/cancel`,{});
  }

  getAppointmentByPatient(patientId:number):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/patient/${patientId}`);

  }
  getAppointmentByDoctor(doctorId:number):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/doctor/${doctorId}`);
  }
  getAllAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/list`);
  }
}
