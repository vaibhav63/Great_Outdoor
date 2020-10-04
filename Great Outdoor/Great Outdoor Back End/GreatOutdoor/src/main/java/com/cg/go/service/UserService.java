package com.cg.go.service;

import com.cg.go.entity.Userdata;

public interface UserService {
	
	public Userdata addUser(Userdata user);

	public String loginUser(Userdata u);
}
