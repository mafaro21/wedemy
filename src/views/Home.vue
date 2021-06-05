<template >
  <div class="wrapper">
    <img
      src="../images/al-ghazali.jpg"
      alt="home"
      class="home-image"
      rel="preload"
      as="image"
    />

    <div class="home main-view p-mt-4">
      <h1>View some of our finest courses, you sick fuck</h1>

      <div class="home-view p-mt-3">
        <h3>Learn this</h3>
        <p>blah blah just buy it</p>

        <div class="p-grid p-jc-start">
          <Card class="p-mt-3 card p-col-12 p-md-3 p-lg-2 p-mr-5">
            <template #header>
              <img
                alt="user header"
                class="product-img"
                src="../images/1613872731202.png"
              />
            </template>
            <template #title>
              <div class="card-title p-mt-2">How to hit a fat blunt</div>
            </template>
            <template #subtitle>
              <div class="card-tutor">Elon Musk</div>
            </template>
            <template #content>
              <div class="card-price">$$$</div>
            </template>
          </Card>
        </div>
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
  <!-- <Footer /> -->
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
