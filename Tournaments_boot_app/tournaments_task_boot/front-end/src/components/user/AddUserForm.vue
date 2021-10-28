<template>
  <div>
    <hr/>
    <h3>Add user</h3>

    <form @submit.prevent="onSubmit">
      <input type="number" name="roleId" id="roleId" placeholder="User role id" v-model="formUser.userId"/><br/>
      <input type="text" placeholder="User name" v-model="formUser.name"/><br/>
      <input type="text" placeholder="Username" v-model="formUser.username"/><br/>
      <input type="password" placeholder="Password" v-model="formUser.password"/><br/>
      <button type="submit">Confirm</button>
    </form>


  </div>

</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      formUser: {
        userId: '',
        name: '',
        username: '',
        password: '',
      }
    }
  },

  methods: {
    onSubmit() {

      axios.post('http://localhost:8080/api/users', this.formUser)
          .then(response => console.log(response))
          .catch(error => console.log(error))

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