<template>
  <div class="about-main">
    <!-- Main Container 시작 -->
    <div class="about-main-container">
      <h1 class="about-main-title-1">BLACKRUBYSTUDIO</h1>
      <h1 class="about-main-title-2">블랙루비<br>스튜디오</h1>
      <h3 class="about-main-subtitle"><div class="about-main-line"></div>팀과 함께<br>간단하고 효율적으로</h3>
      
    </div>
    <!-- // Main Container 끝 -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about-main{
  @extend %main-page;
}

.about-main-container{
  @extend %container;
  grid-template-areas:
  "tt1 bl1 bl2"
  "tt1 tt2 bl3"
  "bl4 bl5 sub";
  grid-template-columns: 100px 450px 300px;
  top: 100px;
  height: 600px;
}

.about-main-title-1{
  grid-area: tt1;
  font-family: $about-sub;
  font-size: 25px;
  transform: rotate(90deg);
  justify-self: end;
  padding-right: 40px;
  }

.about-main-title-2{
  @extend %font-main;
  grid-area: tt2;
  align-self: end;
  justify-self: end;
}

.about-main-subtitle{
  grid-area: sub;
  text-align: right;
  font-size: 15px;
  line-height: 20px;
}

.about-main-line{
  position: absolute;
  margin-top: 10px;
  right: 240px;
  width: 50px;
  border-bottom: 0.5px solid #FEFEFE;
}
</style>
