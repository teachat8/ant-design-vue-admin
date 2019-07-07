import Vue from "vue";
// import Antd from 'ant-design-vue';
// import Button from 'ant-design-vue/lib/button';

//babel-plugins-import方式写法
import {
  Button, 
  Layout, 
  Icon, 
  Drawer, 
  Radio, 
  Menu, 
  Form, 
  Input,
  Select
} from 'ant-design-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store/modules/index";
// import 'ant-design-vue/dist/antd.less';
// import 'ant-design-vue/lib/button/style';
import Authorized from './components/Authorized';
import Auth from './directives/auth';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.component('Authorized', Authorized);
Vue.use(Auth);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1281240_201ogyz24gi.js', // 在 iconfont.cn 上生成
})

Vue.component("IconFont", IconFont)

// Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
