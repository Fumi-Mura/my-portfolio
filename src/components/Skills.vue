<template>
  <v-app class="mb-10">
    <v-container>
      <v-layout justify-center class="mb-10">
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          class="sub__title"
        >
          <v-icon large class="mr-5">mdi-school</v-icon>
          <span>{{ skills }}</span>
        </h2>
      </v-layout>

      <h3 class="skils__title">languages</h3>
      <v-layout justify-space-around wrap class="mb-10">
        <v-flex
          data-aos="fade"
          data-aos-delay="200"
          v-for="language in languages"
          :key="language.id"
          class="center"
        >
          <font-awesome-icon
            :icon="{ prefix: language.prefix, iconName: language.iconName }"
            class="icon mb-8"
            style="font-size: 6rem"
          /><br />
          <span class="grey--text skills__name">{{ language.name }}</span>
        </v-flex>
      </v-layout>

      <h3 class="skils__title">frameworks</h3>
      <v-layout justify-space-around wrap class="mb-10">
        <v-flex
          data-aos="fade"
          data-aos-delay="200"
          v-for="framework in frameworks"
          :key="framework.id"
          class="center"
        >
          <font-awesome-icon
            :icon="{ prefix: framework.prefix, iconName: framework.iconName }"
            class="icon mb-8"
            style="font-size: 6rem"
          /><br />
          <span class="grey--text skills__name">{{ framework.name }}</span>
        </v-flex>
      </v-layout>

      <h3 class="skils__title">others</h3>
      <v-layout justify-space-around wrap class="mb-10">
        <v-flex
          data-aos="fade"
          data-aos-delay="200"
          v-for="other in others"
          :key="other.id"
          class="center"
        >
          <font-awesome-icon
            :icon="{ prefix: other.prefix, iconName: other.iconName }"
            class="icon mb-8"
            style="font-size: 6rem"
          /><br />
          <span class="grey--text skills__name">{{ other.name }}</span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
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
.skils__title {
  text-align: center;
  font-size: 2.5rem;
  color: gray;
  margin-bottom: 10px;
}
.center {
  display: block;
  text-align: center;
}
.skills__name {
  font-size: 1.8rem;
}
</style>
