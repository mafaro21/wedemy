<template >
  <div class="wrapper">
    <h2 class="main-view p-mt-5">${category}</h2>

    <div class="main-view p-mt-4">
      <p :style="{ fontWeight: '600' }" class="most-pop">Most Popular</p>
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
</template>
<script>
export default {
  data() {
    document.title = "${category} | Wedemy";
  },
};
</script>

<style >
.most-pop {
  border-bottom: 1px solid darkkhaki;
}
</style>