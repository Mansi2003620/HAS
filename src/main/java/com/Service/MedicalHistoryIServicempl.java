package com.Service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Entity.MedicalHistory;
import com.Entity.User;
import com.Repository.MedicalHistoryRepository;
import com.Repository.UserRepository;


@Service
public class MedicalHistoryIServicempl implements MedicalHistoryService {
	
	@Autowired
	MedicalHistoryRepository medicalHistoryRepository;
	
	@Autowired
	UserRepository userRepository;
	
	public List<MedicalHistory> getPatientHistory(Long patientid){
		return medicalHistoryRepository.findByPatientId(patientid);
	}

	@Override
	public MedicalHistory addMedicalHistory(MedicalHistory history, Long patientId) {
		User patient=userRepository.findById(patientId)
				.orElseThrow(()-> new RuntimeException("patient not found"));
		history.setPatient(patient);
		history.setRecorddate(LocalDateTime.now());
		return medicalHistoryRepository.save(history);
	}

	@Override
	public List<MedicalHistory> getAllMedicalHistories() {
		return medicalHistoryRepository.findAll();
	}


}
