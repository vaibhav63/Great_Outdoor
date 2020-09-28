package com.cg.go.service;

import java.time.LocalDate;
import java.util.List;
import com.cg.go.entity.OrderEntity;
import com.cg.go.exception.OrderException;

public interface OrderService {

	public List<OrderEntity> findOrdersByUserId(String userId);

	public List<OrderEntity> findAllOrders();

	public OrderEntity addOrder(OrderEntity orderEntity) throws OrderException;

	public void deleteAllOrders() throws OrderException;

	public void deleteOrderById(Long id) throws OrderException;

	public void updateDate(Long id, LocalDate dispatchDate, LocalDate arrivalDate) throws OrderException;

}
