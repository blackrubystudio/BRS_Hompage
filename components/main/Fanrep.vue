// DeokUs: Deok-Us 프로젝트에 관한 컴포넌트, 섹션은 총 3개로 구분 (Title, Introduce, Technology)
// Title의 Postit 부분과, Technology에 관한 부분은 props를 받아와 처리 (내용은 data 메소드에 저장)

<template>
  <div class="fanrep">

    <!-- Section1. Title 시작 -->
    <section class="fanrep-title">
      <div class="fanrep-title-container">
        <div class="fanrep-title-main">
          <div class="fanrep-title-container-title-1">
            <div class="fanrep-title1"><img class="fanrep-title-img fanrep-title-down" src="@/assets/img/fonts_img/main/fanrep/fanrep1.png" alt="BlackRubyStudio Fanrep1"></div>
            <div class="fanrep-title2"><img class="fanrep-title-img" src="@/assets/img/fonts_img/main/fanrep/fanrep2.png" alt="BlackRubyStudio Fanrep2"></div>
            <div class="fanrep-title3"><img class="fanrep-title-img fanrep-title-down" src="@/assets/img/fonts_img/main/fanrep/fanrep3.png" alt="BlackRubyStudio Fanrep3"></div>
          </div>
          <div class="fanrep-title-container-title-1-mb">
            <div class="fanrep-title1"><img class="fanrep-title-img fanrep-title-down" src="@/assets/img/fonts_img/main/fanrep/fanrep1_mb.png" alt="BlackRubyStudio Fanrep1"></div>
            <div class="fanrep-title2"><img class="fanrep-title-img" src="@/assets/img/fonts_img/main/fanrep/fanrep2_mb.png" alt="BlackRubyStudio Fanrep2"></div>
            <div class="fanrep-title3"><img class="fanrep-title-img fanrep-title-down" src="@/assets/img/fonts_img/main/fanrep/fanrep3_mb.png" alt="BlackRubyStudio Fanrep3"></div>
          </div>
          <div class="fanrep-title-container-title-2">
            <div class="fanrep-title4"><img class="fanrep-title-img" src="@/assets/img/fonts_img/main/fanrep/fanrep4.png" alt="BlackRubyStudio Fanrep4"></div>
            <div class="fanrep-title5"><img class="fanrep-title-img fanrep-title-down" src="@/assets/img/fonts_img/main/fanrep/fanrep5.png" alt="BlackRubyStudio Fanrep5"></div>
          </div>
          <div class="fanrep-title-container-title-2-mb">
            <div class="fanrep-title4"><img class="fanrep-title-img" src="@/assets/img/fonts_img/main/fanrep/fanrep4_mb.png" alt="BlackRubyStudio Fanrep4"></div>
            <div class="fanrep-title5"><img class="fanrep-title-img fanrep-title-down" src="@/assets/img/fonts_img/main/fanrep/fanrep5_mb.png" alt="BlackRubyStudio Fanrep5"></div>
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
        <div class="fanrep-introduce-homepage1"><img class="fanrep-introduce-img-homepage1" src="@/assets/img/fanrep/fanrep_homepage1.png" alt="팬랩 랜딩페이지 메인"></div>
        <div class="fanrep-introduce-homepage2"><img class="fanrep-introduce-img-homepage2" src="@/assets/img/fanrep/fanrep_homepage2.png" alt="팬랩 랜딩페이지 서브"></div>
        <img class="fanrep-introduce-img-homepage1-mobile" src="@/assets/img/fanrep/fanrep_homepage1_mobile.png" alt="팬랩 랜딩페이지 메인">
        <img class="fanrep-introduce-img-homepage2-mobile" src="@/assets/img/fanrep/fanrep_homepage2_mobile.png" alt="팬랩 랜딩페이지 서브">
        <div class="fanrep-introduce-logo"><img class="fanrep-introduce-img-logo" src="@/assets/img/fanrep/fanrep_logo.png" alt="팬랩 로고"></div>
        <div class="fanrep-introduce-desc">
          <p>좋아하는 아이돌을 입력하기만 하면<br>
            매주 월요일, 당신이 좋아하는 아이돌의 스케쥴과<br>
            영상을 메세지로 보내드립니다<br><br>
            팬랩이 여러분을 찾아갑니다<br><br>
          </p>
          <a class="button fanrep-introduce-button" href="https://fan-rep.com" target="_blank" >자세히 보기</a>
        </div>
        <div class="fanrep-introduce-effect"><img class="fanrep-introduce-img-effect" src="@/assets/img/fanrep/fanrep_effect.png" alt="팬랩 효과"></div>
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
      :alt11 = tech.alt11
      :alt12 = tech.alt12
      :alt21 = tech.alt21
      :alt22 = tech.alt22
      :alt31 = tech.alt31
      :alt32 = tech.alt32
      :title1_mobile = tech.title1_mobile
      :title2_mobile = tech.title2_mobile
      :title3_mobile = tech.title3_mobile
      :desc1 = tech.desc1
      :desc2 = tech.desc2
      :desc3 = tech.desc3
      :img1 = tech.img1
      :img2 = tech.img2
      :img3 = tech.img3
      :alt1 = tech.alt1
      :alt2 = tech.alt2
      :alt3 = tech.alt3
      :desc1_mobile = tech.desc1_mobile
      :desc2_mobile = tech.desc2_mobile
      :desc3_mobile = tech.desc3_mobile>
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
        title: "FanRep.",
        desc: "매일 전해받는<br>내 아이돌 소식<br>From. 팬랩<br><br>이제 좋아하는 아이돌을<br>빠짐없이 만나보세요"
      },

      tech:{
        title11: require("@/assets/img/fonts_img/main/fanrep/fanrep6.png"),
        title12: require("@/assets/img/fonts_img/main/fanrep/fanrep7.png"),
        title21: require("@/assets/img/fonts_img/main/fanrep/fanrep8.png"),
        title22: require("@/assets/img/fonts_img/main/fanrep/fanrep9.png"),
        title31: require("@/assets/img/fonts_img/main/fanrep/fanrep10.png"),
        title32: require("@/assets/img/fonts_img/main/fanrep/fanrep11.png"),
        alt11: 'BlackRubyStudio Fanrep Tech1-1',
        alt12: 'BlackRubyStudio Fanrep Tech1-2',
        alt21: 'BlackRubyStudio Fanrep Tech2-1',
        alt22: 'BlackRubyStudio Fanrep Tech2-2',
        alt31: 'BlackRubyStudio Fanrep Tech3-1',
        alt32: 'BlackRubyStudio Fanrep Tech3-2',
        title1_mobile: '자동수집<br>및 분류',
        title2_mobile: '실시간<br>컨텐츠',
        title3_mobile: '빅데이터<br>분석',
        img1: require("@/assets/img/fanrep/fanrep_tech_1.png"),
        img2: require("@/assets/img/fanrep/fanrep_tech_2.png"),
        img3: require("@/assets/img/fanrep/fanrep_tech_3.png"),
        alt1: 'fanrep 자동수집 및 분류 이미지',
        alt2: 'fanrep 실시간 컨텐츠 제공 이미지',
        alt3: 'fanrep 빅데이터 분석 이미지',
        desc1: "<span class='tech-desc-right-2'>다양한 인터넷 뉴스부터</span><br>\
                <span class='tech-desc-right-1'>방송 및 라디오 스케쥴과 각종 SNS까지</span><br>\
                아이돌의 모든 자료를 자동으로 수집해 분류합니다",
        desc2:"<span class='tech-desc-left-2'>다양한 채널의 동일한 자료를 선별하여 하나의 스케쥴로 제작합니다</span><br>\
               <span class='tech-desc-left-1'>정확한 스케쥴 컨텐츠를 팬들에게 실시간으로 제공하며</span><br>\
               원하는 시간에 알림을 받아 볼 수 있도록 합니다",
        desc3:"<span class='tech-desc-right-3'>빅데이터 대시보드와 이상 수치 알림 시스템을 구축하여</span><br>\
               <span class='tech-desc-right-2'>지속적으로 AI를 개선하고 더 좋은 스케쥴 컨텐츠를 제공하고자 합니다</span><br>\
               <span class='tech-desc-right-1'>축적된 팬들의 빅데이터를 분석하여 팬들에게 최적의 스케쥴을 제공하고자 합니다",
        desc1_mobile:"다양한 인터넷 뉴스부터 방송 및 라디오 스케쥴과 각종 SNS까지 아이돌의 모든 자료를 자동으로 수집해 분류합니다",
        desc2_mobile:"다양한 채널의 동일한 자료를 선별하여 하나의 스케쥴로 제작합니다\
                      정확한 스케쥴 컨텐츠를 팬들에게 실시간으로 제공하며 원하는 시간에 알림을 받아 볼 수 있도록 합니다",
        desc3_mobile:"빅데이터 대시보드와 이상 수치 알림 시스템을 구축하여 지속적으로 AI를 개선하고 더 좋은 스케쥴 컨텐츠를 제공하고자 합니다.\
                      축적된 팬들의 빅데이터를 분석하여 팬들에게 최적의 스케쥴을 제공하고자 합니다",
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
  grid-template-areas:
  "tit1"
  "tit2";
  grid-template-rows: 150px 350px;
  margin-left: 140px;
  @include lg{
    margin-left: 20px;
    letter-spacing: -5px;
  }
  @include md{
    grid-template-rows: 100px 250px;
  }
  @include sm{
    letter-spacing: 0px;
    grid-template-rows: 15% 50%;
  }
}

.fanrep-title-img{
  height: 90px;
  margin-right: 20px;
  @include lg{
    height: 80px;
  }
  @include md{
    height: 55px;
  }
  @include sm{
    height: 40px;
  }
}

.fanrep-title-up{
  margin-bottom: 30px;
}

.fanrep-title-down{
  margin-top: 30px;
}

.fanrep-title-container-title-1{
  grid-area: tit1;
  display: grid;
  grid-template-areas:
  "a b c";
  grid-template-columns: 10% 12% 75%;
  @include sm{
    display: none;
  }
}

.fanrep-title-container-title-1-mb{
  display: none;
  @include sm{
    display: grid;
    grid-template-areas:
    "a b c";
    grid-template-columns: 10% 12% 75%;
    padding-left: 25px;
    z-index: 100;
  }
}

.fanrep-title1 {
  grid-area: a;
}

.fanrep-title2 {
  grid-area: b;
}

.fanrep-title3 {
  grid-area: c;
}

.fanrep-title-container-title-2{
  grid-area: tit2;
  display: grid;
  grid-template-areas: 
  "d e";
  grid-template-columns: 10% 90%;
  @include sm{
    display: none;
  }
}
.fanrep-title-container-title-2-mb{
  display: none;
  @include sm{
    display: grid;
    grid-template-areas: 
    "d e";
    grid-template-columns: 10% 90%;
    z-index: 300;
    padding-left: 25px;
  }
}

.fanrep-title4 {
  grid-area: d;
}

.fanrep-title5 {
  grid-area: e;
}

.fanrep-title-img-mail{
  position: absolute;
  height: 290px;
  top: 85px;
  left: 200px;
  transform: rotate(10deg);
  z-index: -1;
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
    top: 60px;
    padding-left: 25px;
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
    height: 400px;
    grid-template-columns: 60% 40%;
  }
}

.fanrep-introduce-homepage1{
  grid-area: hom1;
}

.fanrep-introduce-img-homepage1{
  width: 100%;
  margin-left: -50px;
  @include lg{
    align-self: center;
  }
  @include md{
    align-self: end;
    padding-bottom: 20px;
  }
  @include sm{
    display: none;
  }
}

.fanrep-introduce-homepage2{
  grid-area: hom2;
}

.fanrep-introduce-img-homepage2{
  width: 90%;
  margin-left: -50px;
  @include sm{
    display: none;
  }
}

.fanrep-introduce-img-homepage1-mobile{
  display: none;
  @include sm{
    align-self: end;
    display: grid;
    grid-area: hom1;
    width: 70%;
    height: auto;
  }
}

.fanrep-introduce-img-homepage2-mobile{
  display: none;
  @include sm{
    padding-top: 10px;
    display: grid;
    grid-area: hom2;
    width: 50%;
  }
}

.fanrep-introduce-logo{
  grid-area: logo;
  z-index: -2;
}

.fanrep-introduce-img-logo{
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
  grid-area: desc;
  justify-self: start;
  text-align: right;
  font-size: 14px;
  line-height: 20px;
  margin-left: 50px;
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
  z-index: -1;
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
  .tech-content-2{
    grid-column-gap: 10px;
  }
  .tech-line-1{
  @extend %tech-line;
  position: absolute;
  width: 540px;
  height: 140px;
  left: 180px;
  border-image: linear-gradient(to right, white 90px, black 90px 540px);
  border-image-slice: 1;
  @include lg{
    height: 90px;
    left: 140px;
    width: 385px;
    border-image: linear-gradient(to right, white 50px, black 50px 385px);
    border-image-slice: 1;
  }
  @include md{
    height: 95px;
    width: 300px;
    left: 80px;
    border-image: linear-gradient(to right, white 60px, black 60px 385px);
    border-image-slice: 1;
  }
}
.tech-line-2{
  @extend %tech-line;
  position: absolute;
  width: 430px;
  height: 460px;
  left: 470px;
  border-image: linear-gradient(to right, black 0px 430px);
  border-image-slice: 1;
  @include lg{
    width: 330px;
    height: 390px;
    left: 350px;
    border-image: linear-gradient(to right, black 0px 330px);
    border-image-slice: 1;
  }
  @include md{
    width: 230px;
    height: 330px;
    left: 250px;
    border-image: linear-gradient(to right, black 0px 230px);
    border-image-slice: 1;
  }
}
.tech-line-3{
  @extend %tech-line;
  position: absolute;
  width: 555px;
  height: 835px;
  left: 200px;
  border-image: linear-gradient(to right, white 240px, black 240px 555px);
  border-image-slice: 1;
  @include lg{
    height: 710px;
    width: 430px;
    left: 135px;
    border-image: linear-gradient(to right, white 170px, black 170px 555px);
    border-image-slice: 1;
  }
  @include md{
    height: 600px;
    width: 300px;
    left: 110px;
    border-image: linear-gradient(to right, white 130px, black 130px 300px);
    border-image-slice: 1;
  }

}
  
}
</style>