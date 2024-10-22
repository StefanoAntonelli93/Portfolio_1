<script>
import { store } from "../store";
export default {
  name: "Projects",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section id="projects">
    <h3 class="title-font text-center">Projects</h3>

    <!-- dinamic projects -->
    <p class="text-center mt-5 fw-semibold fs-3">Dynamic websites</p>
    <div class="container d-flex flex-wrap justify-content-around gap-3 mt-4">
      <div
        class="content"
        v-for="project in store.dinamic_projects"
        :key="project.id"
      >
        <div class="card d-flex justify-content-center custom-shadow">
          <img :src="project.img" :alt="project.name" />
          <!-- overlay -->
          <div class="overlay d-flex align-items-center justify-content-center">
            <span class="overlay-text text-center">{{ project.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- static projects -->
    <p class="text-center mt-5 fw-semibold fs-3">Static websites</p>
    <div class="container d-flex flex-wrap justify-content-center gap-3 mt-4">
      <div
        class="content"
        v-for="project in store.static_projects"
        :key="project.id"
      >
        <div class="card d-flex justify-content-center custom-shadow">
          <img :src="project.img" :alt="project.name" />
          <!-- overlay -->
          <div class="overlay d-flex align-items-center justify-content-center">
            <span class="overlay-text text-center">{{ project.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;
section {
  background-color: $first-color;
  padding: 100px;
  h3 {
    color: red;
  }
}

.card {
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
  border: none;
  padding: 20px;
  background: linear-gradient(to bottom, $first-color, rgb(255, 255, 255));
  transition: transform 0.3s ease; // Transizione per lo zoom
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    z-index: 900; // Zoom al passaggio del mouse
  }
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Overlay semi-trasparente */
  opacity: 0;
  transition: opacity 0.3s ease; /* Transizione dolce */
}
.overlay-text {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
}
.card:hover .overlay {
  opacity: 1;
}

// responsive

@media screen and (max-width: 576px) {
  h3 {
    font-size: 70px;
    text-align: center;
    margin-top: 20px;
  }
  #projects {
    padding: 10px;
  }
}

@media screen and (max-width: 497px) {
  h3 {
    font-size: 70px;
    text-align: center;
    margin-top: 20px;
  }
  #projects {
    padding: 10px;
  }
}
@media screen and (max-width: 376px) {
  h3 {
    font-size: 70px;
    text-align: center;
    margin-top: 30px;
  }
  #projects {
    padding: 10px;
  }
}
</style>
