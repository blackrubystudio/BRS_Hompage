<template>
<div>
  <headers></headers>
  <profile1></profile1>
  <profile2></profile2>
  <contact></contact>
  <footers></footers>
</div>
</template>

<script>
// Import Default
import Headers from "~/components/common/HeaderBlack.vue";
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
  }
}
</script>

<style>

</style>

