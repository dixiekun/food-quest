<script setup>
    const {data:foods} = await useFetch('/api/foods')

</script>
<template>
    <div class="text-center flex gap-10 flex-col items-center">
        <Hero hero-title="Welcome to Food Quest" hero-description="Discover our assortment of fresh food and drinks for household and kitchen. We offer you all the products you need for your daily life. Whether you need fresh food, drink, sweets or coffee - we have the right product for you." />
        <ul class="category-list">
        
            <li v-for="category in foods" :key="category.name" class="category-item">
                <NuxtLink :href="`/menutypes/${category.name}`">
                    <img :src="`${category.image.url}`" :alt="category.name">
                    <div class="category-card-text">
                        <h3>{{category.name}}</h3>
                        <p>{{category.description}}</p>
                    </div>
                </NuxtLink>
            </li>
        </ul>

    </div>
</template>

<style scoped lang="scss">

    .category-list {
        width: 100%;
        display: -ms-grid;
        display: grid;
        padding-right: 20px;
        padding-bottom: 40px;
        padding-left: 20px;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        justify-items: stretch;
        grid-auto-columns: 1fr;
        grid-column-gap: 12px;
        grid-row-gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(-webkit-min-content, 260px));
        grid-template-columns: repeat(auto-fit, minmax(min-content, 260px));
        -ms-grid-rows: auto;
        grid-template-rows: auto;

        li {
            list-style: none;
        }

        .category-item {
            background-color: #ffffff;
            display: flex;
            width: 95%;
            flex-direction: column;
            box-shadow: 0 20px 30px -8px rgb(176 179 206 / 30%);
            overflow: hidden;
            border-radius: 8px;
            transition: all ease-in-out 0.25s;

            &:hover {
                box-shadow: 0px 12px 29px rgb(43 83 255 / 20%);
                transform: scale(1.05);
            }

            .category-card-text {
                padding: 1.5rem 2rem;

                p {
                    color: $primary-light-blue;
                }
            }

        }
    }


</style>