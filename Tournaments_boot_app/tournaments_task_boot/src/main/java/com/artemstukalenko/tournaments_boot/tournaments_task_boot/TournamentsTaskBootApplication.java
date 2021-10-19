package com.artemstukalenko.tournaments_boot.tournaments_task_boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EntityScan("entity")
public class TournamentsTaskBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(TournamentsTaskBootApplication.class, args);
	}

}
