import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
//ant design ui framework
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


// use i18n
Vue.use(VueI18n);

Vue.use(Antd);

const i18n = new VueI18n({
    locale: 'en',
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
