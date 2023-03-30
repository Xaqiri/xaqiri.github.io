<script setup lang="ts">
import { ref, type Ref } from 'vue';
import NavBar from '@/components/NavBar.vue';
import AboutPage from '@/components/AboutPage.vue';
import ProjectPage from '@/components/ProjectPage.vue';
import EducationPage from '@/components/EducationPage.vue';

let shown: Ref<boolean> = ref(true);
const transition = (event: any) => {
  shown = !shown;
  if (event.target.classList.value === 'shown') {
    event.target.classList.value = 'hidden';
  } else {
    event.target.classList.value = 'shown';
  }
  console.log(event.target);
  console.log(event.target.classList.value);
};
</script>

<template>
  <NavBar />
  <header>
    <img src="./assets/profile_pic.jpeg" alt="headshot" />
    <p>Web Developer</p>
  </header>
  <main>
    <div id="about">
      <AboutPage />
    </div>
    <div id="projects">
      <ProjectPage />
    </div>
    <div id="education">
      <EducationPage />
    </div>
  </main>
</template>

<style scoped>
nav {
  margin: 0;
  padding: 0;
}

header {
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  line-height: 1.5;
  gap: 1em;
}

img {
  width: 25%;
  border: 2px solid cyan;
  border-radius: 50%;
  align-self: center;
}

#projects {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
}

#about {
  padding: 2em;
}

main {
  color: hsla(200, 100%, 80%, 1);
  font-size: 16pt;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

main div {
  /*  width: 50%;*/
  margin: 2em;
  height: 100vh;
}

a {
  cursor: pointer;
}
</style>
