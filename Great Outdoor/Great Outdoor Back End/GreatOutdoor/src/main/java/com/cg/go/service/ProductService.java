package com.cg.go.service;

import java.util.List;

import com.cg.go.exception.ProductException;
import com.cg.go.model.ProductModel;

public interface ProductService {

    public List<ProductModel> findAllProducts();
    public ProductModel findByProductId(String id);
    public List<ProductModel> findByProductName(String productName);
    public List<ProductModel> findByProductCategory(String productCategory);
    public ProductModel addProduct(ProductModel productModel) throws ProductException;
    public ProductModel updateProduct(ProductModel productModel) throws ProductException;
    public void deleteByProductId(String id) throws ProductException;

	
}
