package com.cg.go.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cg.go.entity.GrowthReportEntity;

@Repository
public interface GrowthReportRepository extends JpaRepository<GrowthReportEntity, Long> {

	@Query(value = "SELECT * FROM  growth_report ORDER BY g_report_id DESC LIMIT 1", nativeQuery = true)
	GrowthReportEntity getLastGrowthReport();

}
