<script>
import Header from "./components/Header.vue";
import Jumbo from "./components/Jumbo.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contacts from "./components/Contacts.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Jumbo,
    About,
    Projects,
    Contacts,
    Footer,
  },
};
</script>

<template>
  <Header />
  <main>
    <Jumbo />
    <About />
    <Projects />
    <Contacts />
  </main>
  <Footer />
</template>

<style scoped></style>
