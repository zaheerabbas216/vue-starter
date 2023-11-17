import { createWebHistory, createRouter } from "vue-router";
import HomeVue from "../components/Home.vue";
import SlotComponent from "../components/Slots.vue";
import PostsComponent from "../components/PostsLists.vue";
import AddNewPostComponent from "../components/Addingpost.vue";
import Compositioncomponent from "../components/Composition.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
  },
  {
    path: "/slots",
    name: "Slots",
    component: SlotComponent,
  },
  {
    path: "/posts",
    name: "Posts",
    component: PostsComponent,
  },
  {
    path: "/addpost",
    name: "AddPost",
    component: AddNewPostComponent,
  },
  {
    path: "/composition",
    name: "Composition",
    component: Compositioncomponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
