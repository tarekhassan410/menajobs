<template>
  <div class>
    <div class="bg-white py-2">
      <div>
        <h3>
          <router-link class="text-gray-900 font-bold" :to="{ path: 'Job/' + id }">{{ position }}</router-link>
        </h3>
      </div>
      <div>
        <h4 class="text-gray-900">
          {{ company }}
          <span class="text-sm">{{location}}</span>
        </h4>
      </div>
      <div>
        <p>{{yearsOfExperience}} years of experience</p>
      </div>
      <div>
        <!-- <p>{{ (timePosted.seconds | moment(" MMMM Do YYYY")) | duration('humanize') }}</p> -->
      </div>
    </div>
    <hr />
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