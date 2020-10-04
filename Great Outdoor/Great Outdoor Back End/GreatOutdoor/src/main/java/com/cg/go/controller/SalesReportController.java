package com.cg.go.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cg.go.entity.SalesReportEntity;
import com.cg.go.exception.SalesReportException;
import com.cg.go.service.SalesReportService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/sales_report")
public class SalesReportController {

	@Autowired
	private SalesReportService salesReportService;

	@GetMapping()
	public ResponseEntity<List<SalesReportEntity>> getAllSalesReport() {

		return new ResponseEntity<>(salesReportService.findAllSalesReport(), HttpStatus.OK);
	}

	@PutMapping()
	public ResponseEntity<?> updateProductReport(@RequestBody SalesReportEntity entity) {

		salesReportService.updateProductReport(entity);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/deleteAll")
	public ResponseEntity<?> deleteAllSalesReport() throws SalesReportException {

		salesReportService.deleteAllSalesReport();
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteSalesReportById(@PathVariable("id") Long id) throws SalesReportException {

		salesReportService.deleteSalesReportById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
