package com.artemstukalenko.tournaments_boot.tournaments_task_boot.service;



import com.artemstukalenko.tournaments_boot.tournaments_task_boot.schedule.Schedule;

import java.util.List;

public interface ScheduleService {

    List<Schedule> getAllSchedules();

    Schedule findScheduleById(int scheduleId);

    boolean addOrUpdateSchedule(Schedule scheduleToAdd);

    boolean deleteScheduleById(int scheduleId);

}
