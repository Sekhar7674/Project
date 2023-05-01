package com.example.SathyaStack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SathyaStack.Models.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{

}
