<script setup>

import {onMounted} from "vue";
import wildlifeData from '../../MOCK_DATA.js'
import {useRoute, useRouter} from 'vue-router';
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";

const route = useRoute();
const router = useRouter();
const paramName = route.params.name;
const student = wildlifeData.data.filter(wildlife => wildlife.name === paramName)[0]

onMounted(() => {
  if (!wildlife) {
    router.push({
      name: 'Home'
    })
  }
})
</script>

<template>
  <primary-template v-if="wildlifeData">
    <template #object1>
      <img :src="wildlife.image" :alt="wildlifeData.name"/>
      <h1>{{ wildname.name}</h1>
      <p v-html="wildlife.description.replace(/\n{2}/g, '</p><p>')"></p>

    </template>

  </primary-template>
</template>

<style scoped>
.right {
  img {
    width: 100%;
    display: block;
  }
}
</style>