package com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories;

import entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {

    @Query(value = "select * from players where user_id = :id", nativeQuery = true)
    List<Player> findPlayersByUserId(@Param("id") Integer userId);
}
