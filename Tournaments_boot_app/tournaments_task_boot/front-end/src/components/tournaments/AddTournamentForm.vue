<template>
  <div>
    <hr/>
    <h3>Add tournament</h3>

    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Tournament name" v-model="formTournament.tournamentName"/>
      <input type="number" placeholder="User id" v-model="formTournament.user.userId"/>
      <input type="text" placeholder="Venue" v-model="formTournament.venue"/>
      <input type="date" placeholder="Start date" v-model="formTournament.startDate"/>
      <input type="date" placeholder="End date" v-model="formTournament.endDate"/>
      <button type="submit">Confirm</button>
    </form>


  </div>

</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      formTournament: {
        tournamentName: '',
        user: {
          userId: ''
        },
        venue: '',
        startDate: '',
        endDate: '',
      }
    }
  },

  methods: {
    onSubmit() {

      axios.post('http://localhost:8080/api/tournaments', this.formTournament)
          .then(response => console.log(response))
          .then(response => console.log(this.formTournament))
          .catch(error => console.log(error))

      this.$emit('add-tournament-to-page', this.formTournament)

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