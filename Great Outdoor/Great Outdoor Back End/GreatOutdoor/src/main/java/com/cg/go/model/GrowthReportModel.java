package com.cg.go.model;

import java.time.LocalDate;


public class GrowthReportModel {

	private long growthReportId;

	private LocalDate currentdate;
	
	private double revenue;

	private double amountChange;
	
	private double percentageGrowth;

	private String colorCode;

	public long getGrowthReportId() {
		return growthReportId;
	}

	public void setGrowthReportId(long growthReportId) {
		this.growthReportId = growthReportId;
	}

	public LocalDate getCurrentdate() {
		return currentdate;
	}

	public void setCurrentdate(LocalDate currentdate) {
		this.currentdate = currentdate;
	}

	public double getRevenue() {
		return revenue;
	}

	public void setRevenue(double revenue) {
		this.revenue = revenue;
	}

	public double getAmountChange() {
		return amountChange;
	}

	public void setAmountChange(double amountChange) {
		this.amountChange = amountChange;
	}

	public double getPercentageGrowth() {
		return percentageGrowth;
	}

	public void setPercentageGrowth(double percentageGrowth) {
		this.percentageGrowth = percentageGrowth;
	}

	public String getColorCode() {
		return colorCode;
	}

	public void setColorCode(String colorCode) {
		this.colorCode = colorCode;
	}
	
	
}