package com.cg.go.service;

import java.util.List;

import com.cg.go.exception.SalesReportException;
import com.cg.go.model.SalesReportModel;

public interface SalesReportService {

	List<SalesReportModel> findAllSalesReport();
	
	SalesReportModel findSalesReportByProductId(String productId);
	
	void updateProductReport(SalesReportModel salesReportModel);
	
	void deleteAllSalesReport() throws SalesReportException;
	
	void deleteSalesReportById(Long salesReportId) throws SalesReportException;
	
	
}
