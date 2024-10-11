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
    <h1 class="title-font text-center mb-5">About</h1>
    <font-awesome-icon :icon="['fas', 'user-secret']" />

    <div class="container">
      <div class="row">
        <div class="content d-flex flex-wrap g-2">
          <div class="col-6 pe-5">
            <p class="mt-3">
              I started working on various frontend and backend projects,
              applying all the skills I acquired during my studies.
            </p>
            I also worked as a freelance artist on graphic and illustration
            projects, developing digital solutions with creativity and
            efficiency. My experience in a fast food environment taught me time
            management, stress handling, and teamwork, making me a versatile and
            resilient professional.
            <p class="mt-3">I enjoy outdoor sports and video games!</p>
          </div>
          <div class="col-6 text-center">
            <div
              class="container d-flex flex-wrap justify-content-beetween align-items-center gap-4"
            >
              <div class="content" v-for="logo in store.logos" :key="logo.id">
                <div class="card">
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
  h1 {
    color: $title;
  }
}
.card {
  background-color: transparent;
  width: 100px;
  border: none;
}
.logo-img {
  width: 100%;
}
</style>
