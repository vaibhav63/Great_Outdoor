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
	public void deleteOrderById(Long id) throws OrderException {

		if (id != null) {

			OrderEntity entity = orderRepository.findById(id).orElse(null);
			if (entity != null) {

				orderRepository.deleteById(id);

			} else {
				throw new OrderException("Order Does Not Exists");
			}
		} else {
			throw new OrderException("Order Id for Deletion is null");
		}

	}

	@Override
	public void updateDate(Long id, LocalDate dispatchDate, LocalDate arrivalDate) throws OrderException {

		if (id != null && dispatchDate != null && arrivalDate != null) {
			if (!orderRepository.existsById(id)) {
				throw new OrderException("Order Id Does Not Exists !!");
			} else {
				orderRepository.updateDate(id, dispatchDate, arrivalDate);
			}
		} else {

			throw new OrderException("Any Parameter To update Scheduled Date Is Missing !!");
		}

	}

}
