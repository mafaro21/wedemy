<template>
  <div class="main-view login-view wrapper">
    <h2>Create An Account!</h2>

    <form>
      <div style="margin-top: 20px">
        <el-input
          placeholder="Name"
          v-model="name"
          class="field"
          clearable
        ></el-input>
      </div>

      <div style="margin-top: 8px">
        <el-input
          placeholder="E-mail"
          v-model="email"
          class="field"
          clearable
        ></el-input>
      </div>

      <div style="margin-top: 8px">
        <el-input
          placeholder="Password"
          v-model="password"
          class="field"
          show-password
        ></el-input>
      </div>

      <div style="margin-top: 8px">
        <button type="submit" class="btn-accent field login-btn">
          Sign Up
        </button>
      </div>
    </form>

    <div style="margin-top: 13px">
      Already have an account?
      <router-link to="/login" class="none" :style="{ fontWeight: '800' }"
        >LogIn</router-link
      >
    </div>
  </div>
</template>


<script>
import { ref } from "vue";

export default {
  data() {
    document.title = "Signup | Wedemy";
  },
  setup() {
    return {
      name: ref(""),
      email: ref(""),
      password: ref(""),
    };
  },
};
</script>


<style >
</style>