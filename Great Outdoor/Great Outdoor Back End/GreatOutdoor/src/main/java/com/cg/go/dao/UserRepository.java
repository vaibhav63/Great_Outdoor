package com.cg.go.dao;

import java.io.Serializable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cg.go.entity.Userdata;

@Repository
public interface UserRepository extends JpaRepository<Userdata, Serializable>
{
	Userdata findByUsername(String username);
}
