<style lang="scss">
  @import "./signup";
</style>

<template>
  <section id="signup-page">
    <a-row type="flex" justify="space-between" align="start">
      <!-- left panel for login form -->
      <a-col :lg="{span:8}" :md="{span:8}" :sm="{span:24}">

        <div class="form">
        <div class="logo-container">
          <img src="../../assets/images/logo/logo.svg" alt="Assign.Work"/>
        </div>

        <p class="m-b-0 text-black">Welcome to</p>
        <h2 class="m-b-25 font-weight-bold">Engage</h2>


        <a-form-model
                ref="signupForm"
                :model="signupForm"
                :rules="rules"
                v-bind="layout"
        >

          <a-form-model-item has-feedback label="Full Name" prop="email">
            <a-input
                    v-model="signupForm.email"
                    type="text"
                    autocomplete="off"
                    placeholder="Full Name"
            >
              <a-icon
                      slot="prefix"
                      type="user"
                      style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>

          <a-form-model-item has-feedback label="Email" prop="email">
            <a-input
                    v-model="signupForm.email"
                    type="email"
                    autocomplete="off"
                    placeholder="Email"
            >
              <a-icon
                      slot="prefix"
                      type="user"
                      style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>


          <a-row type="flex" :gutter="8" justify="space-between" align="start">
             <a-col :lg="{span:12}" :md="{span:12}" :sm="{span:24}">
                <a-form-model-item has-feedback label="Password" prop="pass">
                  <a-input
                          v-model="signupForm.pass"
                          type="password"
                          autocomplete="off"
                          placeholder="Password">

                  <a-icon
                          slot="prefix"
                          type="lock"
                          style="color: rgba(0,0,0,.25)" />
                  </a-input>
                </a-form-model-item>

              </a-col>

            <a-col :lg="{span:12}" :md="{span:12}" :sm="{span:24}">
                <a-form-model-item
                        has-feedback
                        label="Confirm Password"
                        prop="confirmPass">
                  <a-input
                          v-model="signupForm.confirmPass"
                          type="password"
                          placeholder="Confirm Password"
                          autocomplete="off"
                  >
                    <a-icon
                            slot="prefix"
                            type="lock"
                            style="color: rgba(0,0,0,.25)" /></a-input>
                </a-form-model-item>
              </a-col>
            </a-row>

          <a-row class="">
            <a-col :span="24">
              <template>
                <a-checkbox @change="onChange">
                  Remember me
                </a-checkbox>
              </template>
            </a-col>

          </a-row>
          <br/>

          <a-form-model-item :wrapper-col="{ span: 24 }">
            <a-button class="login-form-button" type="primary" @click="submitForm('signupForm')">
              Submit
            </a-button>
          </a-form-model-item>

          <a-form-item>
            <div class="m-t-20 m-b-20 relative or-line">
              <span>or</span><div></div>
            </div>
            <div>
              <img
                      class="btn-google"
                      src="../../assets/images/icons/btn-google.svg"
                      width="100%"
              />
            </div>
          </a-form-item>

        </a-form-model>



        <div class="signup-login-link">
          Have an account?,
          <router-link to="/login">
            Login
          </router-link>
        </div>
        </div>

      </a-col>
      <!-- end -->

      <!-- right panel for information and illustration -->
      <a-col :lg="{span:16}" :md="{span:16}" :sm="{span:24}" >
        <div class="login-wall">
          <div class="content">
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
                  Work AGILE and Win, thats the way these days. Assign.Work Helps
                  you to create<br />and maintain Sprint at much ease.
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
                  Assign.Work can be used for multiple Domains like in Softwares,
                  Accounting,<br />Film Making etc. If you have Tasks, we provide
                  a simple mean to Manage it.
                </div>
              </li>
            </ul>
          </div>
        </div>
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
