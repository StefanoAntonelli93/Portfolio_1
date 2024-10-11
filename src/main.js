import { createApp } from "vue";
// import sass
import "./assets/js/scss/main.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import App from "./App.vue";

// fontawesome library

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faSquareGithub, faLinkedin);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
