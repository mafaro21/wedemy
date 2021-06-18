<template >
  <div class="wrapper main-view" style="margin-top: 24px">
    <h2 class="">${category}</h2>

    <!-- <el-skeleton animated :loading="loading" style="margin-top: 15px">
      <p :style="{ fontWeight: '600', marginTop: '15px' }" class="most-pop">
        Most Popular
      </p>
      {{ api.status }}
      <p>{{ work.body }}</p>

      <div
        v-for="api in api"
        :key="api.id"
        class="most-pop"
        style="margin-top: 19px"
      >
        <p>{{ api.title }}</p>
        <br />
        {{ api.body }}
      </div>
    </el-skeleton> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    document.title = "${category} | Wedemy";
    // return {
    //   api: [],
    //   work: [],
    //   loading: true,
    // };
  },

  // mounted() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     this.api = res.data;
  //     this.work = res.data[0];
  //     setTimeout(() => {
  //       this.loading = false;
  //     }, 2000);
  //     console.log(res.data);
  //     console.log(res.data[0]);
  //   });
  // },
};
</script>

<style >
.most-pop {
  border-bottom: 1px solid darkkhaki;
}
</style>