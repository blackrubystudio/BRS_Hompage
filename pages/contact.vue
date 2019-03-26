<template>
<div>
  <!-- HACK : 헤더 컴포넌트를 2개 만들었다 (블랙, 화이트)
  구조가 같기 때문에 데이터 바인딩 하는 형식으로 구현할 수 있을것 같다. -->
  <headers :img=header.img :color=header.color></headers>
  <profile1></profile1>
  <profile2></profile2>
  <contact></contact>
  <footers></footers>
</div>
</template>

<script>
// Import Default
import Headers from "~/components/common/Header.vue";
import Footers from "~/components/common/Footer.vue";

// Import Contact
import Profile1 from "~/components/contact/ProfilePark.vue";
import Profile2 from "~/components/contact/ProfileSo.vue";
import Contact from "~/components/contact/ContactUs.vue";

export default {
  components: {
    Headers,
    Footers,
    Profile1,
    Profile2,
    Contact,
  },

  data(){
    return{
      header:{
        img: require('"../../../assets/img/common/logo_name_black.svg'),
        color: "color:#212121" },
    }
  }
}
</script>

<style scoped>
a[data-v-e05ef4b4]{
  color: black !important;
}

</style>

