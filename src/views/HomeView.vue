<script setup lang="ts">
</script>

<template>
  <main>
    <div id="top">
      <div class="cover-heading">
        <h1>The Lee Sisters!</h1>
      </div>

    </div>

    <div>
      <iframe id="player" src="https://www.youtube.com/embed?listType=playlist&list=UUg4YdL9318JS6ATDBLgRpqA"
        frameBorder="0"></iframe>
    </div>
    <div id="socials">
      <a href="https://www.facebook.com/TheLeeSistersUkeDuo/"><font-awesome-icon
          icon="fa-brands fa-square-facebook" /></a>
      <a href="https://www.youtube.com/channel/UCg4YdL9318JS6ATDBLgRpqA/feed"><font-awesome-icon
          icon="fa-brands fa-youtube" /></a>
      <a href="https://www.instagram.com/theleesistersukeduo/"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
    </div>
  </main>
</template>
<style scoped>
main {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

#top {
  min-height: 600px;
  margin-top: 30%;
}
#socials a {
  color:#fff;
  padding: 10px;
  font-size: 100px;
}
.cover-heading h1 { 
  font-size: 95px;
  background-color: rgba(0, 0, 0, .5);
  color: #fff;
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  margin: 0 10%;
  border-radius: 25px;
}

#player {
    width: 750px;
    height: 400px;
}
@media only screen and (max-width: 425px) {
    #player {
        width: 300px;
        height: 250px;
    }

    .cover-heading h1 { 
      font-size: 52px;
    }
  }
  @media only screen and (min-width: 1425px) {

    .cover-heading h1 { 
      font-size: 100px;
    }
  }
</style>