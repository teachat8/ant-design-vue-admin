import Vue from "vue";
import VueHighlightJS from 'vue-highlightjs'
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
  Select,
  LocaleProvider,
  Dropdown,
  DatePicker
} from 'ant-design-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store/modules/index";
// import 'ant-design-vue/dist/antd.less';
// import 'ant-design-vue/lib/button/style';
import Authorized from './components/Authorized';
import Auth from './directives/auth';
import VueI18n from "vue-i18n";
import enUS from './locale/enUS';
import zhCN from './locale/zhCN';
import queryString from 'query-string';
import "highlight.js/styles/github.css"; // highlight的样式

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
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.use(VueI18n);

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: {message: zhCN},
    enUS: {message: enUS}
  }
});

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1281240_201ogyz24gi.js', // 在 iconfont.cn 上生成
})

Vue.component("IconFont", IconFont)

// Vue.use(Antd);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
