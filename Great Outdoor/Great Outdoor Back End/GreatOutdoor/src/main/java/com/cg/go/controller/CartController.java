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
import com.cg.go.entity.CartItemEntity;
import com.cg.go.exception.CartException;
import com.cg.go.service.CartService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/cart")
public class CartController {

	@Autowired
	private CartService cartService;

	@GetMapping("/{userId}")
	public ResponseEntity<List<CartItemEntity>> getCartByUserId(@PathVariable("userId") String userId) {

		ResponseEntity<List<CartItemEntity>> response = null;
		List<CartItemEntity> cart = cartService.findCartlist(userId);
		if (cart == null) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			response = new ResponseEntity<>(cart, HttpStatus.OK);
		}
		return response;
	}

	@PostMapping("/addToCart")
	public ResponseEntity<CartItemEntity> addToCart(@RequestBody CartItemEntity entity) throws CartException {

		return new ResponseEntity<>(cartService.addCart(entity), HttpStatus.OK);
	}

	@PutMapping("/updateCart")
	public ResponseEntity<CartItemEntity> updateCart(@RequestBody CartItemEntity entity) throws CartException {

		return new ResponseEntity<>(cartService.updateCart(entity), HttpStatus.OK);
	}

	@DeleteMapping("/deleteCartItem/{cartId}")
	public ResponseEntity<String> deleteCartItem(@PathVariable("cartId") Long cartId) throws CartException {

		cartService.deleteCartItem(cartId);
		return new ResponseEntity<>("Cart Item Deleted Successfully !!", HttpStatus.OK);
	}

	@DeleteMapping("/deleteCartlist/{userId}")
	public ResponseEntity<String> deleteCartlist(@PathVariable("userId") String userId) throws CartException {

		cartService.deleteCartlist(userId);
		return new ResponseEntity<>("Cart List Is Deleted Successfully !!", HttpStatus.OK);
	}
}
