<template>
  <div>
    <h2>ROLES</h2>
    <hr/>

    <router-link to="/">Homepage</router-link>

    <RoleList
    v-bind:rolesList="roles"
    @remove-role="removeRole"
    />

  </div>

</template>

<script>
import RoleList from '@/components/role/RoleList'
import RoleComponent from '@/components/role/RoleComponent'

export default {

  components: {
    RoleList, RoleComponent
  },
  data() {
    return {
      roles: []
    }
  },
  methods: {
    removeRole(id) {
      const requestOptions = {
        method: 'DELETE'
      };

      fetch(('http://localhost:8080/api/roles/' + id), requestOptions)

      this.roles = this.roles.filter(role => role.roleId !== id)
    },
  },
  mounted() {
    fetch('http://localhost:8080/api/roles')
        .then(response => response.json())
        .then(json => {
          this.roles = json
        })
  }

}

</script>