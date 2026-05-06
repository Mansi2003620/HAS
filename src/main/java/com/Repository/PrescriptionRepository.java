package com.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Entity.Prescription;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long>{
	List<Prescription> findByMedicalHistoryId(Long medicalHistoryId);

}
