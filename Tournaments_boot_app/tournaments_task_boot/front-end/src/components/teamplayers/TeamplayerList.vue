<template>
  <div>
    <ul>
      <TeamplayerComponent
          v-for="teamplayer of teamplayersList"
          v-bind:teamplayer="teamplayer"
          v-on:remove-teamplayer="removeTeamplayer"
      />
    </ul>
  </div>
</template>



<script>

import TeamplayerComponent from "@/components/teamplayers/TeamplayerComponent";

export default {

  props:[
    'teamplayersList'
  ],
  components: {
    TeamplayerComponent,
  },
  methods: {
    removeTeamplayer(id) {
      this.$emit('remove-teamplayer', id)
    }
  }
}

</script>