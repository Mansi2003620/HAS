package com.Entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="medical_Histories")
public class MedicalHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="patient_id")
	private User patient;
	
	private String diagnosis;
	private String notes;
	private LocalDateTime recorddate;
	
	@OneToMany(mappedBy="medicalHistory",cascade = CascadeType.ALL)
	private List<Prescription> prescriptions;
	
	public MedicalHistory() {
		
	}

	public MedicalHistory(Long id, User patient, String diagnosis, String notes, LocalDateTime recorddate
			) {
		super();
		this.id = id;
		this.patient = patient;
		this.diagnosis = diagnosis;
		this.notes = notes;
		this.recorddate = recorddate;
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getPatient() {
		return patient;
	}

	public void setPatient(User patient) {
		this.patient = patient;
	}

	public String getDiagnosis() {
		return diagnosis;
	}

	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public LocalDateTime getRecorddate() {
		return recorddate;
	}

	public void setRecorddate(LocalDateTime recorddate) {
		this.recorddate = recorddate;
	}

	

	@Override
	public String toString() {
		return "MedicalHistory [id=" + id + ", patient=" + patient + ", diagnosis=" + diagnosis + ", notes=" + notes
				+ ", recorddate=" + recorddate + "]";
	};
	
	
	
	
	
	
	

}
