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
});
