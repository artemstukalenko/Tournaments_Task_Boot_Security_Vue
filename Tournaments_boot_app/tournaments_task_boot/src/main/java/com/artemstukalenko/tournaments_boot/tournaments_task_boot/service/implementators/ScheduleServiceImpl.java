package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.implementators;

import com.artemstukalenko.tournaments_boot.tournaments_task_boot.repositories.ScheduleRepository;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.schedule.Schedule;
import com.artemstukalenko.tournaments_boot.tournaments_task_boot.service.ScheduleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Schedule findScheduleById(String scheduleId) {
        Optional<Schedule> foundSchedule = scheduleRepository.findById(scheduleId);
        return Optional.ofNullable(foundSchedule).get().orElse(new Schedule());
    }

    @Override
    public boolean addOrUpdateSchedule(Schedule scheduleToAdd) {
        System.out.println("THIS SCHEDULE EXISTS:          " + scheduleRepository.equals(scheduleToAdd));
        scheduleRepository.save(scheduleToAdd);
        return true;
    }

    @Override
    public boolean deleteScheduleById(String scheduleId) {
        System.out.println("ID      " + scheduleId);
        System.out.println("SCHEDULE WITH THIS ID     " + findScheduleById(scheduleId));
        scheduleRepository.deleteById(scheduleId);
        return true;
    }
}
