package com.cg.go.service;

import java.util.List;

import com.cg.go.exception.WishlistException;
import com.cg.go.model.WishlistItemModel;

public interface WishlistService {

	
	 List<WishlistItemModel> findAllItems();
	
     List<WishlistItemModel> findWishlist(String userId);
    
     WishlistItemModel findWishlistItem(String productId,String userId);
	
	 void deleteWishlistItem(String productId,String userId) throws WishlistException;
	
	 void deleteWishlist(String userId) throws WishlistException;
	
	 WishlistItemModel addWishlistItem(WishlistItemModel wishlistItem) throws WishlistException;
	
}
