import { Component, OnInit } from '@angular/core';
import { MedicalHistoryService } from '../../../services/medical-history.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  medicalHistories: any[] = [];
  patientId?: number;
  isPatientView: boolean = false;

  constructor(
    private service: MedicalHistoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('patientId');

    if (idParam) {
      // ✅ Show histories for specific patient
      this.isPatientView = true;
      this.patientId = Number(idParam);
      this.loadByPatient(this.patientId);
    } else {
      // ✅ Show all histories (admin view)
      this.isPatientView = false;
      this.loadAll();
    }
  }

  // 🔹 Load all medical histories
  loadAll(): void {
    this.service.getAll().subscribe({
      next: (res) => (this.medicalHistories = res),
      error: (err) => console.error('Error fetching all histories:', err),
    });
  }

  // 🔹 Load specific patient’s histories
  loadByPatient(patientId: number): void {
    this.service.getPatientById(patientId).subscribe({
      next: (res) => (this.medicalHistories = res),
      error: (err) => console.error('Error fetching medical histories:', err),
    });
  }

  // 🔹 Navigate to Add Page
  onAdd(): void {
    if (this.patientId) {
      console.log('Navigating to add for patient:', this.patientId);
      this.router.navigate(['/medicalhistory/add', this.patientId]);
    } else {
      alert('Please select a patient to add medical history.');
    }
  }
}
