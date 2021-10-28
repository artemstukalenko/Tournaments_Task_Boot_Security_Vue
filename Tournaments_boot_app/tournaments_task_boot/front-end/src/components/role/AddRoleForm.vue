<template>
  <div>
    <hr/>
    <h3>Add role</h3>

    <form @submit.prevent="onSubmit">
      <input type="text" v-model="formRole.roleName"/>
      <button type="submit">Confirm</button>
    </form>


  </div>

</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      formRole: {
        roleName: ''
      }
    }
  },

  methods: {
    onSubmit() {

      axios.post('http://localhost:8080/api/roles', this.formRole)
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