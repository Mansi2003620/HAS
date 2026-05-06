package com.Service;

import java.time.LocalDateTime;
import java.util.List;

import com.Entity.Appointment;

public interface AppointmentService {
	Appointment bookAppointment(Long patientId,Long doctorId,LocalDateTime date);
	Appointment cancelAppointment(Long appointmentId);
	List<Appointment> getAppointmentForDoctor(Long doctorId);
	List<Appointment> getAppointmentForPatient(Long patientId);
	List<Appointment> getAllAppointments();

}
