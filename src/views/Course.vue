<template>
  <div class="wrapper main-view" style="margin-top: 24px">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/category' }"
        >category</el-breadcrumb-item
      >
      <el-breadcrumb-item>course name</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="course-view" style="margin-top: 24px">
      <div class="course-preview">
        <img
          src="../images/adeolu-eletu.jpg"
          alt="course-thumbnail"
          class="course-thumbnail"
        />
      </div>

      <div class="course-details">
        course name
        <p>course desription</p>
        <p class="course-view" style="margin-top: 9px">
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value} points"
          >
          </el-rate>
          &nbsp; (x ratings)
        </p>
        <p>course author</p>
        <p>$$$$$</p>
        <button class="btn btn-accent course-btn">Purchase</button>
        <button class="btn btn-accent2 course-btn" @click="cartNoti">
          Add to Cart
        </button>
      </div>
    </div>

    <div style="margin-top: 19px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="What you'll learn" name="first">User</el-tab-pane>
        <el-tab-pane label="Content" name="second">Config</el-tab-pane>
        <el-tab-pane label="Reviews" name="third">Role</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    document.title = "${course} | Wedemy";
    return {
      value: 4.7,
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    cartNoti() {
      this.$notify.success({
        title: "Cart",
        message: "Item was successfully added to cart",
      });
    },
  },
};
</script>

<style>
.course-view {
  display: flex;
}
.course-preview {
  float: left;
  max-width: 50%;
}
.course-details {
  float: right;
  padding: 2%;
}
.course-thumbnail {
  width: 100%;
}
.course-btn {
  width: 50%;
}
</style>