<template>
  <div>
    <hr/>
    <h3>Add teamplayer</h3>

    <form @submit.prevent="onSubmit">
      <input type="number" placeholder="Team id" v-model="formTeamplayer.team.teamId"/>
      <input type="number" placeholder="Player id" v-model="formTeamplayer.player.id"/>
      <button type="submit">Confirm</button>
    </form>


  </div>

</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      formTeamplayer: {
        team: {
          teamId: ''
        },
        player: {
          id: ''
        }
      }
    }
  },

  methods: {
    onSubmit() {

      axios.post('http://localhost:8080/api/teamplayers', this.formTeamplayer)
          .then(response => console.log(response))
          .catch(error => console.log(error))

      this.$emit('add-teamplayer-to-page', this.formTeamplayer)

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