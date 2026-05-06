package com.HAS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.HAS","com.Controller","com.Service","com.Repository"})
@EnableJpaRepositories(basePackages = "com.Repository")
@EntityScan(basePackages = "com.Entity")
public class HasApplication {

	public static void main(String[] args) {
		SpringApplication.run(HasApplication.class, args);
	}

}
