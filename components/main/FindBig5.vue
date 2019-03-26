<template>
<div class="fb5">
  <!-- Section1. Title 시작-->
  <section class="fb5-title">
    <div class="fb5-title-container">
      <div class="fb5-title-img">
      <img  class="fb5-title-img-search" src="@/assets/img/findbig5/findbig5_search.png" alt="FindBig5 쉽게 찾으세요">
      </div>
      <h1 class="fb5-title-1">쉽게</h1>
      <h1 class="fb5-title-2">찾으세요</h1>
      <p class="fb5-title-desc">
        오늘날 많은 정보들은 결정하고 판단하는 일을 복잡하게 만듭니다<br>
        진흙 속에서 진주를 찾았을 때에는 이미 온몸이 흙 투성이지요<br>
        이제, 정보를 찾는 것에 시간을 낭비하지 마세요<br>
        그것은 저희의 몫입니다
      </p>
      <postit :title=post.title :desc=post.desc></postit>
    </div>
  </section>
  <!-- // Section1. Title 끝 -->
  <!-- Section2. Introduce 시작 -->
  <section class="fb5-introduce">
    <div class="fb5-introduce-container">
      <div class="fb5-introduce-title">
        <img class="fb5-introduce-img-logo" src="@/assets/img/findbig5/findbig5_logo.png" alt="FindBigFive 로고">
        <a href="https://www.findbig5.com/main" target="_blank" class="button fb5-introduce-button">자세히 보기</a>
      </div>
      <div class="fb5-introduce-desc">
        <span class=fb5-introduce-desc-1>전 세계 언론사에서 IT 관련 정보를 실시간 수집하여</span><br>
        <span class=fb5-introduce-desc-2>일일 HOT TOPIC을 제공해 드립니다.</span><br><br>
        <span class=fb5-introduce-desc-3>AI를 활용한 쉽고 섬세한 분류 및 검색기능,</span><br>
        <span class=fb5-introduce-desc-4>모든 기사를 400자 이내로 요약까지</span><br><br>
        <span class=fb5-introduce-desc-5>시간은 너무나도 소중하니까요</span>
      </div>
      <img class="fb5-introduce-img-homepage" src="@/assets/img/findbig5/findbig5_homepage.png" alt="">
    </div>
  </section>
  <!-- Section2. introduce 끝 -->
  <!-- Section3. Technology 시작 -->
  <section>
    <technology
    :title11 = tech.title11
    :title12 = tech.title12
    :title21 = tech.title21
    :title22 = tech.title22
    :title31 = tech.title31
    :title32 = tech.title32
    :desc1 = tech.desc1
    :desc3 = tech.desc3
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
      post:{
        title: "FindBig5",
        desc: "넘쳐나는 정보들<br>낭비되는 시간들,<br><br>저희가 도와드리겠습니다<br>쉽게 찾으세요."
      },

      tech:{
        title11: "자동 정보",
        title12: "수집기",
        title21: "검색",
        title22: "엔진",
        title31: "자연어처리",
        title32: "AI",
        desc1: "<p>오늘날 많은 정보들은 결정하고 판단하는 일을 복잡하게 만듭니다<br>진흙 속에서 진주를 찾았을 때에는 이미 온몸이 흙 투성이지요<br>이제, 정보를 찾는 것에 시간을 낭비하지 마세요<br>그것은 저희의 몫입니다</p>",
        desc3: "<p>형태소 분석을 기반으로 하여 문서 내 중요단어 분석 뿐 아니라<br>문서의 역가중치를 계싼하여 문서간 중요도를 분석하는 엔진을 제공합니다<br>토픽 추출의 정확도를 위하여 LDA와 LSI 두 모델을 결합한 튜닝모델을 활용하고 있습니다<br>또한 기사 400자 이내 요약기능으로 사용자에게 전문을 읽는 부담을 줄이고 있습니다</p>"
      }
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

.fb5-title-img{
 grid-area: img;
 padding-left: 100px;
 z-index: 100;
}

.fb5-title-img-search{
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

.fb5-introduce{
  position: relative;
  height: $basic-height + 100px;
}

.fb5-introduce-container{
  @extend %container;
  grid-template-areas:
  "tit hom"
  "des hom";
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 60%;
  height: 600px;
  top: 100px;
}

.fb5-introduce-title{
  grid-area: tit;
  display: grid;
  grid-template-columns: 80% 20%;
  margin-right: 100px;
}
.fb5-introduce-img-logo{
  width:100%;
  align-self: end;
  z-index: 100;
}


.fb5-introduce-button{
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

.fb5-introduce-desc{
  grid-area: des;
  text-align: center;
  padding-left: 130px;
  line-height: 20px;
  z-index: 100;
  font-size: 15px;
}

.fb5-introduce-img-homepage{
  grid-area: hom;
  width: 100%;
  align-self: center;
  box-shadow: -5px 10px 10px 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.fb5-introduce-background{
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