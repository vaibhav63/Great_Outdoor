package com.cg.go.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="growth_report")
public class GrowthReportEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="g_report_id")
	private long growthReportId;
	
	@Column(name="date")
	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
	private LocalDate currentdate;
	
	@Column(name="revenue")
	private double revenue;
	
	@Column(name="amount_change")
	private double amountChange;
	
	@Column(name="percentage_growth")
	private double percentageGrowth;
	
	@Column(name="color_code")
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
