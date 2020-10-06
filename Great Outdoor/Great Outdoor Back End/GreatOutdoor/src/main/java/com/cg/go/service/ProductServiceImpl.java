package com.cg.go.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.go.dao.ProductRepository;
import com.cg.go.entity.ProductEntity;
import com.cg.go.exception.ProductException;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Override
	public List<ProductEntity> findAllProducts() {

		return productRepository.findAll();
	}

	@Override
	public ProductEntity findByProductId(String id) {

		return productRepository.findById(id).orElse(null);
	}

	@Override
	public List<ProductEntity> findByProductCategory(String productCategory) {

		return productRepository.findAllByProductCategory(productCategory);
	}

	@Override
	public ProductEntity addProduct(ProductEntity productEntity) throws ProductException {

		if (productEntity != null) {
			if (productRepository.existsById(productEntity.getProductId())) {
				throw new ProductException("Prdouct Already Exists !!");
			} else {
				productEntity = productRepository.save(productEntity);
			}
		}
		return productEntity;
	}

	@Override
	public ProductEntity updateProduct(ProductEntity productEntity) throws ProductException {

		if (productEntity != null) {
			if (!productRepository.existsById(productEntity.getProductId())) {
				throw new ProductException("Prdouct Does Not Exists !!");
			} else {
				productEntity = productRepository.save(productEntity);
			}
		}
		return productEntity;
	}

	@Override
	public void updateProductQuantity(Integer quantity, String productId) {

		productRepository.updateQuantity(quantity, productId);
	}

	@Override
	public void deleteByProductId(String id) throws ProductException {

		if (id != null) {
			ProductEntity entity = productRepository.findById(id).orElse(null);
			if (entity != null) {
				productRepository.deleteById(id);
			} else {
				throw new ProductException("Product Does Not Exists");
			}
		} else {
			throw new ProductException("Product Id for Deletion is null");
		}
	}

	@Override
	public List<ProductEntity> search(String keyword) {

		return productRepository.search(keyword);
	}

	@Override
	public List<ProductEntity> filter(double maxPrice) {

		return productRepository.filter(maxPrice);
	}

}
