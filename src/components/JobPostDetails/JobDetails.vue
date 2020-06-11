<template>
  <section class="min-h-screen bg-gray-200 px-2">
    <div class="container m-auto py-5">
      <div>
        <router-link to="/">
          <button class="text-white bg-teal-700 shadow-md py-2 px-4 rounded">
            <i class="fas fa-arrow-left"></i> Back
          </button>
        </router-link>
      </div>
      <div class="flex justify-between mt-5">
        <h3 class="font-bold">{{ jobDetails.position }}</h3>
        <button class="text-white font-bold bg-teal-700 shadow-md font-bold py-2 px-4 rounded">Apply</button>
      </div>
      <div>
        <h4 class="text-gray-900">{{ jobDetails.company }} - {{ jobDetails.location }}</h4>
      </div>
      <div class="mt-2">
        <span v-for="tag in jobDetails.tags" class="tag" :key="tag">#{{ tag }}</span>
      </div>
      <p class="mt-2">{{ jobDetails.description }}</p>
    </div>
  </section>
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