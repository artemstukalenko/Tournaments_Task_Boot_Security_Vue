package com.artemstukalenko.tournaments_boot.tournaments_task_boot.security.config;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import java.util.stream.Collectors;

@Configuration
@EnableWebSecurity
public class TournamentSecurityConfig extends WebSecurityConfigurerAdapter {

    private static final String LOGIN_PAGE_URL = "/login";

    @Autowired
    private UserRoleService roleService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .anyRequest().hasAnyRole(roleService.getAllRoleNames())
                .and()
                .formLogin().loginPage(LOGIN_PAGE_URL)
                .permitAll();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        super.configure(auth);
    }
}
