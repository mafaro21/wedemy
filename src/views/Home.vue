<template >
  <div class="wrapper">
    <img
      src="../images/al-ghazali.jpg"
      alt="home"
      class="home-image"
      rel="preload"
      as="image"
    />

    <div class="home main-view" style="margin-top: 40px">
      <h1>View some of our finest courses, you sick fuck</h1>

      <div class="home-view" style="margin-top: 20px">
        <h3>Learn this</h3>
        <p>blah blah just buy it</p>

        <!-- grid -->
        <!-- <div class=""> -->
        <el-row type="flex" justify="space-around" style="margin-top: 20px">
          <el-col
            :span="4"
            v-for="(o, index) in 9"
            :key="o"
            :offset="index > 0 ? 2 : 0"
          >
            <el-card
              :body-style="{ padding: '0px' }"
              shadow="hover"
              style="margin-bottom: 13px"
            >
              <img src="../images/1613872731202.png" class="product-img" />
              <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                  <el-button type="text" class="button">Operating</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- </div> -->
      </div>
    </div>

    <!-- <div
      class="p-mt-6 home-section2 p-d-flex p-jc-evenly"
      :style="{ fontWeight: '800' }"
    >
      <div class="main-view p-d-flex p-ai-center">
        <i class="pi pi-credit-card p-mr-1" :style="{ fontSize: '21px' }"></i>
        <p>Affordable</p>
      </div>
      <div class="main-view p-d-flex p-ai-center">
        <i class="pi pi-star-o p-mr-1" :style="{ fontSize: '21px' }"></i>
        <p>High-Rated</p>
      </div>
      <div class="main-view p-d-flex p-ai-center">
        <i class="pi pi-question p-mr-1" :style="{ fontSize: '21px' }"></i>
        <p>blah</p>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
  data() {
    document.title = "Home | Wedemy";
  },
};
</script>

<style>
.home-image {
  width: 100%;
}
.home-view {
  border: 1px solid #dcdacb;
  border-radius: 6px;
  padding: 26px;
}

.home-section2 {
  border: 1px solid #dcdacb;
  width: 100%;
  /* height: 20%; */
  padding: 2%;
}

@media only screen and (max-width: 600px) {
  .home-image {
    width: 100%;
    height: 150px;
  }
}
</style>
