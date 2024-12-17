<script setup>
import Card from "../students/Card.vue";

const props = defineProps({
  wildlifes: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="cards">
    <card v-for="(wildlife, index) in props.wildlifes"
          :key="index" :widlife-info="wildlife"/>
  </section>
</template>

<style scoped>
section.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  margin-top: 1rem;
}
</style>