package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.implementators;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories.TeamPlayerRepository;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TeamPlayerService;
import entity.TeamPlayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TeamPlayerServiceImpl implements TeamPlayerService {

    @Autowired
    private TeamPlayerRepository teamPlayerRepository;

    @Override
    @Transactional(readOnly = true)
    public List<TeamPlayer> getAllTeamPlayers() {
        return teamPlayerRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public TeamPlayer findTeamPlayerById(int teamPlayerId) {
        Optional<TeamPlayer> foundTeamPlayer = teamPlayerRepository.findById(teamPlayerId);
        return Optional.ofNullable(foundTeamPlayer).get().orElse(new TeamPlayer());
    }

    @Override
    public boolean addOrUpdate(TeamPlayer teamPlayerToAdd) {
        teamPlayerRepository.save(teamPlayerToAdd);
        return true;
    }

    @Override
    public boolean deleteTeamPlayerById(int teamPlayerId) {
        teamPlayerRepository.deleteById(teamPlayerId);
        return true;
    }
}
