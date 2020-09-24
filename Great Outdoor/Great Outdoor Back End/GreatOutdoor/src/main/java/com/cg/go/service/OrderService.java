package com.cg.go.service;

import java.time.LocalDate;
import java.util.List;

import com.cg.go.exception.OrderException;
import com.cg.go.model.OrderModel;

public interface OrderService {

	public List<OrderModel> findOrdersByUserId(String userId);
	
	public List<OrderModel> findAllOrders();
	
	public OrderModel addOrder(OrderModel orderModel) throws OrderException;
	
	public void deleteAllOrders() throws OrderException;
	
	public void deleteOrderById(Long id) throws OrderException;
	
	public void updateDate(Long id,LocalDate dispatchDate,LocalDate arrivalDate) throws OrderException;
	
	
}
