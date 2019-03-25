<template>
<div class="fb5">
  <!-- <div class="practice"></div> -->
  <div class="fb5-container">
    <div class="fb5-title">
      <img class="fb5-logo" src="@/assets/img/findbig5/findbig5_logo.png" alt="FindBigFive Logo">
      <a href="https://www.findbig5.com/main" target="_blank" class="button fb5-button">자세히 보기</a>
    </div>
    <div class="fb5-desc">
      <span class=fb5-desc-1>전 세계 언론사에서 IT 관련 정보를 실시간 수집하여</span><br>
      <span class=fb5-desc-2>일일 HOT TOPIC을 제공해 드립니다.</span><br><br>
      <span class=fb5-desc-3>AI를 활용한 쉽고 섬세한 분류 및 검색기능,</span><br>
      <span class=fb5-desc-4>모든 기사를 400자 이내로 요약까지</span><br><br>
      <span class=fb5-desc-5>시간은 너무나도 소중하니까요</span>
    </div>
    <img class="fb5-home-img" src="@/assets/img/findbig5/findbig5_homepage.png" alt="">
  </div>
  <div class="fb5-background">
    <div class="fb5-background-line"></div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.fb5{
  position: relative;
  height: $basic-height + 100px;
}

.fb5-container{
  @extend %container;
  grid-template-areas:
  "tit hom"
  "des hom";
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 60%;
  height: 600px;
  top: 100px;
}

.fb5-title{
  grid-area: tit;
  display: grid;
  grid-template-columns: 80% 20%;
  margin-right: 100px;
}
.fb5-logo{
  width:100%;
  align-self: end;
  z-index: 100;
}


.fb5-button{
  width: 100px;
  height: 25px;
  line-height: 20px;
  margin-bottom: 80px;
  font-size: 15px;
  border: 1px solid black;
  background: none;
  align-self: end;
  text-align: center;
  z-index: 100;
}

.fb5-desc{
  grid-area: des;
  text-align: center;
  padding-left: 130px;
  line-height: 20px;
  z-index: 100;
  font-size: 15px;
}

.fb5-home-img{
  grid-area: hom;
  width: 100%;
  align-self: center;
  box-shadow: -5px 10px 10px 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.fb5-background{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 1200px;
}

.fb5-background-line{
  box-sizing: border-box;
  display: inline-block;
  height: 380px;
  width: 850px;
  border: 2px solid transparent;
  transform: rotate(165deg);
  margin-left: 200px;
  border-image: linear-gradient(45deg, #7E57C2, #F06292) ;
  border-image-slice: 1;
}

a{
  color: black;
}

</style>

