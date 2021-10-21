package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TournamentService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserService;
import entity.Tournament;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;

@Controller
@RequestMapping("/tournaments")
public class TournamentController {

    @Autowired
    private TournamentService tournamentService;

    @Autowired
    private UserService userService;

    @RequestMapping("/")
    public String getAllTournaments(Model model) {

        model.addAttribute("allTournaments", tournamentService.getAllTournaments());

        return "tournaments-page.html";
    }

    @RequestMapping("/addTournament")
    public String getAddTournamentForm(Model model) {

        model.addAttribute("tournament", new Tournament());
        model.addAttribute("allUsers", userService.getAllUsers());

        return "tournament-form.html";
    }

    @RequestMapping("/commitTournament")
    public String commitTournament(Tournament tournament,
                                   @RequestParam("start_date") String startDateString,
                                   @RequestParam("end_date") String endDateString) {

        tournament.setStartDate(LocalDate.parse(startDateString));
        tournament.setEndDate(LocalDate.parse(endDateString));

        tournament.setUser(userService.findUserById(tournament.getUser().getUserId()));

        tournamentService.addOrUpdate(tournament);

        return "forward:/tournaments/";
    }

    @RequestMapping("/deleteTournament/{id}")
    public String deleteTournament(@PathVariable("id") int idToDelete) {

        tournamentService.deleteTournamentById(idToDelete);

        return "forward:/tournaments/";
    }

    @RequestMapping("/updateTournament/{id}")
    public String getFormToUpdateTournament(@PathVariable("id") int idToUpdate,
                                            Model model) {

        model.addAttribute("tournament", tournamentService.findTournamentById(idToUpdate));
        model.addAttribute("allUsers", userService.getAllUsers());

        return "tournament-form.html";
    }

}
