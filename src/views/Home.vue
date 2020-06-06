<template>
  <div id="jobs-list-wrapper">
    <div id="jobs-list">
      <search-form />

      <jobs-list />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JobsList from "../components/JobsList/JobsList";
import SearchForm from "../components/SearchForm/index";
export default {
  name: "Home",

  components: {
    JobsList,
    SearchForm
  }
};
</script>

<style scoped>
#jobs-list-wrapper {
  background: #f0fafb;
  min-height: 90vh;
}
#jobs-list {
  max-width: 950px;
  margin: 0 auto;
  padding-bottom: 5rem;
}
@media only screen and (max-width: 600px) {
}
</style>
