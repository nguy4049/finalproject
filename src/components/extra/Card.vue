<script setup>
import {useRoute, useRouter} from 'vue-router'

const router = useRouter()
const route = useRoute()



const goToWildlifeDetails = (id) => {
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
  <section class="wildlife-card">
    <img :src="wildlifeInfo.image" alt="wildlifeInfo.name)"/>
    <div class="content">
      <div class="wildlife-more">
      <h4><b>{{wildlifeInfo.name}}</b></h4>
      <p> {{wildlifeInfo.species}}</p>
      <p> {{wildlifeInfo.status}}</p>
        <div class="btn" @click.native="goToWildlifeDetails(wildlifeInfo.id)"> Learn More</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.wildlife-card {
  /* Mobile first */
  width: 100%;
  background-color: #ffeeeb;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  margin: 10px;
  img {
      width: 100%;
      height: auto;
      display: block;
    }
div.content {
  .wildlife-more {
    padding: 16px;
    h4 {
      font-size: 28px;
      margin-bottom: 8px;
    }
    p {
      color:#666;
      font-size: 15px;
      line-height: 1.3;
    }
    .btn {
      display: inline-block;
      padding: 8px 16px;
      background-color: #333;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 16px;
      color: #fff;
    }
  }
}
}

  /* Tablet and up */
  @media screen and (width > 550px) {
    section.wildlife-card {
      width: 33%;
    }
  }
</style>