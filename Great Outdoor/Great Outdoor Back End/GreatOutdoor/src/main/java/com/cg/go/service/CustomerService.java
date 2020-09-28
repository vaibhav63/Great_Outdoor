package com.cg.go.service;

import java.util.List;

import com.cg.go.entity.Customer;

public interface CustomerService {

	Customer addresscreation(Customer addr);

	List<Customer> getAlladdress();

	Customer updateaddr(Customer addr);

	Customer deleteaddrByID(int addr_id);

}
