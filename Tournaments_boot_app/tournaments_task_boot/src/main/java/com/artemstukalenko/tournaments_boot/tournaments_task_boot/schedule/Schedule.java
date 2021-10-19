package com.artemstukalenko.tournaments_boot.tournaments_task_boot.schedule;

import entity.AppEntity;
import entity.Team;
import entity.Tournament;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Document(collection = "schedules")
public class Schedule extends AppEntity {

    @Id
    @Column(name = "schedule_id")
    private int scheduleId;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tournament_id")
    private Tournament tournament;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "team_id")
    private Team team;

    public Schedule(Tournament tournament, Team team) {
        this.tournament = tournament;
        this.team = team;
    }

    public Schedule(int scheduleId, Tournament tournament, Team team) {
        this.scheduleId = scheduleId;
        this.tournament = tournament;
        this.team = team;
    }

    public Schedule() {}

    @Override
    public String toString() {
        return "Schedule{" +
                "scheduleId=" + scheduleId +
                ", tournament=" + tournament +
                ", team=" + team +
                '}';
    }

    public int getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(int scheduleId) {
        this.scheduleId = scheduleId;
    }

    public Tournament getTournament() {
        return tournament;
    }

    public void setTournament(Tournament tournament) {
        this.tournament = tournament;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Schedule schedule = (Schedule) o;
        return scheduleId == schedule.scheduleId && Objects.equals(tournament, schedule.tournament) && Objects.equals(team, schedule.team);
    }

    @Override
    public int hashCode() {
        return Objects.hash(scheduleId, tournament, team);
    }
}
