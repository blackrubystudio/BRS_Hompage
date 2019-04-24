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
      <div>
        <img class="header-menu" src="@/assets/img/header/menu.png" alt="블랙루비 홈페이지 메뉴" @click="isDropdown =! isDropdown">
        <transition name="header-transition">
          <div class="main-header-mobile-menu" v-if="isDropdown">
            <li class="main-header-mobile-main"><nuxt-link to="/" :style="color">main</nuxt-link></li>
            <li class="main-header-mobile-about"><nuxt-link to="/about" :style="color">about</nuxt-link></li>
            <li class="main-header-mobile-contact"><nuxt-link to="/contact" :style="color">contact</nuxt-link></li>
          </div>
        </transition>
      </div>
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
  },
  data(){
    return{
      isDropdown: false
    }
  },
}
</script>

<style lang="scss" scoped>

.header{
  position: absolute;
  top: 50px;
  width: 100%;
  height: 80px;
  z-index: 100;
  @include lg{
    top: 30px;
  }

  @include sm{
    top: 0;
    height: 40px;
  }
}

.header-container{
  @extend %hf-container;

  @include xl{
    width: 1000px;
  }
  @include lg{
    width: 760px;
  }
  @include md{
    width: 550px;
  }
  @include sm{
    width: 100%;
    padding-top: 10px;
  }
}

.header-logo{
  @extend %hf-logo;
  @include lg{
    height: 70px;
  }
  @include md{
    height: 60px;
  }
  @include sm{
    padding-left: 20px;
    height: 40px;
  }
}

.header-content-group{
  @extend %hf-content-group;
  justify-self: end;
  align-self: center;
  @include lg{
    font-size: 15px;
  }
  @include md{
    font-size: 13px;
  }
}

.header-about{
  @include sm{
    display: none;
  }
}

.header-contact{
  @include sm{
    display: none;
  }
}

.header-menu{
  display: none;
  @include sm{
    display: grid;
    height: 20px;
    margin-bottom: 10px;
    padding-right: 10px;
  }
}

.header-transition-enter-active,
.header-transition-leave-active {
  transition: opacity 0.3s;
}
.header-transition-enter,
.header-transition-leave-to {
  opacity: 0;
}

.main-header-mobile-menu{
  position: absolute;
  top: 45px;
  right: 20px;
  font-size: 11px;
  line-height: 15px;

  // width: 60px;
  // font-size: 10px;
  // margin-left: 0px;
  // list-style-type: none;
  // line-height: 15px;
  // margin-bottom: 5px;
  color: white;
}
</style>
