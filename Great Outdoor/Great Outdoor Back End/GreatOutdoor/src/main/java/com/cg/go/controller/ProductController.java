package com.cg.go.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cg.go.entity.ProductEntity;
import com.cg.go.exception.ProductException;
import com.cg.go.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	private ProductService productService;

	@GetMapping()
	public List<ProductEntity> getAllProducts() {

		return productService.findAllProducts();
	}

	@GetMapping("/{productId}")
	public ResponseEntity<ProductEntity> getProductById(@PathVariable("productId") String id) {

		ResponseEntity<ProductEntity> response = null;
		ProductEntity product = productService.findByProductId(id);
		if (product == null) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			response = new ResponseEntity<>(product, HttpStatus.OK);
		}
		return response;
	}

	@GetMapping("/search/{keyword}")
	public ResponseEntity<List<ProductEntity>> searchKeyword(@PathVariable("keyword") String keyword) {

		return new ResponseEntity<>(productService.search(keyword), HttpStatus.OK);
	}

	@GetMapping("/filter/{maxPrice}")
	public ResponseEntity<List<ProductEntity>> filterPrice(@PathVariable("maxPrice") double maxPrice) {

		return new ResponseEntity<>(productService.filter(maxPrice), HttpStatus.OK);
	}

	@GetMapping("/category/{productCategory}")
	public ResponseEntity<List<ProductEntity>> findProductsByCategory(
			@PathVariable("productCategory") String productCategory) {

		ResponseEntity<List<ProductEntity>> response = null;
		List<ProductEntity> list = productService.findByProductCategory(productCategory);

		if (list == null) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			response = new ResponseEntity<>(list, HttpStatus.OK);
		}
		return response;
	}

	@PostMapping()
	public ResponseEntity<ProductEntity> addProduct(@RequestBody ProductEntity productModel) throws ProductException {

		return new ResponseEntity<>(productService.addProduct(productModel), HttpStatus.OK);
	}

	@PutMapping()
	public ResponseEntity<ProductEntity> updateProduct(@RequestBody ProductEntity productEntity)
			throws ProductException {

		return new ResponseEntity<ProductEntity>(productService.updateProduct(productEntity), HttpStatus.OK);
	}

	@PutMapping("/updateQuantity/{quantity}/{productId}")
	public ResponseEntity<?> updateProductQuantity(@PathVariable("quantity") Integer quantity,
			@PathVariable("productId") String productId) {

		productService.updateProductQuantity(quantity, productId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable(value = "id") String id) throws ProductException {

		productService.deleteByProductId(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
