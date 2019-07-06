import Vue from "vue";
// import Antd from 'ant-design-vue';
// import Button from 'ant-design-vue/lib/button';

//babel-plugins-import方式写法
import {Button, Layout, Icon, Drawer, Radio, Menu} from 'ant-design-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import 'ant-design-vue/dist/antd.less';
// import 'ant-design-vue/lib/button/style';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);

// Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
