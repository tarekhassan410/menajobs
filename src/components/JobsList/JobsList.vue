<template>
  <div id="jobs-list-container">
    <div v-for="position in positionsList" :key="position.id">
      <job-card
        :position="position.position"
        :tags="position.tags"
        :company="position.company"
        :id="position.id"
      />
    </div>
  </div>
</template>

<script>
import JobCard from "./JobCard";
export default {
  data() {
    return {
      positions: []
    };
  },
  computed: {
    positionsList() {
      return this.$store.state.jobsList;
    }
  },
  created() {
    this.$store.dispatch("loadJobsList");
  },
  components: {
    JobCard
  }
};
</script>

<style scoped>
</style>