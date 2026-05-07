import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private baseUrl="http://localhost:8080/users";
  private baseUrl = `${environment.apiUrl}/users`;


  constructor(private http:HttpClient) { }

  register(user:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/register`,user);}
  
    login(credentials:any):Observable<any>{
      return this.http.post(`${this.baseUrl}/login`,credentials);
    }

    getAll():Observable<any[]>{
      return this.http.get<any[]>(`${this.baseUrl}/list`);
    }
    getByID(id:number):Observable<any>
{
  return this.http.get<any>(`${this.baseUrl}/${id}`);
}
create(user:any):Observable<any>{
  return this.http.post(`${this.baseUrl}/register`,user);
}
update(id:number,user:any):Observable<any>{
  return this.http.put(`${this.baseUrl}/${id}`,user);

}
delete(id:number):Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`);
}
}
 