package com.Repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.Entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor,Long>{

	Optional<Doctor> findByUserId(Long userId);
	

}
