package com.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Entity.Doctor;
import com.Repository.DoctorRepository;

@Service
public class DoctorServiceImpl implements DoctorService {
    
	@Autowired
	DoctorRepository doctorRepository;
	@Override
	public Doctor addDoc(Doctor doctor) {
		
		return doctorRepository.save(doctor);
	}

	@Override
	public Doctor getDoctorById(Long id) {
		Optional<Doctor> doctor=doctorRepository.findById(id);
		return doctor.orElseThrow(()->new RuntimeException("Doctor not found"));
	}

	@Override
	public List<Doctor> getAllDoctors() {
	
		return doctorRepository.findAll();
	}

	@Override
	public Doctor updateDoctor(Long id, Doctor doctordetail) {
	    Doctor doctor =getDoctorById(id);
	    doctor.setName(doctordetail.getName());
	    doctor.setEmail(doctordetail.getEmail());
	    doctor.setSpecialization(doctordetail.getSpecialization());
	    
		return doctorRepository.save(doctor);
	}

	@Override
	public void deleteDoctor(Long id) {
		doctorRepository.deleteById(id);
		
	}

	@Override
	public Optional<Doctor> getDoctorByUserId(Long userId) {
	
		return doctorRepository.findByUserId(userId);
	}
	

}
