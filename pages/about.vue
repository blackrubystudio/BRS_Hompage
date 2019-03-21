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
import Headers from "~/components/common/header-white.vue";
import Footers from "~/components/common/footer.vue";

// Import About
import Class from "~/components/about/class.vue";
import Growth from "~/components/about/growth.vue";
import Mains from "~/components/about/main.vue";
import Study from "~/components/about/study.vue";
import Weekly from "~/components/about/weekly.vue";

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

