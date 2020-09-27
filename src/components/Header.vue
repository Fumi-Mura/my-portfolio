<template>
  <v-app class="header">
    <v-container>
      <v-layout justify-center>
        <div class="header__text">
          <div class="header__text__typer">
            <vue-typer
              text="Thank you for visitting my portfolio"
              repeat="0"
              type-delay="90"
            ></vue-typer
            ><br />
          </div>
          <div
            class="header__text__fade"
            data-aos="fade"
            data-aos-duration="2000"
            data-aos-delay="3000"
          >
            <p class="header__text__job">web engineer</p>
            <span class="header__text__line"></span>
            <div class="header__text__scroll">
              <v-btn color="white" outlined class="">
                <font-awesome-icon
                  :icon="['fas', 'angle-down']"
                  class="mr-4"
                  style="font-size: 1.5rem"
                />
                <span>press each buttons</span>
              </v-btn>
            </div>
          </div>
        </div>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Header",
  props: {},
  components: {
    VueTyper,
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap");

.header {
  background: radial-gradient(#517fa4, #001320);
  height: 100vh;
  &__text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &__typer {
      font-family: "Nunito", sans-serif;
      font-size: 3rem;
      margin: 0 0 30px 0;
    }
    &__line {
      border-bottom: 5px solid #ffaa3b;
      width: 80px;
      display: block;
      margin: 0 auto 150px;
      border-radius: 10px;
    }
  }
}
</style>
