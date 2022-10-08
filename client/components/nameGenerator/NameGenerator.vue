<script setup lang="ts">
import {Gender, Popularity, Length, names} from '@/data'
import Option from '@/components/NameGenerator/Option.vue'

interface OptionsState {
    gender: Gender,
    popularity: Popularity,
    length: Length
}


const options = reactive<OptionsState>({
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.LONG
})

const computeSelectedNames = () => {
    const filterNames = names
    .filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) => {
        if(options.length === Length.ALL) return true
        else return name.length === options.length
    })

    selectedNames.value = filterNames.map(name => name.name)
}

const selectedNames = ref<string[]>([])

const optionsArray = [
    {
        title: "1. Choose a gender",
        category: "gender",
        buttons: [Gender.GIRL, Gender.BOY, Gender.UNISEX]
    },
    {
        title: "2. Choose a name's popularity",
        category: "popularity",
        buttons: [Popularity.TRENDY, Popularity.UNIQUE]
    },
    {
        title: "3. Choose a name's length",
        category: "length",
        buttons: [Length.LONG, Length.SHORT, Length.ALL]
    },

]

</script>
<template>
    <div class="container">
        <h1>Baby Name Generator</h1>
        <div class="options-container">
            <Option 
                v-for="option in optionsArray" 
                :key="option.title" 
                :option="option" 
                :options="options"
            />
            <button class="primary" @click="computeSelectedNames">Find Names</button>
        </div>
        <div  class="cards-container">
            <div class="card" v-for="name in selectedNames" :key="name">
                <p>{{ name }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        font-family: Arial, Helvetica, sans-serif;
        place-self: center;
        max-width: 560px;
        margin: 0 auto;
        color: rgb(29, 29, 198);
    }

    .options-container {
        padding: 2rem;
        background: rgb(218, 218, 218);
        border-radius: 1rem;
    }
    
    button.primary {
        padding: 1rem 3rem;
        border-radius: 5px;
        background-color: rgb(9, 4, 40);
        color: white;
        font-weight: bold;
        border: 1px solid rgb(9, 4, 40);
        text-align: center;
        margin: 0 auto;
        display: flex;
    }

    button.primary:hover {
        background-color: rgb(46, 31, 141);
    }

    .cards-container {
        display: flex;
        gap: 1rem;
        width: 100%;
        margin-top: 2rem;

    }

    .card {
        padding: 1rem 2rem;
        background: rgb(46, 31, 141);
        border-radius: 5px;
        color: white;
        font-weight: bold;
    }

    .card p {
        margin: 0;
    }


</style>