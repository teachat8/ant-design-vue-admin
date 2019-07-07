<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}` ]">
    <a-layout class="components-layout-demo-side" style="min-height: 100vh">
      <!-- 侧边栏 
        要使用自定义触发器，可以设置 :trigger="null" 来隐藏默认设定。
        theme: 主题颜色  
        v-if="navLayout === 'left'" false时，不显示侧边栏
      -->
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        collapsible
        :trigger="null"
        v-model="collapsed"
        width= "256px"
      >
        <div class="logo">Ant Design Vue Pro's Log</div>
        <!-- 侧边栏菜单 -->
        <SiderMenu 
          :theme="navTheme" 
          :collapsed="collapsed" 
        />
      </a-layout-sider>
      <a-layout>
        <!-- 顶部布局 -->
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon 
            v-auth="['admin']"
            class="trigger" 
            @click="collapsed=!collapsed"
            :type="collapsed? 'menu-fold': 'menu-unfold'"
          >
          </a-icon>
          <Header />
        </a-layout-header>
        <!-- 内容部分 -->
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <!-- 底部布局 -->
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <!-- 抽屉 -->
    <Authorized :authority="['admin']">
      <SettingDrawer />
    </Authorized>
    

  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';
import SiderMenu from './SiderMenu';
import SettingDrawer from '../components/SettingDrawer'
export default {
  name: "BasicLayout",
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer
  },
  data() {
    return {
      collapsed: false,
    }
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || 'dark'
    },
    navLayout() {
      return this.$route.query.navLayout || 'left'
    }

  }
}
</script>

<style scoped>
/* .components-layout-demo-side >>> .ant-menu-dark .ant-menu-item-selected {
  color: #000;
} */
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.trigger:hover {
  background: #eeeeee;
}
.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.nav-theme-dark >>> .logo{
  color: #ffffff;
}

</style>
