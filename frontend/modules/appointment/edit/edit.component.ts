import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-editappointment',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  // appointmentId!:number;
  // appointment:any={};

  constructor(private route:ActivatedRoute,private router:Router,private appointmentService:AppointmentService ){}

  // ngOnInit(): void {
  //   this.appointmentId=this.route.snapshot.params['id'];
  //   this.loadAppointment();
  // }

  // loadAppointment(){
  //   this.appointmentService.getById(this.appointmentId).subscribe((res) =>{
  //     this.appointment=res;
  //   });
  // }
  //   onUpdate(){
  //     this.appointmentService.update(this.appointmentId,this.appointment).subscribe(() =>{
  //      alert('appoinment updated sucessfully!');
  //      this.router.navigate(['/appoinment/lidt']);
  //     });

    
  // }
}
