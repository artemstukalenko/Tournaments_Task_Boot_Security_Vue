<template>
  <div>
    <h2>USERS</h2>

    <AddUserForm/>

    <hr/>

    <UserList
        v-bind:userList="users"
        @remove-user="removeUser"
    />
  </div>

</template>

<script>

import UserList from "@/components/user/UserList";
import UserComponent from "@/components/user/UserComponent";
import AddUserForm from "@/components/user/AddUserForm";

export default {

  components: {
    UserList, UserComponent, AddUserForm
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    removeUser(id) {
      const requestOptions = {
        method: 'DELETE'
      };

      fetch(('http://localhost:8080/api/users/' + id), requestOptions)

      this.users = this.users.filter(user => user.userId !== id)
    },
  },
  mounted() {
    fetch('http://localhost:8080/api/users')
        .then(response => response.json())
        .then(json => {
          this.users = json
        })
  }

}

</script>