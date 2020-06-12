<template>
  <section class="bg-gray-200">
    <div class="min-h-screen container m-auto bg-white py-5 px-3">
      <div>
        <router-link to="/">
          <button class="text-white bg-teal-700 shadow-md py-2 px-4 rounded">
            <i class="fas fa-arrow-left"></i> Back
          </button>
        </router-link>
      </div>
      <div class="flex justify-between items-center mt-5">
        <h3 class="font-bold text-lg tracking-wide">{{ jobDetails.position }}</h3>
        <button class="text-white font-bold bg-teal-700 shadow-md font-bold py-2 px-4 rounded">Apply</button>
      </div>
      <div>
        <h4
          class="text-gray-900 mt-6"
        >{{ jobDetails.company }} - {{ jobDetails.location }}, {{jobDetails.type}},</h4>
      </div>

      <p class="mt-6 leading-relaxed">{{ jobDetails.description }}</p>
      <div class="mt-6">
        <span v-for="tag in jobDetails.tags" class="mr-3" :key="tag">#{{ tag }}</span>
      </div>
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