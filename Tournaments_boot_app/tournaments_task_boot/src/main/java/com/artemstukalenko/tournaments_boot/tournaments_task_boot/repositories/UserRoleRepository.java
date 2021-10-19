package com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories;

import entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {

}
