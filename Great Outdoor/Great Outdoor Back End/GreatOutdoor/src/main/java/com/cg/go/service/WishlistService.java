package com.cg.go.service;

import java.util.List;

import com.cg.go.exception.WishlistException;
import com.cg.go.model.WishlistItemModel;

public interface WishlistService {

	
    public List<WishlistItemModel> findWishlist(String userId);
    
    public WishlistItemModel findWishlistItem(String productId,String userId);
	
	public void deleteWishlistItem(String productId,String userId) throws WishlistException;
	
	public void deleteWishlist(String userId) throws WishlistException;
	
	public WishlistItemModel addWishlistItem(WishlistItemModel wishlist) throws WishlistException;
	
}
