<script setup>
import {watch} from "vue";
import {useRoute} from 'vue-router';

import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
import StudentsByLevel from "../common/StudentsByLevelBlock.vue";
import StudentLinksBlock from "../common/StudentLinksBlock.vue";

const route = useRoute();
let level = route.params.level;

watch(
    () => route.params.level,
    (newId, oldId) => {
      level = newId;
      window.location.reload()
    }
)
</script>

<template>
  <primary-template>
    <template #left>
      <students-by-level :level="level"/>
    </template>

    <template #right>
      <student-links-block/>
    </template>
  </primary-template>
</template>

<style scoped>
</style>