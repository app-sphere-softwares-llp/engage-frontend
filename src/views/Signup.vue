<template>
  <a-row type="flex" justify="space-between" align="middle">
    <a-col :span="16">
      <p class="height-100vh">
        SIGNUP
      </p>
    </a-col>

    <a-col :span="8">
      <a-form-model
        ref="signupForm"
        :model="signupForm"
        :rules="rules"
        v-bind="layout"
      >
        <a-form-model-item has-feedback label="Email" prop="email">
          <a-input
            v-model="signupForm.email"
            type="password"
            autocomplete="off"
          />
        </a-form-model-item>

        <a-form-model-item has-feedback label="Password" prop="pass">
          <a-input
            v-model="signupForm.pass"
            type="password"
            autocomplete="off"
          />
        </a-form-model-item>

        <a-form-model-item
          has-feedback
          label="Confirm Password"
          prop="confirmPass"
        >
          <a-input
            v-model="signupForm.confirmPass"
            type="password"
            autocomplete="off"
          />
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ span: 24 }">
          <a-button type="primary" @click="submitForm('signupForm')">
            Submit
          </a-button>
            <router-link to="/login" style="margin-left: 10px">
                Have an account?, Login
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
        if (this.signupForm.email !== "") {
          this.$refs.signupForm.validateField("email");
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
    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input confirm password"));
      }
      if (value !== this.signupForm.pass) {
        callback(new Error("Confirm password is not matching"));
      } else {
        callback();
      }
    };
    return {
      signupForm: {
        email: "",
        pass: ""
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "change" }],
        pass: [{ validator: validatePass, trigger: "change" }],
        confirmPass: [{ validator: validateConfirmPass, trigger: "change" }]
      },
      layout: "vertical"
    };
  },
  methods: {
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
    login() {
      this.$router.replace({ name: "login" });
    }
  }
};
</script>
