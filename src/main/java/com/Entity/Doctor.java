package com.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "doctors")
public class Doctor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Long Id;
	private String name;
	private String email;
	private String specialization;
	private String experience;
	

	public Doctor() {
	}

	
	public Doctor(Long id, String name, String email, String specialization, String experience, User user) {
		super();
		Id = id;
		this.name = name;
		this.email = email;
		this.specialization = specialization;
		this.experience = experience;
		this.user = user;
	}


	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id" ,referencedColumnName = "id")

	private User user;

	public Long getId() {
		return Id;
	}


	public void setId(Long id) {
		Id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getSpecialization() {
		return specialization;
	}


	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}


	


	


	public String getExperience() {
		return experience;
	}


	public void setExperience(String experience) {
		this.experience = experience;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	@Override
	public String toString() {
		return "Doctor [Id=" + Id + ", name=" + name + ", email=" + email + ", specialization=" + specialization
				+ ", experience=" + experience + ", user=" + user + "]";
	}




}
