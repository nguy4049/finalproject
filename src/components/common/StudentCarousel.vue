<script setup>
import 'vue3-carousel/dist/carousel.css'
import studentData from '../../MOCK_DATA.js'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

const students = studentData.data
students.sort(() => Math.random() - 0.5)
students.length = 5

console.log('students: ', students)

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
  autoplay: 5000,
  gap: 10
}
</script>

<template>
  <carousel v-bind="carouselConfig">
    <slide v-for="(student, index) in students" :key="index">
      <div class="carousel__item" :style="'background-image: url(' + student.headshot + ');'">
        <router-link :to="{ name: 'StudentDetails', params: { id: student.id } }">
          {{ student.first_name }} {{ student.last_name }}
        </router-link>
      </div>
    </slide>

    <template #addons>
      <navigation/>
      <pagination/>
    </template>
  </carousel>
</template>

<style scoped>
section.carousel {
  .carousel__item {
    width: 100%;
    display: flex;
    min-height: 200px;
    //color: #fff;
    font-size: 20px;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    background-color: blue;
    background-size: contain;
  }

  .carousel__slide {
    padding: 1px;
  }

  .carousel__pagination {
    list-style: none !important;
  }

  .carousel__pagination-item {
    margin-top: 0 !important;
  }

  .carousel__slide {
    margin-top: 0 !important;
  }
}
</style>
