<template>
  <v-app>
    <v-container>
    <div class="about">
      <h1>{{ aboutMe }}</h1>
    </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'About',
  props: {
    data: {
      aboutMe: 'About me'
    },
  },
}

</script>

<style scoped>
</style>
