<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue';
let year = new Date().getFullYear();

let isMobile = ref(false);

const toggleMbNav = () => {
  isMobile.value = !isMobile.value;
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav id="menu" class="menu" :class="{responsive: isMobile}">
        <a class="icon no-border" @click="toggleMbNav">Menu &#9776;</a>
        <RouterLink class="no-border" to="/">Home</RouterLink>
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

.menu {
  width: 100%;
  font-size: 20px;
  text-align: center;
  padding: 1.5rem 0px;
  background: black;
}

.menu a.router-link-exact-active {
  color: white;
}

.menu a.router-link-exact-active:hover {
  background-color: transparent;
}

.menu a {
  padding: 0 1rem;
  color: rgba(255,244,229,.8);
  border-left: 1px solid white;
  text-decoration: none;
}

.menu a.no-border {
  border: 0;
}

.menu a:hover {
  color:white;
}
.menu .icon {
  display:none;
}

footer {
  background-color: rgba(0, 0, 0, .6);
  margin-top: 20px;
  color: rgba(255,244,229,.8);
  width: 100%;
  padding-left: 20px; 
}



@media screen and (max-width: 600px) {
  .menu a, .dropdown .dropbtn {
    display: none;
    border-left:none;
  }
  .menu a.icon {
    display: block;
  }
  .menu.responsive {position: relative;}

  .menu.responsive a {
    float: none;
    display: block;
    text-align: center;
  }
  
}
</style>
