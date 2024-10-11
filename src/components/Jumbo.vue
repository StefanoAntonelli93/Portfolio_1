<script>
export default {
  name: "Jumbo",
  methods: {
    downloadCV() {
      // percorso al curriculum
      const fileUrl = "/pdf/curriculum.pdf";
      // creo link al button con riferimento a curriculum
      const link = document.createElement("a");
      link.href = fileUrl;
      // specifico download
      link.setAttribute("download", "curriculum.pdf");
      // appendo la a al dom e clicco
      document.body.appendChild(link);
      link.click();
      // rimuovo a dal dom
      document.body.removeChild(link);
    },
  },
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
              <a href="#contacts"><button>Contact me!</button></a>
              <button @click="downloadCV">Download CV</button>
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
