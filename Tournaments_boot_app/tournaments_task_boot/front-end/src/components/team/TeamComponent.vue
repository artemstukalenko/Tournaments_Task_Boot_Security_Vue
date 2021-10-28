<template>
  <li>
    <span>
      {{team.teamId}}
      {{team.teamName}}
      {{team.user.userId}}
    </span>

    <button class="remove-button"
            v-on:click="$emit('remove-team', team.teamId)">&times;</button>

  </li>
</template>

<script>

export default {

  props: {
    team: {
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