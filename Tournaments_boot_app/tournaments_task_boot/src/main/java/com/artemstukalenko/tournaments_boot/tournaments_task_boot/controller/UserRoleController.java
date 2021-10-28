package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserRoleService;
import entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserRoleController {

    @Autowired
    private UserRoleService userRoleService;

    @GetMapping("/roles")
    public List<UserRole> showRoles(Model model) {
//        model.addAttribute("allRoles", userRoleService.getAllUserRoles());

        return userRoleService.getAllUserRoles();
    }

//    @RequestMapping("/addRole")
//    public String getAddRoleForm(Model model) {
//
//        model.addAttribute("userRole", new UserRole());
//
//        return "add-new-role-form.html";
//    }

    @PostMapping("/roles")
    public UserRole commitRole(@RequestBody UserRole userRole) {
        System.out.println("GONNA COMMIT NEW ROLE:         " + userRole);
        userRoleService.addOrUpdate(userRole);

        return userRole;
    }

    @DeleteMapping("/roles/{id}")
    public boolean deleteRole(@PathVariable("id") int idToDelete) {

        return userRoleService.deleteRoleById(idToDelete);
    }

//    @RequestMapping("/updateRole/{id}")
//    public String getUpdateRoleForm(@PathVariable("id") int idToUpdate, Model model) {
//
//        UserRole roleToUpdate = userRoleService.findRoleById(idToUpdate);
//
//        model.addAttribute("userRole", roleToUpdate);
//
//        return "add-new-role-form.html";
//    }

}
