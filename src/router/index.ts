import HomeView from '@/views/HomeView.vue'
import RecipesListView from '@/views/RecipesListView.vue'
import RecipesNewView from '@/views/RecipesNewView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/lists', name: 'RecipesList', component: RecipesListView },
    { path: '/lists/new', name: 'RecipesNew', component: RecipesNewView }
  ],
})

export default router
