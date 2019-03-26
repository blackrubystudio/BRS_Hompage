<template>
  <div class="tech">
    <div class="tech-container">
      <div class="tech-title">Technology</div>
        <!-- Container1 -->
        <div class="tech-container-1">
          <img class="tech-img-1" src="../../assets/img/practice.png" alt="자동 정보 수집기">
          <div class="tech-content-1">
            <h1 class="tech-title-1-1">{{title11}}</h1>
            <h1 class="tech-title-1-2">{{title12}}</h1>
            <div class="tech-desc-1" v-html="desc1">
              
            </div>
          </div>
        </div>
        <div class="tech-line-1"></div>

        <!-- Container2 -->
        <div class="tech-container-2">
          <div class="tech-content-2">
            <h1 class="tech-title-2-1">{{title21}}</h1> 
            <h1 class="tech-title-2-2">{{title22}}</h1>
            <div class="tech-desc-2">
              <p>검색을 통해 사용자가 원하는 기사를 빠르게 찾을 수 있습니다</p>
              <p>유저들의 검색어 기록을 학습, 중요도에 반영하여 사용자 별 맞춤 검색기능이 가능하고,</p>
              <p>기사들을 유사 기사로 묶어 내용이 비슷한 기사를 다시 보지 않을 수 있습니다</p>
            </div>
          </div>
          <img class="tech-img-2" src="../../assets/img/practice.png" alt="자동 정보 수집기">
        </div>
        <div class="tech-line-2"></div>

        <!-- Container3 -->
        <div class="tech-container-3">
          <img class="tech-img-3" src="../../assets/img/practice.png" alt="자동 정보 수집기">
          <div class="tech-content-3">
            <h1 class="tech-title-3-1">{{title31}}</h1>
            <h1 class="tech-title-3-2">{{title32}}</h1>
            <div class="tech-desc-3" v-html="desc3">

            </div>
          </div>
        </div>
        <div class="tech-line-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title11', 'title12', 'title21', 'title22', 'title31', 'title32', 'desc1', 'desc3']
}
</script>

<style lang="scss" scoped>

.tech{
  height: $basic-height + 400px;
}

.tech-container{
  @extend %container;
  grid-template-rows: 33.3% 33.3% 33.3%;
  grid-gap: 3%;
  top: 50px;
  height: 900px;
}

.tech-title{
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 1024px;
  text-align: right;
  font-size: 40px;
  font-family: SCDream3;
}

.tech-container-1{
  position: relative;
  display: grid;
  grid-template-columns: 30% 50%;
}

.tech-img-1{
  height: 100%;
  justify-self: right;
  transition: all 5s linear;
}

.tech-content-1{
  align-self: center;
  display: grid;
  grid-template-areas:
  "tt11 tt12"
  "des1 des1";
  grid-template-columns: 55% 50%;
  grid-template-rows: 100px 100px;
}

.tech-title-1-1{
  grid-area: tt11;
  font-family: $main-font;
  font-size: 70px;
  letter-spacing: -5px;
}

.tech-title-1-2{
  grid-area: tt12;
  font-family: $main-font;
  font-size: 70px;
  letter-spacing: -5px;
  padding-top: 20px;
}

.tech-desc-1{
  display: none;
  grid-area: des1;
  padding-top: 30px;
  align-self: end;
  justify-self: end;
  text-align: right;
  margin-right: 70px;
  width: 600px;
  line-height: 20px;
}

.tech-line-1{
  @extend %tech-line;
  position: absolute;
  width: 400px;
  height: 135px;
  left: 200px;
  border-image: linear-gradient(to right, white 85px, black 85px 430px);
  border-image-slice: 1;
}

.tech-img-1:hover + .tech-content-1 > .tech-desc-1{
  display: grid;
}


.tech-container-2{
  position: relative;
  display: grid;
  grid-template-columns: 60% 30%;
}

.tech-img-2{
  height: 100%;
  justify-self: center;
}


.tech-content-2{
 align-self: center;
  display: grid;
  grid-template-areas:
  "tt21 tt22"
  "des2 des2";
  grid-template-columns: 75% 50%;
  grid-template-rows: 100px 100px;
}

.tech-title-2-1{
  grid-area: tt21;
  justify-self: end;
  font-family: $main-font;
  font-size: 70px;
  letter-spacing: -5px;
  padding-top: 20px;
}

.tech-title-2-2{
  grid-area: tt22;
  font-family: $main-font;
  font-size: 70px;
  letter-spacing: -5px;
}

.tech-line-2{
  @extend %tech-line;
  position: absolute;
  width: 220px;
  height: 455px;
  left: 470px;
  border-image: linear-gradient(to right, black 0px 180px, white 180px 230px);
  border-image-slice: 1;
}

.tech-desc-2{
  display: none;
  grid-area: des2;
  padding-top: 30px;
  align-self: end;
  justify-self: end;
  margin-right: -170px;
  width: 600px;
  line-height: 20px;
}


.tech-img-2:hover + .tech-content-2 > .tech-desc-2{
  display: grid;
}

.tech-container-3{
  position: relative;
  display: grid;
  grid-template-columns: 30% 50%;
}

.tech-img-3{
  height: 100%;
  justify-self: right;
}

.tech-img-3:hover + .tech-content-3 > .tech-desc-3{
  display: grid;
}

.tech-content-3{
  align-self: center;
  display: grid;
  grid-template-areas:
  "tt31 tt32"
  "des3 des3";
  grid-template-columns: 65% 30%;
  grid-template-rows: 100px 100px;
}

.tech-title-3-1{
  align-self: center;
  grid-area: tt31;
  font-family: $main-font;
  font-size: 70px;
  letter-spacing: -5px;
}

.tech-title-3-2{
  grid-area: tt32;
  font-family: $main-font;
  font-size: 70px;
  letter-spacing: -5px;
  padding-top: 30px;
}

.tech-line-3{
  @extend %tech-line;
  position: absolute;
  width: 430px;
  height: 800px;
  left: 200px;
  border-image: linear-gradient(to right, white 85px, black 85px 430px);
  border-image-slice: 1;
}

.tech-desc-3{
  display: none;
  grid-area: des3;
  padding-top: 30px;
  align-self: end;
  justify-self: end;
  text-align: right;
  margin-right: 90px;
  width: 620px;
  line-height: 20px;
}

</style>
