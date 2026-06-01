import { defineStore } from "pinia";
import { ref } from "vue";
import type { Recipe } from "@/types/recippe";

export const useRecipesStore = defineStore('recipes', () => {
    const recipes = ref<Recipe[]>([]);

    function addRecipe(recipe: Recipe) {
        recipes.value.push(recipe);
    }

    return {
        recipes,
        addRecipe
    }
})