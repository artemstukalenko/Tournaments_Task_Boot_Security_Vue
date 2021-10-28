<template>
  <div>
    <h2>TEAMPLAYERS</h2>

    <AddTeamplayerForm
        @add-teamplayer-to-page="addTeamplayerToPage"
    />

    <hr/>

    <TeamplayerList
        v-bind:teamplayersList="teamplayers"
        @remove-teamplayer="removeTeamplayer"
    />
  </div>

</template>

<script>

import TeamplayerComponent from "@/components/teamplayers/TeamplayerComponent";
import TeamplayerList from "@/components/teamplayers/TeamplayerList";
import AddTeamplayerForm from "@/components/teamplayers/AddTeamplayerForm";

export default {

  components: {
    TeamplayerList, TeamplayerComponent, AddTeamplayerForm
  },
  data() {
    return {
      teamplayers: []
    }
  },
  methods: {
    removeTeamplayer(id) {
      const requestOptions = {
        method: 'DELETE'
      };

      fetch(('http://localhost:8080/api/teamplayers/' + id), requestOptions)

      this.teamplayers = this.teamplayers.filter(teamplayer => teamplayer.teamPlayerId !== id)
    },
    addTeamplayerToPage(teamplayer) {
      this.teamplayers.push(teamplayer)
    }
  },
  mounted() {
    fetch('http://localhost:8080/api/teamplayers')
        .then(response => response.json())
        .then(json => {
          this.teamplayers = json
        })
  }

}

</script>