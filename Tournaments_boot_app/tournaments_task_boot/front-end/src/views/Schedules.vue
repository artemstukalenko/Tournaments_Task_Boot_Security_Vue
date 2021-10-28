<template>
  <div>
    <h2>SCHEDULES</h2>

    <AddScheduleForm
        @add-schedule-to-page="addScheduleToPage"
    />

    <hr/>

    <ScheduleList
        v-bind:schedulesList="schedules"
        @remove-schedule="removeSchedule"
    />
  </div>

</template>

<script>

import ScheduleComponent from "@/components/schedule/ScheduleComponent";
import ScheduleList from "@/components/schedule/ScheduleList";
import AddScheduleForm from "@/components/schedule/AddScheduleForm";

export default {

  components: {
    ScheduleList, ScheduleComponent, AddScheduleForm
  },
  data() {
    return {
      schedules: []
    }
  },
  methods: {
    removeSchedule(id) {
      const requestOptions = {
        method: 'DELETE'
      };

      fetch(('http://localhost:8080/api/schedules/' + id), requestOptions)

      this.schedules = this.schedules.filter(schedule => schedule.scheduleId !== id)
    },
    addScheduleToPage(schedule) {
      this.schedules.push(schedule)
    }
  },
  mounted() {
    fetch('http://localhost:8080/api/schedules')
        .then(response => response.json())
        .then(json => {
          this.schedules = json
        })
  }

}

</script>