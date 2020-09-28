package com.cg.go.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cg.go.entity.ProductEntity;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity,String > {
	
List<ProductEntity> findAllByProductName(String productName);

List<ProductEntity> findAllByProductCategory(String productCategory);

@Query("SELECT p FROM ProductEntity p WHERE p.productName LIKE %?1%  OR p.productColor LIKE %?1% "
		+ " OR p.productCategory LIKE %?1% OR p.productManufacturer LIKE %?1% "
		+ "OR p.productSpecification LIKE %?1% ")
List<ProductEntity> search(String keyword);

@Query("FROM ProductEntity p WHERE p.productPrice BETWEEN 50 AND ?1")
List<ProductEntity> filter(double maxPrice);
}
