<template >
  <div class="main-view p-pt-5 login-view wrapper">
    <h2>Login And Begin Learning!</h2>

    <form>
      <div class="p-pt-4">
        <InputText
          type="text"
          v-model="email"
          placeholder="Email"
          class="field"
        />
      </div>

      <div class="p-mt-2">
        <Password v-model="password" placeholder="Password" class="field" />
      </div>

      <div>
        <button type="submit" class="btn-accent p-mt-2 field login-btn">
          Log In
        </button>
      </div>
    </form>

    <div class="p-pt-3">
      Don't have an account?
      <router-link to="/signup" class="none" :style="{ fontWeight: '800' }"
        >SignUp</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    document.title = "Login | Wedemy";
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