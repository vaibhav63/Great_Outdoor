package com.cg.go.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.stereotype.Repository;

import com.cg.go.entity.Customer;

@Repository
public class CustomerDaoImpl implements CustomerDao {

	@PersistenceContext	
	 EntityManager em;
	
	@Override
	public com.cg.go.entity.Customer addresscreation(Customer addr) {
		// TODO Auto-generated method stub
		Customer e=em.merge(addr);
		return e;
	}

	
	
	@Override
	public List<Customer> getAlladdress() {
		Query q=em.createQuery("select m from Customer m");
		List<Customer> addrlist=q.getResultList();
		return addrlist;
	}
	

	@Override
	public Customer updateaddr(Customer addr) {
		Customer e=em.find(Customer.class,addr.getAddr_id());
		if(e!=null)
		{
			e.setAddr_id(addr.getAddr_id());
			e.setRetailer_name(addr.getRetailer_name());
			e.setBuilding_no(addr.getBuilding_no());
			e.setCity(addr.getCity());
			e.setZip(addr.getZip());
			
		}
		return e;
			
	}
	@Override	
	public Customer deleteaddrByID(int addr_id) {
		Customer e=em.find(Customer.class,addr_id);
		if(e!=null)
			{em.remove(e);
			}
        return e;
	}



}
