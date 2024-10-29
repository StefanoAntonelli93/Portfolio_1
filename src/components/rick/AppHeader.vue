<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div class="overlay">
      <div class="container">
        <!-- title -->
        <h1><a href="/">Rick and Morty Archieves</a></h1>
      </div>
    </div>
  </header>
</template>

<!-- css -->
<style scoped lang="scss">
@use "../../assets/js/scss/partials/_variables.scss" as *;

header {
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  background-image: url("/images/space1.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      color: $header-text-color;
      font-size: 30px;

      h1 {
        padding-bottom: 10px;
        color: $header-text-color;
        font-size: 80px;
      }

      img {
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
      }

      a {
        color: $header-text-color;
      }
    }
  }
}
</style>
