<template>
    <button class="snipcart-checkout cart-btn flex items-center pb-1">
        <span class="snipcart-total-price mr-2 pt-1 font-semibold"/>
        <MainnavCartIcon class="w-6"/>
    </button>
</template>

<style scoped lang="scss">
    .cart-btn {
        border: none;
        background-color: unset;

        &:hover {
            svg {
                color: $primary-orange;
            }
        }

        .snipcart-total-price {
            line-height: 1rem;
        }
    }
</style>