<template>
  <div id="job-details">
    <div id="job-details-container">
      <div class="back-section">
        <router-link to="/">
          <button>
            <i class="fas fa-arrow-left"></i> Back
          </button>
        </router-link>
      </div>
      <h3>{{ jobDetails.position }}</h3>
      <div>
        <h4 class="company-name">{{ jobDetails.company }}</h4>
      </div>
      <div class="tag-holder">
        <span v-for="tag in jobDetails.tags" class="tag" :key="tag">#{{ tag }}</span>
      </div>
      <p class="job-description">{{ jobDetails.description }}</p>
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
  padding-top: 0.2rem;
}
#job-details-container h3,
#job-details-container h4,
#job-details-container div {
  margin-top: 0.8rem;
}

#job-details-container h3 {
  color: #5ea4a4;
}
#job-details-container p {
  margin-top: 1rem;
}
#job-details-container .back-section {
  margin-top: 0.4rem;
}
.back-section button {
  padding: 0.5rem 1.5rem;
  background-color: #5ea4a4;
  border: none;
  color: #f0fafb;
  font-family: "poppins", serif;
  font-weight: 600;
}
.company-name {
  color: #555555;
}
#job-details-container .tag-holder {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
}
.tag {
  padding: 0.2rem 0.5rem;
  background-color: #5ea4a4;
  color: #222;
  margin-right: 1rem;
}

.tag:first-child {
  margin: 0;
  margin-right: 1rem;
}
.job-description {
  color: #111111;
}
@media only screen and (max-width: 950px) {
  #job-details {
    padding: 1rem 1rem;
  }
}
@media only screen and (max-width: 450px) {
  .tag {
    margin-bottom: 1rem;
  }
  .tag:first-child {
    margin-bottom: 1rem;
    margin-left: 0;
  }
}
</style>