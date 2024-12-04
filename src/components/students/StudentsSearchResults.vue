<script setup>
import {watch} from "vue";
import {useRoute} from 'vue-router'
import studentData from "../../MOCK_DATA.js"
import CardLayout from "../common/CardLayout.vue";
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue"
import StudentLinksBlock from "../common/StudentLinksBlock.vue";

const route = useRoute()
let searchFor = route.query.for.toLowerCase()
const students = studentData.data.filter(student =>
    student.first_name.toLowerCase().includes(searchFor) ||
    student.last_name.toLowerCase().includes(searchFor)
)

watch(
    () => route.query.for,
    (newVal, oldVal) => {
      searchFor = newVal
      window.location.reload()
    }
)
</script>

<template>
  <primary-template>
    <template #left>
      <div v-if="searchFor">
        <h1>Search results for "{{ route.query.for }}"</h1>

        <card-layout :students="students"/>
      </div>

      <div v-else>
        <p>Please try searching for a student by name. Or else view
          <router-link :to="{ name: 'AllStudents' }">all students</router-link>, or
          <router-link :to="{ name: 'AllStudentsByLevel', params: { level: 'graduate' } }">
            all grads</router-link>, or
          <router-link :to="{ name: 'AllStudentsByLevel', params: { level: 'undergraduate' } }">
            undergrads</router-link>.
        </p>
      </div>

    </template>

    <template #right>
      <student-links-block/>
    </template>
  </primary-template>
</template>

<style scoped>

</style>