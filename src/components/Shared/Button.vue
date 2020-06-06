<template>
  <button class="search-tag" :value="tag" @click="searchJobs">{{tag}}</button>
</template>

<script>
export default {
  props: ["tag"],
  methods: {
    searchJobs(event) {
      this.$store.dispatch("searchJobs", event.target.value);
      this.$store.dispatch("updateSearchTerm", event.target.value);
    }
  },
  created() {}
};
</script>

<style scoped>
.search-tag {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #5ea4a4;
  border: none;
  color: white;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  font-weight: bold;
}
@media only screen and (max-width: 950px) {
  .search-tag {
    font-size: 0.75rem;
    margin: 0.2rem 0.5rem;
  }
}
</style>