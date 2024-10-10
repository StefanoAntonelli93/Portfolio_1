<script>
export default {
  name: "Jumbo",
};
</script>

<template>
  <section>
    <div class="container py-5">
      <div class="row">
        <div class="content d-flex gap-2">
          <div class="col-6">
            <div class="content">
              <h2>Hello world im</h2>
              <h1 class="title-font">Stefano Antonelli</h1>
              <h3>Im a Full Stack Developer</h3>
              <a href=""><button>Contacts me!</button></a>
              <a href=""><button>Download CV</button></a>
            </div>
          </div>
          <div class="col-6">
            <img src="/boy1.jpg" alt="me" />
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
  padding-top: 200px;
  h1 {
    font-size: 100px;
  }
}
img {
  background-color: transparent;
}
</style>
