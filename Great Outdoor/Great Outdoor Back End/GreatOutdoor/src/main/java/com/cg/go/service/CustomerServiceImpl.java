package com.cg.go.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.go.dao.CustomerDaoImpl;
import com.cg.go.entity.Customer;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	CustomerDaoImpl dao;

	@Override
	public Customer addresscreation(Customer addr) {
		return dao.addresscreation(addr);
	}

	@Override

	public List<Customer> getAlladdress() {
		return dao.getAlladdress();
	}

	@Override
	public Customer updateaddr(Customer addr) {
		return dao.updateaddr(addr);
	}

	@Override
	public Customer deleteaddrByID(int addr_id) {
		return dao.deleteaddrByID(addr_id);
	}

}