<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="about section">
    <h2>From Rancho Cucamonga California,</h2>
    <h1> The Lee Sisters - Lise and Emi Lee!</h1>
    <img class="img-fluid" src="../assets/img/IMG_2407.JPG">

    <p>The Lee Sisters are proud to be sponsored by Ohana Ukuleles, Kanile’a, and Islander Ukulele.
      Sisters in real life, Emi and Lise (LEE-SEE) have been performing throughout California and Hawaii since 2015.</p>

    <p>The Lee Sisters’ debut EP album, “Uke Shoes,” is on all streaming platforms and available for purchase on this
      website. (See the <RouterLink to="/store">Store</RouterLink>) They are also featured artists on Sandwich Islands Network Radio’s “California 808” and “Mele
      Cali-Kimaka” albums.</p>
    <p>They are currently composing a second full length instrumental ukulele album.</p>
    <p>Their ukulele adventure took off in January 2015 when they were invited by Kanile'a Ukulele to play at the NAMM
      show in Anaheim, CA. Since then, they have performed at dozens of festivals and events throughout Southern
      California, including the Heritage of Aloha Festival (where Lise was the winner of the 2015 ukulele competition).
      In Hawaii, they have performed as guests of Bryan Tolentino and Herb Ohta Jr., the Marriott Waikiki with Alan
      Akaka and the Keawe Ohana Show, and Disney’s Aulani Resort with The Makaha Sons.</p>
    <p>Emi holds a B.S. in Mechanical Engineering from the University of California, San Diego. Lise graduated with a
      B.S. in Business Administration from the University of California, Riverside.</p>
    <p>Check out their <a href="https://www.youtube.com/@UkuLise">YouTube channel "UkuLise"</a>, and their  <a href="https://www.facebook.com/TheLeeSistersUkeDuo/">Facebook</a> and <a href="https://www.instagram.com/theleesistersukeduo/">Instagram</a> pages “The Lee Sisters”
      (@TheLeeSistersUkeDuo).</p>
    <p>Fun Fact: The Lee Sisters are now based in San Diego, CA and work for the same company!</p>
  </div>
</template>

<style scoped>
h1,
h2 {
  text-align: center;
}

.img-fluid {
  padding: 5% 15%;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

a {
  color:rgba(255,244,229,.8);
}
</style>
