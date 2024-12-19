<script setup>
import Card from "../extra/Card.vue";

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
          :key="index" :wildlife-info="wildlife"/>
  </section>
</template>

<style scoped>
section.cards {
 display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  border: 1px solid lightgray;
:hover {
  transform: scale(1.05);

}
}
/* Tablet*/
@media screen and (width > 500px) {
  display: flex;
  flex-direction: row;

}
</style>