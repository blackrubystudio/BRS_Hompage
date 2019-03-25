<template>
  <nav class="header">
    <img class="header-logo" src="../../assets/img/common/logo_name_white.svg" alt="Blackrubystrudio-logo" @click="goHome()">
    <li class="header-about"><nuxt-link to="/about">about</nuxt-link></li>
    <li class="header-contact"><nuxt-link to="/contact">contact</nuxt-link></li>
  </nav>
</template>

<script>
export default {
methods:{
  goHome(){
    this.$router.push("/");
  }
}
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/header.scss";

.header{
  @extend %header;
}

.header-logo{
  @extend %header-logo;
}

.header-about{
  @extend %header-about;
}

.header-contact{
  @extend %header-contact;
}

</style>
