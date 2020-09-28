package com.cg.go.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.go.entity.SalesReportEntity;

@Repository
public interface SalesReportRepository extends JpaRepository<SalesReportEntity, Long> {

	@Modifying
	@Transactional
	@Query("update SalesReportEntity s set s.quantitySold=:qty ,s.totalSale=:t_sale WHERE s.productId=:pid")
	void updateProductReport(@Param("pid") String productId, @Param("qty") Integer quantity,
			@Param("t_sale") double totalSale);

	boolean existsByProductId(String productId);

	SalesReportEntity findByProductId(String productId);
}
