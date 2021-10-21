package com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserRoleService;
import entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/roles")
public class UserRoleController {

    @Autowired
    private UserRoleService userRoleService;

    @RequestMapping("/")
    public String showRoles(Model model) {
        model.addAttribute("allRoles", userRoleService.getAllUserRoles());

        return "roles-page.html";
    }

    @RequestMapping("/addRole")
    public String getAddRoleForm(Model model) {

        model.addAttribute("userRole", new UserRole());

        return "add-new-role-form.html";
    }

    @PostMapping("/commitRole")
    public String commitRole(UserRole userRole) {

        userRoleService.addOrUpdate(userRole);

        return "forward:/roles/";
    }

    @RequestMapping("/deleteRole/{id}")
    public String deleteRole(@PathVariable("id") int idToDelete) {

        userRoleService.deleteRoleById(idToDelete);

        return "forward:/roles/";
    }

    @RequestMapping("/updateRole/{id}")
    public String getUpdateRoleForm(@PathVariable("id") int idToUpdate, Model model) {

        UserRole roleToUpdate = userRoleService.findRoleById(idToUpdate);

        model.addAttribute("userRole", roleToUpdate);
//        System.out.println("ROLE:      " + model.getAttribute("userRole"));

        return "add-new-role-form.html";
    }

}
