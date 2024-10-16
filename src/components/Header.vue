<script>
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <div class="container-fluid px-5 py-4" id="header">
      <div class="row">
        <div
          class="content d-flex flex-wrap justify-content-between align-items-center"
        >
          <div class="col-8">
            <div class="fw-bold fs-3"><a href="">PORTFOLIO</a></div>
          </div>
          <div class="col-4 d-flex flex-wrap gap-5 justify-content-end fw-bold">
            <a href="/">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contacts">CONTACTS</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;

#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  transition: background-color 0.3s ease;
  z-index: 1000;
  a {
    text-decoration: none;
    color: $second-color;
    transition: transform 0.3s ease; // Transizione per lo zoom
    &:hover {
      transform: scale(1.2); // Zoom al passaggio del mouse
    }
  }
}

#header.scrolled {
  background-color: rgba(58, 58, 58, 0.664);
  color: white;
  a {
    text-decoration: none;
    color: azure;
  }
  box-shadow: 0 4px 6px rgba(65, 65, 65, 0.295);
}
</style>
