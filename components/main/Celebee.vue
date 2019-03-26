<template>
<div class="celebee">
  <!-- Section1. Title 시작 -->
  <section class="celebee-title">
    <div class="celebee-title-container">
      <div class="celebee-title-container-title">
        <div class="celebee-title-container-title-1">
          <h1 class="celebee-title-font-down">매</h1>
          <h1>일</h1>
          <h1 class="celebee-title-font-down">전해받는</h1>  
        </div>
        <div class="celebee-title-container-title-2">
          <h1>내</h1>
          <h1 class="celebee-title-font-down">아이돌 소식</h1>
        </div>
      </div>  
      <img  class="celebee-title-img" src="@/assets/img/celebee/celebee_mail.png" alt="celebee-search">
      <div class="celebee-title-postit">
        <div class="celebee-title-postit-container">
          <h1 class="celebee-title-postit-title">Celebee</h1>
          <div class="celebee-title-postit-content">
            <span>매일 전해받는</span><br>
            <span>내 아이돌 소식</span><br>
            <span>From. 셀레비</span><br><br>
            <span>이제 좋아하는 아이돌을</span><br>
            <span class="celebee-title-line">빠짐없이 만나보세요</span>
          </div>
        </div> 
      </div>
    </div>
  </section>
  <!-- // Section1. Title 끝 -->
  <!-- Section2. Introduce 시작 -->
  <section class="celebee-introduce">
    <div class="celebee-introduce-container">
      <img class="celebee-introduce-img-1" src="@/assets/img/celebee/celebee_homepage1.png" alt="셀레비 랜딩페이지 메인">
      <img class="celebee-introduce-img-2" src="@/assets/img/celebee/celebee_homepage2.png" alt="셀레비 랜딩페이지 서브">
      <img class="celebee-introduce-logo" src="@/assets/img/celebee/celebee_logo.png" alt="셀레비 로고">
      <div class="celebee-introduce-desc">
        <p>좋아하는 아이돌을 입력하기만 하면<br>
          매주 월요일, 당신이 좋아하는 아이돌의 스케쥴과<br>
          영상을 메세지로 보내드립니다<br><br>
          셀레비가 여러분을 찾아갑니다</p>
      </div>
      <img class="celebee-introduce-effect" src="@/assets/img/celebee/celebee_effect.png" alt="셀레비 효과">
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

.celebee{
  position: relative;
  height: 100%;
}

.celebee-title{
 position: relative;
 height: $basic-height;
}

.celebee-title-container{
 @extend %container;
 top: 100px;
 height: 500px;
}
.celebee-title-container-title{
  display: grid;
  grid-template-rows: 30% 50%;
  font-size: 100px;
  margin-left: 100px;
}

h1{
font-family: $main-font;
}

.celebee-title-font-down{
  padding-top: 30px;
}

.celebee-title-container-title-1{
  display: grid;
  grid-template-columns: 10% 10% 80%;
}

.celebee-title-container-title-2{
  display: grid;
  grid-template-columns: 10% 90%;
  z-index: 100;
  // margin-left: 100px;
}

.celebee-title-img{
  position: absolute;
 height: 320px;
 top: 100px;
 left: 150px;
 transform: rotate(10deg);
 box-shadow: 0 20px 6px -6px rgba(0, 0, 0, 0.2);
}


.celebee-title-postit{
  @extend %postit;
}

.celebee-title-postit-container{
  color: white;
}

.celebee-title-postit-title{
  position: absolute;
  top: 20px;
  padding-left: 40px;
  font-size: 30px;
  z-index: 200;
}

.celebee-title-postit-content{
  width: 350px;
  text-align: right;
  position: absolute;
  bottom: 50px;
  padding: 0 20px 0 0px;
  font-size: 20px;
  line-height: 25px;
  z-index: 200;
}

.celebee-title-line{
  text-decoration:  underline;
  text-underline-position: under;
}

.celebee-introduce{
  position: relative;
  height: $basic-height + 100px;
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