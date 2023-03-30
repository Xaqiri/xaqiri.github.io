<scrit setup lang="ts"></scrit>

<template>
  <p>Projects</p>
  <div class="project-card">
    <h3>
      <a href="https://github.com/Xaqiri/PythonFlashcards"> Flashcards </a>
    </h3>
    <p>Built with Python connected to a cloud-hosted MySQL database</p>
  </div>
  <div class="project-card">
    <h3>
      <a href="https://topmembersonly.up.railway.app">Message Board</a>
    </h3>
    <p>
      Simple message board written in Javascript with Node and Express connected
      to a MongoDB database.
    </p>
    <p>
      User authentication with passport.js and password encryption with bcrypt
    </p>
  </div>
  <div class="project-card">
    <h3>
      <a href="https://github.com/Xaqiri/VampyrManor">Vampyr Manor</a>
    </h3>
    <p>Roguelike written in Python + Pygame connected to a Sqlite database</p>
  </div>
</template>

<style scoped>
.project-card {
  font-size: 1em;
  height: 20em;
  margin: 1em;
  padding: 1em;
  background-color: hsla(200, 100%, 30%, 0.5);
  border-radius: 5%;
}

a {
  color: hsla(200, 100%, 60%, 1);
}
</style>
