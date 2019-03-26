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
        img: require('"../../../assets/img/common/logo_name_white.svg'),
        color: "color:#FEFEFE" 
      },

      component: 'findbig5'
    }
  },

  methods:{
  }
}
</script>

<style lang="scss" scoped>

.main-absolute{
  position: relative;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
}

.main-button-group{
  position: absolute;
  top: -120px;
  right: 200px;
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
  z-index: 100;
}


.main-postit{
  @extend %background;
  position: absolute;
  background-image: url('../assets/img/background/background_3.png');
  top: -60px;
  right: 120px;
  width: 350px;
  height: 650px;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 100;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

