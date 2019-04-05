// Contact 페이지
// Header / ProfilePark / ProfileSo / ContacUs / Footer로 구성

<template>
  <div id="contact">
    <common-header :img=header.img :color=header.color></common-header>
    <contact-profile-park></contact-profile-park>
    <contact-profile-so></contact-profile-so>
    <contact-us></contact-us>
    <common-menumobile :color="color"></common-menumobile>
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
        color: "color:#212121" 
      },
      color: "color: #FEFEFE",
    }
  }
}
</script>

