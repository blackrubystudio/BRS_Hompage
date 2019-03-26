<template>
<div class="beamme">
  <!-- Section1. Title 시작-->
  <section class="beamme-title">
    <div class="beamme-title-container">
      <div class="beamme-title-container-title">
          <h1 class="beamme-title-font-down">언제</h1>
          <h1 class="beamme-title-font-down">어디서든</h1>  
          <h1 class="beamme-title-font-down">빠르게</h1>
      </div>  
      <img  class="beamme-title-img" src="@/assets/img/beamme/beamme_wave.png" alt="beamme-search">
      <div class="beamme-title-postit">
        <div class="beamme-title-postit-container">
          <h1 class="beamme-title-postit-title">Beam Me</h1>
          <div class="beamme-title-postit-content">
            <span>클릭 한번으로 만나는</span><br>
            <span>당신의 고사양 PC</span><br>
            <span>컴퓨터 구입한다고 고민하지 말고</span><br>
            <span>BEAMME 하세요</span><br><br>
            <span class="beamme-title-line">우리집 노트북을 최신컴으로</span>
          </div>
        </div> 
      </div>
   </div>
  </section>
  <!-- // Section1. Title 끝 -->
  <!-- Section2. Introduce 시작 -->
  <section class="beamme-introduce">
    <div class="beamme-introduce-container">
      <img class="beamme-introduce-logo" src="@/assets/img/beamme/beamme_logo.png" alt="빔미 로고">
      <div class="beamme-introduce-desc">
        <p>
          <span class="beamme-introduce-1">클라우드 PC서비스를 통해</span><br>
          <span class="beamme-introduce-2">다양한 디바이스를 지원하고</span><br>
          <span class="beamme-introduce-3">게임 뿐 아니라 고사양 PC가 필요한</span><br>
          <span class="beamme-introduce-4">3D, 영상, 음악 작업 등에도</span><br>
          <span class="beamme-introduce-5">사용할 수 있습니다.</span>
        </p>
      </div>
      <img class="beamme-introduce-img" src="@/assets/img/beamme/beamme_homepage.png" alt="빔미 홈페이지">
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

.beamme{
  position: relative;
  height: 100%;
}

.beamme-title{
  position: relative;
  height: $basic-height;
}

.beamme-title-container{
  @extend %container;
  top: 100px;
  height: 500px;
}
.beamme-title-container-title{
  display: grid;
  grid-template-rows: 20% 20% 20%;
  justify-self: center;
  margin-right: 120px;
  font-size: 100px;
  text-align: right;
  z-index: 100;
}

h1{
  font-family: $main-font;
}

.beamme-title-font-down{
  padding-top: 30px;
}

.beamme-title-img{
  position: absolute;
  height: 220px;
  top: 150px;
  left: -100px;
  transform: rotate(10deg);
}

.beamme-title-postit{
  @extend %postit;
}

.beamme-title-postit-container{
  color: white;
}

.beamme-title-postit-title{
  position: absolute;
  top: 20px;
  padding-left: 40px;
  font-size: 30px;
  z-index: 200;
}

.beamme-title-postit-content{
  position: absolute;
  bottom: 50px;
  padding-left: 40px;
  font-size: 20px;
  line-height: 25px;
  z-index: 200;
}

.beamme-title-line{
  text-decoration:  underline;
  text-underline-position: under;
}

.beamme-introduce{
  position: relative;
  height: $basic-height + 100px;
}

.beamme-introduce-container{
  @extend %container;
  grid-template-areas:
  "log hom"
  "des hom";
  grid-template-rows: 45% 55%;
  grid-template-columns: 35% 55%;
  height: 600px;
  top: 100px;
}

.beamme-introduce-logo{
  grid-area: log;
  margin-top: 120px;
  margin-left: -50px;
  height: 140px;
  z-index: 100;
  box-shadow: 0 15px 6px -6px rgba(0, 0, 0, 0.2);
}

.beamme-introduce-desc{
  grid-area: des;
  text-align: right;
  align-self: start;
  justify-self: center;
  margin-right: -50px;
  line-height: 25px;
  font-size: 15px;
}

.beamme-introduce-img{
  grid-area: hom;
  height: 80%;
  box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.2);
}

.beamme-introduce-2{
  @extend %padding-right-1;
}

.beamme-introduce-2{
  @extend %padding-right-2;
}

.beamme-introduce-3{
  @extend %padding-right-3;
}

.beamme-introduce-4{
  @extend %padding-right-4;
}

.beamme-introduce-5{
  @extend %padding-right-5;
}
</style>