<template>
  <v-app>
    <div class="header">
        <div class="header__text">
          <div class="header__text__typer">
            <vue-typer text="Thank you for visitting my portfolio" repeat="0"></vue-typer><br>
            <vue-typer text="Please scroll down" eraseStyle="backspace" pre-type-delay=2500></vue-typer>
          </div>
          <div class="header__text__scroll">
            <v-btn color="white" outlined>
              <v-icon left>mdi-arrow-down</v-icon>
              <span>press button</span>
            </v-btn>
          </div>
        </div>
    </div>
  </v-app>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: 'Header',
  props: {
    },
  components: {
    VueTyper
  },
}
</script>

<style scoped lang="scss">
.header {
  // background: url( "../assets/laptop.jpg" ) 0 100px / 100% 100% no-repeat;
  // background: radial-gradient(#e7f0fd, #accbee);
  background: radial-gradient(#517fa4, #243949);
  height : 100vh;
  &__text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &__typer {
      margin: 0 0 50px 0;
    }
  }
}
</style>
