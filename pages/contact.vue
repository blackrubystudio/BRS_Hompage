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
import Headers from "~/components/common/header-black.vue";
import Footers from "~/components/common/footer.vue";

// Import Contact
import Profile1 from "~/components/contact/profile1.vue";
import Profile2 from "~/components/contact/profile2.vue";
import Contact from "~/components/contact/contact.vue";

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

