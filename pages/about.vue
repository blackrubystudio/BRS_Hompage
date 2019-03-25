<template>
<div>
  <headers></headers>
  <mains></mains> 
  <growth></growth>
  <study></study>
  <class></class>
  <weekly></weekly>
  <footers></footers>
</div>
</template>

<script>
// Import Default
import Headers from "~/components/common/HeaderWhite.vue";
import Footers from "~/components/common/Footer.vue";

// Import About
import Class from "~/components/about/Class.vue";
import Growth from "~/components/about/Growth.vue";
import Mains from "~/components/about/Main.vue";
import Study from "~/components/about/Study.vue";
import Weekly from "~/components/about/Weekly.vue";

export default {
  components: {
    Headers,
    Footers,
    Class,
    Growth,
    Mains,
    Study,
    Weekly
  }
}
</script>

<style>

</style>

