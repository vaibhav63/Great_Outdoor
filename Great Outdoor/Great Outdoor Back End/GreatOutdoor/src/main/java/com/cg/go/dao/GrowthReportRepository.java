package com.cg.go.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cg.go.entity.GrowthReportEntity;

@Repository
public interface GrowthReportRepository extends JpaRepository<GrowthReportEntity,Long> {

	@Query("FROM GrowthReportEntity g ORDER BY g.growthReportId DESC LIMIT 1")
	GrowthReportEntity getLastGrowthReport();
	
}
