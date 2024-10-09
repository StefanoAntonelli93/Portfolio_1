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
            <div class="fw-bold"><a href="">PORTFOLIO</a></div>
          </div>
          <div class="col-4 d-flex flex-wrap gap-3 justify-content-end">
            <a href="/">HOME</a>
            <a href="">ABOUT</a>
            <a href="">PROJECTS</a>
            <a href="">CONTACTS</a>
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
}

#header.scrolled {
  background-color: red;
}
</style>
