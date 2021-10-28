<template>
  <div>
    <h2>TEAMS</h2>

    <AddTeamForm
        @add-team-to-page="addTeamToPage"
    />

    <hr/>

    <TeamList
        v-bind:teamsList="teams"
        @remove-team="removeTeam"
    />
  </div>

</template>

<script>

import TeamComponent from "@/components/team/TeamComponent";
import TeamList from "@/components/team/TeamList";
import AddTeamForm from "@/components/team/AddTeamForm";

export default {

  components: {
    TeamList, TeamComponent, AddTeamForm
  },
  data() {
    return {
      teams: []
    }
  },
  methods: {
    removeTeam(id) {
      const requestOptions = {
        method: 'DELETE'
      };

      fetch(('http://localhost:8080/api/teams/' + id), requestOptions)

      this.teams = this.teams.filter(team => team.teamId !== id)
    },
    addTeamToPage(team) {
      this.teams.push(team)
    }
  },
  mounted() {
    fetch('http://localhost:8080/api/teams')
        .then(response => response.json())
        .then(json => {
          this.teams = json
        })
  }

}

</script>