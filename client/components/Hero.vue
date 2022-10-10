<script setup lang='ts'>

    interface Props {
        heroTitle: string,
        heroDescription: string,
    }

    const props = defineProps<Props>()
</script>

<template>
    <div class="atf flex items-center w-full">
        <div class="container flex gap-2 flex-col">
            <h1 class="display-3">{{heroTitle}}</h1>
            <p class="mx-auto">{{heroDescription}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .atf {
        height: 12rem;
        padding-bottom: 1rem;

        p {
            max-width: 48%;
        }
    }

    .all-foods {
        h1 {
            text-transform: capitalize;
        }
    }

</style>