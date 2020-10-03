package com.cg.go.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.go.dao.WishlistRepository;
import com.cg.go.entity.WishlistItemEntity;
import com.cg.go.exception.WishlistException;

@Service
public class WishlistServiceImpl implements WishlistService {

	@Autowired
	private WishlistRepository wishlistRepository;

	@Override
	public WishlistItemEntity addWishlistItem(WishlistItemEntity wishlistItem) throws WishlistException {

		if (wishlistItem != null) {
			if (wishlistRepository.existsById(wishlistItem.getWishlistItemId())) {
				throw new WishlistException("Wishlist Item Already Exists !!");
			} else {
				wishlistItem = wishlistRepository.save(wishlistItem);
			}
		}
		return wishlistItem;
	}

	@Override
	public List<WishlistItemEntity> findWishlist(String userId) {

		return wishlistRepository.findAllByUserId(userId);
	}

	@Override
	public WishlistItemEntity findWishlistItem(String productId, String userId) {

		return wishlistRepository.findWishlistItem(productId, userId);
	}

	@Override
	public void deleteWishlistItem(String productId, String userId) throws WishlistException {

		if (productId != null && userId != null) {
			WishlistItemEntity wishlistItem = findWishlistItem(productId, userId);
			if (wishlistItem != null) {
				wishlistRepository.deleteWishlistItem(userId, productId);
			} else {
				throw new WishlistException("Wishlist Item Does Not Exists !!");
			}
		} else {
			throw new WishlistException("Product Id OR User Id Is Null !!");
		}
	}

	@Override
	public void deleteWishlist(String userId) throws WishlistException {

		if (userId != null) {
			List<WishlistItemEntity> wishlist = findWishlist(userId);
			if (wishlist != null) {
				wishlistRepository.deleteWishlist(userId);
			} else {
				throw new WishlistException("Wishlist Does Not Exists");
			}
		} else {
			throw new WishlistException("User Id For Deletion Is Null");
		}
	}

	@Override
	public List<WishlistItemEntity> findAllItems() {

		return wishlistRepository.findAll();
	}
}
