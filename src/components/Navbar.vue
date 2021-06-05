<template>
  <div class="nav p-d-flex p-jc-between p-ai-center">
    <Sidebar v-model:visible="visibleLeft">
      <router-link to="/login" class="none">
        <button class="btn btn-accent btn-sidebar p-mr-2">Log In</button>
      </router-link>

      <router-link to="/signup" class="none">
        <button class="btn btn-accent-outline btn-sidebar">Sign Up</button>
      </router-link>

      <span class="p-input-icon-left p-mt-4">
        <input
          type="search"
          placeholder="Search for anything"
          maxlength="20"
          class="input-sidebar"
        />
      </span>
    </Sidebar>

    <div class="display" @click="visibleLeft = true">
      <Button icon="pi pi-align-justify" />
    </div>

    <!-- logo -->
    <div class="p-d-flex p-jc-start p-mt-2 nav-icon">
      <router-link to="/"
        ><img src="../assets/android-chrome-512x512.png" class="icon p-mr-2"
      /></router-link>
      <router-link to="/" class="p-mr-3 none logo">Wedemy</router-link>
    </div>

    <div class="main-only">
      <MegaMenu :model="items" class="categories p-d-flex p-jc-around" />
    </div>

    <span class="p-input-icon-left">
      <!-- <i class="pi pi-search" /> -->
      <input
        type="search"
        placeholder="Search for anything"
        maxlength="20"
        class="main-only"
      />
    </span>

    <!-- log in/ sign up buttons -->
    <div class="p-d-flex">
      <!-- buttons if user is not logged in -->
      <router-link to="/login" class="none main-only">
        <button class="btn btn-accent p-mr-2">Log In</button>
      </router-link>

      <router-link to="/signup" class="none main-only">
        <button class="btn btn-accent-outline p-mr-6">Sign Up</button>
      </router-link>

      <!-- username if logged in -->
      <!-- <i class="pi pi-user p-mr-1"></i>
      <p>pogchamp79</p> -->
    </div>
  </div>
</template>

<script lang="ts">
// import { ref } from "vue";

export default {
  name: "Navbar",

  data() {
    return {
      items: [
        {
          label: "Categories",
          items: [
            [
              {
                // label: "Category 1",
                items: [
                  { label: "Development", to: "/category" },
                  { label: "Finance", to: "/category" },
                  { label: "Design ", to: "/category" },
                  { label: "Health ", to: "/category" },
                  { label: "Videography ", to: "/category" },
                  { label: "Real estate", to: "/category" },
                  { label: "Music", to: "/category" },
                  { label: "Office ", to: "/category" },
                  { label: "IT & Software ", to: "/category" },
                ],
              },
            ],
          ],
        },
      ],

      //   methods: {
      //     toggle(event) {
      //         this.refs.menu.toggle(event);
      //     }
      // },

      visibleLeft: false,
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

@media only screen and (max-width: 600px) {
  .logo,
  .main-only,
  i,
  .nav-link {
    display: none;
  }

  .display {
    display: block;
  }

  .icon {
    margin-top: -10%;
    margin-left: 39%;
  }
}
</style>