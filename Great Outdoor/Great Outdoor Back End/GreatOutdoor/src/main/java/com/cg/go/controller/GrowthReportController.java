package com.cg.go.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cg.go.entity.GrowthReportEntity;
import com.cg.go.exception.GrowthReportException;
import com.cg.go.exception.SalesReportException;
import com.cg.go.service.GrowthReportService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/growth_report")
public class GrowthReportController {

	@Autowired
	private GrowthReportService growthReportService;

	@GetMapping()
	public ResponseEntity<List<GrowthReportEntity>> getAllGrowthReports() {

		return new ResponseEntity<>(growthReportService.findAllGrowthReport(), HttpStatus.OK);
	}

	@PostMapping()
	public ResponseEntity<?> addGrowthReport() throws SalesReportException {

		growthReportService.addGrowthReport();
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/deleteAll")
	public ResponseEntity<?> deleteAllGrowthReport() throws GrowthReportException {

		growthReportService.deleteAllGrowthReport();
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteGrowthReportById(@PathVariable("id") Long id) throws GrowthReportException {

		growthReportService.deleteGrowthReportById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
