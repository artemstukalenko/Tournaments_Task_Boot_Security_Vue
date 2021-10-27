<template>
  <div>
    <ul>
        <RoleComponent
            v-for="role of rolesList"
            v-bind:role="role"
            v-on:remove-role="removeRole"
        />
    </ul>
  </div>
</template>



<script>

import RoleComponent from "@/components/role/RoleComponent";

export default {

  props:[
      'rolesList'
  ],
  components: {
    RoleComponent
  },
  methods: {
    removeRole(id) {
      this.$emit('remove-role', id)
    }
  }
}

</script>