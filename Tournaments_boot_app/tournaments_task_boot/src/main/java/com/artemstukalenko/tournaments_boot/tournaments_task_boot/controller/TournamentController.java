package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TournamentService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserService;
import entity.Tournament;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TournamentController {

    @Autowired
    private TournamentService tournamentService;

    @Autowired
    private UserService userService;

    @GetMapping("/tournaments")
    public List<Tournament> getAllTournaments(Model model) {

//        model.addAttribute("allTournaments", tournamentService.getAllTournaments());

        return tournamentService.getAllTournaments();
    }

//    @RequestMapping("/addTournament")
//    public String getAddTournamentForm(Model model) {
//
//        model.addAttribute("tournament", new Tournament());
//        model.addAttribute("allUsers", userService.getAllUsers());
//
//        return "tournament-form.html";
//    }

    @PostMapping("/tournaments")
    public Tournament commitTournament(@RequestBody Tournament tournament) {

        tournament.setUser(userService.findUserById(tournament.getUser().getUserId()));

        tournamentService.addOrUpdate(tournament);

        return tournament;
    }

    @DeleteMapping("/tournaments/{id}")
    public boolean deleteTournament(@PathVariable("id") int idToDelete) {

        return tournamentService.deleteTournamentById(idToDelete);
    }

//    @RequestMapping("/updateTournament/{id}")
//    public String getFormToUpdateTournament(@PathVariable("id") int idToUpdate,
//                                            Model model) {
//
//        model.addAttribute("tournament", tournamentService.findTournamentById(idToUpdate));
//        model.addAttribute("allUsers", userService.getAllUsers());
//
//        return "tournament-form.html";
//    }

}
