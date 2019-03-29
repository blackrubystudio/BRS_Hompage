<template>
<div id="main">

  <!-- 1. Header -->
  <common-header :img=header.img :color=header.color></common-header>

  <!-- 2. Main Page -->
  <main-page></main-page>

  <!-- 3. Button & PostIt IMG (Absolute) -->
  <div class="main-absolute">
    <div class="main-button-group">
      <button class="main-button" @click="component = 'celebee'">Celebee</button>
      <button class="main-button" @click="component = 'beamme'">BeamMe</button>
    </div>
    <div class="main-postit"></div>
  </div>

  <!-- 4. Project (Dynamic, FB5 Default) -->
    <transition name="fade">
      <component :is="component" transition="fade" transition-mode="out-in"></component>
    </transition>

  <!-- 4.5 Scroll Up button -->
  <div class="main-scrollup">
    <img class="main-scrollup-button" src="@/assets/img/common/up_black.png" alt="스크롤 상단 버튼" @click="scrollUp()">
  </div>

  <!-- 5. Footer -->
  <common-footer></common-footer>

    <!-- Connection1. 답을 찾다 시작 -->
    <!-- <div class="fb5-connection1">
      <div class="fb5-connenction1-content">답을 찾다</div>
      <div class="fb5-connection1-line"></div>
    </div> -->
    <!-- // Connection1. 답을 찾다 끝 -->

    <!-- Connection2. 기술 혁신 시작 -->
    <!-- <div class="fb5-connection2">
      <div class="fb5-connenction2-content">기술 혁신</div>
      <div class="fb5-connection2-line"></div>
    </div> -->
    <!-- // Connection2. 기술 혁신 끝 -->

 </div>

</template>

<script>
import MainPage from "@/components/main/Main.vue";
import FindBig5 from "@/components/main/FindBig5.vue";
import Celebee from "@/components/main/Celebee.vue"
import Beamme from "@/components/main/Beamme.vue"

export default {
  components: {
    MainPage,
    "findbig5" : FindBig5,
    "celebee" : Celebee,
    "beamme" : Beamme
  },

  data(){
    return{
      header:{
        img: require('@/assets/img/common/logo_name_white.svg'),
        color: "color:#FEFEFE" 
      },
      // Default Component(Dynamic Component)
      component: 'findbig5'
    }
  },

  methods:{
    scrollUp(){
      document.getElementById("main").scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
}
</script>

<style lang="scss" scoped>

.main-absolute{
  position: relative;
  margin: 0 auto;
  width: 1024px;
  height: 100%;
}

.main-button-group{
  position: absolute;
  top: -100px;
  right: 120px;
  z-index: 100;
}

.main-button{
  font-family: $main-button-font;
  background: none;
  color: #FEFEFE;
  border: 1.5px solid #FEFEFE;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  margin: 0 10px;
  width: 100px;
  height: 40px;
  line-height: 20px;
  z-index: 100;
}

.main-postit{
  @extend %background;
  position: absolute;
  background-image: url('../assets/img/background/background_3.png');
  top: -40px;
  right: 40px;
  width: 350px;
  height: 645px;
  box-shadow: 2px 10px 10px 5px rgba(0, 0, 0, 0.4);
  z-index: 100;
}

// Transition For Dynamic component
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.main-scrollup{
  height: 50px;
  width: 1200px;
  margin: 0 auto;
  text-align: right;
  margin-bottom: 20px;
}

.main-scrollup-button{
  position: relative;
  width: 50px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
  animation-name: scrollup-button;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  
}

@keyframes scrollup-button{
  0%{
    padding-top: 0px;
  }
  50%{
    padding-top: 5px;
  }
  100%{
    padding-top: 0px;
  }
}





.fb5-connection1{
  @extend %main-connection;
}

.fb5-connenction1-content{
  @extend %main-connection-content;
}

.fb5-connection1-line{
  @extend %main-connection-line
}

.fb5-connection2{
  width: 1024px;
  height: 100%;
  margin: 0 auto;
}

.fb5-connenction2-content{
  // transform-origin: 100% 100%;
  width: 70px;
  height: 100%;
  transform: rotate(90deg);
  font-size: 14px;
}

.fb5-connection2-line{
  width: 50px;
  margin-left: 10px;
  margin-top: 50px;
  transform: rotate(90deg);
  border-bottom: 0.5px solid #212121;
  opacity: .7;
}
</style>

