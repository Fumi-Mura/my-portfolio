<template>
  <v-footer dark padless fixed class="footer">
    <v-card class="flex" flat tile>
      <v-card-title class="blue-grey darken-2">
        <strong class="subheading">Thank you for watching this site !</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon.id"
          class="mx-4"
          height="110"
          dark
          icon
        >
          <a :href="icon.href">
            <v-icon large color="grey lighten-5">{{ icon.iconName }}</v-icon>
          </a>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-1 white--text text-center">
        <small>
          Copyright - {{ new Date().getFullYear() }} - Fumiaki Muramatsu
        </small>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          id: 1,
          href: "https://twitter.com/Fumy72676433",
          iconName: "mdi-twitter",
        },
        {
          id: 2,
          href: "https://m.facebook.com/profile.php",
          iconName: "mdi-facebook",
        },
        {
          id: 3,
          href: "https://www.instagram.com/miiiifuuuu",
          iconName: "mdi-instagram",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.subheading {
  font-size: 1.6rem;
}
</style>
