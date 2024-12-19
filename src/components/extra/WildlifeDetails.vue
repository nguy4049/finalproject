<script setup>

import {onMounted} from "vue";
import wildlifeData from '../../WILDLIFE_DATA.js'
import {useRoute, useRouter} from 'vue-router';
import GenericFrame from "../common/GenericFrame.vue";
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";

const route = useRoute();
const router = useRouter();
const paramId = route.params.id;
const wildlife = wildlifeData.data.filter(wildlife => wildlife.id === paramId)[0]

onMounted(() => {
  if (!wildlife) {
    router.push({
      name: 'Home'
    })
  }
})
</script>

<template>
  <primary-template v-if="wildlife">
    <template class="object1" #object1>
      <generic-frame>
      <img :src="wildlife.image" :alt="wildlife.name"/>
      </generic-frame>
      <h1>{{ wildlife.name}}</h1>
      <section v-html="wildlife.description.replace(/\n{2}/g, '</p><p>')"></section>
    </template>

  </primary-template>
</template>

<style scoped>
.object1 {
  img {
    width: 100%;
    display: block;
  }
}
</style>