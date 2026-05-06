package com.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Entity.MedicalHistory;
import com.Entity.Patient;
import com.Entity.Prescription;

@Repository
public interface MedicalHistoryRepository extends JpaRepository<MedicalHistory, Long>{

	 List<MedicalHistory> findByPatientId(Long patientid) ;
		
	

}

