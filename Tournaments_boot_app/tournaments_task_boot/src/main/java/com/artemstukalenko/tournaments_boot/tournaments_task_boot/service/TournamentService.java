package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service;

import entity.Tournament;

import java.util.List;

public interface TournamentService {

    List<Tournament> getAllTournaments();

    Tournament findTournamentById(int tournamentId);

    boolean addOrUpdate(Tournament tournamentToAdd);

    boolean deleteTournamentById(int tournamentId);

    boolean deleteTournamentByUserId(int userId);
}
