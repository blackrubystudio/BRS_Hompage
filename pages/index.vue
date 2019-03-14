<template>
  <section class="container">
<headers></headers>

<mains></mains>

<div @click="fb5()"><button>Findbig5</button></div>
<div @click="celebee()"><button>Celebee</button></div>
<div @click="beamme()"><button>Beamme</button></div>

<div v-show="isFB5">
  <fb5-title></fb5-title>
  <fb5-introduce></fb5-introduce>
  <fb5-technology></fb5-technology>
</div>

<div v-show="isCelebee">
  <celebee-title></celebee-title>
  <celebee-introduce></celebee-introduce>
  <celebee-technology></celebee-technology>
</div>

<div v-show="isBeamme">
  <beamme-title></beamme-title>
  <beamme-introduce></beamme-introduce>
  <beamme-technology></beamme-technology>
</div>

<history></history>
<footers></footers>
  </section>
</template>

<script>
// Import Default
import Headers from "~/components/common/header.vue";
import Footers from "~/components/common/footer.vue";
import Mains from "~/components/main/basic/main.vue";
import History from "~/components/main/basic/history.vue";

// Import FindBig5
import Fb5Title from "~/components/main/findbig5/title.vue";
import Fb5Introduce from "~/components/main/findbig5/introduce.vue";
import Fb5Technology from "~/components/main/findbig5/technology.vue";

// Import Celebee
import CelebeeTitle from "~/components/main/celebee/title.vue";
import CelebeeIntroduce from "~/components/main/celebee/introduce.vue";
import CelebeeTechnology from "~/components/main/celebee/technology.vue";

// Import BEAMME
import BeammeTitle from "~/components/main/beamme/title.vue";
import BeammeIntroduce from "~/components/main/beamme/introduce.vue";
import BeammeTechnology from "~/components/main/beamme/technology.vue";


export default {
  components: {
    // Common
    Headers,
    Footers,
    Mains,
    History,

    // Project
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

<style>

</style>

