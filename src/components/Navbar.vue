<template>
  <el-row type="flex" justify="space-between" class="nav">
    <Drawer />

    <!-- logo -->
    <div class="nav-icon">
      <router-link to="/"
        ><img
          src="../assets/android-chrome-512x512.png"
          class="icon"
          style="margin-top: 3px"
      /></router-link>
      <router-link to="/" class="none logo">Wedemy</router-link>
    </div>

    <!-- category dropdown -->
    <div
      class="main-only"
      :style="{ marginTop: '13px', textDecoration: 'none' }"
    >
      <el-dropdown>
        <span class="el-dropdown-link">
          Categories<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/category"
              ><el-dropdown-item>Development</el-dropdown-item>
            </router-link>
            <el-dropdown-item>Finance</el-dropdown-item>
            <el-dropdown-item>Design</el-dropdown-item>
            <el-dropdown-item>Health</el-dropdown-item>
            <el-dropdown-item>Videography</el-dropdown-item>
            <el-dropdown-item>Real estate</el-dropdown-item>
            <el-dropdown-item>Music</el-dropdown-item>
            <el-dropdown-item>Office </el-dropdown-item>
            <el-dropdown-item>IT & Software</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <!-- search bar -->
    <div class="demo-input-suffix main-only" style="width: 40%">
      <el-input
        placeholder="Search something"
        prefix-icon="el-icon-search"
        class="main-only"
        maxlength="20"
        v-model="search"
        clearable
      >
      </el-input>
    </div>

    <!-- log in/ sign up buttons -->
    <div style="margin-top: 13px" class="main-only">
      <el-badge :value="12" class="item">
        <i class="el-icon-shopping-cart-2"></i>
      </el-badge>
    </div>

    <div class="">
      <!-- buttons if user is not logged in -->
      <!-- <router-link to="/login" class="none main-only">
        <button class="btn btn-accent">Log In</button>
      </router-link>

      <router-link to="/signup" class="none main-only">
        <button class="btn btn-accent-outline">Sign Up</button>
      </router-link> -->

      <!-- username if logged in -->

      <div
        class="main-only"
        :style="{ textDecoration: 'none', display: 'flex' }"
      >
        <el-dropdown>
          <el-avatar
            :size="36"
            icon="el-icon-user-solid"
            style="margin-top: 1px"
          ></el-avatar>
          <span class="el-dropdown-link" style="font-size: 16px"> </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>pogchamp79</el-dropdown-item>
              <router-link to="/category"
                ><el-dropdown-item divided>My Account</el-dropdown-item>
              </router-link>
              <el-dropdown-item>My Courses</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </el-row>
</template>

<script lang="ts">
// import { ref } from "vue";
import Drawer from "./Drawer.vue";

export default {
  name: "Navbar",
  components: {
    Drawer,
  },

  data() {
    return {
      search: "",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap");

.nav {
  border-top: 9px solid;
  border-top-color: #00ff29;
  padding: 9px 2% 9px 2%;
  border-style: solid;
  border-width: 9px 0px 0px 0px;
  /* border-image: linear-gradient(90deg, #102610 0%, #00ff29 100%); */
  border-bottom: 1px solid black;
  text-decoration: none;
  box-shadow: 0px 1px 3px grey;
}
.logo {
  font-size: 26px;
  font-weight: 800;
  color: #262a34;
  transition: ease-in-out 0.26s;
  font-family: "Leckerli One", cursive;
}
.icon {
  width: 34px;
  height: 32px;
}
.nav-icon:hover {
  transform: scale(1.1);
  color: #6fb650;
  transition: ease-in-out 0.3s;
}

input {
  padding: 13px;
  padding-left: 10%;
  border: 1px solid grey;
  border-radius: 28px;
  /* height: 1px; */
  width: 500px;
  background-color: inherit;
  color: black;
  outline: none;
}
input::placeholder {
  color: grey;
}
.input-sidebar {
  width: 250px;
}
.pi {
  color: black;
  fill: black;
}

.btn-sidebar {
  width: 120px;
  padding: 6%;
  height: 20px;
}

.display {
  display: none;
}
.nav-link {
  margin-top: 14px;
  padding: 0;
  /* height: 36px; */
  /* width: 0; */
}
.categories {
  border: 0;
  outline: none;
  /* background-color: aqua; */
}
.phone-only {
  display: none;
}

@media only screen and (max-width: 600px) {
  .logo,
  .main-only,
  i,
  .nav-link {
    display: none;
  }

  .phone-only {
    display: block;
  }

  .display {
    display: block;
  }

  .icon {
    margin-top: -10%;
    margin-left: -89%;
  }
}
</style>