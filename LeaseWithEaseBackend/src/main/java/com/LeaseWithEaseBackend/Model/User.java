package com.LeaseWithEaseBackend.Model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name= "user", schema = "leasewitheaseDB")
public class User {
	@Id
	private int email_id;
	private String fname;
	private String lname;
	private String role;
	private String password;
	private String phone_no;
	private String token;
	private String sign_up_date;
	@JsonBackReference
	@OneToMany(mappedBy="address",cascade = { CascadeType.REMOVE },orphanRemoval = true,fetch = FetchType.LAZY)
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private List<Address> addList;
	public User() {
		super();
	}
	public int getEmail_id() {
		return email_id;
	}
	public void setEmail_id(int email_id) {
		this.email_id = email_id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhone_no() {
		return phone_no;
	}
	public void setPhone_no(String phone_no) {
		this.phone_no = phone_no;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getSign_up_date() {
		return sign_up_date;
	}
	public void setSign_up_date(String sign_up_date) {
		this.sign_up_date = sign_up_date;
	}
	public List<Address> getAddList() {
		return addList;
	}
	public void setAddList(List<Address> addList) {
		this.addList = addList;
	}

	

	 
	

	
	
}
