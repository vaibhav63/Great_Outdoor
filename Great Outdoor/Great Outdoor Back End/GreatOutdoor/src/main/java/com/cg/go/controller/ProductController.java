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

import com.cg.go.exception.ProductException;
import com.cg.go.model.ProductModel;
import com.cg.go.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	  @GetMapping()
	    public List<ProductModel> getAllProducts() {
	  
	        return productService.findAllProducts();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<ProductModel> getProductById(@PathVariable("id") String id){
	      
	    	ResponseEntity<ProductModel> response=null;
	        ProductModel product = productService.findByProductId(id);
	        		if(product==null) {
	        			
	        			response=new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        		}
	        		else {
	        			response=new ResponseEntity<>(product,HttpStatus.OK);
	        		}
					return response;
	        		
	       
	    }

	    @PostMapping()
	    public ResponseEntity<ProductModel> addProduct( @RequestBody ProductModel productModel) throws ProductException{
	    
	        return new  ResponseEntity<>(productService.addProduct(productModel),HttpStatus.OK);
	    }

	    @PutMapping()
	    public ResponseEntity<ProductModel> updateProduct(@RequestBody ProductModel productModel)throws ProductException {
	     
	        return new ResponseEntity<ProductModel>(productService.updateProduct(productModel),HttpStatus.OK);
	    }


	    @DeleteMapping("/{id}")
	    public ResponseEntity<Boolean> deleteProduct(@PathVariable(value = "id") String id)
	            throws ProductException {
	       
	        productService.deleteByProductId(id);
	        return new ResponseEntity<Boolean>(true,HttpStatus.OK);
	    }
	    

}