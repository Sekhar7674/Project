package com.example.SathyaStack.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.SathyaStack.Models.User;
import com.example.SathyaStack.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(path = "getUsers", method = RequestMethod.GET)
	private ResponseEntity<List<User>> getUsers(){
		List<User> users = userService.getUsers();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@GetMapping("getUser/{userId}")
	private ResponseEntity<User> getUser(@PathVariable Long userId){
		Optional<User> userFound = userService.getUser(userId);
		if(userFound.isPresent()) {
			return new ResponseEntity<User>(userFound.get(),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	
	@PostMapping("/saveUser")
	private ResponseEntity<User> saveUser(@RequestBody User user){
		User userNew = userService.saveUser(user);
		return new ResponseEntity<User>(userNew, HttpStatus.CREATED);
	}
	
	@PutMapping("updateUser/{userId}")
	public ResponseEntity<String> updateUser(@PathVariable Long userId, @RequestBody User user){
		String response = userService.updateUser(userId, user);
		return new ResponseEntity<String>(response, HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteUser/{userId}")
	private ResponseEntity<String> deleteUser(@PathVariable Long userId){
		String response = userService.deleteUser(userId);																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																							
		return new ResponseEntity<String>(response, HttpStatus.OK);
	}
	@PostMapping("/loginUser")
	private ResponseEntity<Long> loginUser(@RequestBody User user){
		return ResponseEntity.ok(userService.userLogin(user));
	}
	
}
