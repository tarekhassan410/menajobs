<template>
  <div id="job-details">
    <div id="job-details-container">
      <h2>{{ jobDetails.position }}</h2>
      <h4>{{ jobDetails.company }}</h4>
      <div>
        <span v-for="tag in jobDetails.tags" class="tag" :key="tag">#{{ tag }}</span>
      </div>
      <p>{{ jobDetails.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  data() {
    return {
      jobDetails: []
    };
  },
  created() {
    this.$store.dispatch("getJobDetails", this.$route.params.id).then(() => {
      this.jobDetails = this.$store.getters.getJobDetails;
      console.log("details", this.jobDetails);
    });
  }
};
</script>

<style scoped>
#job-details {
  background: #f0fafb;
  min-height: 90vh;
}
#job-details-container {
  max-width: 950px;
  margin: 0 auto;
  padding-bottom: 5rem;
  padding-top: 2rem;
}
#job-details-container h2,
#job-details-container h4,
#job-details-container div {
  margin-top: 0.2rem;
}

#job-details-container h2 {
  color: #5ea4a4;
}
#job-details-container p {
  margin-top: 1rem;
}
.tag {
  padding-left: 1rem;
  background-color: #f0fafb;
}

.tag:first-child {
  padding: 0;
}
</style>