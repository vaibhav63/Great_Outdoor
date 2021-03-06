package com.cg.go.service;

import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.go.dao.GrowthReportRepository;
import com.cg.go.entity.GrowthReportEntity;
import com.cg.go.entity.SalesReportEntity;
import com.cg.go.exception.GrowthReportException;
import com.cg.go.exception.SalesReportException;

@Service
public class GrowthReportServiceImpl implements GrowthReportService {

	@Autowired
	private GrowthReportRepository growthReportRepository;

	@Autowired
	private SalesReportService salesReportService;

	@Override
	public List<GrowthReportEntity> findAllGrowthReport() {

		return growthReportRepository.findAll();
	}

	@Override
	public void addGrowthReport() throws SalesReportException {

		double currentRevenue = 0;
		double amountChanged = 0;
		double percentageGrowth = 0;
		GrowthReportEntity newEntity = null;
		GrowthReportEntity oldEntity = growthReportRepository.getLastGrowthReport();
		if (oldEntity != null) {
			if (LocalDate.now().isAfter(oldEntity.getCurrentdate().plusDays(1))) {
				newEntity = new GrowthReportEntity();
				newEntity.setGrowthReportId(0);
				newEntity.setCurrentdate(LocalDate.now().minusDays(1));
				List<SalesReportEntity> salesReportList = salesReportService.findAllSalesReport();
				salesReportService.deleteAllSalesReport();
				for (SalesReportEntity entity : salesReportList) {
					currentRevenue += entity.getTotalSale();
				}
				newEntity.setRevenue(currentRevenue);
				amountChanged = currentRevenue - oldEntity.getRevenue();
				newEntity.setAmountChange(amountChanged);
				percentageGrowth = Math.floor(((currentRevenue - oldEntity.getRevenue()) / currentRevenue) * 100);
				newEntity.setPercentageGrowth(percentageGrowth);
				if (percentageGrowth > 50) {
					newEntity.setColorCode("Green");
				} else if (percentageGrowth > 2) {
					newEntity.setColorCode("Blue");
				} else {
					newEntity.setColorCode("Red");
				}
				growthReportRepository.save(newEntity);
			}
		} else {
			newEntity = new GrowthReportEntity();
			newEntity.setGrowthReportId(0);
			newEntity.setCurrentdate(LocalDate.now().minusDays(1));
			newEntity.setRevenue(40000);
			newEntity.setAmountChange(0);
			newEntity.setPercentageGrowth(0);
			newEntity.setColorCode("Red");
			growthReportRepository.save(newEntity);
		}
	}

	@Override
	public void deleteAllGrowthReport() throws GrowthReportException {

		if (growthReportRepository.findAll() != null) {
			growthReportRepository.deleteAll();
		} else {
			throw new GrowthReportException("Nothing To Delete In Growth Report !!");
		}
	}

	@Override
	public void deleteGrowthReportById(Long growthReportId) throws GrowthReportException {

		if (growthReportId != null) {
			if (growthReportRepository.existsById(growthReportId)) {
				growthReportRepository.deleteById(growthReportId);
			} else {
				throw new GrowthReportException("Growth Report Id Does Not Exists !!");
			}
		} else {
			throw new GrowthReportException("Growth Report Id Is Null !!");
		}
	}
}
