<script setup>

    definePageMeta({
        pageTransition: {
            name: 'fade'
        }
    })
    const route = useRoute()
    const name = route.params.menutype.toString()
    const {data:foods} = await useFetch('/api/foods')


    const categories = reactive([
        'All',
        'Breakfast',
        'Main Dish',
        'Drinks',
        'Desserts'
    ])


   
</script>
<template>

    <div class="text-center flex flex-col items-center w-full">
        <div class="w-full" v-for="category in foods" :key="category.name">
            <div v-if="category.name == name">
                <Hero :heroTitle="category.name" :heroDescription="category.description" />
                <div class="list-menu-types flex gap-4 justify-center flex-wrap w-full">
                    <NuxtLink 
                    v-for="categ in categories" 
                    :key="categ"
                    class="button-secondary"
                    :class="name === categ && 'category-active'"
                    :to="`${categ}`" 
                    >{{categ}}</NuxtLink>
                </div>
                <Transition name="fade" mode="out-in">
                    <div class="item-list">
                        <div v-for="food in category.items" class="item-card" :key="food.name">
                            <NuxtLink :to="`/foods/${food.pageSlug}`">
                                <div class="image-container">
                                    <img :src="`${food.image.url}`" 
                                    :alt="food.name"/>
                                    <p class="price">${{food.price}} USD</p>
                                </div>
                                <div class="card-text">
                                    <h3>{{food.name}}</h3>
                                    <p>{{food.description}}</p>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
        <div class="w-full" v-if="categories[0] == name">
            <Hero :heroTitle="categories[0]" heroDescription="All our available delicious food" />
            <div class="list-menu-types flex gap-4 justify-center flex-wrap w-full">
                <NuxtLink 
                v-for="categ in categories" 
                :key="categ"
                class="button-secondary"
                :class="name === categ && 'category-active'"
                :to="`${categ}`" 
                >{{categ}}</NuxtLink>
            </div>
            <div class="item-list">
                <div v-for="category in foods" class="item-card-container" >
                    <div v-for="food in category.items" :key="category.name" class="item-card">
                        <NuxtLink :to="`/foods/${food.pageSlug}`">
                            <div class="image-container">
                                <img :src="`${food.image.url}`" 
                                :alt="food.name"/>
                                <p class="price">${{food.price}} USD</p>
                            </div>
                            <div class="card-text">
                                <h3>{{food.name}}</h3>
                                <p>{{food.description}}</p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped lang="scss">

    .item-list {
        display: flex;
        gap: 2rem;
        margin-top: 3rem;
        justify-content: center;
        flex-wrap: wrap;

        .item-card-container {
            display: flex;
            gap: 2rem;
        }
    }
    .item-card {
        width: 18rem;
        overflow: hidden;
        border-radius: 8px;
        margin-bottom: 2rem;
        box-shadow: 0 20px 30px -8px rgb(176 179 206 / 30%);
        transition: all ease-in-out 0.25s;

        &:hover {
            box-shadow: 0px 12px 29px rgb(43 83 255 / 20%);
            transform: scale(1.05);

            .image-container {
                p.price {
                    background-color: $primary-dark-blue;
                    border: 1px solid $primary-light-blue;
                    color: #ffffff;
                }
            }

        }
    
        .image-container {
            height: 12rem;
            overflow: hidden;
            position: relative;

            img {
                max-width: 100%;
            }

            p.price {
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
                background-color: rgb(255, 255, 255);
                color: rgb(105, 105, 105);
                border-radius: 100px;
                padding: 10px 20px;
                font-weight: 600;
                border: 1px solid rgb(215 215 215 / 50%);
                transition: all ease-in-out 0.25s;
            }
        }

        .card-text {
            padding: 1.5rem 2rem;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            text-align: left;

            h3 {
                font-size: 1.25rem;
            }

            p {
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }



</style>