<template>
  <div id="contact">
    <!-- HACK : 헤더 컴포넌트를 2개 만들었다 (블랙, 화이트)
    구조가 같기 때문에 데이터 바인딩 하는 형식으로 구현할 수 있을것 같다. -->
    <common-header :img=header.img :color=header.color></common-header>
    <contact-profile-park></contact-profile-park>
    <contact-profile-so></contact-profile-so>
    <contact-us></contact-us>
    <common-footer></common-footer>
  </div>
</template>

<script>
// Import Contact
import ContactProfilePark from "~/components/contact/ProfilePark.vue";
import ContactProfileSo from "~/components/contact/ProfileSo.vue";
import ContactUs from "~/components/contact/ContactUs.vue";

export default {
  components: {
    ContactProfilePark,
    ContactProfileSo,
    ContactUs,
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

