package com.cg.go.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.go.dao.WishlistRepository;
import com.cg.go.entity.WishlistItemEntity;
import com.cg.go.exception.WishlistException;
import com.cg.go.model.ProductModel;
import com.cg.go.model.WishlistItemModel;


@Service
public class WishlistServiceImpl implements WishlistService {
	
	@Autowired
	private WishlistRepository wishlistRepository;
	
	@Autowired
	private ProductService productService;
	
	private WishlistItemEntity of(WishlistItemModel source) {
		WishlistItemEntity result=null;
		if(source!=null) {
			result=new WishlistItemEntity();
			result.setWishlistItemId(0);
			result.setProductId(source.getProduct().getProductId());
			result.setUserId(source.getUserId());
		}
		return result;
	}
	
	
	private WishlistItemModel of(WishlistItemEntity source) {
		WishlistItemModel result=null;
		if(source!=null) {
			result=new WishlistItemModel();
			result.setWishlistItemId(source.getWishlistItemId());
			result.setUserId(source.getUserId());
			
			ProductModel product=productService.findByProductId(source.getProductId());
			result.setProduct(product);
		}
		return result;
	}
	
	
	@Override
	public WishlistItemModel addWishlistItem(WishlistItemModel wishlistItem) throws WishlistException {
		
		if(wishlistItem !=null) {
			
			if(wishlistRepository.existsById(wishlistItem.getWishlistItemId())) {
				
				throw new WishlistException("Wishlist Item Already Exists !!");
			}else {
				wishlistItem= of(wishlistRepository.save(of(wishlistItem)));
			}
		}
		
		return wishlistItem;
	}
	
	@Override
	public List<WishlistItemModel> findWishlist(String userId) {
		
		return wishlistRepository.findAllByUserId(userId).stream()
				.map(entity -> of(entity))
				.collect(Collectors.toList());
	}
	
	@Override
	public WishlistItemModel findWishlistItem(String productId, String userId) {
		
		return of(wishlistRepository.findWishlistItem(productId, userId));
	}


	@Override
	public void deleteWishlistItem(String productId, String userId) throws WishlistException {

		if(productId!=null && userId!=null) {
			
			WishlistItemModel wishlistItem=of(wishlistRepository.findWishlistItem(productId, userId));
			if(wishlistItem!=null) {
				wishlistRepository.deleteWishlistItem(userId, productId);
			}else {
				throw new WishlistException("Wishlist Item Does Not Exists !!");
			}
			
		}else {
			throw new WishlistException("Product Id OR User Id Is Null !!");
		}
		
	} 

	@Override
	public void deleteWishlist(String userId) throws WishlistException {
		if(userId!=null) {
			
			List<WishlistItemModel> wishlist =wishlistRepository.findAllByUserId(userId).stream()
					.map(entity -> of(entity))
					.collect(Collectors.toList());
			if(wishlist!=null) {
				
				wishlistRepository.deleteWishlist(userId);
			}else {
				 throw new WishlistException("Wishlist Does Not Exists");
			}
			
			
		}else {
			throw new WishlistException("User Id For Deletion Is Null");
		}
	}


}