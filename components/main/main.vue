<template>
  <div class="main">
    <div class="main-container">
      <h1 class="main-title-1">경험의</h1>
      <h1 class="main-title-2">단순화</h1>
      <h3 class="main-subtitle">복잡한<br>삶속의<br>가치</h3>
      <div class="main-buttons">
        <button class="main-button">Celebee</button>
        <button class="main-button">BeamMe</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";

.main{
  @extend %main-page;
}

.main-container{
  position: relative;
  width: 1024px;
  margin: 0 auto;
  top: 200px;
  display: grid;
  grid-template-areas:
  "t1 t1"
  "st t2"
  "b1 bt";
  grid-gap: 10px;
  height: 600px;
}

.main-title-1{
  grid-area: t1;
  justify-self: center;
  align-self: end;
  font-family: $main-font;
  font-size: 100px;
  padding-right: 25%;
}

.main-title-2{
  grid-area: t2;
  font-family: $main-font;
  font-size: 100px;
  
}

.main-subtitle{
  grid-area: st;
  justify-self: end;
  text-align: right;
  font-size: 15px;
  line-height: 20px;
}

.main-buttons{
  grid-area: bt;
  justify-self: center;
  align-self: end;
  padding-left: 20%;
  padding-bottom: 80px;
}

.main-button{
  background: none;
  color: white;
  border: 1px solid white;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  margin: 0 10px;
}

</style>
