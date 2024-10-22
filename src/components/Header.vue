<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.menuOpen = true;
      console.log("clicco su hamburger");
    },
    closeMenu() {
      this.menuOpen = false;
    },
    // tasto ESC
    handleEscape(event) {
      if (event.key === "Escape") {
        this.closeMenu();
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", function () {
      const header = document.getElementById("header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
    window.addEventListener("keyup", this.handleEscape);
  },
};
</script>

<template>
  <header>
    <div class="container-fluid" id="header">
      <div class="row">
        <div
          class="content d-flex flex-wrap justify-content-between align-items-center"
        >
          <div class="col-6">
            <div class="fw-bold fs-3"><a href="">PORTFOLIO</a></div>
          </div>
          <!--  hamburger button -->
          <div @click="openMenu" class="hamburger-btn">☰</div>
          <div
            class="header-nav col-6 d-flex flex-wrap gap-5 justify-content-end fw-bold"
          >
            <a href="/">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contacts">CONTACTS</a>
          </div>

          <!-- modale hamburger -->
          <div v-if="menuOpen" class="modal-overlay" @click="closeMenu">
            <div class="modal-content" @click.stop>
              <nav class="modal-nav">
                <a href="/" @click="closeMenu">HOME</a>
                <a href="#about" @click="closeMenu">ABOUT</a>
                <a href="#projects" @click="closeMenu">PROJECTS</a>
                <a href="#contacts" @click="closeMenu">CONTACTS</a>
              </nav>
              <div class="close-btn btn" @click="closeMenu">&times;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;

#header {
  padding: 30px;
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
    &:hover {
      color: $second-color;
    }
  }
  box-shadow: 0 4px 6px rgba(65, 65, 65, 0.295);
  .hamburger-btn {
    color: white;
    &:hover {
      color: red;
    }
  }
  .close-btn {
    color: white;
    &:hover {
      color: $second-color;
    }
  }
}

// modale e hamburger btn

.hamburger-btn {
  color: $second-color;
  font-size: 50px;
  cursor: pointer;
  &:hover {
    color: red;
  }
  display: none;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10000;
  // posizione contenuto overlay
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-nav {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 50px;
  color: aliceblue;
}

.close-btn {
  background: transparent; // Rendi lo sfondo trasparente
  border: none;
  font-size: 3.5rem;
  cursor: pointer;
  color: white;
  transition: transform 0.3s ease; // Transizione per lo zoom
  padding: 5px; // Padding per un bottone più compatto
  &:hover {
    transform: scale(1.2); // Zoom al passaggio del mouse
    color: $second-color;
  }
}

// responsive
@media screen and (max-width: 992px) {
  .hamburger-btn {
    display: block;
  }
  .header-nav a {
    display: none;
  }
}
@media screen and (max-width: 576px) {
  #header {
    padding: 30px 30px 30px 20px;
  }
}
@media screen and (max-width: 376px) {
  #header {
    width: 100%;
  }
}
</style>
