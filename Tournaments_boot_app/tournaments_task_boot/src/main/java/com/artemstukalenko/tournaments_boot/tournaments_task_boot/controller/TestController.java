package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;

import entity.Tournament;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TestController {

    @RequestMapping("/")
    public String testPage() {
        return "homepage-with-bootstrap.html";
    }

}
