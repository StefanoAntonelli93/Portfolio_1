<script>
import { store } from "../store";
export default {
  name: "About",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section id="about">
    <h3 class="title-font text-center mb-5">About</h3>

    <div class="container">
      <div class="row">
        <div class="content d-flex flex-wrap g-2">
          <div class="col-lg-6 col-md-12 pe-5 text-white fw-semibold">
            <p>
              I started working on various frontend and backend projects,
              applying all the skills I acquired during my studies.
            </p>
            <p>
              I also worked as a freelance artist on graphic and illustration
              projects, developing digital solutions with creativity and
              efficiency. My experience in a fast food environment taught me
              time management, stress handling, and teamwork, making me a
              versatile and resilient professional.
            </p>

            <p class="mt-3">I enjoy outdoor sports and video games!</p>
          </div>
          <div class="col-lg-6 col-md-12 text-center">
            <div
              class="container d-flex flex-wrap justify-content-beetween align-items-center gap-4"
            >
              <div class="content" v-for="logo in store.logos" :key="logo.id">
                <div class="card d-flex justify-content-center custom-shadow">
                  <img class="logo-img" :src="logo.img" :alt="logo.name" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;
section {
  background-color: $second-color;
  padding: 100px;
  h3 {
    color: $first-color;
  }
}
.card {
  width: 100px;
  height: 100px;
  border: none;
  padding: 20px;
  background: linear-gradient(to bottom, $first-color, rgb(219, 219, 219));
  transition: transform 0.3s ease; // Transizione per lo zoom
  cursor: pointer;

  &:hover {
    transform: scale(1.2); // Zoom al passaggio del mouse
  }
}

// responsive
@media screen and (max-width: 768px) {
  section {
    padding: 20px;
  }
  .card {
    margin-top: 20px;
    width: 200px;
    height: 200px;
  }
}
@media screen and (max-width: 992px) {
  section {
    padding: 20px;
  }
  .card {
    margin-top: 30px;
    width: 200px;
    height: 200px;
  }
}
</style>
