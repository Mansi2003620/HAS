package com.Controller;

import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RestController;

import com.Entity.Doctor;
import com.Entity.Patient;
import com.Entity.User;
import com.Repository.UserRepository;
import com.Service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User loginRequest){
		User user=userService.login(loginRequest.getEmail(),loginRequest.getPassword());
		
		if(user!=null) {
			return ResponseEntity.ok(user);	}
	else {
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
		}
}
	@PostMapping("/register")
	public ResponseEntity<User>  registerUser(@RequestBody Map<String, Object> user){
		return ResponseEntity.ok(userService.registerUser(user));
	}
    
	
		
	
	@GetMapping("/list")
	public ResponseEntity<List<User>> getAllusers(){
		return ResponseEntity.ok(userService.getAllUsers());
		
	}
	 @GetMapping("/{Id}")
	 public ResponseEntity<User> getUserById(@PathVariable Long Id){
		 return userService.getUserById(Id)
				 .map(ResponseEntity::ok)
				 .orElse(ResponseEntity.notFound().build());
	 }
	 @PutMapping("/{Id}")
	 public ResponseEntity<User> updateUser(@PathVariable Long Id,@RequestBody User updateuser){
		 return ResponseEntity.ok(userService.updateUser(Id, updateuser));
	 }
	 @DeleteMapping("/{Id}")
	 public ResponseEntity<Void> deleteUser(@PathVariable Long Id){
		 userService.deleteUser(Id);
		 return ResponseEntity.noContent().build();
		 
	 }
}
