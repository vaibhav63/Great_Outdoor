package com.cg.go.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import com.cg.go.exception.ApiException;
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
	public ResponseEntity<ApiException> productExceptionHandler(ProductException exception) {

		ApiException apiException=new ApiException(exception.getMessage(),exception,HttpStatus.BAD_REQUEST);
		return new ResponseEntity<>(apiException, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(WishlistException.class)
	public ResponseEntity<ApiException> wishlistExceptonHandler(WishlistException exception) {
		
		ApiException apiException=new ApiException(exception.getMessage(),exception,HttpStatus.BAD_REQUEST);
		return new ResponseEntity<>(apiException, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(CartException.class)
	public ResponseEntity<ApiException> cartExceptonHandler(CartException exception) {
				
		ApiException apiException=new ApiException(exception.getMessage(),exception,HttpStatus.BAD_REQUEST);
		return new ResponseEntity<>(apiException, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(IDNotFoundException.class)
	public ResponseEntity<ApiException> userNotFound(IDNotFoundException exception) {
		
		ApiException apiException=new ApiException(exception.getMessage(),exception,HttpStatus.BAD_REQUEST);
		return new ResponseEntity<>(apiException, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(OrderException.class)
	public ResponseEntity<ApiException> orderExceptionHandler(OrderException exception) {
		
		ApiException apiException=new ApiException(exception.getMessage(),exception,HttpStatus.BAD_REQUEST);
		return new ResponseEntity<>(apiException, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(SalesReportException.class)
	public ResponseEntity<ApiException> salesReportExceptionHandler(SalesReportException exception) {
		
		ApiException apiException=new ApiException(exception.getMessage(),exception,HttpStatus.BAD_REQUEST);
		return new ResponseEntity<>(apiException, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(GrowthReportException.class)
	public ResponseEntity<ApiException> GrowthReportExceptionHandler(GrowthReportException exception) {
		
		ApiException apiException=new ApiException(exception.getMessage(),exception,HttpStatus.BAD_REQUEST);
		return new ResponseEntity<>(apiException, HttpStatus.BAD_REQUEST);
	}
}
