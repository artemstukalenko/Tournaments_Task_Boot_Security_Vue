package com.artemstukalenko.tournaments_boot.tournaments_task_boot.util;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.schedule.Schedule;

import java.util.Random;

public class ScheduleIdGenerator {

    public static String generateId(Schedule schedule) {
        return String.valueOf (Math.abs(new Random().nextInt() + 1) * schedule.getTeam().getTeamId()
                * schedule.getTournament().getTournamentId());
    }

}
