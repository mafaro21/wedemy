<template>
  <div class="main-view login-view wrapper">
    <h2>Create An Account!</h2>

    <el-form status-icon :model="signupForm" :rules="rules" ref="signupForm">
      <el-form-item style="margin-top: 8px" prop="name">
        <el-input
          placeholder="Name"
          v-model="signupForm.name"
          class="field"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item prop="email">
        <el-input
          placeholder="E-mail"
          v-model="signupForm.email"
          class="field"
          type="email"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="Password"
          v-model="signupForm.password"
          class="field"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item prop="reenterpass">
        <el-input
          placeholder="Re-Enter Password"
          v-model="signupForm.reenterpass"
          class="field"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item style="margin-top: 8px">
        <button
          class="btn-accent field login-btn"
          @click="handleSignup('signupForm')"
          style="font-weight: 600"
        >
          Sign Up
        </button>
      </el-form-item>
    </el-form>

    <div style="margin-top: 13px">
      Already have an account?
      <router-link to="/login" class="none" :style="{ fontWeight: '800' }"
        >LogIn</router-link
      >
    </div>
    <router-link to="/logintest">logintest</router-link>
  </div>
</template>


<script>
// import { ref } from "vue";

export default {
  data() {
    document.title = "Signup | Wedemy";

    // validation for name
    var checkName = (rule, value, callback) => {
      let reg = /[^0-9A-Za-z_]/gi;

      if (!value) {
        return callback(new Error("Name can't be empty"));
      }
      setTimeout(() => {
        if (value.length < 4) {
          callback(new Error("Name less than 4 characters"));
        } else if (reg.test(this.signupForm.name)) {
          callback(new Error("Name contains illegal characters"));
        } else {
          callback();
        }
      }, 1000);
    };

    // validation for email
    var checkEmail = (rule, value, callback) => {
      let reg = /(^([0-9A-Za-z])[\w.-]+@{1}[\w]+\.{1}[\w]\S+)$/gi;

      if (!value) {
        return callback(new Error("E-mail can't be empty"));
      } else if (!reg.test(this.signupForm.email)) {
        callback(new Error("Email is invalid"));
      } else {
        callback();
      }
    };

    // validation for password
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("Password can't be empty"));
      } else if (value.length < 6) {
        return callback(
          new Error("Password should be atleast 6 characters long")
        );
      } else {
        callback();
      }
    };

    // validation for re-enter password

    var checkReenter = (rule, value, callback) => {
      if (!value) {
        callback(new Error("Re-enter the password"));
      } else if (value !== this.signupForm.password) {
        callback(new Error("Passwords don't match!"));
      } else {
        callback();
      }
    };

    return {
      signupForm: {
        name: "",
        email: "",
        password: "",
        reenterpass: "",
      },

      // rules for the validation
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
        reenterpass: [{ validator: checkReenter, trigger: "blur" }],
      },
    };
  },

  methods: {
    handleSignup(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>


<style >
.login-view {
  padding: 0 40% 0 40%;
  margin-top: 4%;
  text-align: center;
}
.field {
  width: 350px;
}
</style>