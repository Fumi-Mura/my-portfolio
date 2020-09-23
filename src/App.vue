<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header msg="Welcome to Your Vue.js App"/>
    <About></About>
    <Skills></Skills>
    <Works></Works>
    <Contact></Contact>
    <Footer></Footer>
  </div>
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
#app {
  // width: 100vw;
  // height: 100vh;
  // position: relative;
}

@import "./css/reset.scss";
</style>
