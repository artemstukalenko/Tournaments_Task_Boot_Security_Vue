<template>
  <div>
    <ul>
      <TournamentComponent
          v-for="tournament of tournamentsList"
          v-bind:tournament="tournament"
          v-on:remove-tournament="removeTournament"
      />
    </ul>
  </div>
</template>



<script>
import TournamentComponent from "@/components/tournaments/TournamentComponent";

export default {

  props:[
    'tournamentsList'
  ],
  components: {
    TournamentComponent
  },
  methods: {
    removeTournament(id) {
      this.$emit('remove-tournament', id)
    }
  }
}

</script>