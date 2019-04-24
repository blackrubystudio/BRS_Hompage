// Technology: 각 프로젝트에서 사용했던 기술을 소개하는 컴포넌트
// 특징 : 3개의 Container로 구성 (3개의 프로젝트 기술 나열 예정)
// 각 img src, img alt, Title, Desc를 props로 넘겨줌
// 메인 페이지로 props를 넘겨주는 것이 아닌 각 프로젝트 컴포넌트(FindBig5,  Celebee, Beamme)에 넘겨줌

<template>
  <div class="tech">
    <div class="tech-container">
      <div class="tech-title">Technology</div>
        <!-- Container1 -->
        <div class="tech-container-1">
          <img id="tech-img-1" class="tech-img-1" :src="img1" :alt="alt1">
          <div id="tech-text-1" class="tech-content-1">
            <h1 class="tech-title-1-1" v-text="title11"></h1>
            <h1 class="tech-title-1-2" v-text="title12"></h1>
            <div class="tech-desc-1"><p v-html="desc1"></p></div>
          </div>
        </div>
        <div id="tech-line-1" class="tech-line-1"></div>

        <!-- Container2 -->
        <div class="tech-container-2">
          <div id="tech-text-2" class="tech-content-2">
            <h1 class="tech-title-2-1" v-text="title21"></h1> 
            <h1 class="tech-title-2-2" v-text="title22"></h1>
            <div class="tech-desc-2"><p v-html="desc2"></p></div>
          </div>
          <img id="tech-img-2" class="tech-img-2" :src="img2" :alt="alt2">
        </div>
        <div class="tech-line-2"></div>

        <!-- Container3 -->
        <div class="tech-container-3">
          <img id="tech-img-3" class="tech-img-3" :src="img3" :alt="alt3">
          <div id="tech-text-3" class="tech-content-3">
            <h1 class="tech-title-3-1" v-text="title31"></h1>
            <h1 class="tech-title-3-2" v-text="title32"></h1>
            <div class="tech-desc-3"><p v-html="desc3"></p></div>
          </div>
        </div>
        <div class="tech-line-3"></div>
    </div>
    <div class="tech-container-mobile">
      <div class="tech-container-mobile-title1" v-html="title1_mobile"></div>
      <img class="tech-container-mobile-img1" :src="img1" :alt="alt1">
      <div class="tech-container-mobile-desc1" v-html="desc1_mobile"></div>

      <div class="tech-container-mobile-desc2"  v-html="desc2_mobile"></div>
      <img class="tech-container-mobile-img2" :src="img2" :alt="alt2">
      <div class="tech-container-mobile-title2" v-html="title2_mobile"></div>

      <div class="tech-container-mobile-title3" v-html="title3_mobile"></div>
      <img class="tech-container-mobile-img3" :src="img3" :alt="alt3">
      <div class="tech-container-mobile-desc3"  v-html="desc3_mobile"></div>
    </div>
    <div class="tech-container-mobile-bg">
      <img src="@/assets/img/common/technology.png" alt="" class="tech-container-mobile-bg-img">
    </div>
  </div>
</template>

<script>
export default {
  props: ['title11', 'title12', 'title21', 'title22', 'title31', 'title32', 
          'img1', 'img2', 'img3', 'alt1', 'alt2', 'alt3', 'desc1', 'desc2', 'desc3',
          'title1_mobile', 'title2_mobile', 'title3_mobile',
          'desc1_mobile', 'desc2_mobile', 'desc3_mobile'],

  mounted(){
    window.addEventListener("scroll",  this.scrollDown);
  },

  methods: {
    getScrollPercent() {
      // 전체페이지의 스크롤 위치를 퍼센트로 변경
      var h = document.documentElement, 
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';
      return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    },
    scrollDown(){
      // 스크롤 위치에 따른 move애니메이션
      var tech1 = document.getElementById("tech-img-1")
      var tech2 = document.getElementById("tech-img-2")
      var tech3 = document.getElementById("tech-img-3")
      var text1 = document.getElementById("tech-text-1")
      var text2 = document.getElementById("tech-text-2")
      var text3 = document.getElementById("tech-text-3")
      var y = this.getScrollPercent()
      // console.log(y)
      if(y<55){
        tech1.className = "tech-img-1 animation-right-to-left"
      }else if(y < 70){
        tech1.className = "tech-img-1 animation-left-to-right"
        text1.className = "tech-content-1 animation-show-text"
        tech2.className = "tech-img-2 animation-left-to-right" 
      }else if(y < 80){
        tech2.className = "tech-img-2 animation-right-to-left" 
        text2.className = "tech-content-2 animation-show-text" 
        tech3.className = "tech-img-3 animation-right-to-left"
      }else if(y < 90){
        tech3.className = "tech-img-3 animation-left-to-right" 
        text3.className = "tech-content-3 animation-show-text"
      }
    },

  }
}
</script>

<style lang="scss" scoped>
.animation-left-to-right{
  animation-name: left-to-right;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.animation-right-to-left{
  animation-name: right-to-left;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.animation-show-text{
  animation-name: show-text;
  animation-duration: 3s;
  animation-fill-mode: forwards
}

@keyframes left-to-right{
  0%{
    left: 0px;
  }
  100% {
    left: 670px;
  }
}

@keyframes right-to-left{
  0%{
    left: 670px;
  }
  100% {
    left: 0px;
  }
}

@keyframes left-to-right-lg{
  0%{
    left: 0
  }
  100%{
    left: 500px;
  }
}

@keyframes right-to-left-lg{
  0%{
    left: 500px;
  }
  100%{
    left: 0px;
  }
}

@keyframes left-to-right-md{
  0%{
    left: 0px;
  }
  100%{
    left: 370px;
  }
}

@keyframes right-to-left-md{
  0%{
    left: 370px
  }
  100%{
    left: 0px;
  }
}

@keyframes show-text{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.tech{
  height: $basic-height + 500px;
  @include lg{
    height: 1000px;
  }
  @include md{
    height: 900px;
  }
  @include sm{
    height: 450px;
  }
}

.tech-container{
  @extend %container;
  grid-template-rows: 300px 300px 300px;
  grid-gap: 50px;
  top: 50px;
  height: 1000px;
  @include lg{
    width: 760px;
    grid-template-rows: 250px 250px 250px;
    height: 850px;
  }
  @include md{
    width: 550px;
    grid-template-rows: 200px 200px 200px;
  }
  @include sm{
    display: none;
  }
}

.tech-title{
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 1024px;
  text-align: right;
  font-size: 30px;
  padding-right: 50px;
  font-family: $font-tech;
  @include lg{
    width: 760px;
  }
  @include md{
    width: 550px;
    padding-right: 10px;
    font-size: 20px;
  }
}

.tech-img-1{
  position: absolute;
  top: -50px;
  left: 0px;
  height: 350px;
  width: 350px;
  border-radius: 50%;
  opacity: .5;
  @include lg{
    height: 250px;
    width: 250px;
    animation-name: left-to-right-lg;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
  @include md{
    height: 180px;
    width: 180px;
    animation-name: left-to-right-md;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    top: -20px;
  }
}

.tech-content-1{
  align-self: center;
  display: grid;
  grid-template-areas:
  "tt11 tt12"
  "des1 des1";
  grid-template-columns: 70% 30%;
  grid-template-rows: 150px 150px;
  z-index: 100;
  @include lg{
    grid-template-rows: 120px 180px;
  }
  @include md{
    width: 550px;
  }
}

.tech-title-1-1{
  grid-area: tt11;
  justify-self: end;
  align-self: center;
  padding-right: 20px;
  font-family: $main-font;
  font-size: 90px;
  letter-spacing: -5px;
  @include lg{
    margin-bottom: 30px;
    font-size: 70px;
  }
  @include md{
    font-size: 50px;
    margin-bottom: 0;
  }
}

.tech-title-1-2{
  grid-area: tt12;
  font-family: $main-font;
  align-self: end;
  font-size: 90px;
  letter-spacing: -5px;
  @include lg{
    margin-bottom: 20px;
    font-size: 70px;
    z-index: 100;
  }
  @include md{
    font-size: 50px;
  }
}

.tech-desc-1{
  grid-area: des1;
  font-size: 14px;
  padding-top: 15px;
  padding-right:85px;
  justify-self: center;
  text-align: right;
  margin-right:80px;
  width: 600px;
  line-height: 20px;
  @include lg{
    padding-top: 0;
    margin-right: 130px;
    font-size: 13px;
  }
  @include md{
    font-size: 10px;
    line-height: 15px;
    margin-right: 180px;
    margin-top: -10px;
  }
}

.tech-line-1{
  @extend %tech-line;
  position: absolute;
  width: 540px;
  height: 140px;
  left: 200px;
  border-image: linear-gradient(to right, white 140px, black 140px 540px);
  border-image-slice: 1;
  @include lg{
    height: 100px;
    left: 150px;
    width: 385px;
    border-image: linear-gradient(to right, white 100px, black 100px 385px);
    border-image-slice: 1;
  }
  @include md{
    height: 95px;
    width: 300px;
    left: 100px;
    border-image: linear-gradient(to right, white 75px, black 75px 385px);
    border-image-slice: 1;
  }
}

.tech-container-2{
  position: relative;
  display: grid;
}

.tech-img-2{
  position: absolute;
  top: -50px;
  left: 660px;
  height: 350px;
  width: 350px;
  border-radius: 50%;
  opacity: .5;
  @include lg{
    left: 530px;
    height: 250px;
    width: 250px;
    animation-name: right-to-left-lg;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
  @include md{
    left: 370px;
    height: 180px;
    width: 180px;
    animation-name: right-to-left-md;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    top: -20px;
  }
}

.tech-content-2{
  align-self: center;
  display: grid;
  grid-template-areas:
  "tt21 tt22"
  "des2 des2";
  grid-template-columns: 45% 55%;
  grid-template-rows: 150px 150px;
  z-index: 100;
  @include lg{
     grid-template-rows: 130px 150px;
  }
  @include md{
    grid-template-rows: 120px 120px;
    width: 550px;
  }
}

.tech-title-2-1{
  grid-area: tt21;
  justify-self: end;
  font-family: $main-font;
  font-size: 90px;
  letter-spacing: -5px;
  align-self: center;
  @include lg{
    font-size: 70px;
  }
  @include md{
    font-size: 50px;
  }
}

.tech-title-2-2{
  grid-area: tt22;
  font-family: $main-font;
  font-size: 90px;
  letter-spacing: -5px;
  @include lg{
    font-size: 70px;
  }
  @include md{
    font-size: 50px;
    padding-top: 15px;
  }
}

.tech-line-2{
  @extend %tech-line;
  position: absolute;
  width: 320px;
  height: 460px;
  left: 470px;
  border-image: linear-gradient(to right, black 0px 200px, white 200px 320px);
  border-image-slice: 1;
  @include lg{
    height: 390px;
    left: 350px;
    border-image: linear-gradient(to right, black 0px 180px, white 180px 320px);
    border-image-slice: 1;
  }
  @include md{
    width: 180px;
    height: 330px;
    left: 250px;
    border-image: linear-gradient(to right, black 0px 120px, white 120px 180px);
    border-image-slice: 1;
  }
}

.tech-desc-2{
  grid-area: des2;
  justify-self: end;
  margin-top: -10px;
  margin-right: 80px;
  width: 600px;
  font-size: 14px;
  line-height: 20px;
  @include lg{
    margin-right: 10px;
    width: 530px;
    font-size: 13px;
  }
  @include md{
    margin-top: -20px;
    padding-left: 150px;
    font-size: 10px !important;
    line-height: 15px;
  }
}

.tech-container-3{
  position: relative;
  display: grid;
}

.tech-img-3{
  position: absolute;
  top: -50px;
  left: 0px;
  height: 350px;
  width: 350px;
  border-radius: 50%;
  opacity: .5;
  @include lg{
    height: 250px;
    width: 250px;
    animation-name: left-to-right-lg;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
    @include md{
    top: -20px;
    height: 180px;
    width: 180px;
    animation-name: left-to-right-md;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
}

.tech-content-3{
  align-self: center;
  display: grid;
  grid-template-areas:
  "tt31 tt32"
  "des3 b1";
  grid-template-columns: 75% 25%;
  grid-template-rows: 130px 150px;
  z-index: 100;
}

.tech-title-3-1{
  grid-area: tt31;
  justify-self: end;
  align-self: center;
  font-family: $main-font;
  font-size: 90px;
  letter-spacing: -5px;
  @include lg{
    font-size: 70px;
  }
  @include md{
    font-size: 50px;
  }
}

.tech-title-3-2{
  grid-area: tt32;
  align-self: end;
  font-family: $main-font;
  font-size: 90px;
  letter-spacing: -5px;
  @include lg{
    font-size: 70px;
  }
  @include md{
    font-size: 50px;
    margin-bottom: 15px;
  }
}

.tech-desc-3{
  grid-area: des3;
  justify-self: end;
  text-align: right;
  margin-right: 80px;
  font-size: 14px;
  line-height: 20px;
  @include lg{
    margin-right: 20px;
    font-size: 13px;
  }
  @include md{
    font-size: 10px;
    line-height: 15px;
    margin-right: 10px;
    margin-top: -15px;
  }
}

.tech-line-3{
  @extend %tech-line;
  position: absolute;
  width: 555px;
  height: 835px;
  left: 200px;
  border-image: linear-gradient(to right, white 140px, black 140px 555px);
  border-image-slice: 1;
  @include lg{
    height: 710px;
    width: 430px;
    left: 135px;
    border-image: linear-gradient(to right, white 110px, black 110px 555px);
    border-image-slice: 1;
  }
  @include md{
    height: 600px;
    width: 300px;
    left: 110px;
    border-image: linear-gradient(to right, white 65px, black 65px 300px);
    border-image-slice: 1;
  }
}

.tech-container-mobile{
  display: none;
  @include sm{
    width: 300px;
    height: 400px;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
    "tit1 img1 des1"
    "des2 img2 tit2"
    "tit3 img3 des3";
    grid-template-columns: 125px 50px 125px;
    // grid-row-gap: 10px;
    align-items: center;
  }
}
.tech-container-mobile-title1, .tech-container-mobile-title3{
  display: none;
  @include sm{
  display: grid;
  text-align: right;
  padding: 0 5px;
  font-family: $main-font;
  font-size: 25px;
  padding-right: 10px;
  line-height: 30px;
  }
}

.tech-container-mobile-title2{
  display: none;
  @include sm{
  display: grid;
  padding: 0 5px;
  font-family: $main-font;
  font-size: 25px;
  padding-left: 10px;
  line-height: 30px;
  }
}


.tech-container-mobile-img1, .tech-container-mobile-img2, .tech-container-mobile-img3{
  display: none;
  @include sm{
  display: grid;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  justify-self: center;
  z-index: 100;
  }
}



.tech-container-mobile-img1{
  display: none;
  @include sm{
  display: grid;
  margin-top: 50px;
  }
}

.tech-container-mobile-img2{
  display: none;
  @include sm{
  display: grid;
  margin-top: 15px;
  }
}

.tech-container-mobile-img3{
  display: none;
  @include sm{
  display: grid;
  margin-bottom: 90px;
  }
}

.tech-container-mobile-desc1, .tech-container-mobile-desc2, .tech-container-mobile-desc3{
  display: none;
  @include sm{
  display: grid;
  font-size: 10px;
  padding: 0 5px;
  line-height: 13px;
  }
}

.tech-container-mobile-desc2{
  text-align: right;
}

.tech-container-mobile-bg{
  display: none;
  @include sm{
  display: grid;
  width: 300px;
  margin: 0 auto;
  }
}

.tech-container-mobile-bg-img{
  display: none;
  @include sm{
  display: block;
  width: 70px;
  height: auto;
  margin-left: 115px;
  margin-top: -345px;
  // box-shadow: 0 20px 6px -6px rgba(0, 0, 0, 0.2);  
  }
}
</style>
