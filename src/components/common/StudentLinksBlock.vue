<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import CtaButton from "./CtaButton.vue";

const router = useRouter()

const searchTerm = ref('')

const submit = () => {
  router.push({
    name: 'StudentsSearchResults',
    query: {
      for: searchTerm.value
    }
  })
}
</script>

<template>
  <cta-button>
    <router-link :to="{ name: 'AllStudents' }">
      All Students
    </router-link>
  </cta-button>

  <cta-button>
    <router-link :to="{ name: 'AllStudentsByLevel', params: { level: 'undergraduate' } }">
      All undergrads
    </router-link>
  </cta-button>

  <cta-button>
    <router-link :to="{ name: 'AllStudentsByLevel', params: { level: 'graduate' } }">
      All graduate students
    </router-link>
  </cta-button>

  <div class="search-form">
    <div>Search by name</div>
    <div>
      <form @submit.prevent="submit">
        <input type="text" name="searchTerm" v-model="searchTerm"/>
        <button type="submit">Go</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.cta-button:has(.router-link-exact-active) :deep(.frame) {
  background-color: black;
}

.search-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  form {
    display: flex;
    gap: 1rem;
  }
}

.router-link-exact-active {
  //border: 10px solid black;
}
</style>