<template>
  <div class="main-view login-view wrapper">
    <h2>Create An Account!</h2>
    <p style="color: red; margin-top: 10px; font-weight: 600">
      {{ signupError }}
    </p>

    <el-form status-icon :model="signupForm" :rules="rules" ref="signupForm">
      <el-form-item style="margin-top: 8px" prop="name">
        <el-input
          placeholder="Name"
          v-model.trim="signupForm.name"
          class="field"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item prop="email">
        <el-input
          placeholder="E-mail"
          v-model.trim="signupForm.email"
          class="field"
          type="email"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="Password"
          v-model.trim="signupForm.password"
          class="field"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item prop="confirmPass">
        <el-input
          placeholder="Re-Enter Password"
          v-model.trim="signupForm.confirmPass"
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
  </div>
</template>


<script >
// import { ref } from "vue";

export default {
  data() {
    document.title = "Signup | Wedemy";

    // validation for name
    var checkName = (rule, value, callback) => {
      let reg = /[^0-9A-Za-z_.]/gi;

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
      let reg = /(^[0-9A-Za-z][\w.-]+@[\w]+\.[\w]\S+\w)$/gi;

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
     // let reg = /[<>;&]/gi; <-----------lets allow these characters in password

      if (!value) {
        callback(new Error("Password can't be empty"));
      }
      //  else if (reg.test(this.signupForm.password)) {
      //   callback(new Error("Password contains illegal characters"));
      // } 
      else if (value.length < 8) {
        return callback(
          new Error("Password should be atleast 8 characters long")
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
        confirmPass: "",
      },

      // rules for the validation
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
        confirmPass: [{ validator: checkReenter, trigger: "blur" }],
      },

      //other
      signupError: "",
    };
  },

  methods: {
    handleSignup(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          this.signupError = "Form cannot be submitted";
          return false;
        }
      });
    },
  },
};
</script>


<style >
</style>