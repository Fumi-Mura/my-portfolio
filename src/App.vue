<template>
  <v-app id="app">
    <v-container class="nav">
      <v-layout>
        <v-bottom-navigation :value="activeBtn" grow color="teal" app>
          <router-link
            v-for="item in items"
            :key="item.id"
            :to="'/' + item.url"
            tag="a"
          >
            <v-btn class="">
              <span>{{ item.name }}</span>
              <v-icon>{{ item.iconName }}</v-icon>
            </v-btn>
          </router-link>
        </v-bottom-navigation>
      </v-layout>
    </v-container>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1,
      items: [
        {
          id: 1,
          url: "",
          name: "home",
          iconName: "mdi-home",
        },
        {
          id: 2,
          url: "About",
          name: "about",
          iconName: "mdi-account-circle",
        },
        {
          id: 3,
          url: "Works",
          name: "works",
          iconName: "mdi-hammer",
        },
        {
          id: 4,
          url: "Skills",
          name: "skills",
          iconName: "mdi-school",
        },
        {
          id: 5,
          url: "Contact",
          name: "contact",
          iconName: "mdi-email",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./css/reset.scss";
.nav {
  opacity: 0.7;
  position: fixed;
  bottom: 45px;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 100;
  padding: 100px;
  line-height: 56px;
  padding: 0px;
}
.sub__title {
  font-size: 4rem;
  color: #565656;
}
</style>