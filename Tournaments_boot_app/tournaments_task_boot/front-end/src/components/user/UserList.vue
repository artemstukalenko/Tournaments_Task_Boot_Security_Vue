<template>
  <div>
    <ul>
      <UserComponent
          v-for="user of userList"
          v-bind:user="user"
          v-on:remove-user="removeUser"
      />
    </ul>
  </div>
</template>



<script>

import UserComponent from "@/components/user/UserComponent";

export default {

  props:[
    'userList'
  ],
  components: {
    UserComponent
  },
  methods: {
    removeUser(id) {
      this.$emit('remove-user', id)
    }
  }
}

</script>