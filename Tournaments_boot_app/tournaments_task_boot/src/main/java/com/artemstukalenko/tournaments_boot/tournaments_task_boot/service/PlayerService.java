package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service;

import entity.Player;

import java.util.List;

public interface PlayerService {

    List<Player> getAllPlayers();

    Player findPlayerById(int playerId);

    boolean addOrUpdatePlayer(Player playerToAdd);

    boolean deletePlayerById(int playerToDeleteId);

    boolean deletePlayerByUserId(int userId);
}
