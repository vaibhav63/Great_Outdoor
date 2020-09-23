package com.cg.go.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cg.go.exception.ProductException;

@RestControllerAdvice
public class ControllerAdvice {
	
	@ExceptionHandler(ProductException.class)
	public ResponseEntity<Object> productException(ProductException exception){
		
		return new ResponseEntity<Object>(exception.getMessage(),HttpStatus.NOT_FOUND);
	}

}
