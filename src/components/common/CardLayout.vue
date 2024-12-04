<script setup>
import Card from '../students/Card.vue'

const props = defineProps({
  students: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="cards">
    <card v-for="(student, index) in props.students" :key="index" :student-info="student"/>
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