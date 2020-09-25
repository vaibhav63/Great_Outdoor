package com.cg.go.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.go.entity.ProductEntity;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity,String > {
	
List<ProductEntity> findAllByProductName(String productName);

List<ProductEntity> findAllByProductCategory(String productCategory);

}
