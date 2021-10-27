package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TeamService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserService;
import entity.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @Autowired
    private UserService userService;

    @GetMapping("/teams")
    public List<Team> getAllTeams(Model model) {

//        model.addAttribute("allTeams", teamService.getAllTeams());

        return teamService.getAllTeams();
    }

//    @RequestMapping("/addTeam")
//    public String getAddTeamForm(Model model) {
//
//        model.addAttribute("team", new Team());
//        model.addAttribute("allUsers", userService.getAllUsers());
//
//        return "team-form.html";
//    }

    @PostMapping("/teams")
    public Team commitTeam(@RequestBody Team team) {

        teamService.addOrUpdate(team);

        return team;
    }

    @DeleteMapping("/teams/{id}")
    public boolean deleteTeam(@PathVariable("id") int idToDelete) {

        return teamService.deleteTeamById(idToDelete);
    }

//    @RequestMapping("/updateTeam/{id}")
//    public String getFormToUpdateTeam(@PathVariable("id") int idToUpdate,
//                                      Model model) {
//
//        model.addAttribute("team", teamService.findTeamById(idToUpdate));
//        model.addAttribute("allUsers", userService.getAllUsers());
//
//        return "team-form.html";
//    }
}
