import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  doctorId!:number;
  doctor:any={};

  constructor(
    private route:ActivatedRoute,
    private router :Router,
    private doctorService:DoctorService
  ){}

  ngOnInit(): void {
    this.doctorId=this.route.snapshot.params['id'];
    this.loadDoctor();
  }
  loadDoctor(){
    this.doctorService.getById(this.doctorId).subscribe((res) =>{
      this.doctor=res;
    });
  }

  onUpdate(){
    this.doctorService.update(this.doctorId,this.doctor).subscribe(()=>{
      alert('Doctor updated sucessfully!');
      this.router.navigate(['/doctor/list']);
    });
  }

}
