package com.mymovieplan.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mymovieplan.model.User;
import com.mymovieplan.repositories.UserRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("User")
public class UserController {
	@Autowired
	UserRepo UR;
	
	
	@PostMapping("addUser")
	public User addUser(@RequestBody User user)
	{
		return UR.save(user);
	}
	
	@GetMapping("allUsers")
	public List<User> getAll()
	{
		List<User> users= (List<User>) UR.findAll();
		return users;
	}
	
	// get particular Card by its ID
		@GetMapping("get/{id}")
		public Optional<User> getUserById(@PathVariable long id)
		{
			return UR.findById(id);
		}
		
		// update existing Card 
		@PutMapping("update/{id}")
		public User updateUser(@RequestBody User user)
		{
			return UR.save(user);
		}
		
		// delete particular Card from database
		@DeleteMapping("delete/{id}")
		public void deleteUser(@PathVariable long id)
		{
			UR.deleteById(id);
		}
	
}
