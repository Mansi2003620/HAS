import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from '../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryService {
  // private baseUrl='http://localhost:8080/api/medicalhist';
    private baseUrl = `${environment.apiUrl}/api/medicalhist`;
  

  constructor(private http:HttpClient) { }

  // getAll():Observable<any[]>{
  //   return this.http.get<any []>(this.baseUrl);
  // }
  getPatientById(patientId:number):Observable<any>{
    return this.http.get<any[]>(`${this.baseUrl}/patient/${patientId}`);
  }
  create(history:any,patientId:number):Observable<any>
{
  return this.http.post(`${this.baseUrl}/add/${patientId}`,history);
}
getAll(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/list`);
}


// update(id:number,history:any):Observable<any>
// {
//   return this.http.put(`${this.baseUrl}/${id}`,history);
// }

// delete(id:number):Observable<any>
// {
//   return this.http.delete(`${this.baseUrl}/${id}`);
// }
}
