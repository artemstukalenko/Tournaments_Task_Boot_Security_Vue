/*
package com.artemstukalenko.tournaments_boot.tournaments_task_boot.security;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories.UserRepository;
import entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserSecurityService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public UserSecurityService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User foundUser = userRepository.findByUsername(s);

        if (foundUser == null) {
            throw new UsernameNotFoundException("There are no user with username: " + s);
        } else {
            return new TournamentUserDetails(foundUser);
        }
    }
}
*/
