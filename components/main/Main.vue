<template>
  <div class="main">
    <div class="main-container">
      <h1 class="main-title-1">경험의</h1>
      <h1 class="main-title-2">단순화</h1>
      <h3 class="main-subtitle">복잡한<br>삶속의<br>가치</h3>
      <div class="main-button-group">
        <button class="main-button" @click="isCelebee()">Celebee</button>
        <button class="main-button" @click="isBeamme()">BeamMe</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.main{
  @extend %main-page;
}

.main-container{
  @extend %container;
  grid-template-areas:
  "t1 t1"
  "st t2"
  "b1 bt";
  top: 200px;
  grid-gap: 10px;
  height: 600px;
}

.main-title-1{
  @extend %font-main;
  grid-area: t1;
  justify-self: center;
  align-self: end;
  font-family: $main-font;
  font-size: 100px;
  padding-right: 300px;
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

.main-button-group{
  grid-area: bt;
  justify-self: end;
  align-self: end;
  padding-right: 110px;
  padding-bottom: 80px;
}

.main-button{
  font-family: $main-button-font;
  background: none;
  color: #FFFFFF;
  border: 1.5px solid #FFFFFF;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  margin: 0 10px;
  width: 100px;
}

</style>
