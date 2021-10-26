package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/homepage")
    public String getHomepage(Model model) {

        return "index.html";

    }

}
