<template >
  <div class="main-view login-view wrapper">
    <h2>Login And Begin Learning!</h2>

    <form>
      <div style="margin-top: 20px">
        <el-input
          placeholder="E-mail"
          v-model="email"
          class="field"
          clearable
        ></el-input>
      </div>

      <div style="margin-top: 6px">
        <el-input
          placeholder="Password"
          v-model="password"
          class="field"
          show-password
        ></el-input>
      </div>

      <div style="margin-top: 6px">
        <button type="submit" class="btn-accent field login-btn">Log In</button>
      </div>
    </form>

    <div class="">
      Don't have an account?
      <router-link to="/signup" class="none" :style="{ fontWeight: '800' }"
        >SignUp</router-link
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    document.title = "Login | Wedemy";
  },
  setup() {
    return {
      email: ref(""),
      password: ref(""),
    };
  },
};
</script>

<style >
.login-view {
  margin-top: 4%;
  text-align: center;
}
.field {
  width: 350px;
}
</style>