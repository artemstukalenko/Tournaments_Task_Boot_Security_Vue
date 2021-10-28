<template>
  <div>
    <h2>ROLES</h2>
    <hr/>

    <a v-bind:href="/addRole/">Add new Role</a>

    <RoleList
    v-bind:rolesList="roles"
    @remove-role="removeRole"
    />

<!--    <AddRoleForm/>-->
  </div>

</template>

<script>
import RoleList from '@/components/role/RoleList'
import RoleComponent from '@/components/role/RoleComponent'
import AddRoleForm from "@/components/role/AddRoleForm";

export default {

  components: {
    RoleList, RoleComponent, AddRoleForm
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