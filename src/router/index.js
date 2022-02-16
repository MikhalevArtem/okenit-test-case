import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import Post from "@/views/Post.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: () => {
      return { path: "/" };
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
