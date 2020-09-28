package com.cg.go.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "addr")
public class Customer {
	@Id
	public int addr_id;
	public String retailer_name;
	public int building_no;
	public String city;
	public String state;
	public int Zip;

	public int getAddr_id() {
		return addr_id;
	}

	public void setAddr_id(int addr_id) {
		this.addr_id = addr_id;
	}

	public String getRetailer_name() {
		return retailer_name;
	}

	public void setRetailer_name(String retailer_name) {
		this.retailer_name = retailer_name;
	}

	public int getBuilding_no() {
		return building_no;
	}

	public void setBuilding_no(int building_no) {
		this.building_no = building_no;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getZip() {
		return Zip;
	}

	public void setZip(int zip) {
		Zip = zip;
	}

}