<script setup>
import {onMounted} from "vue";
import studentData from '../../MOCK_DATA.js'
import {useRoute, useRouter} from 'vue-router';
import CtaButton from "../common/CtaButton.vue";
import GenericFrame from "../common/GenericFrame.vue";
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";

const route = useRoute();
const router = useRouter();
const paramId = route.params.id;
const student = studentData.data.filter(student => student.id === paramId)[0]

onMounted(() => {
  if (!student) {
    router.push({
      name: 'Home'
    })
  }
})
</script>

<template>
  <primary-template v-if="student">
    <template #left>
      <h1>{{ student.first_name }} {{ student.last_name }}</h1>
      <p>Email address: {{  student.email }}</p>
      <p v-html="student.description.replace(/\n{2}/g, '</p><p>')"></p>
    </template>

    <template class="right" #right>
      <cta-button>
        <router-link :to="{ name: 'AllStudents' }">Return to all students</router-link>
      </cta-button>

      <generic-frame>
        <img :src="student.headshot" :alt="student.first_name + ' ' + student.last_name"/>
      </generic-frame>
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