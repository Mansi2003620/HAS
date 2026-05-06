package com.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="prescription")
public class Prescription {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String medicineName;
	private String dosage;
	private String duration;
	
	@ManyToOne
	@JoinColumn(name="medical_history_id")
	private MedicalHistory medicalHistory;
	
	public Prescription() {
		
	}

	public Prescription(Long id, String medicineName, String dosage, String duration, MedicalHistory medicalHistory) {
		super();
		this.id = id;
		this.medicineName = medicineName;
		this.dosage = dosage;
		this.duration = duration;
		this.medicalHistory = medicalHistory;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMedicineName() {
		return medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public String getDosage() {
		return dosage;
	}

	public void setDosage(String dosage) {
		this.dosage = dosage;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public MedicalHistory getMedicalHistory() {
		return medicalHistory;
	}

	public void setMedicalHistory(MedicalHistory medicalHistory) {
		this.medicalHistory = medicalHistory;
	}

	@Override
	public String toString() {
		return "Prescription [id=" + id + ", medicineName=" + medicineName + ", dosage=" + dosage + ", duration="
				+ duration + ", medicalHistory=" + medicalHistory + "]";
	}
	
    
		
	
	
	
	

}
