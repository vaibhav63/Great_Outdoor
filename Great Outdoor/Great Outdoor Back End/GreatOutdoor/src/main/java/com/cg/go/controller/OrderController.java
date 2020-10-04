package com.cg.go.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cg.go.entity.OrderEntity;
import com.cg.go.exception.OrderException;
import com.cg.go.service.OrderService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/order")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@GetMapping
	public ResponseEntity<List<OrderEntity>> getAllOrders() {

		return new ResponseEntity<List<OrderEntity>>(orderService.findAllOrders(), HttpStatus.OK);
	}

	@GetMapping("/{userId}")
	public ResponseEntity<List<OrderEntity>> getOrdersByUserId(@PathVariable("userId") String userId) {

		return new ResponseEntity<List<OrderEntity>>(orderService.findOrdersByUserId(userId), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<OrderEntity> addOrder(@RequestBody OrderEntity entity) throws OrderException {

		return new ResponseEntity<>(orderService.addOrder(entity), HttpStatus.OK);
	}

	@PutMapping("updateSchedule")
	public ResponseEntity<?> updateSchedule(@RequestBody OrderEntity entity)
			throws OrderException {

		orderService.updateDate(entity.getOrderId(), entity.getDispatchDate(), entity.getArrivalDate());
		return new ResponseEntity<>( HttpStatus.OK);

	}

	@DeleteMapping("/removeAll")
	public ResponseEntity<?> deleteAllOrder() throws OrderException {

		orderService.deleteAllOrders();
		return new ResponseEntity<>(HttpStatus.OK);

	}

	@DeleteMapping("/remove/{orderId}")
	public ResponseEntity<?> deleteOrderById(@PathVariable("orderId") String orderId) throws OrderException {

		orderService.deleteOrderById(orderId);
		return new ResponseEntity<>( HttpStatus.OK);
	}
}
