<script setup>
import {useRoute, useRouter} from 'vue-router'
import GenericFrame from "../common/GenericFrame.vue";

const router = useRouter()
const route = useRoute()


const goToStudentDetails = (id) => {
  router.push({
    name: 'WildlifeDetails',
    params: {
      id: id
    },
  })
}

defineProps({
  wildlifeInfo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="card" @click.native="goToWildlifeDetails(wildlifeInfo.id)">
    <img src="wildlifeInfo.image" alt="name(wildlifeInfo)">
    <div class="content">
      <h4><b>{{wildlifeInfo.name}}</b></h4>
      <p> {{wildlifeInfo.species}}</p>
      <p> {{wildlifeInfo.status}}</p>
    </div>
  </section>
</template>

<style scoped>
section.card {
  /* Mobile first */
  display: flex;
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 100%;
  gap: 1rem;
  padding: 0.5rem;
  .headshot {
    min-width: 125px;
    max-width: 125px;

    img {
      width: 100%;
      display: block;
    }

    p {
      text-align: center;
    }
  }

  &:hover {
    border-color: black;
    cursor: pointer;
  }

  /* Tablet and up */
  @media screen and (width > 550px) {
    width: 45%;
  }
}
</style>