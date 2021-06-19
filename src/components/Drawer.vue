<template>
  <!-- <Drawer /> -->
  <!-- button for sideview, only shows on smaller screens -->
  <div class="phone-only">
    <el-button @click="drawer = true" type="primary" class="phone-only">
      <i class="el-icon-s-unfold phone-only"></i>
    </el-button>
  </div>

  <!-- the sideview -->
  <el-drawer
    size="70%"
    title="I am the title"
    v-model="drawer"
    :with-header="false"
    :direction="direction"
  >
    <!-- side searchbar -->
    <div style="padding: 16px; margin-top: 15px">
      <el-input
        placeholder="Type something"
        prefix-icon="el-icon-search"
        class="main-only"
        maxlength="20"
        v-model="search"
        clearable
      >
      </el-input>

      <!-- side login/signup buttons -->
      <el-row type="flex" justify="space-around" style="margin-top: 10px">
        <router-link to="/login" class="none">
          <button class="btn btn-accent">Log In</button>
        </router-link>

        <router-link to="/signup" class="none">
          <button class="btn btn-accent-outline">Sign Up</button>
        </router-link>
      </el-row>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: "Drawer",

  data() {
    return {
      drawer: false,
      direction: "ltr",
    };
  },
};
</script>

<style>
.phone-only {
  text-align: center;
}
</style>