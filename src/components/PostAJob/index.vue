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
        <form class="post-job-form" @submit.prevent="insertJobPost">
          <div>
            <label class="semi-bold-font">Choose position of candidate</label>
          </div>
          <select @change="changePosition">
            <option value="All">Position of candidate</option>

            <optgroup label="Marketing">
              <option value="SEO marketing">SEO</option>
              <option value="SMM marketing">SMM</option>
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

          <div>
            <label>Years of experience</label>
          </div>

          <select @change="updateYearsOfExp">
            <option>Years of experiece</option>
            <option value="0-2">0-2</option>
            <option value="2-3">2-3</option>
            <option value="3-5">3-5</option>
            <option value="5+">5 and more</option>
          </select>

          <div>
            <label class="semi-bold-font">Description</label>
          </div>
          <textarea v-model="description" cols="10" rows="10" />

          <div class="submit-container">
            <input type="submit" class="submit-button" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Post a job",
  data() {
    return {
      position: null,
      yearsOfExp: null,
      description: null
    };
  },
  methods: {
    changePosition(e) {
      this.position = e.target.value;
    },
    insertJobPost() {
      this.$store.dispatch("insertNewJobPost", {
        description: this.description,
        position: this.position,
        yearsOfExp: this.yearsOfExp
      });
    },
    updateYearsOfExp(e) {
      this.yearsOfExp = e.target.value;
      console.log(this.yearsOfExp);
    }
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
  cursor: pointer;
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

.submit-container {
  display: flex;
  justify-content: center;
}

.submit-button {
  width: 20%;
  font-weight: 500;
  background: #5ea4a4;
  border: none;
  color: white;
  padding: 0.4rem 0.5rem;
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