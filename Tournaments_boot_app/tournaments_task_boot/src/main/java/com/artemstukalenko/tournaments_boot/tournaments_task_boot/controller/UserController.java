package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;


import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserRoleService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserService;
import entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRoleService userRoleService;

    @GetMapping("/users")
    public List<User> getAllUsers(Model model) {

//        model.addAttribute("allUsers", userService.getAllUsers());

        return userService.getAllUsers();
    }

//    @RequestMapping("/addUser")
//    public String getAddUserForm(Model model) {
//
//        model.addAttribute("user", new User());
//        model.addAttribute("availableRoles", userRoleService.getAllUserRoles());
//
//        return "user-form.html";
//    }

    @PostMapping("/users")
    public User commitUser(@RequestBody User user) {

        final int roleId = user.getUserRole().getRoleId();

        user.setUserRole(userRoleService.findRoleById(roleId));

        userService.addOrUpdate(user);

        return user;
    }

    @DeleteMapping("/users/{id}")
    public boolean deleteUser(@PathVariable("id") int idToDelete) {

        return userService.deleteUserById(idToDelete);
    }

//    @RequestMapping("/updateUser/{id}")
//    public String getFormToUpdateUser(@PathVariable("id") int idToUpdate, Model model) {
//
//        model.addAttribute("user", userService.findUserById(idToUpdate));
//        model.addAttribute("availableRoles", userRoleService.getAllUserRoles());
//
//        return "user-form.html";
//    }
}
