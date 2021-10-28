<template>
  <div>
    <h2>PLAYERS</h2>

    <AddPlayerForm
        @add-player-to-page="addPlayerToPage"
    />

    <hr/>

    <PlayerList
        v-bind:playersList="players"
        @remove-player="removePlayer"
    />
  </div>

</template>

<script>

import PlayerComponent from "@/components/player/PlayerComponent";
import PlayerList from "@/components/player/PlayerList";
import AddPlayerForm from "@/components/player/AddPlayerForm";

export default {

  components: {
    PlayerList, PlayerComponent, AddPlayerForm
  },
  data() {
    return {
      players: []
    }
  },
  methods: {
    removePlayer(id) {
      const requestOptions = {
        method: 'DELETE'
      };

      fetch(('http://localhost:8080/api/players/' + id), requestOptions)

      this.players = this.players.filter(player => player.id !== id)
    },
    addPlayerToPage(player) {
      this.players.push(player)
    }
  },
  mounted() {
    fetch('http://localhost:8080/api/players')
        .then(response => response.json())
        .then(json => {
          this.players = json
        })
  }

}

</script>