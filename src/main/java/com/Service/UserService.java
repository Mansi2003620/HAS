package com.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.Entity.User;

public interface UserService {
    
    Optional<User> getUserById(Long id);
    Optional<User> getUserByemail(String email);
    List<User> getAllUsers();
    User updateUser(Long id,User updateUser);
    void deleteUser(Long id);

	User registerUser(Map<String, Object> data);
	User login(String email, String password);
    
}
