<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
    
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'; //中文包
import enUS from 'ant-design-vue/lib/locale-provider/en_US'; //英文包
import moment from 'moment';
export default {
  data() {
    return {
      locale: zhCN,
    }
  },
  watch: {
    '$route.query.locale': function(val) {
      this.locale = val === "enUS" ? enUS : zhCN;
      moment.locale(val === "enUS" ? "en" : "zh_cn");
    }
  }
}
</script>


<style lang="less">

</style>
