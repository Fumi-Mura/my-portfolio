<template>
  <v-app>
    <v-container>
      <v-layout justify-center class="mb-10">
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          class="sub__title"
        >
          <v-icon large class="mr-5">mdi-email</v-icon>
          <span>{{ contact }}</span>
        </h2>
      </v-layout>

      <v-layout>
        <p>
          現在転職活動中です。私にできることがあれば何でもさせていただきますので、<br />
          ご興味持っていただけましたら、ご連絡いただけますと幸いです。<br />
          希望勤務地: 東京, 大阪, 愛知 / 希望年収: 250万/年 以上 / 学習中言語:
          Ruby(Rails), Vue.js<br />
          <a href="https://www.wantedly.com/users/136874830">Wantedly</a>
          もありますのでそちらもご覧いただけますと幸いです。
        </p>
      </v-layout>

      <v-card class="contact__box">
        <v-form
          ref="form"
          v-model="contactFormValidation.valid"
          lazy-validation
        >
          <v-text-field
            v-model="contactForm.name"
            :rules="contactFormValidation.nameRules"
            label="名前"
            required
          ></v-text-field>
          <v-text-field
            v-model="contactForm.email"
            :rules="contactFormValidation.emailRules"
            label="メールアドレス"
            required
          ></v-text-field>
          <v-textarea
            v-model="contactForm.contents"
            :rules="contactFormValidation.contentsRules"
            label="内容"
            required
          ></v-textarea>
          <v-btn
            :loading="contactForm.loading"
            :disabled="!contactFormValidation.valid"
            @click="sendMail()"
            block
            large
            outlined
            color="orange darken-4"
            class="mt-4 font-weight-bold"
            >送 信
          </v-btn>
        </v-form>
      </v-card>
      <v-snackbar
        v-model="snackBar.show"
        :color="snackBar.color"
        bottom
        right
        :timeout="6000"
        class="font-weight-bold"
      >
        {{ snackBar.message }}
      </v-snackbar>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import { functions } from "@/plugins/firebase";
import Footer from "@/components/Footer.vue";

export default {
  name: "Contact",
  props: {},
  components: {
    Footer,
  },
  data() {
    return {
      contact: "contact",
      contactForm: {
        name: "",
        contents: "",
        email: "",
        loading: false,
      },
      contactFormValidation: {
        valid: false,
        nameRules: [(v) => !!v || "名前は必須項目です"],
        emailRules: [(v) => !!v || "メールアドレスは必須項目です"],
        contentsRules: [(v) => !!v || "内容は必須項目です"],
      },
      snackBar: {
        show: false,
        color: "",
        message: "",
      },
      methods: {
        sendMail: function () {
          if (this.$refs.form.validate()) {
            this.contactForm.loading = true;
            const mailer = functions.httpsCallable("sendMail");
            mailer(this.contactForm)
              .then(() => {
                this.formReset();
                this.showSnackBar(
                  "success",
                  "お問い合わせありがとうございます。送信完了しました"
                );
              })
              .catch((err) => {
                this.showSnackBar(
                  "error",
                  "送信に失敗しました。時間をおいて再度お試しください"
                );
                console.log(err);
              })
              .finally(() => {
                this.contactForm.loading = false;
              });
          }
        },
        showSnackBar: function (color, message) {
          this.snackBar.message = message;
          this.snackBar.color = color;
          this.snackBar.show = true;
        },
        formReset: function () {
          this.$refs.form.reset();
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.contact__box {
  padding: 20px;
  margin-bottom: 300px;
}
</style>
