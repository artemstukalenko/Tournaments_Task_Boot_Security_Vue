<template>
  <div>
    <ul>
      <PlayerComponent
          v-for="player of playersList"
          v-bind:player="player"
          v-on:remove-player="removePlayer"
      />
    </ul>
  </div>
</template>



<script>
import PlayerComponent from "@/components/player/PlayerComponent";

export default {

  props:[
    'playersList'
  ],
  components: {
    PlayerComponent
  },
  methods: {
    removePlayer(id) {
      this.$emit('remove-player', id)
    }
  }
}

</script>