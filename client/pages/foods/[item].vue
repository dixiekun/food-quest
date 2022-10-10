<script setup>
    const route = useRoute()
    const routeName = route.params.item.toString()
    const quantity = ref(1)
    const {data:foods} = await useFetch('/api/foods')

</script>

<template>
    <div>
        <div  v-for="category in foods" :key="category.name">
            <div v-for="food in category.items">
                <div v-if="food.pageSlug === routeName">
                    <article class="item-showcase flex justify-between">
                        <div class="content-text flex flex-col gap-4">
                            <h1>{{food.name}}</h1>
                            <p>{{food.description}}</p>
                            <p class="price">${{food.price}} USD</p>
                            <div class="flex items-center gap-3">
                                <InputFieldQuantity type="number" v-model="quantity" min="1" placeholder="Quantity"/>
                                <button class="snipcart-add-item button-primary"
                                :data-item-id="food.name"
                                :data-item-price="food.price"
                                :data-item-description="food.description"
                                :data-item-image="`${food.image.url}`"
                                :data-item-name="food.name"
                                :data-item-quantity="quantity"
                                :data-item-url="`${route.path}`"
                                >Add to basket</button>
                            </div>

                        </div>
                        <div class="item-image">
                            <img :src="`${food.image.url}`" :alt="food.name">
                        </div>
                    </article>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .item-image {
        width: 37.5rem;
        height: 37.5rem;
        overflow: hidden;
        border-radius: 1.5rem;
        
        img {
            max-height: 100%;
            object-fit: cover;
        }
    }

    .content-text {
        max-width: 38rem;
        .price {
            font-size: 2rem;
            font-weight: bold;
        }
    }
</style>