<script setup>
</script>

<template>
  <section class="primary-template">
    <header>
      My Students!
      <nav>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'AllStudents' }">Students</router-link>
        <router-link :to="{ name: 'AboutMe' }">About Me</router-link>
        <router-link :to="{ name: 'ContactMe' }">Contact Me</router-link>
      </nav>
    </header>

    <section class="main">
      <div class="left">
        <slot name="left"/>
      </div>

      <div class="right">
        <slot name="right"/>
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
  background-color: lightgray;

  header {
    nav {
      font-size: 1rem;
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      justify-content: center;

      a {
        background-color: black;
        padding: 1rem;
        color: white;
        text-decoration: none;
        border-radius: 10px;
        border: 1px solid grey;

          &.router-link-active {
          font-weight: bold;
          text-decoration: underline;
          background-color: darkblue;
          border-color: white;
          font-size: 105%;
        }

        &:hover {
          border-color: white;
        }
      }
    }
  }

  section.main {
    max-width: 900px;
    margin: 0 auto;
    background-color: #fff;
    padding: 1rem;
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;

    /* Desktop */
    @media screen and (width > 1000px) {
      display: flex;
      flex-direction: row;

      .left {
        flex-basis: 70%;
        border-right: 1px solid lightgray;
        padding-right: 1rem;
      }

      .right {
        flex-basis: 30%;
      }
    }
  }
}
</style>