import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../../services/prescription.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  implements OnInit{
   prescription={
    id:'',
     medicineName:'',
      dosage:'',
       duration:'',
   };
medicalHistoryId!:number;
   constructor(private prescriptionService:PrescriptionService,private router:Router,private route:ActivatedRoute){}
ngOnInit(): void {
  this.medicalHistoryId=Number(this.route.snapshot.paramMap.get('medicalhistoryid'));
  console.log('medical hidstory id:',this.medicalHistoryId);
}
   onSubmit(){

    console.log('prescription data:',this.prescription);
    console.log('MedicalHistory ID:',this.medicalHistoryId);

    if(!this.medicalHistoryId){
      alert('medical history id is missing.')
      return;
    }
    this.prescriptionService.create(this.medicalHistoryId,this.prescription).subscribe({
      next:(res)=>{
        alert('prescription added sucessfully');
        this.router.navigate(['/prescription/list',this.medicalHistoryId]);
      },
      error:(err) =>{
        console.error('Error adding prescription:',err);
        alert('failed to add prescription.');
      }
    });
   }
}
