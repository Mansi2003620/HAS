package com.Service;

import java.util.List;

import com.Entity.Prescription;

public interface PrescriptionService {

	 Prescription addPrescription(Prescription prescription, Long medicalhistoryid) ;
	

	List<Prescription> getPrescriptionByMedicalHistory(Long medicalHistoryId);


	List<Prescription> getAllPrescriptions();

}
