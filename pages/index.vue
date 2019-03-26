<template>
<div id="main">
  <!-- Header -->
  <common-header :img=header.img :color=header.color></common-header>
  <!-- Main Page -->
  <main-page></main-page>

  <!-- FB5 (Default) -->
  <div v-show="isFB5">
    <fb5-title></fb5-title>
    <fb5-introduce></fb5-introduce>
    <fb5-technology></fb5-technology>
  </div>

  <!-- Celebee(If Click Celebee Button) -->
  <div v-show="isCelebee">
    <celebee-title></celebee-title>
    <celebee-introduce></celebee-introduce>
    <celebee-technology></celebee-technology>
  </div>

  <!-- BeamMe (If Click BeamMe Button) -->
  <div v-show="isBeamme">
    <beamme-title></beamme-title>
    <beamme-introduce></beamme-introduce>
    <beamme-technology></beamme-technology>
  </div>
  
  <!-- Footer -->
  <common-footer></common-footer>

 </div>
</template>

<script>
// Import Main page
import MainPage from "~/components/main/Main.vue";

// Import FindBig5
import Fb5Title from "~/components/main/findbig5/Title.vue";
import Fb5Introduce from "~/components/main/findbig5/Introduce.vue";
import Fb5Technology from "~/components/main/findbig5/Technology.vue";

// Import Celebee
import CelebeeTitle from "~/components/main/celebee/Title.vue";
import CelebeeIntroduce from "~/components/main/celebee/Introduce.vue";
import CelebeeTechnology from "~/components/main/celebee/Technology.vue";

// Import BEAMME
import BeammeTitle from "~/components/main/beamme/Title.vue";
import BeammeIntroduce from "~/components/main/beamme/Introduce.vue";
import BeammeTechnology from "~/components/main/beamme/Technology.vue";


export default {
  components: {
    MainPage,
    Fb5Title,
    Fb5Introduce,
    Fb5Technology,
    CelebeeTitle,
    CelebeeIntroduce,
    CelebeeTechnology,
    BeammeTitle,
    BeammeIntroduce,
    BeammeTechnology
  },


  data(){
    return{
      isFB5: true,
      isCelebee: false,
      isBeamme: false,

      header:{
        img: require('"../../../assets/img/common/logo_name_white.svg'),
        color: "color:#FEFEFE" },
    }
  },

  methods:{
    fb5(){
      this.isFB5= true;
      this.isCelebee= false;
      this.isBeamme= false;
    },

    celebee(){
      this.isFB5= false;
      this.isCelebee= true;
      this.isBeamme= false;
    },

    beamme(){
      this.isFB5= false;
      this.isCelebee= false;
      this.isBeamme= true;
    },
  }
}
</script>

<style scoped>

</style>

