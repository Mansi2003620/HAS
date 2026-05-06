import { Component, OnInit } from '@angular/core';
import { MedicalHistoryService } from '../../../services/medical-history.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   history={diagnosis:'',notes:'',recorddate:''}
    
   patientId!:number;
   constructor(private service:MedicalHistoryService,public router:Router,private route:ActivatedRoute){}
  
   ngOnInit(): void {
     this.patientId=Number(this.route.snapshot.paramMap.get('patientId'));
     console.log('patient  Id from route:',this.patientId);
   }
   onSubmit() {
  // Convert date (e.g., "2025-10-27") to full ISO datetime
  const fullHistory = {
    ...this.history,
    recorddate: this.history.recorddate
      ? new Date(this.history.recorddate).toISOString()
      : new Date().toISOString()
  };

  console.log('Submitting:', fullHistory, 'for patient:', this.patientId);

  this.service.create(fullHistory, this.patientId).subscribe({
    next: () => {
      alert('Medical History added!');
      this.router.navigate(['/medicalhistory/list', this.patientId]);
    },
    error: (err) => {
      console.error(err);
      alert('Failed to add medical history');
    }
  });
}
}
