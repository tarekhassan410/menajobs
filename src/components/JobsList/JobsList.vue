<template>
  <div>
    <div v-for="position in positionsList" :key="position.id">
      <job-card
        :position="position.position"
        :tags="position.tags"
        :company="position.company"
        :id="position.id"
        :yearsOfExperience="position.yearsOfExperience"
        :location="position.location"
        :timePosted="position.timePosted"
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
    console.log(process.env);
  },
  components: {
    JobCard
  }
};
</script>
