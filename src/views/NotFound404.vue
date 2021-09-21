<template>
  <div class="widescreen">
    <h1 style="color: black; margin-top: 50px">404 eRr0r</h1>
    <h2 style="color: black">Hmm, You seem to be lost. &#9785;</h2>
    <el-button type="success" @click="goHome()">Go Home?</el-button>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.replace("/");
    },
  },
};
</script>
<style>
.widescreen {
  margin: 0px auto;
  text-align: center;
  width: 90%;
  height: 70vh;
}

</style>