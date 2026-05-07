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

import com.Entity.MedicalHistory;
import com.Service.MedicalHistoryService;
@CrossOrigin(origins = "https://has-pviv.onrender.com")

@RestController
@RequestMapping("api/medicalhist")
public class MedicalHistoryController {
	
	@Autowired
	private MedicalHistoryService medicalHistoryService;
	
	@PostMapping("/add/{patientId}")
	public ResponseEntity<MedicalHistory> addMedicalHistory(@RequestBody MedicalHistory history,@PathVariable Long patientId){
		MedicalHistory savedhistory=medicalHistoryService.addMedicalHistory(history,patientId);
		return ResponseEntity.ok(savedhistory);
				
	}
	
	@GetMapping("/patient/{patientId}")
	public ResponseEntity<List<MedicalHistory>> getPatientHistory(@PathVariable Long patientId){
		List<MedicalHistory> histories =medicalHistoryService.getPatientHistory(patientId);
		return ResponseEntity.ok(histories);
		
 	}
	@GetMapping("/list")
	public ResponseEntity<List<MedicalHistory>> getAllMedicalHistories(){
		List<MedicalHistory> histories=medicalHistoryService.getAllMedicalHistories();
		return ResponseEntity.ok(histories);
	}
	
	

}
