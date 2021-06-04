<template>
  <div class="main-view p-pt-5 login-view wrapper">
    <h2>Create An Account!</h2>

    <div class="p-pt-4">
      <InputText type="text" v-model="name" placeholder="Name" class="field" />
    </div>

    <div class="p-mt-2">
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
      <button class="btn-accent p-mt-2 field login-btn">Sign Up</button>
    </div>

    <div class="p-pt-3">
      Already have an account?
      <router-link to="/login" class="none" :style="{ fontWeight: '800' }"
        >LogIn</router-link
      >
    </div>
  </div>
</template>


<script>
export default {
  data() {
    document.title = "Signup | Wedemy";
  },
};
</script>


<style >
</style>