<template>
  <div>
    <hr/>
    <h3>Add team</h3>

    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Team name" v-model="formTeam.teamName"/>
      <input type="number" placeholder="User id" v-model="formTeam.user.userId"/>
      <button type="submit">Confirm</button>
    </form>


  </div>

</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      formTeam: {
        teamName: '',
        user: {
          userId: ''
        }
      }
    }
  },

  methods: {
    onSubmit() {

      axios.post('http://localhost:8080/api/teams', this.formTeam)
          .then(response => console.log(response))
          .catch(error => console.log(error))

      this.$emit('add-team-to-page', this.formTeam)

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