<template>
  <section id="post-job-main-container">
    <div id="wrapper">
      <div class="back-section">
        <router-link to="/">
          <button>
            <i class="fas fa-arrow-left"></i> Back
          </button>
        </router-link>
      </div>
      <div class="post-job-form-container">
        <form class="post-job-form">
          <div>
            <label class="semi-bold-font">Choose position of candidate</label>
          </div>

          <select>
            <option value="All">select</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Programming">Programming</option>
          </select>

          <div>
            <label class="semi-bold-font">Description</label>
          </div>

          <textarea cols="10" rows="10" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Post a job",
  data() {
    return {};
  }
};
</script>

<style scoped>
#post-job-main-container {
  background: #f0fafb;
  min-height: 90vh;
}
#wrapper {
  max-width: 950px;
  margin: 0 auto;
  padding-bottom: 5rem;
}
.semi-bold-font {
  font-weight: 500;
}
.back-section {
  padding-top: 0.6rem;
}
.back-section button {
  padding: 0.5rem 1.5rem;
  background-color: #5ea4a4;
  border: none;
  color: #f0fafb;
  font-family: "poppins", serif;
  font-weight: 600;
}
.post-job-form-container {
  margin-top: 1rem;
}
.post-job-form-container div {
  margin-top: 0.5rem;
}
.post-job-form-container select {
  width: 100%;
  padding: 0.2rem;
  font-family: "poppins", serif;
}
.post-job-form-container textarea {
  width: 100%;
  padding: 0.2rem;
}
@media only screen and (max-width: 1024px) {
  #post-job-main-container {
    padding: 0.2rem 1rem 0rem 1rem;
  }
  .back-section button {
    padding: 0.5rem 1rem;
  }
}
</style>