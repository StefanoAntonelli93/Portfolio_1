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
              <h5>Hello world i'm</h5>
              <h1 class="title-font">Stefano Antonelli</h1>
              <h5>I'm a Full Stack Developer</h5>
              <a href="#contacts"
                ><button class="btn me-5 mt-4 fw-semibold fs-5 custom-shadow">
                  Contact me!
                </button></a
              >
              <button
                class="btn mt-4 fw-semibold fs-5 custom-shadow"
                @click="downloadCV"
              >
                Download CV <font-awesome-icon :icon="['fas', 'angles-down']" />
              </button>
            </div>
          </div>
          <div class="col-6">
            <img src="/1.png" alt="me" />
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
    padding-top: 15px;
    color: red;
  }
}
img {
  background-color: transparent;
  width: 290px;
  margin-left: 200px;
}
.btn {
  border-radius: 10px;
  padding: 15px;
  background-color: red;
  color: white;
  transition: transform 0.3s ease; // Transizione per lo zoom
  &:hover {
    transform: scale(1.2); // Zoom al passaggio del mouse
  }
}
</style>
