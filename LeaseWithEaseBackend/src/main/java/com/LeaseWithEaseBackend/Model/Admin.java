package com.LeaseWithEaseBackend.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="admin", schema="leasewitheasedb")
@PrimaryKeyJoinColumn(name="email_id")

public class Admin extends User {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int admin_id;

	public Admin() {
		super();
	}

	public int getAdmin_id() {
		return admin_id;
	}

	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}
	
	
	
	
}
