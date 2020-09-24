package com.cg.go.model;


public class WishlistItemModel {

    private long wishlistItemId;
    
	private String userId;
	
	private ProductModel product;
	

	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public ProductModel getProduct() {
		return product;
	}
	public void setProduct(ProductModel product) {
		this.product = product;
	}
	public long getWishlistItemId() {
		return wishlistItemId;
	}
	public void setWishlistItemId(long wishlistItemId) {
		this.wishlistItemId = wishlistItemId;
	}
	
	
	
}
