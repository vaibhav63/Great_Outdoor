package com.cg.go.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.go.dao.ProductRepository;
import com.cg.go.entity.ProductEntity;
import com.cg.go.exception.ProductException;
import com.cg.go.model.ProductModel;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	 private ProductEntity of(ProductModel source) {
	    	ProductEntity result=null;
	    	if(source!=null) {
	    		result=new ProductEntity();
	    		result.setProductId(source.getProductId());
	    		result.setProductName(source.getProductName());
	    		result.setProductPrice(source.getProductPrice());
	    		result.setProductCategory(source.getProductCategory());
	    		result.setProductQuantity(source.getProductQuantity());
	    		result.setProductSpecification(source.getProductSpecification());
	    		result.setProductManufacturer(source.getProductManufacturer());
	    		result.setProductColor(source.getProductColor());
	    	}
	    	return result;
	   
	    }
	
		private ProductModel of(ProductEntity source) {
	    	ProductModel result=null;
	    	if(source!=null) {
	    		result=new ProductModel();
	    		result.setProductId(source.getProductId());
	    		result.setProductName(source.getProductName());
	    		result.setProductPrice(source.getProductPrice());
	    		result.setProductCategory(source.getProductCategory());
	    		result.setProductQuantity(source.getProductQuantity());
	    		result.setProductSpecification(source.getProductSpecification());
	    		result.setProductManufacturer(source.getProductManufacturer());
	    		result.setProductColor(source.getProductColor());
	    	}
	    	return result;
	    }
	
	
	

	@Override
	public List<ProductModel> findAllProducts() {
		
	   return productRepository.findAll().stream()
			   .map((entity)->of(entity))
			   .collect(Collectors.toList());
	}

	@Override
	public ProductModel findByProductId(String id) {
	
		return of(productRepository.findById(id).orElse(null));
	}

	

	@Override
	public List<ProductModel> findByProductName(String productName) {
		
		return productRepository.findByProductName(productName).stream()
				.map(entity -> of(entity))
				.collect(Collectors.toList());
	}

	@Override
	public List<ProductModel> findByProductCategory(String productCategory) {
		
		return productRepository.findByProductCategory(productCategory).stream()
				.map(entity -> of(entity))
				.collect(Collectors.toList());
	}

	
	@Override
	public ProductModel addProduct(ProductModel productModel) throws ProductException {
		
		if(productModel!=null) {
			if(productRepository.existsById(productModel.getProductId())) {
				throw new ProductException("Prdouct Already Exists !!");
			}
			else {
				productModel= of(productRepository.save(of(productModel)));
			}
		}
		return productModel;
		
	}

	@Override
	public ProductModel updateProduct(ProductModel productModel) throws ProductException {
		
		if(productModel!=null) {
			if(!productRepository.existsById(productModel.getProductId())) {
				throw new ProductException("Prdouct Does Not Exists !!");
			}
			else {
				productModel= of(productRepository.save(of(productModel)));
			}
		}
		return productModel;
	}

	@Override
	public void deleteByProductId(String id) throws ProductException {
		
	if(id!=null) {
			
			ProductEntity entity=productRepository.findById(id).orElse(null);
			if(entity!=null) {
			
				productRepository.deleteById(id);
				
			}else {
				throw new ProductException("Product Does Not Exists");
			}
		}else {
			throw new ProductException("Product Id for Deletion is null");
		}
		
	}

	
}