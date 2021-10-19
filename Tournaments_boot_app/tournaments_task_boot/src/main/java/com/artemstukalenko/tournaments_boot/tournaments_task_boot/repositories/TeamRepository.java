package com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories;

import entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {

    @Query(value = "select * from teams where user_id = :id", nativeQuery = true)
    List<Team> findTeamsByUserId(@Param("id") Integer userId);
}
