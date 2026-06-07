<script setup>
    import { computed, ref } from "vue";

    const title = ref('');
    const description = ref('');
    const preparation = ref('');
    const ingredientInput = ref('');
    const ingredients = ref([]);

    const addIngredient= () => {
        if (ingredientInput.value.trim() && !ingredients.value.includes(ingredientInput.value.trim())) {
            ingredients.value.push(ingredientInput.value.trim());
            ingredientInput.value = '';
        }
    }

    const removeIngredient = (index) => {
        if (ingredients.value.length > 0) {
            ingredients.value.splice(index, 1);
        }
    }

    const isFormValid = computed(() => {
        return (
            title.value.trim() && ingredients.value.trim() && preparation.value.trim()
        )
    })

</script>

<template>
    <form class="form" action="">
        <label for="title" class="form-label">Title</label>
        <input type="text" id="title" name="title" class="form-input" v-model="title" required>

        <label for="description" class="form-label">Description</label>
        <input type="text" id="description" name="description" class="form-input" v-model="description">

        <div class="ingredients">
            <div class="ingredients-add__item">
                <label for="ingredientInput" class="form-label">Ingredients</label>
                <div class="ingredients-add__input">
                    <input type="text" id="ingredientInput" name="ingredientInput" class="form-input" v-model="ingredientInput" @keydown.enter.prevent="addIngredient">
                    <button type="button" class="ingredients-button" @click="addIngredient()" @keyup.enter="addIngredient">+</button>

                </div>
                
            </div>
            <ul class="ingredients-list" >
                <li v-for="(item, index) in ingredients" v-if="ingredients.length > 0" class="ingredients-list__item">
                    <div>{{ item }}</div>
                    <button type="button" class="ingredients-button" @click="removeIngredient(index)">-</button>
                </li>
            </ul>
        </div>

        <label for="preparation" class="form-label">Preparation</label>
        <input type="text" id="preparation" name="preparation" class="form-input" v-model="preparation">

        <button type="submit" class="submit-button" :disabled="!isFormValid">Add</button>
    </form>
    
</template>

<style scoped lang="scss">
.form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    border: 1px solid #0f6f6c;
    border-radius: 16px;
    
    &-input {
        padding: 8px;
        border: none;
        // background-color: rgba(255, 248, 238, 0.55);
        &:active,
        &:focus,
        &:focus-visible {
            border: none;
            outline: none;
        }
    }

    &-label {
        font-size: 14px;
    }
}

.ingredients {
    &-add {
        &__item {
            display: flex;
            flex-direction: column;
            row-gap: 12px;

            
        }

        &__input {
            display: flex;
            align-items: center;
            column-gap: 8px;

            input {
                background-color: #FCD9DB;
                border-radius: 24px;
            }
        }

        
    }
    &-list {
        &__item {
            display: flex;
            align-items: center;
            column-gap: 12px;
        }
    }
    &-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 31px;
        height: 31px;
        background-color: #FCD9DB;
        // color: #4b2f22;
        color: #FFF;

        font-size: 24px;
        border-radius: 50%;
    }
}

.submit-button {
    padding: 12px 24px;
    width: fit-content;
    background-color: #0f6f6c;
    color: #FFFFFF;
    border-radius: 6px;

    &[disabled] {
        opacity: .6;
    }
}
</style>