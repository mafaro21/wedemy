<template>
  <div class="wrapper">
    <p class="cart-header main-view">Your cart</p>

    <div class="main-view top-margin">
      <p>x Courses in Cart</p>
      <div class="cart-view">
        <div>Your cart is empty. Go and explore</div>

        <router-link to="/"
          ><button class="btn btn-auto btn-accent">
            Keep shopping
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cart-header {
  background-color: var(--dark);
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  font-size: 24px;
  color: white;
}
.cart-view {
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 32px;
  text-align: center;
}
</style>