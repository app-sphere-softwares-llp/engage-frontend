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

      <!-- all child components will load here -->
      <a-layout-content
        :style="{
          padding: '20px 0px',
          minHeight: 'calc(100vh - 92px)'
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
    <!-- end layout for header, footer and content -->
  </a-layout>
</template>

<script>
import Sidebar from "../templates/Sidebar/Sidebar";

export default {
  data() {
    return {
      collapsed: true
    };
  },
  components: {
    Sidebar
  }
};
</script>
