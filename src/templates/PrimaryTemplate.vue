<script setup>
</script>

<template>
  <section class="primary-template">
    <header>
      <img src="../assets/Red_circle.svg" alt="Red_circle" />
      <nav>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Event' }">Event</router-link>
        <router-link :to="{ name: 'AboutMe' }">About</router-link>
        <router-link :to="{ name: 'Wildlife' }">Wildlife</router-link>
        <router-link :to="{ name: 'Resources' }">Resources</router-link>
      </nav>
    </header>

    <section class="main">
      <div class="object1">
        <slot name="object1"/>
      </div>

      <div class="object2">
        <slot name="object2"/>
      </div>
    </section>

    <footer>
      <div class="contents">
        <div>Go to top of page</div>
        <div>This year</div>
      </div>
    </footer>
  </section>
</template>

<style scoped>
section.primary-template {
  /* Mobile first */
  @media screen and (min-width: 200px) {
    background-color: #EDDFC2;

    header {
      background-color: #EDDFC2;

      nav {

        display: flex;
        margin-top: 1rem;
        justify-content: center;

        a {
          /*background-color: black;*/
          padding: 1rem;
          color: #E93F1E;
          text-decoration: none;
          /*border-radius: 10px;
        border: 1px solid grey;*/

        }

        &:hover {
          border-color: white;
        }
      }
    }
  }
@media screen and (width < 700px) {
  header {
    img {
      width: 13%;
      height: auto;
      justify-content: center;
    }
  }
}
  section.main {
    max-width: 900px;
    margin: 0 auto;
    /*background-color: #fff;*/
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid lightgray;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
    /* Tablet */
@media screen and (width > 700px) {
      header {
        img {
          width: 6%;
        }
        nav {
          font-size: 1.5rem;
          gap: 1rem;
        }
      }
      section.main {
        display: block;
        flex-direction: row;

        }

    }
    /* Desktop */
@media screen and (width > 1000px) {
      flex-direction: row;
header {
  img {
    width: 3%;
  }
  nav {
    gap: 3rem;
    font-size: 2rem;
  }
  div.object1 {

  }
  img {
    width: 5%;
  }
}
}

</style>