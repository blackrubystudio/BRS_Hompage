// Beamme: BEAMME 프로젝트에 관한 컴포넌트, 섹션은 총 3개로 구분 (Title, Introduce, Technology)
// Title의 Postit 부분과, Technology에 관한 부분은 props를 받아와 처리 (내용은 data 메소드에 저장)

<template>
  <div class="beamme">
    
    <!-- Section1. Title 시작-->
    <section class="beamme-title">
      <div class="beamme-title-container">
        <img class="beamme-title-img-wave" src="@/assets/img/beamme/beamme_wave.png" alt="빔미 역동성">
        <div class="beamme-title-main">
            <h1>언제</h1>
            <h1>어디서든</h1>  
            <h1 class="beamme-title-indexup">빠르게</h1>
        </div>  
        <common-postit class="beamme-postit" :title=post.title :desc=post.desc></common-postit>
    </div>
    </section>
    <!-- // Section1. Title 끝 -->

    <!-- Section2. Introduce 시작 -->
    <section class="beamme-introduce">
      <div class="beamme-introduce-container">
        <img class="beamme-introduce-img-logo" src="@/assets/img/beamme/beamme_logo.png" alt="빔미 로고">
        <div class="beamme-introduce-desc">
          <p>
            클라우드 PC서비스를 통해<br>
            <span class="beamme-introduce-1">다양한 디바이스를 지원하고</span><br>
            <span class="beamme-introduce-2">게임 뿐 아니라 고사양 PC가 필요한</span><br>
            <span class="beamme-introduce-3">3D, 영상, 음악 작업 등에도</span><br>
            <span class="beamme-introduce-4">사용할 수 있습니다</span><br>
            <a class="button beamme-introduce-button" href="https://beamme.io" target="_blank" >자세히 보기</a>
          </p>
        </div>
        <img class="beamme-introduce-img-homepage" src="@/assets/img/beamme/beamme_homepage.png" alt="빔미 홈페이지">
      </div>
    </section>
    <!-- Section2. Introduce 끝 -->

    <!-- Section3. Technology 시작 -->
    <section>
      <common-technology class="beamme-technology"
      :title11 = tech.title11
      :title12 = tech.title12
      :title21 = tech.title21
      :title22 = tech.title22
      :title31 = tech.title31
      :title32 = tech.title32
      :desc1 = tech.desc1
      :desc2 = tech.desc2
      :desc3 = tech.desc3
      :img1 = tech.img1
      :img2 = tech.img2
      :img3 = tech.img3
      :alt1 = tech.alt1
      :alt2 = tech.alt2
      :alt3 = tech.alt3>
      </common-technology>
    </section>
    <!-- Section3. Technology 끝 -->

  </div>
</template>

<script>
export default {
  data(){
    return{
      post:{
        title: "Beam Me",
        desc: "클릭 한번으로 만나는<br>당신의 고사양 PC<br>컴퓨터 구입한다고 고민하지 말고<br>BEAMME 하세요<br><br>우리집 노트북을 최신컴으로"
      },

      tech:{
        title11: "자동 정보",
        title12: "수집기",
        title21: "검색",
        title22: "엔진",
        title31: "자연어처리",
        title32: "AI",
        img1: require("@/assets/img/beamme/beamme_tech_1.png"),
        img2: require("@/assets/img/beamme/beamme_tech_2.png"),
        img3: require("@/assets/img/beamme/beamme_tech_3.png"),
        alt1: '첫번째 이미지',
        alt2: '두번째 이미지',
        alt3: '세번째 이미지',
        desc1: "<span class='tech-desc-right-2'>Forbes, NewYorkTimes 등 일반 뉴스미디어와</span><br>\
                <span class='tech-desc-right-1'>TechCrunchm, TheNextWeb등 IT 전문미디어 등 30여개 해외 언론사에서</span><br>\
                IT기사를 실시간으로 수집합니다. 2016년 이후 기사들을 자유롭게 찾아볼 수 있습니다",
        desc2:"<span class='tech-desc-left-2'>검색을 통해 사용자가 원하는 기사를 빠르게 찾을 수 있습니다</span><br>\
               <span class='tech-desc-left-1'>유저들의 검색어 기록을 학습, 중요도에 반영하여 사용자 별 맞춤 검색기능이 가능하고</span><br>\
               기사들을 유사 기사로 묶어 내용이 비슷한 기사를 다시 보지 않을 수 있습니다",
        desc3:"<span class='tech-desc-right-3'>형태소 분석을 기반으로 하여 문서 내 중요단어 분석 뿐 아니라</span><br>\
               <span class='tech-desc-right-2'>문서의 역 가중치를 계산하여 문서 간 중요도를 분석하는 엔진을 제공합니다</span><br>\
               <span class='tech-desc-right-1'>토픽 추출의 정확도를 위하여 LDA와 LSI 두 모델을 결합한 튜닝모델을 활용하고 있습니다</span><br>\
               또한 기사 400자 이내 요약기능으로 사용자에게 전문을 읽는 부담을 줄이고 있습니다"
      }
    }
  },
}
</script>



<style lang="scss" scoped>

// Section1. Title
.beamme-title{
  @extend %project-section-height;
}

.beamme-title-container{
  @extend %project-title-container;
}

.beamme-title-main{
  display: grid;
  grid-template-rows: 20% 20% 20%;
  justify-self: center;
  margin-top: 50px;
  margin-right: 120px;
  font-size: 90px;
  text-align: right;
}

h1{
  font-family: $main-font;
}

.beamme-title-indexup{
  z-index: 200;
}

.beamme-title-img-wave{
  position: absolute;
  height: 200px;
  top: 200px;
  left: -50px;
  z-index: 100;
}

// Section2. Introduce
.beamme-introduce{
  @extend %project-section-height;
  margin: -50px 0 50px 0;
}

.beamme-introduce-container{
  @extend %project-introduce-container;
  grid-template-areas:
  "log hom"
  "des hom";
  grid-template-rows: 37% 63%;
  grid-template-columns: 35% 55%;
}

.beamme-introduce-img-logo{
  grid-area: log;
  margin-top: 70px;
  margin-left: 30px;
  height: 120px;
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

.beamme-introduce-img-homepage{
  grid-area: hom;
  width: 700px;
  box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.2);
}

.beamme-introduce-1{
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

.beamme-introduce-button{
  @extend %main-project-button;
  font-size: 12px;
  padding: 2px 10px;
  margin-right: 70px;
}

a{
  color: #212121;
}

</style>

<style lang="scss">
// For technology Custom
.beamme-technology{
  .tech-desc-right-1{
    @extend %padding-right-1;
  }
  .tech-desc-right-2{
    @extend %padding-right-2;
  }
  .tech-desc-right-3{
    @extend %padding-right-3;
  }
  .tech-desc-left-1{
    @extend %padding-left-1;
  }
  .tech-desc-left-2{
    @extend %padding-left-2;
  }
}
</style>