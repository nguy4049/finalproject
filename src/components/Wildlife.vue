<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import wildlifeData from '../WILDLIFE_DATA.js';
import CardLayout from "./common/CardLayout.vue";
</script>

<template>
  <primary-template>
    <template #object1>
      <div class="hero">
        <img src="../assets/Urban_wildlife_-_squirrel.jpg" alt="wildlife hero">
        <div class="text">
          <h1> Wildlife</h1>
          <p> Learn more about the urban wildlife on our campus</p>
          <div class="wildlife">
          </div>
       </div>
      </div>
    </template>

    <template #object2>
      <div class="info">
      <h1> Wildlife on campus</h1>
      <p>Our mission is to raise awareness that the places we call home are also habitats for countless wildlife species. These animals play vital roles in maintaining healthy ecosystems, from pollinating plants and controlling pests to enriching soil and supporting biodiversity. By understanding their importance and protecting their habitats, we contribute to a thriving planet for all life. Let’s work together to ensure harmony between people and nature! </p>
      </div>
        <card-layout :wildlifes="wildlifeData.data"/>
    </template>
  </primary-template>
</template>

<style scoped>
.info {
  width: 100%;
  height: auto;
}
  .hero {
    position: relative;
    text-align: left;
    color: #E93F1E;
    img {

    }
  }
  .text {
    position: absolute;
    bottom: 8px;
    left: 20px;
    font-family: "Kay Pho Du Regular", Avenir, Helvetica, Arial, sans-serif;
  }
h1 {
  font-size: 1.5rem;
  color: #E93F1E;
  font-family: "Kay Pho Du Regular", Avenir, Helvetica, Arial, sans-serif;
}
  img {
    width: 100%;
    display: block;
  }
  /*Tablet*/

</style>