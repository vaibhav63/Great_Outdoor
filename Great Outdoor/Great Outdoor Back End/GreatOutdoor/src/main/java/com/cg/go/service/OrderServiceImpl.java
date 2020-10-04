package com.cg.go.service;

import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.go.dao.OrderRepository;
import com.cg.go.entity.OrderEntity;
import com.cg.go.exception.OrderException;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Override
	public List<OrderEntity> findOrdersByUserId(String userId) {

		return orderRepository.findAllByUserId(userId);
	}

	@Override
	public List<OrderEntity> findAllOrders() {

		return orderRepository.findAll();
	}

	@Override
	public OrderEntity addOrder(OrderEntity orderEntity) throws OrderException {

		if (orderEntity != null) {
			if (orderRepository.existsById(orderEntity.getId())) {
				throw new OrderException("Order Already Exists !!");
			} else {
				orderEntity = orderRepository.save(orderEntity);
			}
		}
		return orderEntity;
	}

	@Override
	public void deleteAllOrders() throws OrderException {

		if (orderRepository.findAll() != null) {
			orderRepository.deleteAll();
		} else {
			throw new OrderException("No Order To Delete From Order List !!");
		}
	}

	@Override
	public void deleteOrderById(String orderId) throws OrderException {

		if (orderId != null) {
			OrderEntity entity = orderRepository.findByOrderId(orderId);
			if (entity != null) {
				orderRepository.deleteByOrderId(orderId);
			} else {
				throw new OrderException("Order Does Not Exists");
			}
		} else {
			throw new OrderException("Order Id for Deletion is null");
		}
	}

	@Override
	public void updateDate(String orderId, LocalDate dispatchDate, LocalDate arrivalDate) throws OrderException {

		if (orderId != null && dispatchDate != null && arrivalDate != null) {
			if (!orderRepository.existsByOrderId(orderId)) {
				throw new OrderException("Order Id Does Not Exists !!");
			} else {
				orderRepository.updateDate(orderId, dispatchDate, arrivalDate);
			}
		} else {
			throw new OrderException("Any Parameter To update Scheduled Date Is Missing !!");
		}
	}
}
