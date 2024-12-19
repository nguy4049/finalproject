<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <template #object1>
      <div class="container">
        <img src="../assets/volunteer-abroad-in-greece-athens-ivhq-animal-care.avif" alt="about hero">
        <div class="about">
          <h1>About</h1>
          <p> Learn more about the urban wildlife on our campus</p>
        </div>
        <div class="text">
          <h1> Who is APCP?</h1>
          <p> As members of the university’s Animal and Plant Conservation Club (APCP), we’re here to shed light on the incredible urban wildlife all around us! Cities aren’t just for humans—they’re also home to resilient plants and animals that play crucial roles in our ecosystem. From pollinators that keep our green spaces flourishing to predators that balance pest populations, urban wildlife is essential for a healthy environment. Let’s celebrate their presence and learn how to coexist sustainably. Together, we can create a future where humans and wildlife thrive side by side!</p>
          <p> Urban wildlife and plants make incredible contributions to our environment. Pollinators, such as bees and butterflies, support the growth of green spaces by enabling plants to reproduce. Birds and small mammals help control pest populations, while scavengers clean up organic waste, preventing the spread of disease. Native plants stabilize soil, improve air quality, and provide food and shelter for countless species. Together, these contributions create a vibrant, interconnected web of life that benefits us all.</p>
          <h1> Our History </h1>
          <p> Since our establishment in 2010, the university’s Animal and Plant Conservation Club has been a driving force in promoting awareness and action for urban wildlife and plant conservation. Our journey began with the "Urban Green Initiative," where we collaborated with local organizations to plant over 1,000 native trees and shrubs in city parks. This project created habitats for pollinators, birds, and small mammals, marking our first major contribution to urban biodiversity.</p>
        <p> In 2015, we launched the "Pollinator Pathways Campaign," an effort to educate the community about the critical role of bees and butterflies. Through workshops and the distribution of pollinator-friendly plants, we established small pollinator gardens on campus and in neighboring urban areas.</p>
        <p> By 2018, we partnered with the Urban Wildlife Rescue Network to host our annual "Wildlife Week," a series of events highlighting the contributions of urban animals like owls, foxes, and raccoons. These efforts helped raise funds for the rehabilitation of injured wildlife and provided students with hands-on conservation experience.</p>
        </div>
        <div class="donation">
          <h1> Give today</h1>
          <p> Your gift today will give critical care to abandoned injured and orphaned animals right now, in their time of need.</p>
          <div id="donate">
          </div>
        </div>

      </div>
    </template>
  </primary-template>
</template>

<style scoped>
.container {
  max-width: 500px;
  h1 {
    color: #E93F1E;
  }

  .about {
    max-width: 200px;
  }
.text {
  text-align: center;
  line-height: 1.6;
}
  .donation {
    background-color: #f9f9f9;
    padding: 20px 5px 80px 5px;
    margin: 0;
    text-align: center;

    h1 {
      color: #1a1a1a;
    }
    #donate {
      background-image: url(../assets/DonateNow.svg);
      height: 73px;
      width: 165px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    #donate:hover {
      background-image: url(../assets/DonateNow_hover.svg);
    }
  }
  img {
    width: 100%;
    padding: 0;
    margin: 0;
  }
}

</style>