// Index 페이지
// Header / Main / Project[FindBig5, DeokUs, Beamme] / Footer로 구성
// Project는 Title / Introduce / Technology로 구성

<template>
<div id="main">
<div>
  <!-- 1. Header -->
  <common-header :img=header.img :color=header.color></common-header>
 
  <!-- 2. Main Page -->
  <main-page></main-page>

  <!-- 3. Button & PostIt IMG (Absolute) -->
  <div class="main-absolute">
    <div class="main-button-group">
      <button class="main-button" v-show='is_fanrep' @click="component = 'fanrep', is_fb5=true, is_fanrep=false , is_beamme= true">Fanrep.</button>
      <button class="main-button" v-show='is_fb5' @click="component = 'findbig5', is_fb5=false, is_fanrep=true , is_beamme= true">FindBig5</button>
      <button class="main-button" v-show='is_beamme' @click="component = 'beamme', is_fb5=true, is_fanrep=true , is_beamme= false">BeamMe</button>
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
  
  <!-- <common-menumobile :color="color"></common-menumobile> -->

  <!-- 5. Footer -->
  <common-footer></common-footer>

  <!-- 6. Connection -->
  <!-- Connection1. 답을 찾다 시작 -->
  <div class="main-connection1">
    <div class="main-connection1-container">
      <div class="main-connenction1-content">답을 찾다</div>
      <div class="main-connection1-line"></div>
    </div>
  </div>
  <!-- // Connection1. 답을 찾다 끝 -->

  <!-- Connection2. 기술 혁신 시작 -->
  <div class="main-connection2">
    <div class="main-connection2-container">
      <div class="main-connenction2-content">기술 혁신</div>
      <div class="main-connection2-line"></div>
    </div>
  </div>
  <!-- // Connection2. 기술 혁신 끝 -->
</div>
 </div>
</template>

<script>
import MainPage from "@/components/main/Main.vue";
import FindBig5 from "@/components/main/FindBig5.vue";
import Fanrep from "@/components/main/Fanrep.vue"
import Beamme from "@/components/main/Beamme.vue"

export default {
  components: {
    MainPage,
    "findbig5" : FindBig5,
    "fanrep" : Fanrep,
    "beamme" : Beamme
  },

  data(){
    return{
      header:{
        img: require('@/assets/img/common/logo_name_white.svg'),
        color: "color:#FEFEFE" 
      },
      color: "color: #212121",
      // Default Component(Dynamic Component)
      component: 'findbig5',
      isDropdown: false,
      is_fanrep: true,
      is_fb5: false,
      is_beamme: true,
    }
  },

  methods:{
    scrollUp(){
      document.getElementById("main").scrollTop = 0;
      document.body.scrollTop = 0;
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

  @include lg{
    width: 760px;
  }

  @include md{
    width: 550px;
  }

  @include sm{
    width: 300px;
  }
}

.main-button-group{
  position: absolute;
  top: -100px;
  right: 120px;
  z-index: 100;
  @include lg{
    right: 50px;
  }

  @include md{
    top: -80px;
    right: 0px;
  }

  @include sm{
    top: -70px;
    right: 0;
    left: 75px;
  }
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
  @include md{
    font-size: 13px;
    width: 80px;
    height: 30px;
    line-height: 10px;
    border: 1px solid #FEFEFE;
  }
  @include sm{
    font-size: 10px;
    padding: 5px 10px;
    margin: 0 5px;
    width: 60px;
    height: 25px;
    line-height: 15px;
  }
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
  @include lg{
    width: 300px;
    right: 20px;
  }
  @include md{
    width: 230px;
    height: 550px;
    right: 0px;
  }
  @include sm{
    top: -30px;
    left: 0;
    width: 300px;
    height: 450px;
  }
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
  @include xl{
    width: 1000px;
  }
  @include lg{
    width: 760px;
  }
  @include md{
    margin-bottom: 10px;
    width: 550px;
  }
  @include sm{
    display: none;
  }
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
  @include lg{
    width: 40px;
  }
  @include md{
    width: 30px;
  }
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

.main-connection1{
  @extend %main-connection;
  top: 1400px;
  @include lg{
    top: 1300px;
  }
}

.main-connection1-container{
  @extend %main-connection-container;
  @include lg{
    width: 760px;
  }
  @include md{
    display: none;
  }

}

.main-connenction1-content{
  @extend %main-connection-content;
}

.main-connection1-line{
  @extend %main-connection-line;
  margin-left: 10px;
  @include lg{
    margin-top: 45px;
    margin-left: 10px;
  }
}

.main-connection2{
  @extend %main-connection;
  z-index: -10;
  top: 1900px;
}

.main-connection2-container{
  @extend %main-connection-container;
  @include lg{
    width: 760px;
  }
  @include md{
    display: none;
  }
}

.main-connenction2-content{
  @extend %main-connection-content;
  margin-top: 210px;
  margin-left: 950px;
  @include lg{
    margin-top: 60px;
    margin-left: 700px;
  }
}

.main-connection2-line{
  @extend %main-connection-line;
  margin-left: 960px;
  @include lg{
    margin-left: 710px;
  }
}

</style>

