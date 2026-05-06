package com.Service;

import java.util.List;
import java.util.Optional;

import com.Entity.Doctor;

public interface DoctorService {

	Doctor addDoc(Doctor doctor);

	Doctor getDoctorById(Long id);

	List<Doctor> getAllDoctors();

	Doctor updateDoctor(Long id, Doctor doctor);

	void deleteDoctor(Long id);

	Optional<Doctor> getDoctorByUserId(Long userId);
	

}
