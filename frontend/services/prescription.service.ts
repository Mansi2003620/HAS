import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  // private baseUrl="http://localhost:8080/api/presciption"
  
  private baseUrl = `${environment.apiUrl}/api/presciption`;
  constructor(private http:HttpClient) { }

  
  getPrescriptionByHistory(medicalHistoryId:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/history/${medicalHistoryId}`);
  }

  create(medicalHistoryId:number,prescription:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/add/${medicalHistoryId}`,prescription);
  }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/list`);
  }
  // update(id:number,prescription:any):Observable<any>{
  //   return this.http.put(`${this.baseUrl}/${id}`,prescription);
  // }
  // delete(id:number):Observable<any>{
  //   return this.http.delete(`${this.baseUrl}/${id}`);
  // }
}
