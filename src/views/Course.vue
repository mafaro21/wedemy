<template>
  <div class="wrapper main-view" style="margin-top: 24px">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/category' }">
        {{ singleCourse.category }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ singleCourse.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="color: red" v-if="errorMessage.length">{{ errorMessage }}</div>
    <div
      v-if="!errorMessage.length"
      class="course-view"
      style="margin-top: 24px"
    >
      <div class="course-preview">
        <img
          :src="singleCourse.thumbUrl"
          :alt="singleCourse.title"
          class="course-thumbnail"
        />
      </div>

      <div class="course-details">
        <h1>{{ singleCourse.title }}</h1>
        <p style="font-size: 19px">{{ singleCourse.category }}</p>
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
        <p>{{ singleCourse.author }}</p>
        <h3>${{ singleCourse.price }}</h3>
        <el-button type="success" class="course-btn" @click="cartNotif()">
          Add to Cart
        </el-button>
        <el-button
          type="danger"
          class="course-btn"
          @click="addToWishlist()"
          :icon="wishlisted ? 'el-icon-star-on' : 'el-icon-star-off'"
          plain
        >
          {{ wishlisted ? "Wishlisted" : "Wishlist" }}
        </el-button>
      </div>
    </div>

    <div style="margin-top: 19px">
      <el-tabs v-model="activeName">
        <el-tab-pane label="What you'll learn" name="first">User</el-tab-pane>
        <el-tab-pane label="Content" name="second">Config</el-tab-pane>
        <el-tab-pane label="Reviews" name="third">Role</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script lang="ts">
import CourseService from "@/services/CourseService";
import { defineComponent } from "@vue/runtime-core";
import { ElNotification } from "element-plus";

export default defineComponent({
  data() {
    return {
      activeName: "first",
      courseId: 0,
      errorMessage: "",
      wishlisted: false,
      singleCourse: {
        title: "",
        price: 0,
        rating: 0.0,
        thumbUrl: "",
        category: "",
      },
    };
  },
  methods: {
    cartNotif() {
      ElNotification({
        title: "Cart",
        type: "success",
        message: "Item was successfully added to cart",
        duration: 2500,
      });
    },
    addToWishlist() {
      this.wishlisted = !this.wishlisted;
      //TODO add wishlist code here
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.courseId = parseInt(this.$route.path.split(/course\//)[1], 10);
    CourseService.getById(this.courseId)
      .then((res) => {
        this.singleCourse = res.data;
        document.title = this.singleCourse.title + " | Wedemy";
      })
      .catch((error) => {
        this.errorMessage = error.response.data.message;
      });
  },
});
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
  width: 30%;
  margin-top: 10px;
}

@media only screen and (max-width: 600px) {
  .course-thumbnail {
    width: 90vw;
    align-self: center;
    margin: 0px auto;
  }

  .course-details {
    display: none;
  }
}
</style>