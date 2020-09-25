<template>
  <v-app class="mt-10 pt-10">
    <v-container>
      <v-layout justify-center class="mb-10">
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          style="font-size: 4rem"
        >
          <v-icon large class="mr-5">mdi-school</v-icon>
          <span>{{ skills }}</span>
        </h2>
      </v-layout>

      <h3 class="subtitle">languages</h3>
      <v-layout justify-space-around wrap class="mb-10">
        <v-flex
          data-aos="fade"
          v-for="language in languages"
          :key="language.id"
          class="center"
        >
          <font-awesome-icon
            :icon="{ prefix: language.prefix, iconName: language.iconName }"
            class="icon mb-8"
            style="font-size: 8rem"
          /><br />
          <span class="grey--text text--darken-2">{{ language.name }}</span>
        </v-flex>
      </v-layout>

      <h3 class="subtitle">frameworks</h3>
      <v-layout justify-space-around wrap class="mb-10">
        <v-flex
          data-aos="fade"
          v-for="framework in frameworks"
          :key="framework"
          class="center"
        >
          <font-awesome-icon
            :icon="{ prefix: framework.prefix, iconName: framework.iconName }"
            class="icon mb-8"
            style="font-size: 8rem"
          /><br />
          <span class="grey--text text--darken-2">{{ framework.name }}</span>
        </v-flex>
      </v-layout>

      <h3 class="subtitle">others</h3>
      <v-layout justify-space-around wrap class="mb-10">
        <v-flex
          data-aos="fade"
          v-for="other in others"
          :key="other"
          class="center"
        >
          <font-awesome-icon
            :icon="{ prefix: other.prefix, iconName: other.iconName }"
            class="icon mb-8"
            style="font-size: 8rem"
          /><br />
          <span class="grey--text text--darken-2">{{ other.name }}</span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Skills",
  props: {},
  data() {
    return {
      skills: "skills",
      languages: [
        {
          id: 1,
          prefix: "fas",
          iconName: "code",
          name: "HTML5/CSS3/Sass",
        },
        {
          id: 3,
          prefix: "fab",
          iconName: "js-square",
          name: "JavaScript",
        },
        {
          id: 4,
          prefix: "far",
          iconName: "gem",
          name: "Ruby",
        },
      ],
      frameworks: [
        {
          id: 1,
          prefix: "fas",
          iconName: "gem",
          name: "Ruby on rails",
        },
        {
          id: 2,
          prefix: "fab",
          iconName: "vuejs",
          name: "Vue.js",
        },
      ],
      others: [
        {
          id: 1,
          prefix: "fab",
          iconName: "aws",
          name: "AWS",
        },
        {
          id: 2,
          prefix: "fab",
          iconName: "docker",
          name: "Docker",
        },
        {
          id: 3,
          prefix: "far",
          iconName: "circle",
          name: "CircleCI",
        },
        {
          id: 4,
          prefix: "fab",
          iconName: "github",
          name: "Git",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.subtitle {
  text-align: center;
  font-size: 3rem;
  color: gray;
  margin-bottom: 10px;
}
.center {
  display: block;
  text-align: center;
}
</style>
