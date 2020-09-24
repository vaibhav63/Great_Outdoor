package com.cg.go.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.go.dao.OrderRepository;
import com.cg.go.entity.OrderEntity;
import com.cg.go.exception.OrderException;
import com.cg.go.model.OrderModel;

@Service
public class OrderServiceImpl implements OrderService{
	
	@Autowired
	private OrderRepository orderRepository;
	
	private OrderEntity of(OrderModel source) {
		OrderEntity result=null;
		if(source!=null) {
			result = new OrderEntity();
			result.setId(source.getId());
			result.setUserId(source.getUserId());
			result.setOrderId(source.getOrderId());
			result.setAddressId(source.getAddressId());
			result.setProducts(source.getProducts());
			result.setTotalPrice(source.getTotalPrice());
			result.setTotalQuantity(source.getTotalQuantity());
			result.setDispatchDate(source.getDispatchDate());
			result.setArrivalDate(source.getArrivalDate());
		}
		return result;
	}
    private OrderModel of(OrderEntity source) {
    	OrderModel result=null;
		if(source!=null) {
			result = new OrderModel();
			result.setId(source.getId());
			result.setUserId(source.getUserId());
			result.setOrderId(source.getOrderId());
			result.setAddressId(source.getAddressId());
			result.setProducts(source.getProducts());
			result.setTotalPrice(source.getTotalPrice());
			result.setTotalQuantity(source.getTotalQuantity());
			result.setDispatchDate(source.getDispatchDate());
			result.setArrivalDate(source.getArrivalDate());
		
		}
		return result;
	}
	
	

	@Override
	public List<OrderModel> findOrdersByUserId(String userId) {
		
		return orderRepository.findAllByUserId(userId).stream()
				.map(entity -> of(entity))
				.collect(Collectors.toList());
	}

	@Override
	public List<OrderModel> findAllOrders() {
		
		return orderRepository.findAll().stream()
				.map(entity -> of(entity))
				.collect(Collectors.toList());
	}

	@Override
	public OrderModel addOrder(OrderModel orderModel) throws OrderException {
		
		if(orderModel!=null) {
			
			if(orderRepository.existsById(orderModel.getId())){
				throw new OrderException("Order Already Exists !!");
			}
			else {
				orderModel= of(orderRepository.save(of(orderModel)));
			}
		}
		return orderModel;
	}
	
	@Override
	public void deleteAllOrders() throws OrderException {
		
		if(orderRepository.findAll()!=null) {
			orderRepository.deleteAll();
		}else {
			throw new OrderException("No Order To Delete From Order List !!");
		}
		
	}

	@Override
	public void deleteOrderById(Long id) throws OrderException {
		
	if(id!=null) {
			
			OrderEntity entity=orderRepository.findById(id).orElse(null);
			if(entity!=null) {
			
				orderRepository.deleteById(id);
				
			}else {
				throw new OrderException("Order Does Not Exists");
			}
		}else {
			throw new OrderException("Order Id for Deletion is null");
		}
		
	}

	@Override
	public void updateDate(Long id, LocalDate dispatchDate, LocalDate arrivalDate) throws OrderException {
	
		
		
		if(id!=null && dispatchDate!=null && arrivalDate!=null) {
			if(!orderRepository.existsById(id)) {
				throw new OrderException("Order Id Does Not Exists !!");
			}
			else {
				orderRepository.updateDate(id, dispatchDate, arrivalDate);
			}
		}else {
			 
			throw new OrderException("Any Parameter To update Scheduled Date Is Missing !!");
		}
		
		
	}


}
