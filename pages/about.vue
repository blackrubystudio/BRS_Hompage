<template>
  <div id="about">
    <common-header :img=header.img :color=header.color></common-header>
    <about-main></about-main> 
    <about-growth></about-growth>
    <!-- HACK: 현재는 Study, Class, Weekly각 컴포넌트로 구성되어 있다.
    하지만 구조가 비슷하기 때문에 컴포넌트 하나로 데이터 바인딩 하는식으로 구현할 수 있을것 같다 -->
    <about-study></about-study>
    <about-class></about-class>
    <about-weekly></about-weekly>
    <common-footer></common-footer>
  </div>
</template>

<script>
// Import About
import AboutClass from "~/components/about/Class.vue";
import AboutGrowth from "~/components/about/Growth.vue";
import AboutMain from "~/components/about/Main.vue";
import AboutStudy from "~/components/about/Study.vue";
import AboutWeekly from "~/components/about/Weekly.vue";

export default {
  components: {
    AboutClass,
    AboutGrowth,
    AboutMain,
    AboutStudy,
    AboutWeekly
  },
  
  data(){
    return{
      header:{
        img: require('"../../../assets/img/common/logo_name_white.svg'),
        color: "color:#FEFEFE" },
    }
  }
}
</script>

<style>

</style>

