<template>
  <v-app>
    <div id="app">
      <!-- <img alt="header" src="./assets/laptop.jpg"> -->
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Works from './components/Works.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    About,
    Skills,
    Works,
    Contact,
    Footer,
  }
}
</script>

<style lang="scss">
  @import "./css/reset.scss";
</style>