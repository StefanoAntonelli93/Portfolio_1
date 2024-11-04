<script>
export default {
  name: "Jumbo",
  data() {
    return {
      isSmallScreen: false,
    };
  },
  methods: {
    downloadCV() {
      const fileUrl = "/pdf/curriculum.pdf";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "curriculum.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 768;
    },
  },
  mounted() {
    // Controlla la dimensione dello schermo all'inizio
    this.checkScreenSize();
    // Aggiungi un event listener per aggiornare quando la finestra viene ridimensionata
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>

<template>
  <section :class="{ 'no-scroll': isSmallScreen }">
    <div class="container py-5">
      <div class="row">
        <div class="content d-flex flex-wrap">
          <div class="col-lg-6 col-md-12">
            <div class="content jumbo">
              <h5>Hello world i'm</h5>
              <h1 v-if="!isSmallScreen" id="my-name" class="title-font">
                Stefano Antonelli
              </h1>
              <h5 v-else class="title py-4">Stefano Antonelli</h5>
              <h5>I'm a Full Stack Developer</h5>
              <div class="button-div">
                <a href="#contacts"
                  ><button class="btn me-5 mt-4 fw-semibold fs-5 custom-shadow">
                    Contact me!
                  </button></a
                >
                <button
                  class="btn mt-4 fw-semibold fs-5 custom-shadow"
                  @click="downloadCV"
                >
                  Download CV
                  <font-awesome-icon :icon="['fas', 'angles-down']" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-img">
            <img src="/1.png" alt="me" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;
.no-scroll {
  overflow-y: hidden; // Nasconde lo scroll verticale
  margin: 0; // Rimuove il margine se necessario
}
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

// responsive

@media screen and (max-width: 768px) {
  .jumbo {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .title-font {
    width: 20px;
  }
  img {
    width: 50%;
    margin-top: 50px;
  }

  h5 {
    text-align: center;
  }
  .btn {
    text-align: center;
  }
  .title {
    color: red;
    font-weight: 600;
    font-size: 60px;
    font-family: "Games", sans-serif;
  }
}

@media screen and (max-width: 992px) {
  img {
    margin-top: 50px;
  }
  .button-div {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
  }
  h1 {
    font-size: 120px;
  }
}
</style>
