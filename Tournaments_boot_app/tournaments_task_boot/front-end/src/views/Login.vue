<template>
  <div>

    <form @submit.prevent="submitForm">

      <input type="text" placeholder="Username" v-model="formLogin.username"/> <br/>
      <input type="password" placeholder="Password" v-model="formLogin.password"/> <br/>
      <input type="submit" value="Login"/>

    </form>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      formLogin: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    submitForm() {
      axios.post('http://localhost:8080/api/authenticate', this.formLogin)
      .then(response => console.log(response))
      .then(error => console.log(error))
    }
  }
}

</script>