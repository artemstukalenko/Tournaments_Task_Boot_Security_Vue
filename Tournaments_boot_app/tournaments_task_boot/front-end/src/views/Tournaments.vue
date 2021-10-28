<template>
  <div>
    <h2>TOURNAMENTS</h2>

    <AddTournamentForm
        @add-tournament-to-page="addTournamentToPage"
    />

    <hr/>

    <TournamentList
        v-bind:tournamentsList="tournaments"
        @remove-tournament="removeTournament"
    />
  </div>

</template>

<script>

import TournamentComponent from "@/components/tournaments/TournamentComponent";
import TournamentList from "@/components/tournaments/TournamentList";
import AddTournamentForm from "@/components/tournaments/AddTournamentForm";

export default {

  components: {
    TournamentList, TournamentComponent, AddTournamentForm
  },
  data() {
    return {
      tournaments: []
    }
  },
  methods: {
    removeTournament(id) {
      const requestOptions = {
        method: 'DELETE'
      };

      fetch(('http://localhost:8080/api/tournaments/' + id), requestOptions)

      this.tournaments = this.tournaments.filter(tournament => tournament.tournamentId !== id)
    },
    addTournamentToPage(tournament) {
      this.tournaments.push(tournament)
    }
  },
  mounted() {
    fetch('http://localhost:8080/api/tournaments')
        .then(response => response.json())
        .then(json => {
          this.tournaments = json
        })
  }

}

</script>