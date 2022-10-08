<script setup lang="ts">
import CartInfo from "./CartInfo.vue";

</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/"><img src="@/assets/images/logo.svg" alt=""></NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0 flex gap-4 items-center">
          <li class="nav-item">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/foods">
              Foods
            </NuxtLink>
          </li>
          <CartInfo />

        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
   .router-link-active {
     color: $primary-orange;
   }

   a {
    color: #4a556c;

    &:hover {
      color: $primary-orange;
    }

    &.button-primary {
      color: #ffffff;
    }
   }
 
 </style>