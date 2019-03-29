<template>
  <nav class="header">
    <div class="header-container">
      <img class="header-logo" :src="img" alt="Blackrubystrudio-logo" @click="goHome()">
      <div class="header-content-group">
      <li class="header-about"><nuxt-link to="/about"  :style="color">about</nuxt-link></li>
      <li class="header-contact"><nuxt-link to="/contact"  :style="color">contact</nuxt-link></li>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['img', 'color'],
  methods:{
    goHome(){
      // location.reload(true);
      this.$router.push("/");
    }
  }
}
</script>

<style lang="scss" scoped>

.header{
  position: absolute;
  top: 50px;
  width: 100%;
  height: 80px;
}

.header-container{
  @extend %hf-container;
  height: 80px;
  
}

.header-logo{
  @extend %hf-logo;
}

.header-content-group{
  @extend %hf-content-group;
  justify-self: end;
  align-self: center;
}
</style>
