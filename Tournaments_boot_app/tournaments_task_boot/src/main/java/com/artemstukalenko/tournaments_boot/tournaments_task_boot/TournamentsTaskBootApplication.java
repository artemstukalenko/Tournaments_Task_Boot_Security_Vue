package com.artemstukalenko.tournaments_boot.tournaments_task_boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EntityScan("entity")
@EnableJpaRepositories
@EnableMongoRepositories(basePackages = "com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories")
public class TournamentsTaskBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(TournamentsTaskBootApplication.class, args);
	}

}
