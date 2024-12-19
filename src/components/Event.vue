<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";

</script>

<template>
<primary-template>
  <template #object1>
    <h1> Events</h1>
    <div class="form">
      <div class="set">
        <img src="../assets/KB9U5_I6TcevL-p9G9TZgQ.webp" alt="bake sale">
        <div class="line-content">
          <h4><b>Come join us for our Bake Sale!</b></h4>
          <p>December 19, 2024</p>
          <p>Help us gather funding for next year with a cookie or two.</p>
          <a href="" class="btn"> Learn More</a>
        </div>
      </div>
      <div class="set">
        <img src="../assets/volunteer.png" alt="volunteer">
        <div class="line-content">
          <h4><b>Volunteer Animal Helpers</b></h4>
          <p>December 24, 2024</p>
          <p>Ages 11-13 People help animals and animals help people!</p>
          <a href="" class="btn"> Learn More</a>
        </div>
      </div>
        <div class="set">
          <img src="../assets/ONE_Urban-Ecology-Collection-image2-16x9.png" alt="explore">
          <div class="line-content">
            <h4><b>Explore your wild urban ecosystem</b></h4>
            <p>December 28, 2024</p>
            <p>Help us gather funding for next year with a cookie or two.</p>
            <a href="" class="btn"> Learn More</a>
          </div>
      </div>
    </div>
  </template>
</primary-template>
</template>

<style scoped>
h1, h4 {
  text-align: center;
  text-transform: uppercase;
  color: #E93F1E;
}
div.form {
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
  div.set {
    .line-content {
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
</style>