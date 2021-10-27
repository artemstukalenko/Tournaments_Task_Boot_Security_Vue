<template>
  <li>
    <span>
      {{role.roleId}}
      {{role.roleName}}
    </span>

    <button class="remove-button"
            v-on:click="$emit('remove-role', role.roleId)">&times;</button>

  </li>
</template>

<script>

export default {

  props: {
    role: {
      type: Object,
      required: true
    }
  }

}

</script>

<style>

.remove-button {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

</style>