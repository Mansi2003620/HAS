package com.Entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "patient")

public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String address;
	private String phone;
	private String medicalHistory;
	private String age;
	private String gender;
	

	public Patient() {

	}

	
	
	public Patient(Long id, String name, String address, String phone, String medicalHistory, String age, String gender,
			User user) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.phone = phone;
		this.medicalHistory = medicalHistory;
		this.age = age;
		this.gender = gender;
		this.user = user;
	}



	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id",referencedColumnName = "id")
	private User user;


	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getPhone() {
		return phone;
	}



	public void setPhone(String phone) {
		this.phone = phone;
	}



	public String getMedicalHistory() {
		return medicalHistory;
	}



	public void setMedicalHistory(String medicalHistory) {
		this.medicalHistory = medicalHistory;
	}



	public String getAge() {
		return age;
	}



	public void setAge(String age) {
		this.age = age;
	}



	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	@Override
	public String toString() {
		return "Patient [id=" + id + ", name=" + name + ", address=" + address + ", phone=" + phone
				+ ", medicalHistory=" + medicalHistory + ", age=" + age + ", gender=" + gender + ", user=" + user + "]";
	}

	
}
