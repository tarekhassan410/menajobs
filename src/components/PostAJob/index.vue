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
      <div>
        <form @submit.prevent="insertJobPost">
          <div class="mt-6">
            <label>Choose position of candidate</label>
          </div>
          <div class="inline-block relative w-50">
            <select
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              @change="changePosition"
            >
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
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>

          <div class="mt-2">
            <label>Years of experience</label>
          </div>

          <div class="inline-block relative w-50">
            <select
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              @change="updateYearsOfExp"
            >
              <option>Years of experiece</option>
              <option value="0-2">0-2</option>
              <option value="2-3">2-3</option>
              <option value="3-5">3-5</option>
              <option value="5+">5 and more</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
          <div class="mt-2">
            <label>Description</label>
          </div>
          <textarea
            class="w-full h-40 border rounded focus:outline-none focus:shadow-outline"
            v-model="description"
          ></textarea>

          <div class="w-100 mt-2">
            <button type="submit" class="text-white bg-teal-700 shadow-md py-2 px-4 rounded">Add</button>
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
