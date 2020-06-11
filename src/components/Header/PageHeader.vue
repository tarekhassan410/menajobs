<template>
  <nav class="container h-16 px-2 m-0 m-auto">
    <ul class="flex h-full justify-between items-center">
      <li>
        <router-link class="text-white font-bold rounded" to="/">Mena jobs</router-link>
      </li>
      <li>
        <router-link
          class="bg-white text-teal-700 shadow-md font-bold py-2 px-4 rounded"
          to="/Postjob"
        >+ New job</router-link>
      </li>
    </ul>
  </nav>
  <!-- <router-link class="post-job-action" to="/Postjob">Post a job</router-link> -->
</template>



<script>
export default {
  name: "PageHeader"
};
</script>
