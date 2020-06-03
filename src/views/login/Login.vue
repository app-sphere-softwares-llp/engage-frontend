<style lang="scss">
@import "./login";
</style>

<template>
  <section id="login-page">

          <a-row type="flex" justify="space-between" align="middle">
            <!-- left panel for information and illustration -->
            <a-col :span="16">
              <div class="login-wall">
                <h1 class="text-black m-b-30 font-weight-semibold">
                  A SIMPLE PRODUCTIVITY & TRACKING TOOL
                </h1>

                <ul class="list-unstyled login-features-list">
                  <li class="media m-b-4">
                    <img
                      src="../../assets/images/icons/feature_1.svg"
                      class="mr-3"
                      alt="Feature 1"
                    />
                    <div class="media-body">
                      <h5 class="mt-0 mb-0">Have Complete Control on the Tasks</h5>
                      Simple way to track all your tasks in your own personalized
                      Board
                    </div>
                  </li>
                  <li class="media m-b-4 pt-3">
                    <img
                      src="../../assets/images/icons/feature_2.svg"
                      class="mr-3"
                      alt="Feature 2"
                    />
                    <div class="media-body">
                      <h5 class="mt-0 mb-0">Be a Sprinter and Win</h5>
                      Work AGILE and Win, thats the way these days. Assign.Work
                      Helps you to create<br />and maintain Sprint at much ease.
                    </div>
                  </li>
                  <li class="media">
                    <img
                      src="../../assets/images/icons/feature_3.svg"
                      class="mr-3"
                      alt="Feature 3"
                    />
                    <div class="media-body">
                      <h5 class="mt-0 mb-0">Multi Domain Templates</h5>
                      Assign.Work can be used for multiple Domains like in
                      Softwares, Accounting,<br />Film Making etc. If you have
                      Tasks, we provide a simple mean to Manage it.
                    </div>
                  </li>
                </ul>
              </div>
            </a-col>
            <!-- end -->

            <!-- right panel for login form -->
            <a-col :span="8" class="form-padding">
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
            <!-- end -->
          </a-row>

  </section>
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
