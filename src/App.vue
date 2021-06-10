<template id="app">
  <!-- <el-scrollbar height="400px" > -->
  <Navbar />
  <router-view />
  <Footer />
  <!-- </el-scrollbar> -->
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
  /* background-color: #f8f7f7; */
}

@import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;600;800&display=swap");
/* @import url("https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap"); */

#app {
  font-family: "Public Sans", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #262a34;
  min-height: 100vh;
  max-width: 100vw;
  /* margin-bottom: 90px; */
}
.wrapper {
  min-height: 91vh;
  margin-bottom: 90px;
}

/* this is basically like container in bootstrap */
.main-view {
  /* background-color: black; */
  padding: 0 10% 0 10%;
}
/* button properties for navbar */
.btn {
  padding: 1%;
  height: 40px;
  width: 100px;
  outline: none;
  border-radius: 8px;
  font-weight: 600;
  border: 0;
}
.btn:hover,
.login-btn:hover {
  cursor: pointer;
  border: 0;
}

/* button colors */
.btn-accent {
  background-color: #6fb650;
}
.btn-accent:hover {
  background-color: #619f46;
}
.btn-accent-outline {
  border: 0;

  background-color: #dbedd3;
}
.btn-accent-outline:hover {
  background-color: #f0fff0;
  border: 2px solid #6fb650;
}

/* button for login and signup */
.login-btn {
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  border: 0;
}
.none {
  text-decoration: none;
}
/* card */
.card {
  /* width: 19.5rem; */
  /* width: 13.9rem; */
  transition: ease-in-out 0.3s;
  overflow: hidden;
  /* padding: 0.5rem; */
}
.card:hover {
  cursor: pointer;
  box-shadow: 5px 5px 5px grey;
}
.card-title {
  font-size: 19px;
  font-weight: 600;
}
.card-tutor {
  color: #636362;
}
/* product images in a catalog */
.product-img {
  width: auto;
  height: 140px;
  transition: ease-in-out 0.6s;
}
.product-img:hover {
  transform: scale(1.2);
}

.phone-only {
  display: none;
}

@media only screen and (max-width: 600px) {
  .btn {
    width: 80px;
  }

  .phone-only {
    display: block;
  }
}
</style>
