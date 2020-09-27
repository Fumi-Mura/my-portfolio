<template>
  <v-app>
    <v-container class="nav">
      <v-layout>
        <v-bottom-navigation :value="activeBtn" grow color="teal" app>
          <v-btn
            v-for="item in items"
            :key="item.id"
            @click="$vuetify.goTo(item.href)"
            v-on="on"
          >
            <span>{{ item.name }}</span>
            <v-icon>{{ item.iconName }}</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  // name: "Nav",
  props: {},
  data() {
    return {
      activeBtn: 1,
      items: [
        {
          id: 1,
          href: "https://www.google.com",
          name: "top",
          iconName: "mdi-home",
        },
        {
          id: 2,
          href: "https://www.google.com",
          name: "about",
          iconName: "mdi-account-circle",
        },
        {
          id: 3,
          href: "https://www.google.com",
          name: "works",
          iconName: "mdi-hammer",
        },
        {
          id: 4,
          href: "https://www.google.com",
          name: "skills",
          iconName: "mdi-school",
        },
        {
          id: 5,
          href: "https://www.google.com",
          name: "contact",
          iconName: "mdi-email",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.nav {
  opacity: 0.7;
  position: fixed;
  bottom: 55px;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 100;
}
</style>
