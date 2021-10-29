<template>
  <div>
    <h2>HOMEPAGE</h2>
    <hr/>

    <Login
    />

    <hr/>

    <router-link to="/roles">Work with roles</router-link><hr/>
    <router-link to="/users">Work with users</router-link><hr/>
    <router-link to="/players">Work with players</router-link><hr/>
    <router-link to="/teams">Work with teams</router-link><hr/>
    <router-link to="/teamplayers">Work with teamplayers</router-link><hr/>
    <router-link to="/tournaments">Work with tournaments</router-link><hr/>
    <router-link to="/schedules">Work with schedules</router-link>

  </div>

</template>

<script>

import Login from "@/views/Login";

export default {
  components: {
    Login
  }
}

</script>