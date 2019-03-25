<template>
<div>
  <headers></headers>
  <mains></mains> 
  <growth></growth>
  <!-- HACK: 현재는 Study, Class, Weekly각 컴포넌트로 구성되어 있다.
  하지만 구조가 비슷하기 때문에 컴포넌트 하나로 데이터 바인딩 하는식으로 구현할 수 있을것 같다 -->
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

