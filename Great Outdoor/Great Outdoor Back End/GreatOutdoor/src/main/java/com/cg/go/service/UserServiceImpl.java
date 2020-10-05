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
	public Userdata loginUser(Userdata u)
	{
		Userdata user=udao.findByUsername(u.getUsername());
		if((user.getUsername().equals(u.getUsername()))&&(user.getUserpassword().equals(u.getUserpassword())))
		   return user;
   else
	   return null;
	}
}
