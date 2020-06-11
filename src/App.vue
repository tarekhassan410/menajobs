<template>
  <div id="app">
    <nav id="nav" class="bg-teal-700 shadow-md">
      <page-header />
    </nav>
    <router-view />
    <section
      id="fixed-footer"
    >You are checking an early version of Mena jobs. We are working on releasing it ASAP.</section>
  </div>
</template>

<script>
import PageHeader from "./components/Header/PageHeader";
export default {
  components: {
    PageHeader
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

#fixed-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #5ea4a4;
  color: #f0fafb;
  text-align: center;
  padding: 0.5rem 0.5rem;
}

@media only screen and (max-width: 600px) {
}
</style>
