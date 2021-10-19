package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service;

import entity.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    boolean addOrUpdateUser(User userToAdd);

    boolean deleteUserById(int userId);

    User findUserById(int userId);

    List<User> findUsersByUserRoleId(int userRoleId);
}
