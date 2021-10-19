package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service;

import entity.TeamPlayer;

import java.util.List;

public interface TeamPlayerService {

    List<TeamPlayer> getAllTeamPlayers();

    TeamPlayer findTeamPlayerById(int teamPlayerId);

    boolean addOrUpdateTeamPlayer(TeamPlayer teamPlayerToAdd);

    boolean deleteTeamPlayerById(int teamPlayerId);

}
