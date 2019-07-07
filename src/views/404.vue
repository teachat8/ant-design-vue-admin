<template>
  <div style="text-align: center">
    <IconFont type="icon-icon-404" style="font-size: 120px" />
    <!-- <img :src="logo" alt="logo" style="width:150px;height:150px" /> -->
    <Logo style="width:150px;height:150px" />
  </div>
</template>

<script>
// import logo from '@/assets/logo.svg'; // svg当做url使用
import Logo from '@/assets/logo.svg'; // svg安装vue-svg-loader就可以当做组件使用

export default {
  // data() {
  //   return {
  //     logo
  //   }
  // },
  components: {
    Logo
  }
}
</script>

<style>

</style>
