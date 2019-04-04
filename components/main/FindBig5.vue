// FindBig5: FindBig5 프로젝트에 관한 컴포넌트, 섹션은 총 3개로 구분 (Title, Introduce, Technology)
// Title의 Postit 부분과, Technology에 관한 부분은 props를 받아와 처리 (내용은 data 메소드에 저장)

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
        <common-postit class="fb5-postit" :title=post.title :desc=post.desc></common-postit>
      </div>
    </section>
    <!-- // Section1. Title 끝 -->

    <!-- Section2. Introduce 시작 -->
    <section class="fb5-introduce">
      <div class="fb5-introduce-container">
        <img class="fb5-introduce-background" src="@/assets/img/findbig5/findbig5_background.png" alt="FindBig5 배경라인">
        <div class="fb5-introduce-title">
          <img class="fb5-introduce-img-logo" src="@/assets/img/findbig5/findbig5_logo.png" alt="FindBigFive 로고">
          <a class="button fb5-introduce-button" href="https://www.findbig5.com/main" target="_blank" >자세히 보기</a>
        </div>
        <div class="fb5-introduce-desc">
          <span>전 세계 언론사에서 IT 관련 정보를 실시간 수집하여</span><br>
          <span class="fb5-introduce-desc-1">일일 HOT TOPIC을 제공해 드립니다.</span><br><br>
          <span class="fb5-introduce-desc-2">AI를 활용한 쉽고 섬세한 분류 및 검색기능,</span><br>
          <span class="fb5-introduce-desc-3">모든 기사를 400자 이내로 요약까지</span><br><br>
          <span class="fb5-introduce-desc-4">시간은 너무나도 소중하니까요</span>
        </div>
        <img class="fb5-introduce-img-homepage" src="@/assets/img/findbig5/findbig5_homepage.png" alt="">
      </div>
    </section>
    <!-- Section2. introduce 끝 -->

    <!-- Section3. Technology 시작 -->
    <section>
      <common-technology class="fb5-technology"
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
        title: "FindBig5",
        desc: "넘쳐나는 정보들<br>낭비되는 시간들<br><br>저희가 도와드리겠습니다<br>쉽게 찾으세요"
      },

      tech:{
        title11: "자동 정보",
        title12: "수집기",
        title21: "검색",
        title22: "엔진",
        title31: "자연어처리",
        title32: "AI",
        img1: require("@/assets/img/findbig5/findbig5_tech_1.png"),
        img2: require("@/assets/img/findbig5/findbig5_tech_2.png"),
        img3: require("@/assets/img/findbig5/findbig5_tech_3.png"),
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
      },
    }
  },
}
</script>

<style lang="scss" scoped>

// Section1. Title
.fb5-title{
  @extend %project-section-height;
  @include md{
    height: 550px;
  }
}

.fb5-title-container{
  @extend %project-title-container;
  grid-template-areas:
  "img tl1"
  "tl2 tl2"
  "des des";
  grid-template-rows: 275px 125px 100px;
  grid-template-columns: 400px 624px;

  @include lg{
    width: 760px;
    grid-template-columns: 250px 510px;
    grid-template-rows: 225px 110px 100px;
  }
  @include md{
    width: 550px;
    top: 100px;
    grid-template-columns: 170px 380px;
  }
  @include sm{
  grid-template-areas:
  "img tl1"
  "tl2 tl2";
    grid-template-rows: 150px 150px;
    grid-template-columns: 130px 170px;
    margin-top: -40px;
    left: 0;
    width: 300px;
  }
}

.fb5-title-img{
  grid-area: img;
  z-index: 100;
  @include sm{
    z-index: 200;
  }
}

.fb5-title-img-search{
  height: 295px;
  padding-left: 194px;
  margin-top: 35px;
  align-self: end;
  @include lg{
    height: 250px;
    padding-left: 103px;
    margin-top: 20px;
  }
  @include md{
    height: 200px;
    padding-left: 40px;
    margin-top: 55px;
  }
  @include sm{
    margin-top: 18px;
    height: 150px;
    padding-left: 33px;
  }
}

.fb5-title-1{
  grid-area: tl1;
  font-family: $main-font;
  font-size: 120px;
  align-self: center;
  @include lg{
    font-size: 100px;
  }
  @include md{
    padding-top: 20px;
    font-size: 80px;
  }
  @include sm{
    font-size: 55px;
    color: #FEFEFE;
    z-index: 100;

  }
}

.fb5-title-2{
  grid-area: tl2;
  justify-self: center;
  font-family: $main-font;
  font-size: 120px;
  margin-top: -10px;
  padding-right: 135px;
  margin-bottom: 100px;
  @include lg{
    font-size: 100px;
  }
  @include md{
    font-size: 80px;
  }
  @include sm{
    font-size: 55px;
    width: 100%;
    padding-right: 0;
    z-index: 300;
    text-align: center;
    color: #FEFEFE;
  }
}

.fb5-title-desc{
 grid-area: des;
 padding-left: 220px;
 font-size: 14px;
 line-height: 18px;
 @include lg{
   padding-left: 120px;
   font-size: 11px;
   line-height: 15px;
 }
 @include md{
   padding-left: 50px;
   font-size: px;
 }
 @include sm{
   display: none;
 }
}

// Section2. Introduce
.fb5-introduce{
  @extend %project-section-height;
  margin: -50px 0 50px 0;
  @include sm{
    height: 500px;
  }
}

.fb5-introduce-container{
  @extend %project-introduce-container;
  grid-template-areas:
  "tit hom"
  "des hom";
  grid-template-rows: 45% 55%;
  grid-template-columns: 50% 60%;
  @include lg{
    width: 760px;
  }
  @include md{
    width: 550px;
  }
  @include sm{
    top: 0;
    width: 300px;
    grid-template-areas:
    "tit"
    "des"
    "hom";
    height: 500px;
    grid-template-rows: 35% 35% 30%;
    grid-template-columns: 100%;
    justify-items: center;
  }
}

.fb5-introduce-background{
  top: 37% !important;
  width: 720px !important;
  left: 42% !important;
  z-index: 100;
  @include lg{
    width: 600px !important;
    left: 41.8% !important;
    top: 40% !important;
  }
  @include md{
    width: 500px !important;
    top: 44.5% !important;
    left: 44% !important;
  }
  @include sm{
    display: none;
  }

} 

.fb5-introduce-title{
  display: grid;
  grid-area: tit;
  grid-template-columns: 80% 20%;
  margin-right: 100px;
}

.fb5-introduce-img-logo{
  width:100%;
  align-self: end;
  @include lg{
    width: 90%;
  }
  @include md{
    margin-left: 0px;
    width: 93%;
  }
  @include sm{
    width: 200px;
    margin-right: -100px;
  }
}

.fb5-introduce-button{
  @extend %main-project-button;
  @include lg{
   margin-bottom: 50px;
  }
  @include md{
    margin-bottom: 30px;
    width: 80px;
    font-size: 13px;
  }
  @include sm{
    display: none;
  }
}

.fb5-introduce-desc{
  grid-area: des;
  padding-left: 120px;
  line-height: 20px;
  z-index: 100;
  font-size: 14px;
  @include lg{
    padding-left: 50px;
    font-size: 12px;
  }
  @include md{
    padding-left: 10px;
    font-size: 10px;
  }
  @include sm{
    line-height: 15px;
    text-align: center;
    
  }
}

.fb5-introduce-desc-1{
  @extend %padding-left-1;
  @include sm{
    padding-left: 0;
  }
}

.fb5-introduce-desc-2{
  @extend %padding-left-2;
  @include sm{
    padding-left: 0;
  }
}

.fb5-introduce-desc-3{
  @extend %padding-left-3;
  @include sm{
    padding-left: 0;
  }
}


.fb5-introduce-desc-4{
  @extend %padding-left-4;
  @include sm{
    padding-left: 0;
  }
}

.fb5-introduce-img-homepage{
  grid-area: hom;
  width: 100%;
  align-self: center;
  box-shadow: -5px 10px 10px 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
  margin-left: -30px;
  @include xl{
    width: 85%;
  }
  @include sm{
    width: 100%;
    margin-left: 0;
  }
}

.fb5-introduce-background{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 1200px;
}

a{
  color: #212121;
}

.fb5-postit{
  @include lg{
    width: 200px;
  }
  @include md{
    width: 200px;
  }
  @include sm{
    width: 0;

  }
}
</style>

<style lang="scss">
// For technology Custom
.fb5-technology{
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