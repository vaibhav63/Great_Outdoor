package com.cg.go.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.go.dao.SalesReportRepository;
import com.cg.go.entity.SalesReportEntity;
import com.cg.go.exception.SalesReportException;

@Service
public class SalesReportSerivceImpl implements SalesReportService {

	@Autowired
	private SalesReportRepository salesReportRepository;

	@Override
	public List<SalesReportEntity> findAllSalesReport() {
		
		return salesReportRepository.findAll();
	}

	@Override
	public void updateProductReport(SalesReportEntity salesReportEntity) {
		
		if (salesReportEntity != null) {
			if (salesReportRepository.existsByProductId(salesReportEntity.getProductId())) {
				SalesReportEntity tempEntity=findSalesReportByProductId(salesReportEntity.getProductId());
				salesReportRepository.updateProductReport(salesReportEntity.getProductId(),
						salesReportEntity.getQuantitySold()+tempEntity.getQuantitySold(),
						salesReportEntity.getTotalSale()+tempEntity.getTotalSale());

			} else {
				salesReportRepository.save(salesReportEntity);
			}
		}
	}

	@Override
	public void deleteAllSalesReport() throws SalesReportException {

		if (salesReportRepository.findAll() != null) {
			salesReportRepository.deleteAll();
		} else {
			throw new SalesReportException("Nothing To Delete In Sales Report !!");
		}
	}

	@Override
	public void deleteSalesReportById(Long salesReportId) throws SalesReportException {

		if (salesReportId != null) {
			if (salesReportRepository.existsById(salesReportId)) {
				salesReportRepository.deleteById(salesReportId);
			} else {
				throw new SalesReportException("Sales Report Id Does Not Exists !!");
			}
		} else {
			throw new SalesReportException("Sales Report Id Is Null !!");
		}
	}

	@Override
	public SalesReportEntity findSalesReportByProductId(String productId) {

		return salesReportRepository.findByProductId(productId);
	}
}
