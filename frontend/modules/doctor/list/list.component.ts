import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  doctors:any[]=[];

  constructor(private doctorService:DoctorService,private router:Router){}

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(){
    this.doctorService.getAll().subscribe((res)=>(this.doctors=res));

  }
   onAdd():void{
    this.router.navigate(['/doctor/add']);

  }
  onEdit(id:number){
    this.router.navigate(['/doctor/edit',id]);

  }
  onDelete(id:number){
    if(confirm('Are you sure ypu want to delete this doctors?')){
      this.doctorService.delete(id).subscribe(()=>{
        alert('doctor deleted sucessfully!');
        this.loadDoctors();
      });
    }
  }

}
