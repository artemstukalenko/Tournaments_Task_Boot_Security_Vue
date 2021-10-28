<template>
  <div>
    <hr/>
    <h3>Add schedule</h3>

    <form @submit.prevent="onSubmit">
      <input type="number" placeholder="Team id" v-model="formSchedule.team.teamId"/>
      <input type="number" placeholder="Tournament id" v-model="formSchedule.tournament.tournamentId"/>
      <button type="submit">Confirm</button>
    </form>


  </div>

</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      formSchedule: {
        team: {
          teamId: ''
        },
        tournament: {
          tournamentId: ''
        }
      }
    }
  },

  methods: {
    onSubmit() {

      axios.post('http://localhost:8080/api/schedules', this.formSchedule)
          .then(response => console.log(response))
          .catch(error => console.log(error))

      this.$emit('add-schedule-to-page', this.formSchedule)

    }
  }
}

</script>

<style>
form {
  display: flex;
  justify-content: center;
}

input {
  width: 400px;
}
</style>