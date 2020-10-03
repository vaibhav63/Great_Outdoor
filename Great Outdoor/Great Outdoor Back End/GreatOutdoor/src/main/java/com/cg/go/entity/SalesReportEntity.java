package com.cg.go.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sales_report")
public class SalesReportEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "s_report_id")
	private long salesReportId;

	@Column(name = "p_id")
	private String productId;

	@Column(name = "p_name")
	private String productName;

	@Column(name = "qty_sold")
	private Integer quantitySold;

	@Column(name = "total_sale")
	private double totalSale;

	public long getSalesReportId() {
		return salesReportId;
	}

	public void setSalesReportId(long salesReportId) {
		this.salesReportId = salesReportId;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public Integer getQuantitySold() {
		return quantitySold;
	}

	public void setQuantitySold(Integer quantitySold) {
		this.quantitySold = quantitySold;
	}

	public double getTotalSale() {
		return totalSale;
	}

	public void setTotalSale(double totalSale) {
		this.totalSale = totalSale;
	}

}
