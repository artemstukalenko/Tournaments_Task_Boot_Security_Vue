package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.schedule.Schedule;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.ScheduleService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TeamService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.TournamentService;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.util.ScheduleIdGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/schedules")
public class ScheduleController {

    @Autowired
    private ScheduleService scheduleService;

    @Autowired
    private TeamService teamService;

    @Autowired
    private TournamentService tournamentService;

    @RequestMapping("/")
    public String getAllSchedules(Model model) {
        model.addAttribute("allSchedules", scheduleService.getAllSchedules());

        return "schedules-page.html";
    }

    @RequestMapping("/addSchedule")
    public String getAddScheduleForm(Model model) {

        Schedule scheduleToFill = new Schedule();

        model.addAttribute("schedule", scheduleToFill);
        model.addAttribute("allTeams", teamService.getAllTeams());
        model.addAttribute("allTournaments", tournamentService.getAllTournaments());

        return "schedule-form.html";
    }

    @RequestMapping("/commitSchedule")
    public String commitSchedule(Schedule schedule) {

        schedule.setTournament(tournamentService.findTournamentById(schedule.getTournament().getTournamentId()));
        schedule.setTeam(teamService.findTeamById(schedule.getTeam().getTeamId()));

        if (schedule.getScheduleId().isEmpty()) {
            schedule.setScheduleId(ScheduleIdGenerator.generateId(schedule));
        }

        scheduleService.addOrUpdateSchedule(schedule);

        return "forward:/schedules/";
    }

    @RequestMapping("/deleteSchedule/{id}")
    public String deleteSchedule(@PathVariable("id") String idToDelete) {

        scheduleService.deleteScheduleById(idToDelete);

        return "forward:/schedules/";
    }

    @RequestMapping("/updateSchedule/{id}")
    public String getFormToUpdateSchedule(@PathVariable("id") String idToUpdate,
                                          Model model) {

        model.addAttribute("schedule", scheduleService.findScheduleById(idToUpdate));
        model.addAttribute("allTeams", teamService.getAllTeams());
        model.addAttribute("allTournaments", tournamentService.getAllTournaments());

        return "schedule-form.html";
    }

}
