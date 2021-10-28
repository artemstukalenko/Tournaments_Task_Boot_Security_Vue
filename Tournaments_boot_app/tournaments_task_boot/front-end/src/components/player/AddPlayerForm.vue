<template>
  <div>
    <hr/>
    <h3>Add player</h3>

    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Player name" v-model="formPlayer.playerName"/>
      <input type="number" placeholder="User id" v-model="formPlayer.user.userId"/>
      <button type="submit">Confirm</button>
    </form>


  </div>

</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      formPlayer: {
        playerName: '',
        user: {
          userId: ''
        }
      }
    }
  },

  methods: {
    onSubmit() {

      axios.post('http://localhost:8080/api/players', this.formPlayer)
          .then(response => console.log(response))
          .catch(error => console.log(error))

      this.$emit('add-player-to-page', this.formPlayer)

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