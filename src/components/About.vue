<template>
  <v-app class="mt-10">
    <v-container>
      <v-layout justify-center class="mb-10">
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          class="sub__title"
        >
          <v-icon large class="mr-5">mdi-account-circle</v-icon>
          <span>{{ aboutMe }}</span>
        </h2>
      </v-layout>
      <v-layout justify-space-around raw wrap class="mb-10">
        <img
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="bottom-bottom"
          :src="myImage"
          alt="自己紹介用の写真"
          class="myImage"
        />
        <table
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-anchor-placement="bottom-bottom"
          class="mt-10"
        >
          <tbody v-for="item in items" :key="item" class="profile__table">
            <tr style="display: block" class="pb-5">
              <th class="pr-10">{{ item.title }}</th>
              <td>{{ item.content }}</td>
            </tr>
          </tbody>
        </table>
      </v-layout>
      <v-layout justify-center class="profile__text">
        <v-flex xs10>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            大学卒業後、大手自動車部品製造会社で足回りパーツの設計・試作・評価を主に担当。
            就業中は作業効率やムダを無くすことを意識し、図面を書く時間の削減や、
            現場で大幅に時間を取っていたNG部品の選別作業を一部不要にするなどで事業に貢献。
          </p>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            23~24歳の間に身近な人の死が重なり、本当にやりたいことは何かを考えるようになる。<br />
            離職期間が長くなるが就職後に行くことは難しいと考え、自らの可能性を広げるためにセブ島に語学留学。<br />
            苦手な英語であったが毎日12時間の勉強を継続し、1ヶ月でTOEICの点数を300→650にUP。<br />
            学校独自の実戦形式による英会話力テストも、周りの生徒と比べて一番の伸びを果たす。
          </p>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            前職で感じていた「自分の携わる商品やサービスを意識する人の少なさ」に対して、
            インターネットを介したサービスなら沢山の人に届くと思い、帰国後にプログラミングの独学を開始。<br />
            HTMLとCSSで簡単なWEBページを作成し、自分の書いたコードが画面に表示されたことに感動する。<br />
            また、勉強したことが形になって見える部分もやる気に繋がりプログラミングにのめり込む。
          </p>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            Railsでアプリケーションを作成し現在就職活動中。<br />
            就職活動と並行でVueを勉強し、アウトプットとして自己紹介用のサイトを作成。
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      aboutMe: "About me",
      myImage: require("../assets/my_image.jpg"),
      items: [
        {
          id: 1,
          title: "名前",
          content: "村松 史章 (むらまつ ふみあき)",
        },
        {
          id: 2,
          title: "生年月日",
          content: "1994/8/7 (26歳)",
        },
        {
          id: 3,
          title: "出身地",
          content: "愛知県",
        },
        {
          id: 3,
          title: "趣味",
          content: "読書、旅行、バスケットボール",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.myImage {
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0px 0px 5px gray;
  width: 300px;
  height: 300px;
  object-fit: cover;
}
.profile__table {
  font-size: 1.4rem;
  color: #565656;
}
.profile__text {
  font-size: 1.2rem;
  color: gray;
  margin-bottom: 100px;
}
</style>
