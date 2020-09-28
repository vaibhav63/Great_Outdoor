package com.cg.go.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.go.dao.CartRepository;
import com.cg.go.entity.CartItemEntity;
import com.cg.go.exception.CartException;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepository cartRepository;

	@Override
	public List<CartItemEntity> findCartlist(String userId) {

		return cartRepository.findAllByUserId(userId);
	}

	@Override
	public CartItemEntity findCartItem(String productId, String userId) {

		return cartRepository.findCartItem(productId, userId);
	}

	@Override
	public CartItemEntity addCart(CartItemEntity cartItemEntity) throws CartException {

		if (cartItemEntity != null) {

			if (cartRepository.existsById(cartItemEntity.getCartId())) {

				throw new CartException("Cart Item Already Exists !!");
			} else {
				cartItemEntity = cartRepository.save(cartItemEntity);
			}
		}

		return cartItemEntity;
	}

	@Override
	public CartItemEntity updateCart(CartItemEntity cartItemEntity) throws CartException {

		if (cartItemEntity != null) {

			if (!cartRepository.existsById(cartItemEntity.getCartId())) {

				throw new CartException("Cart Item Does Not Exists !!");
			} else {
				cartItemEntity = cartRepository.save(cartItemEntity);
			}
		}

		return cartItemEntity;
	}

	@Override
	public void deleteCartItem(String productId, String userId) throws CartException {

		if (productId != null && userId != null) {

			CartItemEntity cartItemEntity = findCartItem(productId, userId);
			if (cartItemEntity != null) {
				cartRepository.deleteCartItem(userId, productId);
			} else {
				throw new CartException("Wishlist Item Does Not Exists !!");
			}
		} else {
			throw new CartException("Product Id OR User Id Is Null !!");
		}
	}

	@Override
	public void deleteCartlist(String userId) throws CartException {

		if (userId != null) {

			List<CartItemEntity> cartlist = findCartlist(userId);

			if (cartlist != null) {

				cartRepository.deleteCart(userId);
				;
			} else {
				throw new CartException("Cart Does Not Exists");
			}

		} else {
			throw new CartException("User Id For Deletion Is Null");
		}

	}

}
