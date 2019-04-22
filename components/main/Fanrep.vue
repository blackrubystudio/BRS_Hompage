// DeokUs: Deok-Us 프로젝트에 관한 컴포넌트, 섹션은 총 3개로 구분 (Title, Introduce, Technology)
// Title의 Postit 부분과, Technology에 관한 부분은 props를 받아와 처리 (내용은 data 메소드에 저장)

<template>
  <div class="fanrep">

    <!-- Section1. Title 시작 -->
    <section class="fanrep-title">
      <div class="fanrep-title-container">
        <div class="fanrep-title-main">
          <div class="fanrep-title-container-title-1">
            <h1 class="fanrep-title-downfont">매</h1>
            <h1 class="fanrep-title-space">일</h1>
            <h1 class="fanrep-title-downfont">전해받는</h1>  
          </div>
          <div class="fanrep-title-container-title-2">
            <h1>내</h1>
            <h1 class="fanrep-title-downfont">아이돌 소식</h1>
          </div>
        </div>  
        <img  class="fanrep-title-img-mail" src="@/assets/img/fanrep/fanrep_mail.png" alt="fanrep-search">
        <common-postit class="fanrep-postit" :title=post.title :desc=post.desc></common-postit>
      </div>
    </section>
    <!-- // Section1. Title 끝 -->

    <!-- Section2. Introduce 시작 -->
    <section class="fanrep-introduce">
      <div class="fanrep-introduce-container">
        <img class="fanrep-introduce-img-homepage1" src="@/assets/img/fanrep/fanrep_homepage1.png" alt="팬랩 랜딩페이지 메인">
        <img class="fanrep-introduce-img-homepage2" src="@/assets/img/fanrep/fanrep_homepage2.png" alt="팬랩 랜딩페이지 서브">
        <img class="fanrep-introduce-img-logo" src="@/assets/img/fanrep/fanrep_logo.png" alt="팬랩 로고">
        <div class="fanrep-introduce-desc">
          <p>좋아하는 아이돌을 입력하기만 하면<br>
            매주 월요일, 당신이 좋아하는 아이돌의 스케쥴과<br>
            영상을 메세지로 보내드립니다<br><br>
            팬랩이 여러분을 찾아갑니다<br><br>
          </p>
          <a class="button fanrep-introduce-button" href="https://fan-rep.com" target="_blank" >자세히 보기</a>
        </div>
        <img class="fanrep-introduce-img-effect" src="@/assets/img/fanrep/fanrep_effect.png" alt="팬랩 효과">
      </div>
    </section>
    <!-- Section2. Introduce 끝 -->

    <!-- Section3. Technology 시작 -->
    <section ref="tech">
      <common-technology class="fanrep-technology"
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
        title: "DeokUs",
        desc: "매일 전해받는<br>내 아이돌 소식<br>From. 더거스<br><br>이제 좋아하는 아이돌을<br>빠짐없이 만나보세요"
      },

      tech:{
        title11: "자동 기사",
        title12: "수집기",
        title21: "검색",
        title22: "엔진",
        title31: "자연어처리",
        title32: "AI",
        img1: require("@/assets/img/fanrep/fanrep_tech_1.png"),
        img2: require("@/assets/img/fanrep/fanrep_tech_2.png"),
        img3: require("@/assets/img/fanrep/fanrep_tech_3.png"),
        alt1: '첫번째 이미지',
        alt2: '두번째 이미지',
        alt3: '세번째 이미지',
        desc1: "<span class='tech-desc-right-2'>Osen, 스타뉴스 등 일반 언론미디어와</span><br>\
                <span class='tech-desc-right-1'>KBS, MBC, SBS 방송 및 라디오 등 각 미디어를 통해</span><br>\
                실시간으로 수집한 아이돌의 스케쥴을 받아 볼 수 있습니다",
        desc2:"<span class='tech-desc-left-2'>검색을 통해 사용자가 원하는 기사를 빠르게 찾을 수 있습니다</span><br>\
               <span class='tech-desc-left-1'>유저들의 검색어 기록을 학습, 중요도에 반영하여 사용자 별 맞춤 검색기능이 가능하고</span><br>\
               기사들을 유사 기사로 묶어 내용이 비슷한 기사를 다시 보지 않을 수 있습니다",
        desc3:"<span class='tech-desc-right-3'>형태소 분석을 기반으로 하여 문서 내 중요단어 분석 뿐 아니라</span><br>\
               <span class='tech-desc-right-2'>문서의 역 가중치를 계산하여 문서 간 중요도를 분석하는 엔진을 제공합니다</span><br>\
               <span class='tech-desc-right-1'>토픽 추출의 정확도를 위하여 LDA와 LSI 두 모델을 결합한 튜닝모델을 활용하고 있습니다</span><br>\
               또한 기사 400자 이내 요약기능으로 사용자에게 전문을 읽는 부담을 줄이고 있습니다"
      },
    }
  }
}
</script>

<style lang="scss" scoped>

// Section1. Title
.fanrep-title{
  @extend %project-section-height;
  @include md{
    height: 550px;
  }
}

.fanrep-title-container{
 @extend %project-title-container;
 @include lg{
   width: 760px;
 }
 @include md{
   width: 550px;
 }
 @include sm{
   width: 300px;
    margin-top: -70px;
 }
}

.fanrep-title-main{
  display: grid;
  grid-template-rows: 30% 50%;
  margin-left: 140px;
  font-size: 90px;
  @include lg{
    margin-left: 20px;
    font-size: 40px;
    letter-spacing: -5px;
  }
  @include sm{
    letter-spacing: 0px;
    grid-template-rows: 15% 50%;
  }

}

h1{
  font-family: $main-font;
  @include lg{
    font-size: 80px;
  }
  @include md{
    font-size: 60px;
  }
  @include sm{
    font-size: 40px;
    color: #FEFEFE;
  }
}

.fanrep-title-downfont{
  padding-top: 30px;
  @include sm{
    padding-top: 15px;
  }
}

.fanrep-title-container-title-1{
  display: grid;
  grid-template-columns: 9% 12% 75%;
  @include sm{
    z-index: 200;
  }
}

.fanrep-title-container-title-2{
  display: grid;
  grid-template-columns: 10% 90%;
  z-index: 100;
  @include sm{
    z-index: 300;;
  }
}

.fanrep-title-img-mail{
  position: absolute;
  height: 290px;
  top: 85px;
  left: 200px;
  transform: rotate(10deg);
  box-shadow: 0 20px 6px -6px rgba(0, 0, 0, 0.2);
  @include lg{
    height: 230px;
    left: 80px;
    top: 75px;
  }
  @include md{
    height: 200px;
    left: 40px;
    top: 65px;
  }
  @include sm{
    z-index: 200;
    height: 130px;
    top: 40px;
  }
}

// Section2. Introduce
.fanrep-introduce{
  @extend %project-section-height;
  margin: -50px 0 50px 0;
  @include sm{
    height: 500px;
  }
}

.fanrep-introduce-container{
  @extend %project-introduce-container;
  grid-template-areas:
  "hom1 logo"
  "hom2 desc";
  grid-template-rows: 45% 45%;
  grid-template-columns: 40% 55%;
  @include lg{
    width: 760px;
    grid-template-rows: 40% 60%;
  }
  @include md{
    width: 550px;
    grid-template-columns: 40% 55%;
  }
  @include sm{
    top: 50px;
    width: 300px;
    height: 500px;
    grid-template-columns: 50% 50%;
  }
}

.fanrep-introduce-img-homepage1{
  grid-area: hom1;
  width: 100%;
  margin-left: -50px;
  @include lg{
    align-self: center;
  }
  @include md{
    align-self: end;
    padding-bottom: 20px;
  }
}

.fanrep-introduce-img-homepage2{
  grid-area: hom2;
  width: 90%;
  margin-left: -50px;
}

.fanrep-introduce-img-logo{
  grid-area: logo;
  width: 270px;
  margin-left: 250px;
  margin-top: 20px;
  @include lg{
    width: 220px;
    margin-left: 200px;
  }
  @include md{
    margin-top: 50px;
    width: 180px;
    margin-left: 140px;
  }
  @include sm{
    margin-top: 200px;
    width: 110px;
    margin-left: -20px;
    
  }
}

.fanrep-introduce-desc{
  justify-self: start;
  text-align: right;
  font-size: 14px;
  line-height: 20px;
  margin-left: 50px;
  z-index: 100;
  @include lg{
    margin-left: 0px;
  }
  @include md{
    font-size: 10px; 
  }
  @include sm{
    margin-top: 90px;
    font-size: 9px !important;
    margin-left: -100px;
    line-height: 15px;
  }
}

p{
  @include md{
    font-size: 10px;
  }
  @include sm{
    font-size: 9px;
  }
}

.fanrep-introduce-button{
  @extend %main-project-button;
  font-size: 12px;
  padding: 2px 10px;
  @include sm{
    font-size: 10px;
    line-height: 10px;
  }
}

a{
  color: #212121;
}

.fanrep-introduce-img-effect{
  position: absolute;
  top: 20%;
  left: 65%;
  height: 350px;
  @include lg{
    height: 300px;
    left: 60%;
    top: 21%;
  }
  @include md{
    height: 250px;
    top: 30%;
    left: 55%;
  }
  @include sm{
    height: 180px;
    top: 10%;
    left: 45%;
    transform: rotateY(180deg);
  }
}

.fanrep-postit{
  @include lg{
    width: 250px;
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
.fanrep-technology{
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