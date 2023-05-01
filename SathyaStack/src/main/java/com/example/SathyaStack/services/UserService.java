package com.example.SathyaStack.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SathyaStack.Models.User;
import com.example.SathyaStack.repositories.UserRepo;

@Service
public class UserService {

	
	@Autowired
	private UserRepo userRepo;
	
	public List<User> getUsers(){
		return userRepo.findAll();
	}
	
	public User saveUser(User user) {
		return userRepo.save(user);
	}
	
	public Optional<User> getUser(long id) {
		Optional<User> userFound = userRepo.findById(id);
		return userFound;
	}
	
	public String updateUser(long id, User user) {
		Optional<User> userFound = getUser(id);
		if(userFound.isPresent()) {
			user.setUserId(userFound.get().getUserId());
			userRepo.save(user);
			return "Updation Success";
		}else return "No User Found";
	}
	
	public String deleteUser(long id) {
		Optional<User> userFound = getUser(id);
		if(userFound.isPresent()) {
			userRepo.deleteById(id);
			return "Deletion Success";
		}else return "No User Found";
	}
}