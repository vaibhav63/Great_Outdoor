package com.cg.go.dao;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.go.entity.OrderEntity;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Long> {

	public List<OrderEntity> findAllByUserId(String userId);

	@Modifying
	@Transactional
	@Query("update OrderEntity o set o.dispatchDate=:d_date ,o.arrivalDate=:a_date WHERE o.id=:id")
	void updateDate(@Param("id") long id, @Param("d_date") LocalDate dispatchDate,
			@Param("a_date") LocalDate arrivalDate);

}
