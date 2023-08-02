package com.LeaseWithEaseBackend.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="customer", schema="leasewitheasedb")
@PrimaryKeyJoinColumn(name="email_id")
public class Customer {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int cust_id;
	private String dob;
	public Customer() {
		super();
	}
	public int getCust_id() {
		return cust_id;
	}
	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	

}
