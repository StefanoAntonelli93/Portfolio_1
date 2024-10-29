import { reactive } from "vue";

export const store = reactive({
  logos: [
    {
      id: 1,
      name: "HTML",
      img: "/logo/html.png",
    },
    {
      id: 2,
      name: "CSS",
      img: "/logo/css.webp",
    },
    {
      id: 4,
      name: "Javascript",
      img: "/logo/js.webp",
    },
    {
      id: 3,
      name: "Bootstrap",
      img: "/logo/bootstrap.webp",
    },
    {
      id: 5,
      name: "Laravel",
      img: "/logo/laravel.png",
    },
    {
      id: 6,
      name: "Node JS",
      img: "/logo/node.png",
    },
    {
      id: 7,
      name: "PHP",
      img: "/logo/php.png",
    },
    {
      id: 8,
      name: "visual",
      img: "/logo/visual.png",
    },
    {
      id: 9,
      name: "Vue",
      img: "/logo/vue.png",
    },
    {
      id: 10,
      name: "Vite",
      img: "/logo/vite.png",
    },
  ],
  dinamic_projects: [
    {
      id: 1,
      name: "Deliveroo",
      img: "/projects/deliveroo.png",
    },
    {
      id: 2,
      name: "Dc Comics",
      img: "/projects/dc1.png",
    },
    {
      id: 3,
      name: "Netflix",
      img: "/projects/netflix.png",
    },
    {
      id: 4,
      name: "Rick & Morty Database",
      img: "/projects/rick.png",
    },
    {
      id: 5,
      name: "Best Songs",
      img: "/projects/vinile.png",
    },
    {
      id: 6,
      name: "Whatsapp",
      img: "/projects/whatsapp.png",
    },
  ],
  static_projects: [
    {
      id: 1,
      name: "Discord",
      img: "/projects/discord.webp",
    },
    {
      id: 1,
      name: "Dropbox",
      img: "/projects/dropbox.png",
    },
    {
      id: 1,
      name: "Zalando",
      img: "/projects/zalando.webp",
    },
  ],
  // rick
  // creo array vuoto dove inserire dati del server
  results: [],
  // creo oggetto con link per chiamata API
  loading: true,

  // DESTRUTTURAZIONE apiUrl https://rickandmortyapi.com/api/character
  apiInfo: {
    url: "https://rickandmortyapi.com/api/",
    endpoints: {
      characters: "character",
    },
  },
});
