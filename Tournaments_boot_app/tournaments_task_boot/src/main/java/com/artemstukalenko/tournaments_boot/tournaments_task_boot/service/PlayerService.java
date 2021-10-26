package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service;

import entity.Player;

import java.util.List;

public interface PlayerService {

    List<Player> getAllPlayers();

    Player findPlayerById(int playerId);

    boolean addOrUpdate(Player playerToAdd);

    boolean deletePlayerById(int playerToDeleteId);

    boolean deletePlayersByUserId(int userId);
}
