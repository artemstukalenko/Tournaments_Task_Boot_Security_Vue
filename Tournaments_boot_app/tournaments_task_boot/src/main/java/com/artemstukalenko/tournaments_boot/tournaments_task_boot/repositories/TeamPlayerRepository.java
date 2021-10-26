package com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories;

import entity.TeamPlayer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamPlayerRepository extends JpaRepository<TeamPlayer, Integer> {

    @Modifying
    @Query(value = "delete from team_players where team_id = :value", nativeQuery = true)
    void deleteTeamPlayerByTeamId(@Param("value") Integer teamToDeleteId);

    @Modifying
    @Query(value = "delete from team_players where player_id = :value", nativeQuery = true)
    void deleteTeamPlayerByPlayerId(@Param("value") Integer playerToDeleteId);

    @Modifying
    @Query(value = "delete from team_players where player_id in (:playerIds)", nativeQuery = true)
    void deleteAllByPlayerId(@Param("playerIds") List<Integer> playerIds);

    @Modifying
    @Query(value = "delete from team_players where team_id in (:teamIds)", nativeQuery = true)
    void deleteAllByTeamId(@Param("teamIds") List<Integer> teamIds);
}
