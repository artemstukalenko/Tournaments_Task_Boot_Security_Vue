<template>
  <li>
    <span>
      {{user.userId}}
      {{user.userRole.roleName}}
      {{user.name}}
      {{user.username}}
    </span>

    <button class="remove-button"
            v-on:click="$emit('remove-user', user.userId)">&times;</button>

  </li>
</template>

<script>

export default {

  props: {
    user: {
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