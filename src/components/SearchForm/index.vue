<template>
  <div>
    <form>
      <select id="select-category" @change="handleSearchTermChange">
        <option value="All">Select category</option>
        <option value="Marketing">Marketing</option>
        <option value="Design">Design</option>
        <option value="Programming">Programming</option>
      </select>
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
form {
  width: 100%;
  display: flex;
  align-items: center;
  height: 4rem;
}
#select-category {
  width: 100%;
  height: 2.2rem;
  border: 0.1rem #5ea4a4 solid;
  border-radius: 2px;
  padding: 0 0.2rem;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: black;
}

@media only screen and (max-width: 950px) {
  form {
    padding: 1rem 0.5rem;
  }
}
</style>