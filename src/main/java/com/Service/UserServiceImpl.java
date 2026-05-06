package com.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.print.Doc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.Entity.Doctor;
import com.Entity.Patient;
import com.Entity.User;
import com.Repository.DoctorRepository;
import com.Repository.PatientRepository;
import com.Repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private DoctorRepository doctorRepository;
    
    @Autowired
    private PatientRepository patientRepository;
    
	@Override
	public User registerUser(@RequestBody Map<String,Object> data) {
		Object roleobj=data.get("role");
		String role=roleobj.toString().toLowerCase();
		User user=new User();
	
		user.setName(data.get("name").toString());
		user.setEmail(data.get("email").toString());
		user.setPassword(data.get("password").toString());
		user.setRole(role);
		
		User saveUser=userRepository.save(user);
		
		if(role.equalsIgnoreCase("doctor")){
			Doctor doctor=new Doctor();
			doctor.setUser(saveUser);
			doctor.setName(data.get("name").toString());
			doctor.setSpecialization(data.get("specialization").toString());
			doctor.setExperience(data.get("experience").toString());
			doctor.setEmail(data.get("email").toString());
			doctorRepository.save(doctor);
			
			
		}
		else if(role.equalsIgnoreCase("patient")) {
			Patient patient=new Patient();
			patient.setUser(saveUser);
			patient.setName(data.get("name").toString());
			patient.setAddress(data.get("address").toString());
			patient.setAge(data.get("age").toString());
			patient.setGender(data.get("gender").toString());
			patient.setMedicalHistory(data.get("medicalHistory").toString());
			patient.setPhone(data.get("phone").toString());
			patientRepository.save(patient);
		}
		return saveUser;
		
	
		
	}

	@Override
	public Optional<User> getUserById(Long id) {
		
		return userRepository.findById(id);
	}

	@Override
	public Optional<User> getUserByemail(String email) {
		
		return userRepository.findByEmail(email);
	}

	@Override
	public List<User> getAllUsers() {
		
		return userRepository.findAll();
	}

	@Override
	public User updateUser(Long id, User updateUser) {
	    return userRepository.findById(id)
	            .map(existing -> {
	                existing.setName(updateUser.getName());
	                existing.setEmail(updateUser.getEmail());
	                existing.setPassword(updateUser.getPassword());
	                existing.setRole(updateUser.getRole());
	                return userRepository.save(existing);
	            })
	            .orElseThrow(() -> new RuntimeException("User not found with id " + id));
	}
	


	@Override
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
		
	}

	@Override
	public User login(String email, String password) {
		
		return userRepository.findByEmailAndPassword(email,password);
	}

}
