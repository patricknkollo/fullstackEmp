package com.fakeEmp.fake.employee.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.sun.istack.NotNull;

@Entity
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	private Long id;
	
	private String firstname;
	
	private String name;
	
	private String email;
	
	private String password;
	
	public Employee(Long id, String firstname, String name, String email, String password) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public Employee(String firstname, String name, String email, String password) {
		super();
		this.firstname = firstname;
		this.name = name;
		this.email = email;
		this.password = password;
	}
	
	public Employee() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", firstname=" + firstname + ", name=" + name + ", email=" + email + ", password="
				+ password + "]";
	}
}
