<template>
    <input
        class="quantity"
        :placeholder="placeholder"
        :type="type"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    />

</template>

<script setup>
const props = defineProps({
    type: String,
    placeholder: String,
    modelValue: [String, Number]  
})
</script>

<style lang="scss" scoped>
    input.quantity {
        border: 2px solid gray;
        border-radius: 5px;
        width: 4rem;
        padding: 0.25rem 0.5rem;

        &:focus, &:focus-visible {
            border: 2px solid $primary-orange;
        }

        &::-webkit-inner-spin-button {
            opacity: 1;
        }
    }
</style>