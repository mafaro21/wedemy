<template >
  <div class="main-view login-view wrapper">
    <h2>Login And Continue Learning!</h2>
    <p style="color: red; margin-top: 10px; font-weight: 600">
      {{ loginError }}
    </p>

    <el-form status-icon :model="loginForm" :rules="rules" ref="loginForm">
      <el-form-item style="margin-top: 8px" prop="email">
        <el-input
          placeholder="E-mail"
          v-model="loginForm.email"
          class="field"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          placeholder="Password"
          v-model="loginForm.password"
          class="field"
          show-password
        ></el-input>
      </el-form-item>

      <div style="margin-top: 8px">
        <button
          class="btn-accent field login-btn"
          @click="handleLogin('loginForm')"
          style="font-weight: 600"
        >
          Log In
        </button>
      </div>
    </el-form>

    <div style="margin-top: 13px">
      Don't have an account?
      <router-link to="/signup" class="none" :style="{ fontWeight: '800' }"
        >SignUp</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    document.title = "Login | Wedemy";

    // validation for email
    var checkEmail = (rule, value, callback) => {
      let reg = /(^([0-9A-Za-z])[\w.-]+@{1}[\w]+\.{1}[\w]\S+)$/gi;

      if (!value) {
        return callback(new Error("E-mail can't be empty"));
      } else if (!reg.test(this.loginForm.email)) {
        callback(new Error("Email is invalid"));
      } else {
        callback();
      }
    };

    // validation for password
    var checkPassword = (rule, value, callback) => {
      let reg = /[<>;&]/gi;

      if (!value) {
        callback(new Error("Password can't be empty"));
      } else if (reg.test(this.loginForm.password)) {
        callback(new Error("Password contains illegal characters"));
      } else if (value.length < 6) {
        return callback(
          new Error("Password should be atleast 6 characters long")
        );
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        email: "",
        password: "",
      },

      // rules for the validation
      rules: {
        email: [{ validator: checkEmail, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
      },

      //otehr
      loginError: "",
    };
  },

  methods: {
    handleLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          this.loginError = "Some credentials haven't been met";
          return false;
        }
      });
    },
  },
};
</script>

<style >
</style>
