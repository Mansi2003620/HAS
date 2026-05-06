import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrescriptionService } from '../../../services/prescription.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{
  // prescription:any;

  // constructor(
  //   private route:ActivatedRoute,
  //   private router:Router,
  //   private prescriptionService:PrescriptionService
  // ){}

  // ngOnInit(): void {
  //   const id=Number(this.route.snapshot.paramMap.get('id'));
  //   this.prescriptionService.getById(id).subscribe({
  //     next:(data)=>{
  //       this.prescription=data;
  //     },
  //     error:(err) => {
  //       console.error('error loading Prescriptions:',err);
  //     }
  //   });
  // }

  // onUpdate():void{
  //   const id=Number(this.route.snapshot.paramMap.get('id'));
  //   this.prescriptionService.update(id,this.prescription).subscribe({
  //     next:() => {
  //       alert('prescription updated suceesfully!');
  //       this.router.navigate(['/prescription/list']);

  //     },
  //     error:(err)=>{
  //       console.error('Update failed:',err);
  //       alert('failed to update prescription')

        
  //     }

      
  //   });
  // }
  // goBack():void{
  //       this.router.navigate(['/prescription/list']);
  //     }

}
