// Header: 모든 페이지에서 공통적으로 사용하는 Header 컴포넌트
// 특징: Main 페이지와 About 페이지는 검은색 로고에 검은 글자, Contact 페이지는 흰 로고에 흰 글자
// 따라서 로고 img와 글자 color를 props로 넘겨주어 각 페이지별로 설정하게 끔 코딩

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
