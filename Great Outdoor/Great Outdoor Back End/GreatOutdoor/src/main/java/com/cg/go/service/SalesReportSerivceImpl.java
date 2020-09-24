package com.cg.go.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.go.dao.SalesReportRepository;
import com.cg.go.entity.SalesReportEntity;
import com.cg.go.exception.SalesReportException;
import com.cg.go.model.SalesReportModel;

@Service
public class SalesReportSerivceImpl implements SalesReportService{

	@Autowired
	private SalesReportRepository salesReportRepository;
	
	private SalesReportModel of(SalesReportEntity source) {
		SalesReportModel result=null;
		if(source!=null) {
			result=new SalesReportModel();
			result.setSalesReportId(source.getSalesReportId());
	        result.setProductId(source.getProductId());
	        result.setProductName(source.getProductName());
	        result.setQuantitySold(source.getQuantitySold());
	        result.setTotalSale(source.getTotalSale());
		}
		return result;
	}
	
	
	private SalesReportEntity of(SalesReportModel source) {
		SalesReportEntity result=null;
		SalesReportModel tempModel=null;
		if(source!=null) {
			result=new SalesReportEntity();
			result.setSalesReportId(source.getSalesReportId());
	        result.setProductId(source.getProductId());
	        result.setProductName(source.getProductName());
	        if(salesReportRepository.existsByProductId(source.getProductId())) {
	        	tempModel=findSalesReportByProductId(source.getProductId());
	            result.setQuantitySold(source.getQuantitySold()+tempModel.getQuantitySold());
	            result.setTotalSale(source.getTotalSale()+tempModel.getTotalSale());
		      }else {
		    	    result.setQuantitySold(source.getQuantitySold());
		            result.setTotalSale(source.getTotalSale());
		      }
		}
		return result;
	}
	
	@Override
	public List<SalesReportModel> findAllSalesReport() {
		return salesReportRepository.findAll().stream()
				.map(entity -> of(entity))
				.collect(Collectors.toList());
				
				
	}

	@Override
	public void updateProductReport(SalesReportModel salesReportModel) {
		
	   if(salesReportModel!=null) {
			
			if(salesReportRepository.existsByProductId(salesReportModel.getProductId())) {
				
				SalesReportEntity entity=of(salesReportModel);
				salesReportRepository.updateProductReport(entity.getProductId(),
			                   entity.getQuantitySold(), entity.getTotalSale());
				
			}else {
				salesReportModel=of(salesReportRepository.save(of(salesReportModel)));
			}
		
		}
		
	}

	@Override
	public void deleteAllSalesReport() throws SalesReportException {
		
		if(salesReportRepository.findAll()!=null) {
			salesReportRepository.deleteAll();
		}else {
			throw new SalesReportException("Nothing To Delete In Sales Report !!");
		}
		
		
	}

	@Override
	public void deleteSalesReportById(Long salesReportId) throws SalesReportException {
		
		if(salesReportId!=null) {
			if(salesReportRepository.existsById(salesReportId)){
				
				salesReportRepository.deleteById(salesReportId);
				
			}else {
				throw new SalesReportException("Sales Report Id Does Not Exists !!");
			}		
			
		}else {
			throw new SalesReportException("Sales Report Id Is Null !!");
		}
	
		
	}


	@Override
	public SalesReportModel findSalesReportByProductId(String productId) {
		
	    return of(salesReportRepository.findByProductId(productId));
	}


	
}