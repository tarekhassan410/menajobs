<template>
  <div id="jobs-list-wrapper" class="bg-gray-200">
    <div class="container m-0 m-auto px-3 bg-white">
      <section class="text-lg pt-2">Jobs curated for designers, marketers and developers.</section>
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
  min-height: 90vh;
}
</style>
