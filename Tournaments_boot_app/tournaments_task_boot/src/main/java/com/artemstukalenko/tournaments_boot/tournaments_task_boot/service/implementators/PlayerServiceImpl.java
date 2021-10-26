package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.implementators;


import com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories.PlayerRepository;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories.TeamPlayerRepository;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.PlayerService;
import entity.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private TeamPlayerRepository teamPlayerRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Player findPlayerById(int playerId) {
        Optional<Player> foundPlayer = playerRepository.findById(playerId);
        return Optional.ofNullable(foundPlayer).get().orElse(new Player());
    }

    @Override
    public boolean addOrUpdate(Player playerToAdd) {
        playerRepository.save(playerToAdd);
        return true;
    }

    @Override
    public boolean deletePlayerById(int playerToDeleteId) {
        teamPlayerRepository.deleteTeamPlayerByPlayerId(playerToDeleteId);
        playerRepository.deleteById(playerToDeleteId);
        return true;
    }

    @Override
    public boolean deletePlayersByUserId(int userId) {

        List<Integer> playersWithThisUserId = playerRepository
                .findPlayersIdsByUserId(userId);
        teamPlayerRepository.deleteAllByPlayerId(playersWithThisUserId);
        playerRepository.deleteAllById(playersWithThisUserId);

        return true;
    }
}
