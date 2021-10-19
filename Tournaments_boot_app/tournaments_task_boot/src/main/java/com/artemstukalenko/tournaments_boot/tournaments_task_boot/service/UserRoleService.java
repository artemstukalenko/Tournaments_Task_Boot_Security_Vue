package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service;

import entity.UserRole;

import java.util.List;

public interface UserRoleService {

    public List<UserRole> getAllUserRoles();

    UserRole findRoleById(int roleId);

    boolean addOrUpdateRole(UserRole roleToAdd);

    boolean deleteRoleById(int roleId);
}
