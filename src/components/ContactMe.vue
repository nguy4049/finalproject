<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import GenericFrame from "./common/GenericFrame.vue";
</script>

<template>
  <primary-template>
    <template #left>
      <h1>Contact Me</h1>
      <p>My personal info here</p>
      <p>
        <a href="mailto:nlanglois@mac.com">nlanglois@mac.com</a>
      </p>
    </template>

    <template class="right" #right>
      <generic-frame>
        <img src="../assets/IMG_0122.jpeg" alt=""/>
      </generic-frame>
      <p>Hello! I live in Golden Valley, Minnesota with my wife and three tiny little girls, Leighton, Maeve and Nell.
        We've got three cats too, Mio, Mona and Kosi.</p>
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