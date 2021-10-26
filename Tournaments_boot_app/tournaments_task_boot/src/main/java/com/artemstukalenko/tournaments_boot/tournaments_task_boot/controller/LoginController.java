package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping("/login")
public class LoginController {


    @RequestMapping("/login")
    public String getLoginForm() {
        return "login-form.html";
    }

}
