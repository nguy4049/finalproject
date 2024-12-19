<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <template #object1>
      <div class="hero">
        <img src="../assets/animalservice_hero.jpg" alt="resources hero">
        <div class="text">
          <h1> Services & Resources</h1>
          <p> Learn more about the wildlife and education services our local area provides</p>
          <div class="wildlife">
          </div>
        </div>
      </div>
    </template>
    <template #object2>
      <div class="contents">
        <div class="detail">
          <h1>Wildlife Services</h1>
          <h4>Urban Wildlife Education Program</h4>
          <p>Interactive workshops for schools, scout groups, and community centers to educate children about urban wildlife species and their roles in the ecosystem. Includes games, presentations, and take-home activity kits</p>
          <h4>Wildlife Conflict Resolution</h4>
          <p>Provides guidance and hands-on assistance to manage human-wildlife conflicts. This service ensures humane solutions for situations like raccoons in attics, coyotes in neighborhoods, or deer damaging gardens.</p>
        </div>
        <div class="detail">
          <h1>Educational Services</h1>
         <h4>Ecosystem Explorers for Kids</h4>
          <p>A weekend program designed for children to explore local parks and green spaces. They learn about animal habitats, native plants, and the importance of biodiversity through scavenger hunts and nature walks.</p>
        <h4>Habitat Restoration Volunteers</h4>
        <p>Community events where participants help restore degraded habitats by planting native vegetation, removing invasive species, and building wildlife shelters like birdhouses or bat boxes.</p>
        </div>
      </div>
    </template>
  </primary-template>
</template>

<style scoped>
.hero {
  position: relative;
  text-align: left;
  color: #FFF;
}
  .text {
    position: absolute;
    bottom: 8px;
    left: 20px;
    font-family: "Kay Pho Du Regular", Avenir, Helvetica, Arial, sans-serif;

    h1 {
      font-size: 1.5rem;
      color: #FFF;
      font-family: "Kay Pho Du Regular", Avenir, Helvetica, Arial, sans-serif;
    }
  }
  img {
    width: 100%;
    display: block;
  }
div.detail {
  h1 {
    text-align: center;
  }
}
@media
</style>