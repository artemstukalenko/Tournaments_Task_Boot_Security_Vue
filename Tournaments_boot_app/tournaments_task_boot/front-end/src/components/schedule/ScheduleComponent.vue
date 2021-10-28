<template>
  <li>
    <span>
      {{schedule.scheduleId}}
      {{schedule.team.teamId}}
      {{schedule.tournament.tournamentId}}
    </span>

    <button class="remove-button"
            v-on:click="$emit('remove-schedule', schedule.scheduleId)">&times;</button>

  </li>
</template>

<script>

export default {

  props: {
    schedule: {
      type: Object,
      required: true
    }
  }

}

</script>

<style>

.remove-button {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

</style>