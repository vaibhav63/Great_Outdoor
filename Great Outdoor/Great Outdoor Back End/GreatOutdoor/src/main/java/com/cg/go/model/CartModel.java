package com.cg.go.model;

public class CartModel {

	
	private long cartId;
	private String userId;
	private static double cartItemPrice;
	private long quantity;
	private ProductModel product;
	
	public long getCartId() {
		return cartId;
	}
	public void setCartId(long cartId) {
		this.cartId = cartId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public static double getCartItemPrice() {
		return cartItemPrice;
	}
	public static void setCartItemPrice(double cartItemPrice) {
		CartModel.cartItemPrice = cartItemPrice;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	public ProductModel getProduct() {
		return product;
	}
	public void setProduct(ProductModel product) {
		this.product = product;
	}
	
	
	
}
