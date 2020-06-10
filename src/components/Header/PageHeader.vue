<template>
  <!-- <img src="../../../src/assets/svg/bg-header-desktop.svg" height="160" /> -->
  <nav class="page-nav">
    <div id="logo-container">
      <router-link to="/">
        <img src="../../../src/assets/img/logo_transparent.png" />
      </router-link>
    </div>
    <ul>
      <li>
        <router-link class="post-job-action" to="/Postjob">Post a job</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PageHeader"
};
</script>

<style scoped>
#logo-container {
  height: 100%;
}
img {
  height: 100px;
}
.page-nav {
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.page-nav ul {
  list-style: none;
}
.page-nav li {
  display: inline;
  margin: 0.5rem;
}

.post-job-action {
  background: #f0fafb;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.page-nav li a {
  text-decoration: none;
  color: #5ea4a4;
  font-weight: bold;
}
@media only screen and (max-width: 950px) {
  .page-nav {
    padding: 1rem 0.5rem;
  }
}
</style>