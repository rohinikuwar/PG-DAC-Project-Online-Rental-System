package com.LeaseWithEaseBackend.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="transporter", schema="leasewitheasedb")
@PrimaryKeyJoinColumn(name="email_id")

public class Transporter extends User {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int t_id;
	private double rate_of_del;
	public Transporter() {
		super();
	}
	public int getT_id() {
		return t_id;
	}
	public void setT_id(int t_id) {
		this.t_id = t_id;
	}
	public double getRate_of_del() {
		return rate_of_del;
	}
	public void setRate_of_del(double rate_of_del) {
		this.rate_of_del = rate_of_del;
	}


}
