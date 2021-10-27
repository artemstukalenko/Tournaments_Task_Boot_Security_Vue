package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.PlayerService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TeamPlayerService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TeamService;
import entity.TeamPlayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TeamPlayersController {

    @Autowired
    private TeamPlayerService teamPlayerService;

    @Autowired
    private TeamService teamService;

    @Autowired
    private PlayerService playerService;

    @GetMapping("/teamplayers")
    public List<TeamPlayer> getAllTeamplayers(Model model) {

//        model.addAttribute("allTeamplayers", teamPlayerService.getAllTeamPlayers());

        return teamPlayerService.getAllTeamPlayers();
    }

//    @PostMapping("/teamplayers")
//    public String addTeamPlayerForm(Model model) {
//
//        model.addAttribute("teamPlayer", new TeamPlayer());
//        model.addAttribute("allTeams", teamService.getAllTeams());
//        model.addAttribute("allPlayers", playerService.getAllPlayers());
//
//        return "teamplayer-form.html";
//    }

    @PostMapping("/teamplayers")
    public TeamPlayer commitTeamPlayer(@RequestBody TeamPlayer teamPlayer) {

        teamPlayer.setTeam(teamService.findTeamById(teamPlayer.getTeam().getTeamId()));
        teamPlayer.setPlayer(playerService.findPlayerById(teamPlayer.getPlayer().getId()));

        teamPlayerService.addOrUpdate(teamPlayer);

        return teamPlayer;
    }

    @DeleteMapping("/teamplayers/{id}")
    public boolean deleteTeamPlayer(@PathVariable("id") int idToDelete) {

        return teamPlayerService.deleteTeamPlayerById(idToDelete);
    }

//    @RequestMapping("/updateTeamPlayer/{id}")
//    public String getFormToUpdateTeamPlayer(@PathVariable("id") int idToUpdate,
//                                            Model model) {
//
//        model.addAttribute("teamPlayer", teamPlayerService.findTeamPlayerById(idToUpdate));
//        model.addAttribute("allTeams", teamService.getAllTeams());
//        model.addAttribute("allPlayers", playerService.getAllPlayers());
//
//        return "teamplayer-form.html";
//    }
}
