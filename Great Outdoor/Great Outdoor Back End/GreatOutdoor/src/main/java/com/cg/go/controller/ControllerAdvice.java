package com.cg.go.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cg.go.exception.CartException;
import com.cg.go.exception.GrowthReportException;
import com.cg.go.exception.IDNotFoundException;
import com.cg.go.exception.OrderException;
import com.cg.go.exception.ProductException;
import com.cg.go.exception.SalesReportException;
import com.cg.go.exception.WishlistException;

@RestControllerAdvice
public class ControllerAdvice {

	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> otherExceptionsHandler(Exception exception) {
		return new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(ProductException.class)
	public ResponseEntity<String> productExceptionHandler(ProductException exception) {

		return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(WishlistException.class)
	public ResponseEntity<String> wishlistExceptonHandler(WishlistException exception) {
		return new ResponseEntity<>(exception.getMessage(), HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(CartException.class)
	public ResponseEntity<String> cartExceptonHandler(CartException exception) {
		return new ResponseEntity<>(exception.getMessage(), HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(IDNotFoundException.class)
	public ResponseEntity<String> userNotFound(IDNotFoundException e) {
		return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(OrderException.class)
	public ResponseEntity<String> orderExceptionHandler(OrderException exception) {
		return new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(SalesReportException.class)
	public ResponseEntity<String> salesReportExceptionHandler(SalesReportException exception) {
		return new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(GrowthReportException.class)
	public ResponseEntity<String> GrowthReportExceptionHandler(GrowthReportException exception) {
		return new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
