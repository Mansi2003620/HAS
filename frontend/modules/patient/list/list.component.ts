import { Component, OnInit } from '@angular/core';
import { Router}from '@angular/router';

import { PatientService } from '../../../services/patient.service';
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  patients:any[]=[];

  constructor(private patientService:PatientService,private router:Router){}

  
  ngOnInit(): void {
    this.loadPatients();
  }
  onSelect(patient: any) {
    this.patientService.setPatient(patient);

    this.router.navigate(['/dashboard']);
  }

  loadPatients(){
    this.patientService.getAll().subscribe((res)=>(this.patients=res));
  }
      
  onEdit(id:number){
    this.router.navigate(['/patient/edit',id]);
  }

  onDelete(id:number){
    if(confirm('Are you sure you want to delete this patient?')){
      this.patientService.delete(id).subscribe(()=>{
        alert('patient deleted!');
        this.loadPatients();
      });
    }
  }
}
