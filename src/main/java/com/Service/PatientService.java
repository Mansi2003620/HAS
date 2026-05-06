package com.Service;

import java.util.List;
import java.util.Optional;

import com.Entity.Patient;

public interface PatientService {

	Patient registerPatient(Patient patient);

	List<Patient> getAllPatients();

	Optional<Patient> getPatientbyId(Long id);

	Patient updatePatient(Long id, Patient patient);

	void deletePatient(Long id);

	Optional<Patient> getPatientByUserId(Long userId);

}
