package com.Service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Entity.Appointment;
import com.Entity.User;
import com.Repository.AppointmentRepository;
import com.Repository.UserRepository;

@Service
public class AppointmentServiceImpl implements AppointmentService{
@Autowired
private AppointmentRepository appointmentRepository;

@Autowired
private UserRepository userRepository;
	@Override
	public Appointment bookAppointment(Long patientId, Long doctorId, LocalDateTime date) {
		User patient=userRepository.findById(patientId)
				.orElseThrow(()->new RuntimeException("patient not found"+patientId));
		User doctor=userRepository.findById(doctorId)
				.orElseThrow(()->new RuntimeException("doctor not found"+doctorId));
		Appointment appointment=new Appointment();
		appointment.setPatient(patient);
		appointment.setDoctor(doctor);
		appointment.setAppointmentDate(date);
		appointment.setStatus("Booked");
				
				
		return appointmentRepository.save(appointment);
	}

	@Override
	public Appointment cancelAppointment(Long appointmentId) {
		Appointment appointment=appointmentRepository.findById(appointmentId)
				 .orElseThrow(() -> new RuntimeException("Appointment not found with id " + appointmentId));


		appointment.setStatus("cancelled");
		
		
	return appointmentRepository.save(appointment);
	
	}

	@Override
	public List<Appointment> getAppointmentForDoctor(Long doctorId) {
		
		return appointmentRepository.findByDoctorId(doctorId);
	}

	@Override
	public List<Appointment> getAppointmentForPatient(Long patientId) {
		
		return appointmentRepository.findByPatientId(patientId);
	}

	@Override
	public List<Appointment> getAllAppointments() {
		
		return appointmentRepository.findAll();
	}

}
