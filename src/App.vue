<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

let year = new Date().getFullYear();
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/performances">Performances</RouterLink>
        <RouterLink to="/store">Store</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <footer>
   {{ year }} Designed and Developed by Samantha Applebaum. 
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: white;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  color: rgba(255,244,229,.8);
  border-left: 1px solid white;
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

nav a:hover {
  color:white;
}

footer {
  background-color: rgba(0, 0, 0, .6);
  margin-top: 20px;
  color: rgba(255,244,229,.8);
  width: 100%;
  padding-left: 20px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
    margin-bottom: 20px;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 25px;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
