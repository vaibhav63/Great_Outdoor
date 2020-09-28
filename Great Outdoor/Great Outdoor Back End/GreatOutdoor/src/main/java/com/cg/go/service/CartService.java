package com.cg.go.service;

import java.util.List;

import com.cg.go.entity.CartItemEntity;
import com.cg.go.exception.CartException;

public interface CartService {

	List<CartItemEntity> findCartlist(String userId);

	CartItemEntity findCartItem(String productId, String userId);

	CartItemEntity addCart(CartItemEntity cartItemEntity) throws CartException;

	CartItemEntity updateCart(CartItemEntity cartItemEntity) throws CartException;

	void deleteCartItem(String productId, String userId) throws CartException;

	void deleteCartlist(String userId) throws CartException;

}
