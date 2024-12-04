<script setup>

import StudentCarousel from './common/StudentCarousel.vue'
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import StudentsByLevelBlock from "./common/StudentsByLevelBlock.vue";
</script>

<template>
  <primary-template>
    <template #left>
      <p>Hello! I am teaching an "advanced web dev" class for the College of Design at the University of Minnesota!
        These are some of my favorite students!</p>

      <h3>Featured undergrads!</h3>
      <students-by-level-block :level="'undergraduate'" :limit="2" :show-title="false" />

      <h3>Featured graduate students!</h3>
      <students-by-level-block :level="'graduate'" :limit="2" :show-title="false" />

      <h2>Example of how a carousel Vue "plugin" works:</h2>
      <student-carousel/>
    </template>

    <template #right>
      <p>right sidebar content only for homepage</p>
    </template>

  </primary-template>
</template>

<style scoped>

</style>