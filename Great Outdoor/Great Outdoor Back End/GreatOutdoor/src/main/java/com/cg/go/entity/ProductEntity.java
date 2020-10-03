package com.cg.go.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class ProductEntity {

	@Id
	@Column(name = "p_id")
	private String productId;

	@Column(name = "p_name", nullable = false)
	private String productName;

	@Column(name = "p_price", nullable = false)
	private Double productPrice;

	@Column(name = "p_image", nullable = false)
	private String productImage;

	@Column(name = "p_color", nullable = false)
	private String productColor;

	@Column(name = "p_ctg", nullable = false)
	private String productCategory;

	@Column(name = "p_qty", nullable = false)
	private Integer productQuantity;

	@Column(name = "p_mnf", nullable = false)
	private String productManufacturer;

	@Column(name = "p_spec")
	private String productSpecification;

	public ProductEntity() {

	}

	public ProductEntity(String productId, String productName, Double productPrice, String productColor,
			String productCategory, Integer productQuantity, String productManufacturer, String productSpecification) {
		this.productId = productId;
		this.productName = productName;
		this.productPrice = productPrice;
		this.productColor = productColor;
		this.productCategory = productCategory;
		this.productQuantity = productQuantity;
		this.productManufacturer = productManufacturer;
		this.productSpecification = productSpecification;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public Double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(Double productPrice) {
		this.productPrice = productPrice;
	}

	public String getProductColor() {
		return productColor;
	}

	public void setProductColor(String productColor) {
		this.productColor = productColor;
	}

	public String getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}

	public Integer getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(Integer productQuantity) {
		this.productQuantity = productQuantity;
	}

	public String getProductSpecification() {
		return productSpecification;
	}

	public void setProductSpecification(String productSpecification) {
		this.productSpecification = productSpecification;
	}

	public String getProductManufacturer() {
		return productManufacturer;
	}

	public void setProductManufacturer(String productManufacturer) {
		this.productManufacturer = productManufacturer;
	}

	public String getProductImage() {
		return productImage;
	}

	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}

}
