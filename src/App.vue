<template>
  <div id="app">
    <nav id="nav">
      <page-header />

      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </nav>
    <transition name="fade" mode="out-in" v-on:after-enter="afterEnter" appear>
      <router-view />
    </transition>
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
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

#nav {
  width: 100%;
  background: #5ea4a4;
}

#nav a.router-link-exact-active {
  color: #42b983;
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
