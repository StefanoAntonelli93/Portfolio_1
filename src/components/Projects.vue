<script>
export default {
  name: "Projects",
};
</script>

<template>
  <section id="projects">
    <h1 class="title-font text-center">Projects</h1>
    <p class="text-center">My latest works</p>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;
section {
  background-color: $first-color;
  padding: 100px;
  h1 {
    color: $thirth-color;
  }
}
</style>
