package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.implementators;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories.ScheduleRepository;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories.TeamPlayerRepository;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories.TeamRepository;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.schedule.Schedule;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TeamService;
import entity.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TeamServiceImpl implements TeamService {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private TeamPlayerRepository teamPlayerRepository;

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Team findTeamById(int teamId) {
        Optional<Team> foundTeam = teamRepository.findById(teamId);
        return Optional.ofNullable(foundTeam).get().orElse(new Team());
    }

    @Override
    public boolean addOrUpdate(Team teamToAdd) {
        teamRepository.save(teamToAdd);

        Schedule scheduleLinkedToThisTeam = scheduleRepository.findScheduleByTeamId(teamToAdd.getTeamId());

        if (scheduleLinkedToThisTeam != null) {
            scheduleLinkedToThisTeam.setTeam(teamToAdd);
            scheduleRepository.save(scheduleLinkedToThisTeam);
        }

        return true;
    }

    @Override
    public boolean deleteTeamById(int teamId) {
        scheduleRepository.deleteScheduleByTeamId(teamId);
        teamPlayerRepository.deleteTeamPlayerByTeamId(teamId);
        teamRepository.deleteById(teamId);
        return true;
    }

    @Override
    public boolean deleteTeamByUserId(int userId) {

        for(Team team : teamRepository.findTeamsByUserId(userId)) {
            deleteTeamById(team.getTeamId());
        }

        return true;
    }
}
