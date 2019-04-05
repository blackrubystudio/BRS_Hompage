<template>
  <!-- 4.5 Menu bar (Mobile) -->
  <div class="main-header-mobile">
    <div class="main-header-mobile-container" @click="isDropdown =! isDropdown">
      <transition name="header-transition">
        <div class="main-header-mobile-menu" v-if="isDropdown">
          <li class="main-header-mobile-main"><nuxt-link to="/" :style="color">main</nuxt-link></li>
          <li class="main-header-mobile-about"><nuxt-link to="/about" :style="color">about</nuxt-link></li>
          <li class="main-header-mobile-contact"><nuxt-link to="/contact" :style="color">contact</nuxt-link></li>
        </div>
      </transition>
      <div class="main-header-mobile-button"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['color'],
  data(){
    return{
      isDropdown: false
    }
  },
}
</script>

<style lang="scss" scoped>

.main-header-mobile{
  display: none;
  @include sm{
    position: fixed;
    bottom: 100px;
    display: block;
    width: 100%;
    margin: 0 auto;
    z-index: 500;
    margin-left: 90%;
    animation-name: mobile-button;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
}

@keyframes mobile-button{
  0%{
   bottom: 100px;
  }
  50%{
    bottom: 105px;
  }
  100%{
    bottom: 100px;
  }
}

.main-header-mobile-button{
  width: 30px;
  height: 30px;
  background: linear-gradient(to right, #EEEEEE, #757575);
  border-radius: 50%;
  opacity: .5;
}

.main-header-mobile-menu{
  width: 60px;
  font-size: 10px;
  margin-left: 0px;
  list-style-type: none;
  line-height: 15px;
  margin-bottom: 5px;
}

.header-transition-enter-active,
.header-transition-leave-active {
  transition: opacity 0.3s;
}
.header-transition-enter,
.header-transition-leave-to {
  opacity: 0;
}
</style>
