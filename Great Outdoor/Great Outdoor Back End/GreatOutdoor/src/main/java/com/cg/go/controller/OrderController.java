package com.cg.go.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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

import com.cg.go.exception.OrderException;
import com.cg.go.model.OrderModel;
import com.cg.go.service.OrderService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/order")
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	@GetMapping()
	public ResponseEntity<List<OrderModel>> getAllOrders(){
		
		return new ResponseEntity<List<OrderModel>>(orderService.findAllOrders(),HttpStatus.OK);
	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<List<OrderModel>> getOrdersByUserId(@PathVariable("userId") String userId){
		
		return new ResponseEntity<List<OrderModel>>(orderService.findOrdersByUserId(userId),HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<OrderModel> addOrder(@RequestBody OrderModel model) throws OrderException{
		
		
		return new ResponseEntity<>(orderService.addOrder(model),HttpStatus.OK);
	}
	
	@PutMapping("updateSchedule/{id}/{dispatchDate}/{arrivalDate}")
	public ResponseEntity<String> updateSchedule(@PathVariable("id") Long id,
			@PathVariable("dispatchDate")  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dispatchDate,
			@PathVariable("arrivalDate")  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate arrivalDate )
			throws OrderException{
		
		orderService.updateDate(id, dispatchDate, arrivalDate);
		return new ResponseEntity<>("Schedule Is Updated !!",HttpStatus.OK);
		
	}
	
	@DeleteMapping("/removeAll")
	public ResponseEntity<?> deleteAllOrder() throws OrderException{
		
		orderService.deleteAllOrders();
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<?> deleteOrderById(@PathVariable("id") long id) throws OrderException{
		
		orderService.deleteOrderById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}