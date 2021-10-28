<template>
  <div>
    <ul>
      <ScheduleComponent
          v-for="schedule of schedulesList"
          v-bind:schedule="schedule"
          v-on:remove-schedule="removeSchedule"
      />
    </ul>
  </div>
</template>



<script>

import ScheduleComponent from "@/components/schedule/ScheduleComponent";

export default {

  props:[
    'schedulesList'
  ],
  components: {
    ScheduleComponent,
  },
  methods: {
    removeSchedule(id) {
      this.$emit('remove-schedule', id)
    }
  }
}

</script>