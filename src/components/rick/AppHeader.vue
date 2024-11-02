<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div class="container">
      <!-- button to projects -->
      <!-- title -->
      <h1>Rick and Morty Archieves</h1>
      <p class="p-4">
        Welcome to the ultimate
        <span class="fw-semibold">Rick and Morty</span> character search tool!
        Dive into the multiverse and easily find your favorite characters from
        the show!
      </p>
    </div>
  </header>
</template>

<!-- css -->
<style scoped lang="scss">
@use "../../assets/js/scss/partials/_variables.scss" as *;

header {
  position: relative;
  text-align: center;
  background-image: url("/images/space1.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  margin-top: 100px;
  h1 {
    font-size: 3rem;
    padding-top: 50px;
  }
}
</style>
