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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.go.exception.WishlistException;
import com.cg.go.model.WishlistItemModel;
import com.cg.go.service.WishlistService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/wishlist")
public class WishlistController {
	
	@Autowired
	private WishlistService wishlistService;
	
	@GetMapping("/{userId}")
	public ResponseEntity<List<WishlistItemModel>> getWishlistByUserId(@PathVariable("userId") String userId){
	
		ResponseEntity<List<WishlistItemModel>> response=null;
		List<WishlistItemModel> wishlist=wishlistService.findWishlist(userId);
		if(wishlist==null) {
			response=new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		else {
			response=new ResponseEntity<>(wishlist, HttpStatus.OK);
		}
		return response;
	}
	
	@PostMapping("/addToWishlist")
	public ResponseEntity<WishlistItemModel> addToWishlist( @RequestBody WishlistItemModel model) throws WishlistException{
		
		return new ResponseEntity<>( wishlistService.addWishlistItem(model),HttpStatus.OK);
		
	}
	
	
	@DeleteMapping("/deleteWishlistItem/{productId}/{userId}")
	public ResponseEntity<?> deleteWishlistItem(@PathVariable("productId") String productId,@PathVariable("userId") String userId) throws WishlistException{

		wishlistService.deleteWishlistItem(productId, userId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	@DeleteMapping("/deleteWishlist/{userId}")
	public ResponseEntity<?> deleteWishlist(@PathVariable("userId") String userId) throws WishlistException {
	
			wishlistService.deleteWishlist(userId);
			return new ResponseEntity<>(HttpStatus.OK);
		
		
	}
	

}
