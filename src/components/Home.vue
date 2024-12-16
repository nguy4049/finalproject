<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <template #object1>
    <h2> Welcome to </h2>
    <h1> University of Minnesota </h1>
    <h1> Botanical Garden </h1>
    <img src="../assets/Maroon-and-Gold-M-made-of-flowers.jpg" alt="Conservation Club" />
    </template>

    <template #object2 >
      <h1> About </h1>
      <p> Learn about what we do on campus</p>
    </template>
  </primary-template>
</template>

<style scoped>
.object1 {
  width: 100%;
}
h1, h2 {
  font-family: "Kay Pho Du Regular", Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #e93f1e
}
h1 {
  font-size: 3.5rem;
}
h2 {
  padding: 10rem 0 0 0;
}
img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>