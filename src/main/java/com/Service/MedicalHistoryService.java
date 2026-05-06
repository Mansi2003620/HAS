package com.Service;

import java.util.List;


import com.Entity.MedicalHistory;

public interface MedicalHistoryService {

	List<MedicalHistory> getPatientHistory(Long patientid);

	MedicalHistory addMedicalHistory(MedicalHistory history, Long patientId);

	List<MedicalHistory> getAllMedicalHistories();

}
