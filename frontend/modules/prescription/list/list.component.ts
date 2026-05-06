import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../../services/prescription.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  prescriptions: any[] = [];
  medicalHistoryId?: number;
  isFilteredView: boolean = false;

  constructor(
    private prescriptionService: PrescriptionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const historyParam = this.route.snapshot.paramMap.get('medicalhistoryid');
    if (historyParam) {
      this.medicalHistoryId = Number(historyParam);
      this.isFilteredView = true;
      this.loadByMedicalHistory(this.medicalHistoryId);
    } else {
      this.isFilteredView = false;
      this.loadAll();
    }
  }

  // 🔹 Load prescriptions for specific medical history
  loadByMedicalHistory(historyId: number): void {
    this.prescriptionService.getPrescriptionByHistory(historyId).subscribe({
      next: (data) => {
        this.prescriptions = data;
        console.log('Prescriptions for medical history:', data);
      },
      error: (err) => console.error('Error fetching prescriptions:', err),
    });
  }

  // 🔹 Load all prescriptions (Admin view)
  loadAll(): void {
    this.prescriptionService.getAll().subscribe({
      next: (data) => {
        this.prescriptions = data;
        console.log('All prescriptions:', data);
      },
      error: (err) => console.error('Error fetching all prescriptions:', err),
    });
  }

  // 🔹 Add a new prescription
  onAdd(): void {
    if (this.medicalHistoryId) {
      this.router.navigate(['/prescription/add', this.medicalHistoryId]);
    } else {
      alert('Please select a medical history record to add a prescription.');
    }
  }

   
}
