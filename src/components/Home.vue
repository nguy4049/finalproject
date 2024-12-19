<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";

</script>

<template>
  <primary-template>
    <template #object1>
    <h2> Welcome to </h2>
    <h1> University of Minnesota </h1>
    <h1> Conservation Club </h1>
    <img src="../assets/Maroon-and-Gold-M-made-of-flowers.jpg" alt="Conservation Club" />
    </template>

    <template #object2 >
      <div>
        <h1> Featured </h1>
        <p> Learn about how possums is good for the environment</p>
        <router-link :to="{ name: 'Possum' }" class="btn">Learn More</router-link>
        <img src="../assets/possum_hero.webp"
      </div>
    </template>
  </primary-template>
</template>

<style scoped>
/* Mobile first */
@media screen and (min-width: 200px) {
   h1, h2 {
     font-family: "Kay Pho Du Regular", Avenir, Helvetica, Arial, sans-serif;
     margin: 0;
     padding: 0;
     color: #e93f1e
   }

   h1 {
     font-size: 3.2rem;
   }

   h2 {
     padding: 10rem 0 0 0;
   }

   img {
     object-fit: contain;
     width: 100%;
     height: 100%;
   }

   p {
     width: 100%;
   }

   .btn {
     display: inline-block;
     padding: 8px 16px;
     background-color: #333;
     text-decoration: none;
     border-radius: 4px;
     margin-top: 16px;
     color: #fff;
     margin-bottom: 20px;

   }
 }

@media screen and (width < 700px) {
  .btn {
    margin-left: 200px;
  }
}
/*Tablet*/
@media screen and (width > 700px) {
  .btn {
    margin-left: 650px;
  }
}

/*Desktop*/
@media screen and (width > 1000px) {
  .btn {
    margin-left: 750px;
  }
}
</style>