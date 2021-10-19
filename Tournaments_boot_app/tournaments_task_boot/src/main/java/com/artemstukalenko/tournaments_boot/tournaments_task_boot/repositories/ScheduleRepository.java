package com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories;

import entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {

    @Modifying
    @Query(value = "delete from schedules where team_id = :value", nativeQuery = true)
    void deleteScheduleByTeamId(@Param("value") Integer teamId);

    @Modifying
    @Query(value = "delete from schedules where tournament_id = :value", nativeQuery = true)
    void deleteScheduleByTournamentId(@Param("value") Integer teamId);
}
