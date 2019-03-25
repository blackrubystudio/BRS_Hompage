<template>
<div class="celebee-introduce">
  <div class="celebee-introduce-container">
    <img class="celebee-introduce-img-1" src="../../../assets/img/celebee/celebee_homepage1.png" alt="셀레비 랜딩페이지 메인">
    <img class="celebee-introduce-img-2" src="../../../assets/img/celebee/celebee_homepage2.png" alt="셀레비 랜딩페이지 서브">
    <img class="celebee-introduce-logo" src="../../../assets/img/celebee/celebee_logo.png" alt="셀레비 로고">
    <div class="celebee-introduce-desc">
      <p>좋아하는 아이돌을 입력하기만 하면<br>
         매주 월요일, 당신이 좋아하는 아이돌의 스케쥴과<br>
         영상을 메세지로 보내드립니다<br><br>
         셀레비가 여러분을 찾아갑니다</p>
    </div>
    <img class="celebee-introduce-effect" src="../../../assets/img/celebee/celebee_effect.png" alt="셀레비 효과">
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.celebee-introduce{
  position: relative;
  height: 800px;
}

.celebee-introduce-container{
  @extend %container;
  grid-template-areas:
  "hom1 logo"
  "hom2 desc";
  grid-template-rows: 45% 45%;
  grid-template-columns: 40% 55%;
  height: 600px;
  top: 100px;

}

.celebee-introduce-img-1{
  grid-area: hom1;
  width: 100%;
  margin-left: -100px;
}

.celebee-introduce-img-2{
  grid-area: hom2;
  width: 90%;
  margin-left: -100px;
}

.celebee-introduce-logo{
  grid-area: logo;
  width: 250px;
  margin-left: 250px;
  margin-top: -5px;
  
}

.celebee-introduce-desc{
  justify-self: start;
  text-align: right;
  font-size: 15px;
  line-height: 20px;
  margin-left: 100px;
}

.celebee-introduce-effect{
  position: absolute;
  top: 15%;
  left: 65%;
  height: 350px;
}

</style>

