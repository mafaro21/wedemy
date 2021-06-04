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

        <div class="p-d-flex">
          <Card class="p-mt-3 card p-mr-3">
            <template #header>
              <img
                alt="user header"
                class="product-img"
                src="../images/1613872731202.png"
              />
            </template>
            <template #title> How to hit a fat blunt </template>
            <template #subtitle>Elon Musk</template>
            <template #content> description </template>
          </Card>
          <!-- <Card class="p-mt-3 card p-mr-3">
          <template #header>
            <img
              alt="user header"
              class="product-img"
              src="../images/1613872731202.png"
            />
          </template>
          <template #title> How to hit a fat blunt </template>
          <template #subtitle>Elon Musk</template>
          <template #content> description </template>
        </Card> -->
        </div>
      </div>
    </div>

    <div
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
        <p>i don't know what else</p>
      </div>
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Footer,
  },
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
.product-img {
  width: 6px;
  height: 190px;
  transition: ease-in-out 0.6s;
}
.product-img:hover {
  transform: scale(1.2);
}
.card {
  /* width: 19.5rem; */
  width: 17.3rem;
  transition: ease-in-out 0.3s;
  overflow: hidden;
}
.card:hover {
  cursor: pointer;
  box-shadow: 5px 5px 5px grey;
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
    height: 100px;
  }
}
</style>
