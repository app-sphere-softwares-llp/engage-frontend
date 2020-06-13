<!------------------------------->
<!---- Main app After login ----->
<!------------------------------->
<!-- HTML content -->
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!-- templates/sidebar -->
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <Sidebar></Sidebar>
    </a-layout-sider>

    <!-- layout for header, footer and content -->
    <a-layout>

      <!-- all child components will load here -->
      <a-layout-content class="content-section">
        <router-view />
      </a-layout-content>
    </a-layout>
    <!-- end layout for header, footer and content -->
  </a-layout>
</template>

<!-- JS content -->
<script>
import Sidebar from "../../templates/Sidebar/Sidebar";

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

<style lang="scss">
.content-section {
    padding: 20px 0px;
    height: calc(100vh - 0px);
    overflow-y: auto;
}
</style>
