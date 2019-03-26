<template>
<div class="fb5">
  <!-- Section1. Title 시작-->
  <section class="fb5-title">
    <div class="fb5-title-container">
      <div class="fb5-title-search">
      <img  class="fb5-title-search-img" src="@/assets/img/findbig5/findbig5_search.png" alt="findbig5-search">
      </div>
      <h1 class="fb5-title-1">쉽게</h1>
      <h1 class="fb5-title-2">찾으세요</h1>
      <p class="fb5-title-desc">
        오늘날 많은 정보들은 결정하고 판단하는 일을 복잡하게 만듭니다<br>
        진흙 속에서 진주를 찾았을 때에는 이미 온몸이 흙 투성이지요<br>
        이제, 정보를 찾는 것에 시간을 낭비하지 마세요<br>
        그것은 저희의 몫입니다
      </p>
       <div class="fb5-title-postit">
         <div class="fb5-title-postit-container">
           <h1 class="fb5-title-postit-title">FindBig5</h1>
           <div class="fb5-title-postit-content">
             <span>넘쳐나는 정보들</span><br>
             <span>낭비되는 시간들,</span><br><br>
             <span>저희가 도와드리겠습니다</span><br>
             <span  class="fb5-title-line">쉽게 찾으세요.</span>
           </div>
         </div> 
       </div>
    </div>
  </section>
  <!-- // Section1. Title 끝 -->
  <!-- Section2. Introduce 시작 -->
  <section class="fb5-intro">
    <div class="fb5-intro-container">
      <div class="fb5-intro-title">
        <img class="fb5-intro-logo" src="@/assets/img/findbig5/findbig5_logo.png" alt="FindBigFive Logo">
        <a href="https://www.findbig5.com/main" target="_blank" class="button fb5-intro-button">자세히 보기</a>
      </div>
      <div class="fb5-intro-desc">
        <span class=fb5-intro-desc-1>전 세계 언론사에서 IT 관련 정보를 실시간 수집하여</span><br>
        <span class=fb5-intro-desc-2>일일 HOT TOPIC을 제공해 드립니다.</span><br><br>
        <span class=fb5-intro-desc-3>AI를 활용한 쉽고 섬세한 분류 및 검색기능,</span><br>
        <span class=fb5-intro-desc-4>모든 기사를 400자 이내로 요약까지</span><br><br>
        <span class=fb5-intro-desc-5>시간은 너무나도 소중하니까요</span>
      </div>
      <img class="fb5-intro-home-img" src="@/assets/img/findbig5/findbig5_homepage.png" alt="">
    </div>
  </section>
  <!-- Section2. Introduce 끝 -->
  <!-- Section3. Technology 시작 -->
  <section>
    <technology
    :title11 = title1_1
    :title12 = title1_2
    :title21 = title2_1
    :title22 = title2_2
    :title31 = title3_1
    :title32 = title3_2
    :desc1 = desc_1
    :desc3 = desc_3
    >
    </technology>
  </section>
  <!-- Section3. Technology 끝 -->
</div>
</template>

<script>
export default {
  data(){
    return{
      title1_1: "자동 정보",
      title1_2: "수집기",
      title2_1: "검색",
      title2_2: "엔진",
      title3_1: "자연어처리",
      title3_2: "AI",
      desc_1: "<p>오늘날 많은 정보들은 결정하고 판단하는 일을 복잡하게 만듭니다<br>진흙 속에서 진주를 찾았을 때에는 이미 온몸이 흙 투성이지요<br>이제, 정보를 찾는 것에 시간을 낭비하지 마세요<br>그것은 저희의 몫입니다</p>",
      desc_3: "<p>형태소 분석을 기반으로 하여 문서 내 중요단어 분석 뿐 아니라<br>문서의 역가중치를 계싼하여 문서간 중요도를 분석하는 엔진을 제공합니다<br>토픽 추출의 정확도를 위하여 LDA와 LSI 두 모델을 결합한 튜닝모델을 활용하고 있습니다<br>또한 기사 400자 이내 요약기능으로 사용자에게 전문을 읽는 부담을 줄이고 있습니다</p>"
    }
  }
}
</script>

<style lang="scss" scoped>

.fb5{
  position: relative;
  height: 100%;
}

.fb5-title{
 position: relative;
 height: $basic-height;
}

.fb5-title-container{
 @extend %container;
 top: 100px;
 grid-template-areas:
 "img tl1"
 "tl2 tl2"
 "des des";
 grid-template-rows: 55% 30% 15%;
 grid-template-columns: 400px 700px;
 height: 500px;
}

.fb5-title-search{
 grid-area: img;
 padding-left: 100px;
 z-index: 100;
}

.fb5-title-search-img{
 height: 320px;
 padding-left: 53px;
 margin-top: 20px;
 align-self: end;
}

.fb5-title-1{
 grid-area: tl1;
 font-family: $main-font;
 font-size: 130px;
 align-self: center;
}

.fb5-title-2{
 grid-area: tl2;
 justify-self: center;
 font-family: $main-font;
 font-size: 130px;
 padding-right: 250px;
 margin-bottom: 100px;
}

.fb5-title-desc{
 grid-area: des;
 padding-left: 180px;
 font-size: 15px;
 line-height: 18px;
}


.fb5-title-postit{
  @extend %postit;
}

.fb5-title-postit-container{
  color: white;
}

.fb5-title-postit-title{
  position: absolute;
  top: 20px;
  padding-left: 40px;
  font-size: 30px;
  z-index: 200;
}

.fb5-title-postit-content{
  position: absolute;
  bottom: 50px;
  padding-left: 40px;
  font-size: 20px;
  line-height: 25px;
  z-index: 200;
}

.fb5-title-line{
  text-decoration:  underline;
  text-underline-position: under;
}

.fb5-intro{
  position: relative;
  height: $basic-height + 100px;
}

.fb5-intro-container{
  @extend %container;
  grid-template-areas:
  "tit hom"
  "des hom";
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 60%;
  height: 600px;
  top: 100px;
}

.fb5-intro-title{
  grid-area: tit;
  display: grid;
  grid-template-columns: 80% 20%;
  margin-right: 100px;
}
.fb5-intro-logo{
  width:100%;
  align-self: end;
  z-index: 100;
}


.fb5-intro-button{
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

.fb5-intro-desc{
  grid-area: des;
  text-align: center;
  padding-left: 130px;
  line-height: 20px;
  z-index: 100;
  font-size: 15px;
}

.fb5-intro-home-img{
  grid-area: hom;
  width: 100%;
  align-self: center;
  box-shadow: -5px 10px 10px 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.fb5-intro-background{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 1200px;
}

a{
  color: black;
}

</style>