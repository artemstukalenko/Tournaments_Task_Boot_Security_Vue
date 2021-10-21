package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.implementators;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories.UserRoleRepository;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserRoleService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserService;
import entity.User;
import entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserRoleServiceImpl implements UserRoleService {

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Autowired
    private UserService userService;

    @Override
    @Transactional(readOnly = true)
    public List<UserRole> getAllUserRoles() {
        return userRoleRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public UserRole findRoleById(int roleId) {
        Optional<UserRole> foundRole = userRoleRepository.findById(roleId);
        return Optional.ofNullable(foundRole).get().orElse(new UserRole());
    }

    @Override
    public boolean addOrUpdate(UserRole roleToAdd) {
        userRoleRepository.save(roleToAdd);
        return true;
    }

    @Override
    public boolean deleteRoleById(int roleId) {

        List<User> usersWithThatRole = userService.findUsersByUserRoleId(roleId);

        for (User user : usersWithThatRole) {
            userService.deleteUserById(user.getUserId());
        }

        userRoleRepository.deleteById(roleId);
        return true;
    }

}
