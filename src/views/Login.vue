<template>
  <a-row type="flex" justify="space-between" align="middle">
    <a-col :span="16">
      <p class="height-100vh">
        LOGIN
      </p>
    </a-col>

    <a-col :span="8">
      <a-form-model
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
        v-bind="layout"
      >
        <a-form-model-item has-feedback label="Email" prop="email">
          <a-input
            v-model="loginForm.email"
            type="password"
            autocomplete="off"
          />
        </a-form-model-item>

        <a-form-model-item has-feedback label="Password" prop="pass">
          <a-input
            v-model="loginForm.pass"
            type="password"
            autocomplete="off"
          />
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ span: 24 }">
          <a-button type="primary" @click="submitForm('loginForm')">
            Submit
          </a-button>
          <router-link to="/signup" style="margin-left: 10px">
            Don't have account?, Signup
          </router-link>
        </a-form-model-item>
      </a-form-model>
    </a-col>
  </a-row>
</template>
<script>
export default {
  data() {
    const validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the email"));
      } else {
        if (this.loginForm.email !== "") {
          this.$refs.loginForm.validateField("email");
        }
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        email: "",
        pass: ""
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "change" }],
        pass: [{ validator: validatePass, trigger: "change" }]
      },
      layout: "vertical"
    };
  },
  methods: {
    signup() {
      this.$router.replace({ name: "signup" });
    },
    submitForm(formName) {
      this.$router.replace({ name: "home" });
      return;
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     this.$router.replace({ name: "home" });
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
