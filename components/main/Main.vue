// Main: Index 페이지의 메인페이지

<template>
  <div class="main">
    <div class="main-container">
      <h1 class="main-title-1">경험의</h1>
      <h1 class="main-title-2">단순화</h1>
      <h3 class="main-subtitle">복잡한<br>삶속의<br>가치</h3>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.main{
  @extend %main-page;
}

.main-container{
  @extend %container;
  grid-template-areas:
  "t1 t1"
  "st t2";
  top: 100px;
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  height: 600px;
}

.main-title-1{
  @extend %font-main;
  grid-area: t1;
  justify-self: center;
  align-self: end;
  padding-right: 260px;
}

.main-title-2{
  @extend %font-main;
  grid-area: t2;
}

.main-subtitle{
  grid-area: st;
  justify-self: end;
  text-align: right;
  font-size: 15px;
  line-height: 20px;
}

</style>
