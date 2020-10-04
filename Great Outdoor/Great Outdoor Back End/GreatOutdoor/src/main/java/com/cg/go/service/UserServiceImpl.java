package com.cg.go.service;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.go.dao.UserRepository;
import com.cg.go.entity.Userdata;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository udao;

	public void setUdao(UserRepository udao) {
		this.udao = udao;
	}

	@Transactional
	public Userdata addUser(Userdata user) {
		return udao.save(user);
	}

	@Transactional
	public String loginUser(Userdata u) {
		String flag = null;
		String usertype = udao.findByusertype(u.getUsername(), u.getUserpassword());
		if (usertype == null)
			return "invalid";
		if (usertype.equalsIgnoreCase("admin")) {
			flag = "admin";
		} else if (usertype.equalsIgnoreCase("customer")) {
			flag = "customer";
		}
		return flag;
	}
}
