<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import StudentsByLevelBlock from "./common/StudentsByLevelBlock.vue";
</script>

<template>
  <primary-template>
    <!--<template #left>
      <p>Hello! I am teaching an "advanced web dev" class for the College of Design at the University of Minnesota!
        These are some of my favorite students!</p>

      <h3>Featured undergrads!</h3>
      <students-by-level-block :level="'undergraduate'" :limit="2" :show-title="false" />

      <h3>Featured graduate students!</h3>
      <students-by-level-block :level="'graduate'" :limit="2" :show-title="false" />
    </template>

    <template #right>
      <p>right sidebar content only for homepage</p>
    </template> -->
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