<template>
  <li>
    <span>
      {{teamplayer.teamPlayerId}}
      {{teamplayer.team.teamId}}
      {{teamplayer.player.id}}
    </span>

    <button class="remove-button"
            v-on:click="$emit('remove-teamplayer', teamplayer.teamPlayerId)">&times;</button>

  </li>
</template>

<script>

export default {

  props: {
    teamplayer: {
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