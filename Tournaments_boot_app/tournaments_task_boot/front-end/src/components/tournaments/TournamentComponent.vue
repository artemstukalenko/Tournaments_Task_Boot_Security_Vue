<template>
  <li>
    <span>
      {{tournament.tournamentId}}
      {{tournament.tournamentName}}
      {{tournament.user.userId}}
      {{tournament.venue}}
      {{tournament.startDate}}
      {{tournament.endDate}}
    </span>

    <button class="remove-button"
            v-on:click="$emit('remove-tournament', tournament.tournamentId)">&times;</button>

  </li>
</template>

<script>

export default {

  props: {
    tournament: {
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