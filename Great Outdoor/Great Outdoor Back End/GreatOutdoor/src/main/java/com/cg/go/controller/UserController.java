package com.cg.go.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cg.go.entity.Userdata;
import com.cg.go.exception.IDNotFoundException;
import com.cg.go.service.UserServiceImpl;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins="http://localhost:4200")

public class UserController {
	@Autowired
	private UserServiceImpl  userservice;
	
	//add user
    @PostMapping(value="/addUser")
    public ResponseEntity<String> addUser(@RequestBody Userdata user)
    {
   	 Userdata  e= userservice.addUser(user);
   		
   	 if (e == null) {
   			throw new IDNotFoundException("Enter Valid Username");
   		} else {
   			return new ResponseEntity<>("User created successfully", new HttpHeaders(), HttpStatus.OK);
   		}		
    }
    
    //login user
    @PutMapping("/loginUser")
	public String loginUser(@RequestBody Userdata u)
	 {
	 		
 		 return userservice.loginUser(u);
 		 
		}
         
}		
	
				

			
							
				
							
			

			

			
			
			

			
				
				
			