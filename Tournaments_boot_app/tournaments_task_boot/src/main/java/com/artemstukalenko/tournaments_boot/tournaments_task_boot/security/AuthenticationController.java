package com.artemstukalenko.tournaments_boot.tournaments_task_boot.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api")
public class AuthenticationController {

    @PostMapping("/authenticate")
    public void authenticate(@RequestBody UserDetails userDetails) {

        System.out.println("OBTAINED USER DETAILS     "
                + userDetails.getUsername() + "  :  "
                + userDetails.getPassword());

    }

}
