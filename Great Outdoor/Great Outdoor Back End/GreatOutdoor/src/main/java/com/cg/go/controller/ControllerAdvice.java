package com.cg.go.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cg.go.exception.IDNotFoundException;
import com.cg.go.exception.ProductException;
import com.cg.go.exception.WishlistException;

@RestControllerAdvice
public class ControllerAdvice {
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> otherExceptions(Exception exception){
		return new ResponseEntity<>(exception.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(ProductException.class)
	public ResponseEntity<String> productException(ProductException exception){
		
		return new ResponseEntity<>(exception.getMessage(),HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(WishlistException.class)
	public ResponseEntity<String> wishlistExcepton(WishlistException exception){
		return new ResponseEntity<>(exception.getMessage(),HttpStatus.BAD_REQUEST);
	}

	
	@ExceptionHandler(IDNotFoundException.class)
	public ResponseEntity<String> userNotFound(IDNotFoundException e) {
		return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
	}
}
