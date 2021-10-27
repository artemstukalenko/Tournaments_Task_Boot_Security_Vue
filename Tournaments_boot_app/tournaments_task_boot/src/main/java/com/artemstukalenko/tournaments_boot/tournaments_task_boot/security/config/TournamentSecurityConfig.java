package com.artemstukalenko.tournaments_boot.tournaments_task_boot.security.config;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.security.UserSecurityService;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.UserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class TournamentSecurityConfig extends WebSecurityConfigurerAdapter {

    private static final String LOGIN_PAGE_URL = "/login";
    private static final String LOGIN_PROCESSING_URL = "/login";
    private static final String SUCCESS_FORWARD_URL = "/homepage";

    @Autowired
    private UserRoleService roleService;
    @Autowired
    private UserDetailsService userSecurityService;


    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .anyRequest().hasAnyRole(roleService.getAllRoleNames())
                .and().formLogin()
//                .successForwardUrl(SUCCESS_FORWARD_URL)
                .disable();
//                .successForwardUrl(SUCCESS_FORWARD_URL);
//                .and()
//                .formLogin().loginPage(LOGIN_PAGE_URL).successForwardUrl(SUCCESS_FORWARD_URL)
//                .loginProcessingUrl(LOGIN_PROCESSING_URL)
//                .permitAll();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userSecurityService);
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers(
                "/js/**"
        );
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}
