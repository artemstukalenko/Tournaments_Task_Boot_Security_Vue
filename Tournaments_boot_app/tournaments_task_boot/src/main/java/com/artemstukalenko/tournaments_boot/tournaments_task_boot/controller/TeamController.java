package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TeamService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserService;
import entity.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/teams")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @Autowired
    private UserService userService;

    @RequestMapping("/")
    public String getAllTeams(Model model) {

        model.addAttribute("allTeams", teamService.getAllTeams());

        return "teams-page.html";
    }

    @RequestMapping("/addTeam")
    public String getAddTeamForm(Model model) {

        model.addAttribute("team", new Team());
        model.addAttribute("allUsers", userService.getAllUsers());

        return "team-form.html";
    }

    @RequestMapping("/commitTeam")
    public String commitTeam(Team team) {

        teamService.addOrUpdate(team);

        return "forward:/teams/";
    }

    @RequestMapping("/deleteTeam/{id}")
    public String deleteTeam(@PathVariable("id") int idToDelete) {

        teamService.deleteTeamById(idToDelete);

        return "forward:/teams/";
    }

    @RequestMapping("/updateTeam/{id}")
    public String getFormToUpdateTeam(@PathVariable("id") int idToUpdate,
                                      Model model) {

        model.addAttribute("team", teamService.findTeamById(idToUpdate));
        model.addAttribute("allUsers", userService.getAllUsers());

        return "team-form.html";
    }
}
