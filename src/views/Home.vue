<!------------------------------->
<!---- Main app After login ----->
<!------------------------------->
<template>
  <a-layout id="components-layout-demo-custom-trigger">

    <!-- templates/sidebar -->
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <Sidebar></Sidebar>
    </a-layout-sider>

    <!-- layout for header, footer and content -->
    <a-layout>

      <!-- templates/header -->
      <a-layout-header
              style="background: #fff; padding: 0 16px 0 0; display: flex; justify-content: space-between;"
      >
        <div>
          <a-icon
                  class="trigger"
                  :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                  @click="() => (collapsed = !collapsed)"
          />
        </div>

        <Header></Header>
      </a-layout-header>

      <!-- all child components will load here -->
      <a-layout-content
              :style="{
          margin: '16px 16px',
          padding: '20px',
          background: '#fff',
          minHeight: 'calc(100vh - 92px)'
        }"
      >
        <router-view />
      </a-layout-content>

      <!-- templates/footer -->
      <a-layout-footer>
        <Footer></Footer>
      </a-layout-footer>

    </a-layout>
    <!-- end layout for header, footer and content -->

  </a-layout>

</template>

<script>
  import Sidebar from "../templates/Sidebar";
  import Header from "../templates/Header";
  import Footer from "../templates/Footer";

  export default {
    data() {
      return {
        collapsed: false
      };
    },
    components: {
      Sidebar,
      Header,
      Footer
    }
  };
</script>

<style>
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
