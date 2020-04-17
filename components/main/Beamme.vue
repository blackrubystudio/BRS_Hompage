// Beamme: BEAMME 프로젝트에 관한 컴포넌트, 섹션은 총 3개로 구분 (Title, Introduce, Technology)
// Title의 Postit 부분과, Technology에 관한 부분은 props를 받아와 처리 (내용은 data 메소드에 저장)

<template>
  <div class="beamme">
    
    <!-- Section1. Title 시작-->
    <section class="beamme-title">
      <div class="beamme-title-container">
        <img class="beamme-title-img-wave" src="@/assets/img/beamme/beamme_wave.png" alt="빔미 역동성">
        <div class="beamme-title-main">
          <div class="beamme-title1"><img class="beamme-main-font-img" src="@/assets/img/fonts_img/main/beamme/beamme1.png" alt="BlackRubyStudio Beamme1"></div>
          <div class="beamme-title2"><img class="beamme-main-font-img" src="@/assets/img/fonts_img/main/beamme/beamme2.png" alt="BlackRubyStudio Beamme1"></div>
          <div class="beamme-title3"><img class="beamme-main-font-img" src="@/assets/img/fonts_img/main/beamme/beamme3.png" alt="BlackRubyStudio Beamme1"></div>
        </div>  
        <div class="beamme-title-main-mb">
          <div class="beamme-title1"><img class="beamme-main-font-img" src="@/assets/img/fonts_img/main/beamme/beamme1_mb.png" alt="BlackRubyStudio Beamme1"></div>
          <div class="beamme-title2"><img class="beamme-main-font-img" src="@/assets/img/fonts_img/main/beamme/beamme2_mb.png" alt="BlackRubyStudio Beamme1"></div>
          <div class="beamme-title3"><img class="beamme-main-font-img" src="@/assets/img/fonts_img/main/beamme/beamme3_mb.png" alt="BlackRubyStudio Beamme1"></div>
        </div>
        <common-postit class="beamme-postit" :title=post.title :desc=post.desc></common-postit>
    </div>
    </section>
    <!-- // Section1. Title 끝 -->

    <!-- Section2. Introduce 시작 -->
    <section class="beamme-introduce">
      <div class="beamme-introduce-container">
        <img class="beamme-introduce-img-icon" src="@/assets/img/beamme/beamme_icon.png" alt="빔미 아이콘" >
        <div class="beamme-introduce-logo"><img class="beamme-introduce-img-logo" src="@/assets/img/beamme/beamme_logo.png" alt="빔미 로고"></div>
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
        <div class="beamme-introduce-homepage"><img class="beamme-introduce-img-homepage" src="@/assets/img/beamme/beamme_homepage.png" alt="빔미 홈페이지"></div>
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
        title: "Beam Me",
        desc: "클릭 한번으로 만나는<br>당신의 고사양 PC<br><br>고민하지 말고<br>BEAMME 하세요"
      },

      tech:{
        title11: require("@/assets/img/fonts_img/main/beamme/beamme4.png"),
        title12: require("@/assets/img/fonts_img/main/beamme/beamme5.png"),
        title21: require("@/assets/img/fonts_img/main/beamme/beamme6.png"),
        title22: require("@/assets/img/fonts_img/main/beamme/beamme7.png"),
        title31: require("@/assets/img/fonts_img/main/beamme/beamme8.png"),
        title32: require("@/assets/img/fonts_img/main/beamme/beamme9.png"),
        alt11: 'BlackRubyStudio Beamme Tech1-1',
        alt12: 'BlackRubyStudio Beamme Tech1-2',
        alt21: 'BlackRubyStudio Beamme Tech2-1',
        alt22: 'BlackRubyStudio Beamme Tech2-2',
        alt31: 'BlackRubyStudio Beamme Tech3-1',
        alt32: 'BlackRubyStudio Beamme Tech3-2',
        title1_mobile: '클라우드<br>PC',
        title2_mobile: '모든<br>디바이스',
        title3_mobile: '다양한<br>프로그램',
        img1: require("@/assets/img/beamme/beamme_tech_1.png"),
        img2: require("@/assets/img/beamme/beamme_tech_2.png"),
        img3: require("@/assets/img/beamme/beamme_tech_3.png"),
        alt1: 'Beamme 클라우드PC 이미지',
        alt2: 'Beamme 모든 디바이스 이미지',
        alt3: 'Beamme 다양한 프로그램 이미지',
        desc1: "<span class='tech-desc-right-2'>초당 60프레임 이상, 지연시간 0.08초 이하의</span><br>\
                <span class='tech-desc-right-1'>고사양 PC 스트리밍을 제공합니다</span><br>",
        desc2:"<span class='tech-desc-left-2'>노트북, 태블릿, 핸드폰 등</span><br>\
               <span class='tech-desc-left-1'>어떠한 기기든지 서비스 이용이 가능해집니다.</span><br>",
        desc3:"<span class='tech-desc-right-3'>영상/음향 작업, 3D CAD 등 영상, 디자인, 음악 프로그램도</span><br>\
               <span class='tech-desc-right-2'>저장공간 걱정없이 이용 가능합니다</span>",
        desc1_mobile:"초당 60프레임 이상, 지연시간 0.08초 이하의 고사양 PC 스트리밍을 제공합니다",
        desc2_mobile:"노트북, 태블릿, 핸드폰 등 어떠한 기기든지 서비스 이용이 가능해집니다.",
        desc3_mobile:"영상/음향 작업, 3D CAD 등 영상, 디자인, 음악 프로그램도 저장공간 걱정없이 이용 가능합니다"
      }
    }
  },
}
</script>



<style lang="scss" scoped>

// Section1. Title
.beamme-title{
  @extend %project-section-height;
  @include md{
    height: 550px;
  }
}

.beamme-title-container{
  @extend %project-title-container;
  // grid-template-columns: 200px 200px;
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

.beamme-title-main{
  display: grid;
  grid-template-columns: 600px 400px;
  grid-template-areas:
  "a"
  "b"
  "c";
  grid-template-rows: 20% 20% 20%;
  justify-self: center;
  margin-top: 50px;
  margin-right: 120px;
  text-align: right;
  @include lg{
    grid-template-columns: 430px 290px;
    margin-right: 190px;
  }
  @include md{
    grid-template-columns: 310px 240px;
    grid-template-rows: 14% 14% 14%;
  }
  @include sm{
    display: none;
  }
}

.beamme-title-main-mb{
  display: none;
  @include sm{
    display: grid;   
    grid-template-areas:
      "a"
      "b"
      "c";
    justify-self: center;
    grid-template-rows: 8% 8% 8%; 
    z-index: 100;
  }
}


.beamme-title1{
  padding: 30px 0;
  grid-area: a;
}

.beamme-title2{
  padding: 30px 0;
  grid-area: b;
}

.beamme-title3{
  padding: 30px 0;
  grid-area: c;
}

.beamme-main-font-img{
  height: 90px;
  @include lg{
    height: 80px;
  }
  @include md{
    height: 60px;
  }
  @include sm{
    height: 40px;
  }
}

.beamme-title-img-wave{
  position: absolute;
  height: 200px;
  top: 200px;
  left: -50px;
  z-index: -1;
  @include lg{
    height: 150px;
  }
  @include md{
    height: 110px;
    top: 180px;
  }
  @include sm{
    z-index: 100;
    top: 80px;
    left: 0;
  }
}

// Section2. Introduce
.beamme-introduce{
  @extend %project-section-height;
  margin: -50px 0 50px 0;
  @include md{
    margin: 50px 0 -50px 0;
    height: 550px;
  }
    @include sm{
    margin: -50px 0 50px 0;
    height: 500px;
  }
}

.beamme-introduce-container{
  @extend %project-introduce-container;
  grid-template-areas:
  "log hom"
  "des hom";
  grid-template-rows: 37% 63%;
  grid-template-columns: 35% 55%;
   @include lg{
    width: 760px;
    height: 550px;
    grid-template-rows: 25% 55%;
    grid-template-columns: 45% 55%;
  }
  @include md{
    width: 550px;
    grid-template-rows: 20% 55%;
  }
  @include sm{
    top: 50px;
    width: 300px;
    height: 500px;
    display: grid;
    grid-template-areas:
    "log"
    "des"
    "hom";
    grid-template-rows: 100px, 100px, 300px !important;
    grid-template-columns: 100%;
  }
}

.beamme-introduce-img-icon{
  display: none;
  @include sm{
    display: inline-block;
    position: absolute;
    top: 230px;
    left: -10px;
    height: 45px;
  }
}

.beamme-introduce-logo{
  grid-area: log;
}

.beamme-introduce-img-logo{
  margin-top: 80px;
  margin-left: 30px;
  height: 95px;
  z-index: 100;
  background: #FEFEFE;
  box-shadow: 0 15px 6px -6px rgba(0, 0, 0, 0.2);
  @include lg{
    height: 60px;
    margin-top: 40px;
    margin-left: 120px;
  }
  @include md{
    height: 35px;
    margin-top: 40px;
  }
  @include sm{
    width: 250px;
    height: auto;
    margin-left: 0;
    margin-left: 25px;
  }
}

.beamme-introduce-desc{
  grid-area: des;
  text-align: right;
  align-self: start;
  justify-self: center;
  margin-right: -50px;
  line-height: 25px;
  font-size: 15px;
  @include lg{
    margin-right: -50px;
  }
  @include sm{
    padding-top: 30px;
    margin-right: 0;
  }
}

.beamme-introduce-homepage{
 grid-area: hom;
 z-index: -1;
}

.beamme-introduce-img-homepage{
  width: 700px;
  box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.2);
  @include lg{
    width: 410px;
  }
  @include md{
    width: 310px;
  }
  @include sm{
    // z-index: 200;
    width: 300px;
    margin-top: -120px;
  }
}

p{
  @include lg{
    font-size: 14px;
  }
  @include md{
    font-size: 11px;
    line-height: 15px;
  }
  @include sm{
    font-size: 10px;
  }
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
  z-index: 500;
}

a{
  color: #212121;
}

.beamme-postit{
  @include lg{
    width: 310px;
  }
  @include md{
    width: 250px;
  }
  @include sm{
    width: 0;

  }
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

  .tech-content-3{
  grid-template-columns: 65% 35%;
  grid-column-gap: 10px;
  }

  .tech-desc-3{
    margin-right: -20px;
    @include lg{
      margin-right: -30px;
    }
    @include md{
      margin-right: -50px;
    }
  }
  .tech-line-1{
  @extend %tech-line;
  position: absolute;
  width: 540px;
  height: 130px;
  left: 170px;
  border-image: linear-gradient(to right, white 200px, black 200px 540px);
  border-image-slice: 1;
  @include lg{
    height: 90px;
    left: 140px;
    width: 385px;
    border-image: linear-gradient(to right, white 130px, black 130px 385px);
    border-image-slice: 1;
  }
  @include md{
    height: 90px;
    width: 300px;
    left: 80px;
    border-image: linear-gradient(to right, white 110px, black 110px 385px);
    border-image-slice: 1;
  }
  }
  .tech-line-2{
    @extend %tech-line;
    position: absolute;
    width: 320px;
    height: 460px;
    left: 470px;
    border-image: linear-gradient(to right, black 0px 320px);
    border-image-slice: 1;
    @include lg{
      height: 390px;
      left: 350px;
      border-image: linear-gradient(to right, black 0px 240px, white 240px 320px);
      border-image-slice: 1;
    }
    @include md{
      width: 180px;
      height: 330px;
      left: 250px;
      border-image: linear-gradient(to right, black 0px 170px, white 170px 180px);
      border-image-slice: 1;
    }
  }

  .tech-line-3{
    @extend %tech-line;
    position: absolute;
    width: 555px;
    height: 825px;
    left: 120px;
    border-image: linear-gradient(to right, white 300px, black 300px 555px);
    border-image-slice: 1;
    @include lg{
      height: 720px;
      width: 430px;
      left: 70px;
      border-image: linear-gradient(to right, white 230px, black 230px 430px);
      border-image-slice: 1;
    }
    @include md{
      height: 605px;
      width: 300px;
      left: 65px;
      border-image: linear-gradient(to right, white 165px, black 165px 300px);
      border-image-slice: 1;
    }
  }
}
</style>