package com.Controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Entity.Appointment;
import com.Service.AppointmentService;
@CrossOrigin(origins = "https://has-pviv.onrender.com")
@RestController
@RequestMapping("/api/appointments")

public class AppointmentController {
 @Autowired
 private AppointmentService appointmentService;
 
 @PostMapping("/book")
 public ResponseEntity<Appointment> bookAppointment(
	 @RequestParam Long patientId,
	 @RequestParam Long doctorId,
	 @RequestParam @DateTimeFormat(iso=DateTimeFormat.ISO.DATE_TIME) LocalDateTime date){
	 Appointment appointment=appointmentService.bookAppointment(patientId,doctorId,date);
	 return ResponseEntity.ok(appointment);
	 
	 
 }
 
 @PutMapping("/{Id}/cancel")
 public ResponseEntity<Appointment> cancelAppointment(@PathVariable Long Id){

	 Appointment appointment=appointmentService.cancelAppointment(Id);
	 return ResponseEntity.ok(appointment);
	 
	 
 }
 @GetMapping("/doctor/{doctorId}")
 public ResponseEntity<List<Appointment>>  getAppointmentForDoctor(@PathVariable  Long doctorId){

	 
	 return ResponseEntity.ok(appointmentService.getAppointmentForDoctor(doctorId));
	 
	 
 } 
 
 @GetMapping("/patient/{patientId}")
 public ResponseEntity<List<Appointment>> getAppointmentForPatient(@PathVariable Long patientId) {
     return ResponseEntity.ok(appointmentService.getAppointmentForPatient(patientId));
 }
 
 @GetMapping("/list")
 public ResponseEntity<List<Appointment>> getAllAppointments(){
	 List<Appointment> appointments =appointmentService.getAllAppointments();
	 return ResponseEntity.ok(appointments);
 }
 
}
