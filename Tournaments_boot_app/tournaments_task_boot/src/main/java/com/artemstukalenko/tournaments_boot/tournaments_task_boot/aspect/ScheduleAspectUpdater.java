package com.artemstukalenko.tournaments_boot.tournaments_task_boot.aspect;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.schedule.Schedule;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.ScheduleService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TeamService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TournamentService;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Aspect
public class ScheduleAspectUpdater {

    @Autowired
    private TournamentService tournamentService;

    @Autowired
    private TeamService teamService;

    @Autowired
    private ScheduleService scheduleService;

    @After("execution(* addOrUpdate(*))")
    private void afterUpdateAdvice() {

        List<Schedule> allSchedules = scheduleService.getAllSchedules();

        for (Schedule scheduleToUpdate : allSchedules) {

            scheduleToUpdate.setTournament(tournamentService
                    .findTournamentById(scheduleToUpdate.getTournament().getTournamentId()));

            scheduleToUpdate.setTeam(teamService
                    .findTeamById(scheduleToUpdate.getTeam().getTeamId()));

            scheduleService.addOrUpdateSchedule(scheduleToUpdate);

        }

    }

}
