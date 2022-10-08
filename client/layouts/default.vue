<script setup>   
</script>
<template> 
<div class="w-full">
    <header>
        <MainnavNav class="container"/>
    </header>
    <main class="container pt-20">
        <slot></slot>
        <div hiddenn id="snipcart" data-api-key="Njk5NGQxNDItOWQ3ZS00MzkxLWIxZjctNWFjMDU2YjhiNzk3NjM4MDA3MzU0NTMyOTcxNzk5">
        </div>
    </main>
</div>
</template>
<style scoped>
    header {
        border-bottom: 1px solid #fff;
        background-color: hsla(0, 0%, 100%, 0.8);
    }
</style>