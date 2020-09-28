<template>
  <v-app>
    <v-container>
      <v-layout justify-center class="mb-10">
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          class="sub__title"
        >
          <v-icon large class="mr-5">mdi-hammer</v-icon>
          <span>{{ works }}</span>
        </h2>
      </v-layout>
      <v-layout justify-space-around raw wrap class="mb-10">
        <v-flex
          data-aos="fade"
          data-aos-delay="200"
          mb-10
          ml-5
          mr-5
          v-for="item in items"
          :key="item.id"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" width="500">
              <v-img :aspect-ratio="16 / 9" :src="item.image">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%"
                  >
                    <p class="hoverDescription">{{ item.hoverDescription }}</p>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text style="position: relative">
                <v-btn
                  absolute
                  color="orange"
                  class="white--text"
                  fab
                  right
                  top
                  large
                  :href="item.github"
                >
                  <font-awesome-icon
                    :icon="['fab', 'github']"
                    style="font-size: 40px"
                  />
                </v-btn>
                <div class="font-weight-light grey--text title mb-2">
                  {{ item.useTech }}
                </div>
                <h3 class="display-1 font-weight-light orange--text mb-2">
                  {{ item.title }}
                </h3>
                <a class="font-weight-light title mb-2" :href="item.url">
                  {{ item.url }}<br />
                </a>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      works: "works",
      iconPosition: "right: 85px",
      items: [
        {
          id: 1,
          image: require("../assets/ones-place-top.jpg"),
          hoverDescription: `趣味で繋がるコミュニティ作成・参加サービスです。
開発・本番環境をDockerで構築し、インフラにAWSを用いてデプロイし、CircleCIでテストを自動化しています。
全て独学で作成し転職用のPortfolioとして使用しています。Githubに詳細がありますので是非御覧ください。`,
          github: "https://github.com/Fumi-Mura/circle_app",
          url: "https://www.ones-place.xyz",
          title: "Ones place",
          useTech: "Rails + AWS + Docker + CircleCI",
        },
        {
          id: 2,
          image: require("../assets/my-portfolio-top.jpg"),
          hoverDescription: `現在ご覧いただいているサイトになります。
実務ではフロントエンド言語の知識も必要と感じ、転職活動と並行しSPAの自己紹介サイトを作成しました。
Githubのプルリクを活用し、チーム開発を意識してタスク毎にブランチをきって進めました。`,
          github: "https://github.com/Fumi-Mura/my-portfolio",
          url: "https://my-portfolio-998ce.web.app",
          title: "My profile",
          useTech: "Vue.js + Firebase",
        },
        {
          id: 3,
          image: require("../assets/laptop.jpg"),
          hoverDescription: `comming soon`,
          github: "https://github.com/Fumi-Mura",
          // url: '',
          title: "Rails + Vueで新しいサービスを作成予定です",
          useTech: "Rails + Vue",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.hoverDescription {
  font-size: 2rem;
  white-space: pre-wrap;
  word-wrap: break-word;
}
@media screen and (max-width: 640px) {
  .hoverDescription {
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
}
</style>
