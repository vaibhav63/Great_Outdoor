package com.cg.go.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Wishlist")
public class WishlistItemEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="w_id")
	private long wishlistItemId;
	
	@Column(name="u_id",nullable=false)
	private String userId;
	
	@Column(name="p_id",nullable=false)
	private String productId;


	public long getWishlistItemId() {
		return wishlistItemId;
	}

	public void setWishlistItemId(long wishlistItemId) {
		this.wishlistItemId = wishlistItemId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}
	
	
}
