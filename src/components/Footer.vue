<template >
  <el-row type="flex" justify="space-between" class="footer">
    <div style="padding-top: 5px">
      <router-link to="/"
        ><img src="../assets/android-chrome-512x512.png" class="icon"
      /></router-link>
    </div>

    <div>© 2021 Wedemy, Inc.</div>
  </el-row>
</template>


<script>
export default {
  name: "Footer",
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap");

.footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 90px;
  padding: 2% 10% 3% 10%;
  border-top: 1px solid rgb(170, 164, 164);
  background-color: #c0c3be;
}
</style>