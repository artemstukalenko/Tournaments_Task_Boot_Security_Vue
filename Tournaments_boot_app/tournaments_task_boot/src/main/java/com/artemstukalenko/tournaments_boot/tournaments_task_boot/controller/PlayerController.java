package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.PlayerService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserService;
import entity.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @Autowired
    private UserService userService;

    @GetMapping("/players")
    public List<Player> getAllPlayers(Model model) {

//        model.addAttribute("allPlayers", playerService.getAllPlayers());

        return playerService.getAllPlayers();
    }

//    @PostMapping("/players")
//    public String getAddPlayerForm(Model model) {
//
//        model.addAttribute("player", new Player());
//        model.addAttribute("allUsers", userService.getAllUsers());
//
//        return "player-form.html";
//    }

    @PostMapping("/players")
    public Player commitPlayer(@RequestBody Player player) {

        player.setUser(userService.findUserById(player.getUser().getUserId()));

        playerService.addOrUpdate(player);

        return player;
    }

    @DeleteMapping("/players/{id}")
    public boolean deletePlayer(@PathVariable("id") int idToDelete) {

        return playerService.deletePlayerById(idToDelete);
    }

//    @RequestMapping("/updatePlayer/{id}")
//    public String getFormToUpdatePlayer(@PathVariable("id") int idToUpdate,
//                                        Model model) {
//
//        model.addAttribute("player", playerService.findPlayerById(idToUpdate));
//        model.addAttribute("allUsers", userService.getAllUsers());
//
//        return "player-form.html";
//    }
}
