<script setup>

import GenericFrame from "./GenericFrame.vue";
</script>

<template>
  <section class="cta-button">
    <generic-frame class="frame">
      <slot/>
    </generic-frame>
  </section>
</template>

<style>
section.cta-button {
  margin: 1rem 0;

  .frame {
    display: inline-flex;
    background-color: blue;
    padding: 0.7rem 1rem;
    border-radius: 10px;

    a {
      color: white;
      text-decoration: none;
      border-color: #000;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>