package com.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Entity.Prescription;
import com.Service.PrescriptionService;

import jakarta.persistence.Table;
@CrossOrigin(origins = "*")
@RestController

@RequestMapping("api/presciption")
public class PrescriptionController {

	@Autowired
	 private PrescriptionService prescriptionService;
	
	@PostMapping("/add/{medicalhistoryid}")
	public Prescription addPrescription(@RequestBody Prescription prescription,@PathVariable Long medicalhistoryid ) {
		return prescriptionService.addPrescription(prescription,medicalhistoryid);
	}
	
	@GetMapping("/history/{medicalhistoryid}")
	public List<Prescription> getPrescription(@PathVariable Long medicalhistoryid){
		return prescriptionService.getPrescriptionByMedicalHistory(medicalhistoryid);
		
	}
	@GetMapping("/list")
	public ResponseEntity<List<Prescription>> getAllPrescriptions(){
		List<Prescription> prescriptions=prescriptionService.getAllPrescriptions();
		return ResponseEntity.ok(prescriptions);
	}
	
}
