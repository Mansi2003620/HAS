package com.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@jakarta.persistence.Table(name = "appoinments")
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@ManyToOne
	@JoinColumn(name = "patient_id")
	@JsonIgnoreProperties({"appointments", "hibernateLazyInitializer", "handler"})

	private User patient;

	@ManyToOne
	@JoinColumn(name = "doctor_id")
	@JsonIgnoreProperties({"appointments", "hibernateLazyInitializer", "handler"})

	private User doctor;

	private LocalDateTime appointmentDate;
	private String status; // bookes,cancelled,completed

	public Appointment() {

	}

	public Appointment(long id, User patient, User doctor, LocalDateTime appointmentDate, String status) {
		super();
		this.id = id;
		this.patient = patient;
		this.doctor = doctor;
		this.appointmentDate = appointmentDate;
		this.status = status;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public User getPatient() {
		return patient;
	}

	public void setPatient(User patient) {
		this.patient = patient;
	}

	public User getDoctor() {
		return doctor;
	}

	public void setDoctor(User doctor) {
		this.doctor = doctor;
	}

	public LocalDateTime getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDateTime appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Appointment [id=" + id + ", patient=" + patient + ", doctor=" + doctor + ", appointmentDate="
				+ appointmentDate + ", status=" + status + "]";
	}

}
