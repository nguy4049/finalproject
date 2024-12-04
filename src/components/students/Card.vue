<script setup>
import {useRoute, useRouter} from 'vue-router'
import GenericFrame from "../common/GenericFrame.vue";

const router = useRouter()
const route = useRoute()

const fullName = (studentInfo) => {
  return studentInfo.first_name + " " + studentInfo.last_name;
}

const emailString = (str, email) => {
  if (email) {
    return '<a href="mailto:' + email + '">' + str + '</a>'
  }
}

function getAge(birth) {
  const ageMS = Date.parse(Date()) - Date.parse(birth);
  let age = new Date();
  age.setTime(ageMS);
  return age.getFullYear() - 1970;

  // ageMonth = age.getMonth(); // Accurate calculation of the month part of the age
  // ageDay = age.getDate();    // Approximate calculation of the day part of the age
}

const goToStudentDetails = (id) => {
  router.push({
    name: 'StudentDetails',
    params: {
      id: id
    },
  })
}

defineProps({
  studentInfo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="student-card" @click.native="goToStudentDetails(studentInfo.id)">
    <div class="headshot">
      <generic-frame>
        <img :src="studentInfo.headshot" :alt="fullName(studentInfo)"/>
      </generic-frame>
      <p>Age: {{ getAge(studentInfo.birthdate) }}</p>
    </div>
    <div class="details">
      <h4 v-text="fullName(studentInfo)"/>
      <p>Program: {{ studentInfo.program }}</p>
      <p>School: {{ studentInfo.university }}</p>
    </div>
  </section>
</template>

<style scoped>
section.student-card {
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