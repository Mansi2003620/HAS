import { Component } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
   doctor={
    user:{
      name:'',
      email:'',
      password:'',
      role:'doctor'
    },
     name: '',
    email: '',
    specialization:'',
    experience:''
   };

   constructor(private doctorService:DoctorService,private router:Router) {}

   onSubmit(){
    this.doctor.name = this.doctor.user.name;
    this.doctor.email = this.doctor.user.email;

    console.log('Sending doctor data to backend: ',this.doctor)
    this.doctorService.create(this.doctor).subscribe({
      next:(response) => {
        alert('Doctor added sucessfully!');
               this.doctorService.setDoctor(response);
      // this.router.navigate(['/doctor/list']);
      this.router.navigate(['/doctor/dashboard']);

      },
      error:(err) =>{
        console.error('error adding doctor:',err);
        alert('failed to add doctor.');
      }
      
    });
  
   }
}
