<template>
  <div>
    <ul>
        <RoleComponent
            v-for="role of rolesList"
            v-bind:role="role"
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
  }
}

</script>