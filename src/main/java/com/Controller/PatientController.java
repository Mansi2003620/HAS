package com.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Entity.Patient;
import com.Service.PatientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/patients")
public class PatientController {
	@Autowired
	private PatientService patientService;
	
	@PostMapping("/register")
	public ResponseEntity<Patient> registerPatient(@RequestBody Patient patient){
		return ResponseEntity.ok(patientService.registerPatient(patient));
	}
    
	@GetMapping
	public ResponseEntity<List<Patient>> getAllPatients(){
		return ResponseEntity.ok(patientService.getAllPatients());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Patient> getPatientById(@PathVariable Long id){
		return patientService.getPatientbyId(id)
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
		
	}
	@GetMapping("/user/{userId}")
	public ResponseEntity<Patient> getPatientByUserId(@PathVariable Long userId){
		Optional<Patient> patient=patientService.getPatientByUserId(userId);
		return patient.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}
	@PutMapping("/{id}")
	public ResponseEntity<Patient> updatePatient(@PathVariable Long id,@RequestBody Patient patient){
		return ResponseEntity.ok(patientService.updatePatient(id,patient));
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletePatient(@PathVariable Long id){
		patientService.deletePatient(id);
		return ResponseEntity.noContent().build();
	}
}
