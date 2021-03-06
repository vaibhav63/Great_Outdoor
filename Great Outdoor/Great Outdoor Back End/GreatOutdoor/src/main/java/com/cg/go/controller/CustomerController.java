package com.cg.go.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cg.go.entity.Customer;
import com.cg.go.exception.IDNotFoundException;
import com.cg.go.service.CustomerService;

@RestController
@RequestMapping("/addr")
@CrossOrigin("http://localhost:4200")
public class CustomerController {
	@Autowired
	CustomerService serviceobj;

	// enter address
	@PostMapping("/Addrcreation")
	public ResponseEntity<String> addrcreation(@RequestBody Customer addr) {
		Customer e = serviceobj.addresscreation(addr);
		if (e == null) {
			throw new IDNotFoundException("Enter Valid Id");
		} else {
			return new ResponseEntity<String>(" Address entered successfully", new HttpHeaders(), HttpStatus.OK);
		}
	}

	// Get All addresses

	@GetMapping("/getAddress/{userName}")
	private ResponseEntity<Customer> getaddress(@PathVariable("userName") String userName) {
		Customer customer = serviceobj.getAddressByUserName(userName);
		return new ResponseEntity<Customer>(customer, HttpStatus.OK);
	}

	// Updating address

	@PutMapping("/Updateaddr/{addr_id}")
	public ResponseEntity<String> updateaddr(@RequestBody Customer addr) {
		Customer e = serviceobj.updateaddr(addr);
		if (e == null) {
			throw new IDNotFoundException("Update Operation Unsuccessful,Provided Id does not exist");
		} else {
			return new ResponseEntity<String>("Address updated successfully", new HttpHeaders(), HttpStatus.OK);
		}
	}

	// Deleting address

	@DeleteMapping("/Deleteaddr/{addr_id}")
	private ResponseEntity<String> deleteaddrByID(@PathVariable("addr_id") int addr_id) {
		Customer e = serviceobj.deleteaddrByID(addr_id);
		if (e == null) {
			throw new IDNotFoundException("Delete Operation Unsuccessful,Provided Id does not exist");
		} else {
			return new ResponseEntity<String>("address deleted successfully", new HttpHeaders(), HttpStatus.OK);
		}
	}

}
