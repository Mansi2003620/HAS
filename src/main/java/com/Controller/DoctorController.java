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

import com.Entity.Doctor;
import com.Service.DoctorService;
@RestController
@RequestMapping("/doctors")
public class DoctorController {
	@Autowired
	private DoctorService doctorService;
	
	@PostMapping("/register")
	public ResponseEntity<Doctor> addDoc(@RequestBody Doctor doctor){
		return ResponseEntity.ok(doctorService.addDoc(doctor));
	}
	
	@GetMapping("/{Id}")
	public ResponseEntity<Doctor> getDoctorById(@PathVariable Long Id){
		return ResponseEntity.ok(doctorService.getDoctorById(Id));
	}
	
	@GetMapping("/list")
	public ResponseEntity<List<Doctor>> getAllDoctors(){
		return ResponseEntity.ok(doctorService.getAllDoctors());
	}
	@GetMapping("/user/{userId}")
	public ResponseEntity<Doctor> getDoctorByUserId(@PathVariable("userId") Long userId) {
	    Optional<Doctor> doctor = doctorService.getDoctorByUserId(userId);
	    return doctor.map(ResponseEntity::ok)
	                 .orElse(ResponseEntity.notFound().build());
	}

	
	@PutMapping("/{Id}")
	public ResponseEntity<Doctor> updateDoctor(@PathVariable Long Id,@RequestBody Doctor doctor){
		return ResponseEntity.ok(doctorService.updateDoctor(Id,doctor));
		
	}
	
	@DeleteMapping("/{Id}")
	public ResponseEntity<String> deleteDoctor(@PathVariable Long Id){
		doctorService.deleteDoctor(Id);
		return ResponseEntity.ok("doctor deleted succesfully");
				
		
	}

}
