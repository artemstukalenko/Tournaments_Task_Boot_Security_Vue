package com.artemstukalenko.tournaments_boot.tournaments_task_boot.security.config;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.controller.authenticate.AuthenticationFilter;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.security.handlers.AuthenticationFailureHandler;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.security.handlers.AuthenticationSuccessHandler;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.security.handlers.LogoutSuccessHandler;
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
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class TournamentSecurityConfig extends WebSecurityConfigurerAdapter {

    private static final String LOGIN_PAGE_URL = "/";
    private static final String LOGIN_PROCESSING_URL = "/login";
    private static final String SUCCESS_FORWARD_URL = "/homepage";
    private static final String AUTHENTICATION_URL = "http://localhost:8080/api/authenticate";

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
                .antMatchers(AUTHENTICATION_URL, LOGIN_PAGE_URL).permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilterAt(authenticationFilter(), UsernamePasswordAuthenticationFilter.class)
                .formLogin()
                .loginPage(LOGIN_PAGE_URL)
                .loginProcessingUrl(LOGIN_PAGE_URL)
                .successForwardUrl(SUCCESS_FORWARD_URL);
//                .and()
//                .formLogin().loginPage(LOGIN_PAGE_URL).successForwardUrl(SUCCESS_FORWARD_URL)
//                .loginProcessingUrl(LOGIN_PROCESSING_URL)
//                .permitAll();
    }

    @Bean
    public AuthenticationFilter authenticationFilter() throws Exception {
        AuthenticationFilter authenticationFilter = new
                AuthenticationFilter();
        authenticationFilter.setAuthenticationSuccessHandler(authenticationSuccessHandler());
        authenticationFilter.setAuthenticationFailureHandler(authenticationFailureHandler());
        authenticationFilter.setAuthenticationManager(authenticationManagerBean());
        return authenticationFilter;
    }

    @Bean
    public org.springframework.security.web.authentication.AuthenticationSuccessHandler authenticationSuccessHandler() {
        return new AuthenticationSuccessHandler();
    }

    @Bean
    public org.springframework.security.web.authentication.AuthenticationFailureHandler authenticationFailureHandler() {
        return new AuthenticationFailureHandler();
    }

    @Bean
    public org.springframework.security.web.authentication.logout.LogoutSuccessHandler logoutSuccessHandler() {
        return new LogoutSuccessHandler();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userSecurityService);
    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring().antMatchers("/static/**", "/js/**", "/css/**", "/images/**", "/favicon.ico");
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}
