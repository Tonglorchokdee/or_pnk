<template>
  <v-row no-gutters>
    <v-col cols="12" sm="12" md="5" lg="5">
      <v-sheet class="d-flex justify-center align-center h-100">
        <div class="wrapper-login">
          <a class="d-flex justify-center mb-10 pb-5">
            <img src="/logo.png" height="54" />
          </a>
          <div class="my-5" ref="form">
            <v-text-field label="Username" v-model="login.username" outlined prepend-inner-icon="mdi-account"
              :rules="[$rules.required]" />
            <v-text-field label="Password" v-model="login.password" outlined prepend-inner-icon="mdi-lock"
              type="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1"
              :rules="[$rules.required]" />
          </div>
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error, index in errors" :key="`error-${index}`">{{ error }}</li>
          </ul>
          </p>
          <div>
            <v-btn block elevation="2" rounded x-large type="submit" @click="userLogin" color="primary">เข้าสู่ระบบ
            </v-btn>
          </div>
          <p class="pt-5 text-center">
            &copy; Copyright {{ new Date().getFullYear() }}. All Rights Reserved.
          </p>
        </div>
      </v-sheet>
    </v-col>
    <v-col class="d-sm-none d-md-block" cols="12" sm="12" md="7" lg="7">
      <div>
        <v-img class="bg-login" lazy-src="/bg-login.jpg" src="/bg-login.jpg"></v-img>
      </div>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "login",
  title: "เข้าสู่ระบบ",
  layout: "default",
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      show1: false,
      password: 'Password',
      errors: [],
    };
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        if (response.status == 200) {
          await this.$auth.setUserToken(
            response.data.access,
            response.data.refresh
          );
          this.$auth.setUser(
            JSON.parse(
              Buffer.from(
                response.data.access.split(".")[1],
                "base64"
              ).toString("utf8")
            )
          );
          this.$router.push("/");
        } else {
          this.errors.push("some thing wrong");
        }
      } catch (err) {
        this.errors.push("some thing wrong");
      }
    },
  },
};
</script>

<style>
.logo {
  margin: auto;
  display: block;
}

.h-100 {
  height: 100vh;
}

.wrapper-login {
  width: 100%;
  padding: 2rem;
}

.bg-login {
  max-height: 100vh;
}

@media (min-width:768px) {
  .wrapper-login {
    width: 70% !important;
    padding: 1rem;
  }
}
</style>