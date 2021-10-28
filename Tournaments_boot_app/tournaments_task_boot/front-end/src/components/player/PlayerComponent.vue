<template>
  <li>
    <span>
      {{player.id}}
      {{player.playerName}}
      {{player.user.userId}}
    </span>

    <button class="remove-button"
            v-on:click="$emit('remove-player', player.id)">&times;</button>

  </li>
</template>

<script>

export default {

  props: {
    player: {
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