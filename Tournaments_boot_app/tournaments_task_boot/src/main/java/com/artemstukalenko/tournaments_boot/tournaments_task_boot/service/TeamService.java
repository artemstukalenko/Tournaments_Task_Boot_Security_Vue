package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service;

import entity.Team;

import java.util.List;

public interface TeamService {

    List<Team> getAllTeams();

    Team findTeamById(int teamId);

    boolean addOrUpdate(Team teamToAdd);

    boolean deleteTeamById(int teamId);

    boolean deleteTeamByUserId(int userId);
}
