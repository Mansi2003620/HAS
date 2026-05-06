import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services/patient.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  patient:any={};
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private patientService:PatientService
  ){}
 
  ngOnInit(){
    const id=this.route.snapshot.params['id'];
    this.patientService.getById(id).subscribe((data) => (this.patient=data));

    
  }
  onUpdate(){
    const id=this.route.snapshot.params['id'];
    this.patientService.update(id,this.patient).subscribe({
   next: ()=>{
    alert('patient updated sucessfully!');
    this.router.navigate(['patient/list']);
   } ,
   error:(err) =>{
    console.error(err);
    alert("error updating patient");
   }  
    });
  }
}
