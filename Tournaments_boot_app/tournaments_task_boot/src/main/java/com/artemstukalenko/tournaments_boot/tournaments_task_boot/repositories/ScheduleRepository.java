package com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories;


//import org.springframework.data.jpa.repository.JpaRepository;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.schedule.Schedule;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ScheduleRepository extends MongoRepository<Schedule, String> {

    @Modifying
    @Query(value = "{'team_Id' : ?0}", delete = true)
    void deleteScheduleByTeamId(Integer teamId);

    @Modifying
    @Query(value = "{'tournament_id' : ?0}", delete = true)
    void deleteScheduleByTournamentId(Integer teamId);
}
