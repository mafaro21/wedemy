<template>
  <div class="wrapper main-view" style="margin-top: 24px">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/category' }"> 
      {{singleCourse.category}} </el-breadcrumb-item>
      <el-breadcrumb-item>{{singleCourse.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="color: red" v-if="errorMessage.length">{{ errorMessage }}</div>
    <div class="course-view" style="margin-top: 24px">
      <div class="course-preview">
        <img
          :src="singleCourse.thumbUrl"
          :alt="singleCourse.title"
          class="course-thumbnail"
        />
      </div>

      <div class="course-details">
        <h1>{{singleCourse.title}}</h1>
        <p style="font-size: 19px">{{singleCourse.category}}</p>
        <p class="course-view" style="margin-top: 9px">
          <el-rate
            v-model="singleCourse.rating"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value} points"
          >
          </el-rate>
          &nbsp; (N ratings)
        </p>
        <p>{{singleCourse.author}}</p>
        <h3>${{singleCourse.price}}</h3>
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
import CourseService from "@/services/CourseService";
export default {
  data() {
    document.title = "${course} | Wedemy";
    return {
      activeName: "first",
      courseId: 0,
      singleCourse: {},
      errorMessage: "",
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
  mounted() {
    window.scrollTo(0, 0);
    this.courseId = this.$route.path.split(/course\//)[1];
    CourseService.getById(this.courseId)
      .then((res) => {
        this.singleCourse = res.data;
      })
      .catch((error) => {
      this.errorMessage = error.response.data.message;
      });
  },
};
</script>

<style>
.el-notification__content {
  font-family: "Public Sans", system-ui, sans-serif;
}
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