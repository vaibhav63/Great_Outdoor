package com.cg.go.service;

import java.util.List;

import com.cg.go.exception.GrowthReportException;
import com.cg.go.exception.SalesReportException;
import com.cg.go.model.GrowthReportModel;

public interface GrowthReportService {

	List<GrowthReportModel> findAllGrowthReport();
	void addGrowthReport() throws SalesReportException;
	void deleteAllGrowthReport() throws GrowthReportException;
	void deleteGrowthReportById(Long growthReportId) throws GrowthReportException;
}
