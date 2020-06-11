<template>
  <div>
    <form>
      <div class="inline-block relative w-full mt-2">
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          @change="handleSearchTermChange"
        >
          <option value="All">Select category</option>

          <optgroup label="Marketing">
            <option value="SEO marketing">SEO</option>
            <option value="SMM marketing">Social media marketing</option>
          </optgroup>

          <optgroup label="Design">
            <option value="Graphoc design">Graphic</option>
            <option value="Web design">Web design</option>
          </optgroup>

          <optgroup label="Programming">
            <option value="Frontend">Frontend developer</option>
            <option value="Backend">Backend developer developer</option>
            <option value="Fullstack">Full stack</option>
          </optgroup>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputSearchTerm: ""
    };
  },
  computed: {
    searchTerm() {
      return this.$store.state.searchTerm;
    }
  },
  methods: {
    handleSearchTermChange(e) {
      this.inputSearchTerm = e.target.value;
      this.$store.dispatch("searchJobs", e.target.value);
    }
  }
};
</script>

<style scoped>
</style>