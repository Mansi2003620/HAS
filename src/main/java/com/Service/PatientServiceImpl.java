package com.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Entity.Patient;
import com.Repository.PatientRepository;

@Service
public class PatientServiceImpl implements PatientService {

	@Autowired
	private PatientRepository patientRepository;
	
	@Override
	public Patient registerPatient(Patient patient) {
		
		return patientRepository.save(patient);
	}

	@Override
	public List<Patient> getAllPatients() {
		
		return patientRepository.findAll();
	}

	@Override
	public Optional<Patient> getPatientbyId(Long id) {
		
		return patientRepository.findById(id);
	}

	@Override
	public Patient updatePatient(Long id, Patient patient) {
		
		 return patientRepository.findById(id).map(existingPatient -> {
	            existingPatient.setName(patient.getName());
	            existingPatient.setAddress(patient.getAddress());
	            existingPatient.setPhone(patient.getPhone());
	            existingPatient.setMedicalHistory(patient.getMedicalHistory());
	            return patientRepository.save(existingPatient);
	        }).orElseThrow(() -> new RuntimeException("patient not found with id"+id));
	}

	@Override
	public void deletePatient(Long id) {
		patientRepository.deleteById(id);
	}

	@Override
	public Optional<Patient> getPatientByUserId(Long userId) {
		
		return patientRepository.findByUserId(userId);
	}
	

}
