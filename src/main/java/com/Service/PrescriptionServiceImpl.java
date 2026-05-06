package com.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.Entity.MedicalHistory;
import com.Entity.Prescription;
import com.Repository.MedicalHistoryRepository;
import com.Repository.PrescriptionRepository;

@Service
public class PrescriptionServiceImpl implements PrescriptionService {

	@Autowired
	private PrescriptionRepository prescriptionRepository;
	
	@Autowired
	private MedicalHistoryRepository medicalHistoryRepository;
	
	public Prescription addPrescription(@RequestBody Prescription prescription,@PathVariable Long medicalhistoryid ) {
		
		Optional<MedicalHistory> medicalHistoryop=medicalHistoryRepository.findById(medicalhistoryid);
		if(medicalHistoryop.isEmpty()) {
			throw new RuntimeException("medical history not found");
			
		}
		prescription.setMedicalHistory(medicalHistoryop.get());
		return prescriptionRepository.save(prescription);
	}
	
	public List<Prescription> getPrescriptionByMedicalHistory(Long medicalhistoryid){
		return prescriptionRepository.findByMedicalHistoryId(medicalhistoryid);
	}

	@Override
	public List<Prescription> getAllPrescriptions() {
		
		return prescriptionRepository.findAll();
	}
	
}
