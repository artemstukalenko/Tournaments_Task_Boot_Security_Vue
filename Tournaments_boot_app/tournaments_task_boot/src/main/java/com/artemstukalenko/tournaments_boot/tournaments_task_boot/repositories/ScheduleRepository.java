package com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.schedule.Schedule;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScheduleRepository extends MongoRepository<Schedule, String> {

    @Modifying
    @Query(value = "{'team.teamId' : ?0}", delete = true)
    void deleteScheduleByTeamId(Integer teamId);

    @Modifying
    @Query(value = "{'tournament.tournamentId' : ?0}", delete = true)
    void deleteScheduleByTournamentId(Integer teamId);

    @Query(value = "{'tournament.tournamentId' : ?0}")
    Schedule findScheduleByTournamentId(Integer tournamentId);

    @Query(value = "{'team.teamId' : ?0}")
    Schedule findScheduleByTeamId(Integer teamId);
}
