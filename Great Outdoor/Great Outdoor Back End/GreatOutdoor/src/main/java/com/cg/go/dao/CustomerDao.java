package com.cg.go.dao;

import java.util.List;

import com.cg.go.entity.Customer;

public interface CustomerDao {

	Customer addresscreation(Customer addr);

	List<Customer> getAlladdress();

	Customer getAddressByUserName(String userName);

	Customer updateaddr(Customer addr);

	Customer deleteaddrByID(int addr_id);

}
