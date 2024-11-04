<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      document.getElementById("app").removeAttribute("v-clock");
    });
    window.addEventListener("scroll", function () {
      const scrollUp = document.getElementById("scroll-up");
      if (window.scrollY > 1000) {
        scrollUp.classList.add("scrolled");
      } else {
        scrollUp.classList.remove("scrolled");
      }
    });
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header />
  <main>
    <font-awesome-icon
      @click="scrollToTop"
      id="scroll-up"
      :icon="['fas', 'arrow-up']"
    />
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;
[v-clock] {
  display: none;
}

/* bottone torna su */

#scroll-up {
  display: none;
}
#scroll-up.scrolled {
  display: block;
  position: fixed;
  z-index: 3000;
  bottom: 50px;
  left: 90%;
  border-style: none;
  border-radius: 50px;
  color: rgba(160, 160, 160, 0.568);
  font-size: 40px;
  cursor: pointer;
  &:hover {
    transition: transform 0.3s ease;
    transform: scale(1.2); // Zoom al passaggio del mouse
  }
}
</style>
