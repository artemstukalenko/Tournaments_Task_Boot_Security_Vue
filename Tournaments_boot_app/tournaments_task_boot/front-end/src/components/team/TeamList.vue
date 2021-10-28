<template>
  <div>
    <ul>
      <TeamComponent
          v-for="team of teamsList"
          v-bind:team="team"
          v-on:remove-team="removeTeam"
      />
    </ul>
  </div>
</template>



<script>
import TeamComponent from "@/components/team/TeamComponent";

export default {

  props:[
    'teamsList'
  ],
  components: {
    TeamComponent
  },
  methods: {
    removeTeam(id) {
      this.$emit('remove-team', id)
    }
  }
}

</script>