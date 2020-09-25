package com.cg.go.service;

import java.util.List;

import com.cg.go.exception.CartException;
import com.cg.go.model.CartItemModel;

public interface CartService {

	List<CartItemModel> findCartlist(String userId);
	
	CartItemModel findCartItem(String productId,String userId);
	
	CartItemModel addCart(CartItemModel cartItemModel) throws CartException;
	
	CartItemModel updateCart(CartItemModel cartItemModel) throws CartException;
	
    void deleteCartItem(String productId,String userId) throws CartException;
	
    void deleteCartlist(String userId) throws CartException;
	

}
