<script setup lang="ts">
import { Gender, Length, Popularity } from '@/data';

interface OptionProps {
    option: {
        title: string,
        category: string,
        buttons: Gender[] | Popularity[] | Length[]
    },
    options: {
        gender: Gender,
        popularity: Popularity,
        length: Length,
    }
}

const props = defineProps<OptionProps>()

</script>

<template>
    <div class="option-container">
        <h3>{{ props.option.title }}</h3>
        <div class="option-buttons">
            <button
                v-for="value in option.buttons"
                :key="value"
                class="option"
                :class="options[option.category] === value && 'option-active'"
                @click="options[option.category] = value"
            >{{value}}</button>
        </div>
    </div>
</template>


<style scoped>
    .option-container:nth-of-type(3) {
        margin-bottom: 2rem;
        border-bottom: 1px solid gray;
        padding-bottom: 2rem;
    }

    .option-buttons {
        display: flex;
        gap: 1rem;
    }

    button.option {
        padding: 1rem 3rem;
        border-radius: 5px;
        border: unset;
        box-shadow: rgb(0 0 0 / 6%) 0px 3px 9px 3px;
    }

    button.option:hover {
        background-color: rgb(78, 212, 199);
        color: white;
        font-weight: medium;
        border-radius: 5px;
        border: unset;
        box-shadow: rgb(0 0 0 / 6%) 0px 3px 29px 3px;
    }

    button.option-active {
        background-color: rgb(78, 212, 199);
        color: white;
        font-weight: medium;
    }   
</style>