<script setup>
import {onMounted, ref} from "vue";
import CardLayout from "./CardLayout.vue";
import studentData from '../../MOCK_DATA.js'

let students = ref([])
let isFiltered = ref(false)

const props = defineProps({
  level: {
    type: String,
    required: true
  },
  showTitle: {
    type: Boolean,
    required: false,
    default: true
  },
  limit: {
    type: Number,
    required: false
  }
})

onMounted(() => {
  students = studentData.data.filter(student => student.level === props.level)

  if (props.limit) {
    students.sort(() => Math.random() - 0.5);
    students.length = props.limit
  }

  isFiltered.value = true
})
</script>

<template>
  <section class="students-by-level-block" v-if="isFiltered">
    <h3 v-if="showTitle">{{ level }} students</h3>
    <card-layout :students="students"/>
  </section>
</template>

<style scoped>
</style>