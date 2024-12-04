<script setup>
import studentData from '../../MOCK_DATA.js'
import CardLayout from "../common/CardLayout.vue";
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
import StudentLinksBlock from "../common/StudentLinksBlock.vue";
</script>

<template>
  <primary-template>

    <template #left>
      <h2>All my students:</h2>
      <card-layout :students="studentData.data"/>
    </template>

    <template #right>
      <student-links-block/>
    </template>
  </primary-template>
</template>

<style scoped>
</style>