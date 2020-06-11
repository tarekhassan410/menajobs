<template>
  <div class="bg-white my-5 mx-2 md:mx-2 lg:mx-0 p-5 shadow-lg hover:shadow-xl rounded-lg">
    <div>
      <div>
        <h3>
          <router-link
            class="text-gray-900 text-lg font-bold"
            :to="{ path: 'Job/' + id }"
          >{{ position }}</router-link>
        </h3>
      </div>
      <div>
        <h4 class="text-black">
          {{ company }}
          <span class="text-sm">{{location}}</span>
        </h4>
      </div>
      <div>
        <p>{{yearsOfExperience}} years</p>
      </div>
      <div>
        <!-- <p>{{ (timePosted.seconds | moment(" MMMM Do YYYY")) | duration('humanize') }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "position",
    "tags",
    "company",
    "id",
    "yearsOfExperience",
    "location",
    "timePosted"
  ]
};
</script>