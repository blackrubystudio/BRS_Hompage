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
  <!-- 4. Project (FB5 Default) -->
    <transition name="fade">
      <component :is="component" transition="fade" transition-mode="out-in"></component>
    </transition>


  <div class="main-scrollup">
    <img class="main-scrollup-button" src="@/assets/img/common/up_black.png" alt="스크롤 상단 버튼" @click="scrollUp()">
  </div>
  <!-- 5. Footer -->
  <common-footer></common-footer>
 </div>
</template>

<script>
// Import Main page
import MainPage from "@/components/main/Main.vue";

// Import Project
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

      component: 'findbig5'
    }
  },

  methods:{
    scrollUp(){
      document.getElementById("main").style.transition = "all 5s";
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.main-scrollup{
  height: 50px;
  width: 1200px;
  margin: 0 auto;
  text-align: right;
  margin-bottom: 20px;
  transition: 3s;
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
</style>

