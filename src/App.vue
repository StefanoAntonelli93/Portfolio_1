<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  mounted() {
    this.$nextTick(() => {
      document.getElementById("app").removeAttribute("v-clock");
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
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style scoped>
[v-clock] {
  display: none;
}
</style>
