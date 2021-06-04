<template >
  <div class="footer p-d-flex p-jc-between p-pt-5">
    <div class="">
      <router-link to="/"
        ><img src="../assets/android-chrome-512x512.png" class="icon p-mr-2"
      /></router-link>
    </div>

    <div>© 2021 Wedemy, Inc.</div>
  </div>
</template>


<script>
export default {
  name: "Footer",
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap");

.footer {
  bottom: 0px;
  position: relative;
  height: 90px;
  padding: 0 10% 0 10%;
  width: 100%;
  /* margin-top: 40px; */
  /* padding-bottom: 25%; */
  border-top: 1px solid rgb(170, 164, 164);
  background-color: #c0c3be;
}
</style>