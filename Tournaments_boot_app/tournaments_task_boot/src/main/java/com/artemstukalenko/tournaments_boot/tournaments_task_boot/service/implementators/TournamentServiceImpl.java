package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.implementators;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories.ScheduleRepository;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories.TournamentRepository;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.schedule.Schedule;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TournamentService;
import entity.Tournament;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TournamentServiceImpl implements TournamentService {

    @Autowired
    private TournamentRepository tournamentRepository;

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Tournament> getAllTournaments() {
        return tournamentRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Tournament findTournamentById(int tournamentId) {
        Optional<Tournament> foundTournament = tournamentRepository.findById(tournamentId);
        return Optional.ofNullable(foundTournament).get().orElse(new Tournament());
    }

    @Override
    public boolean addOrUpdateTournament(Tournament tournamentToAdd) {
        tournamentRepository.save(tournamentToAdd);

        Schedule scheduleLinkedToThisTournament = scheduleRepository.findScheduleByTournamentId(tournamentToAdd.getTournamentId());

        if (scheduleLinkedToThisTournament != null) {
            scheduleLinkedToThisTournament.setTournament(tournamentToAdd);
            scheduleRepository.save(scheduleLinkedToThisTournament);
        }

        return true;
    }

    @Override
    public boolean deleteTournamentById(int tournamentId) {
        scheduleRepository.deleteScheduleByTournamentId(tournamentId);
        tournamentRepository.deleteById(tournamentId);
        return true;
    }

    @Override
    public boolean deleteTournamentByUserId(int userId) {
        for (Tournament tournament : tournamentRepository.findTournamentsByUserId(userId)) {
            deleteTournamentById(tournament.getTournamentId());
        }
        return true;
    }
}
