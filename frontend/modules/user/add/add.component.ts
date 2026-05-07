import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  user:any={name:'',email:'',password:'',role:''};
   patient:any={address:'',phone:'',age:'',gender:'',medicalHistory:''};
   doctor:any={email:'',specialization:'',experiene:''};
 
   
   constructor(private router:Router,private http: HttpClient){}
   onSubmit(){
     console.log('User:',this.user);
 
     let payload={ ...this.user};
     let url=''
     if(this.user.role === 'PATIENT'){
       payload={...payload,...this.patient};
       url = `${environment.apiUrl}/patients/register`; 
     }
     else if(this.user.role === 'DOCTOR'){
       payload={...payload,...this.doctor};
       url='${environment.apiUrl}/doctors/register'; 
     }
    console.log('final Payload:',payload);
 
     this.http.post(`${environment.apiUrl}/users/register`,payload).subscribe({
       next:(res) =>{
         console.log('Registartion successfull',res);
         alert('Registration successfull');
         this.router.navigate(['/user/login']);
       },
       error:(err) =>{
         console.error("registration failed:",err);
         alert("registration failed.Please try again");
       }
     });
   }
 
 
   
 }