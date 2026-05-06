import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl ='http://localhost:8080/patients';
  constructor(private http:HttpClient ) {}
   selectedPatient: any;

  setPatient(patient: any) {
    this.selectedPatient = patient;
  }

  getPatient() {
    return this.selectedPatient;
  }
  getAll():Observable<any[]>{
     return this.http.get<any[]>(this.baseUrl);
  }

  getById(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  create(patient:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/register`,patient);
  }

  update(id:number,patient:any):Observable<any>
{
  return this.http.put(`${this.baseUrl}/${id}`,patient);
}

delete(id:number):Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`);
}
getPatientByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${userId}`);
  }

}
