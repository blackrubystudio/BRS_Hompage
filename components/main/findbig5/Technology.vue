<template>
  <div class="fb5-tech">
    <div class="fb5-tech-container">
      <div class="fb5-tech-title">Technology</div>
        <!-- Container1 -->
        <div class="fb5-tech-container-1">
          <img class="fb5-tech-img-1" src="../../../assets/img/practice.png" alt="자동 정보 수집기">
          <div class="fb5-tech-content-1">
            <h1 class="fb5-tech-title-1-1">자동 정보</h1>
            <h1 class="fb5-tech-title-1-2">수집기</h1>
            <div class="fb5-tech-desc-1">
              <p>Forbes, NewYorkTimes 등 일반 뉴스 미디어와</p>
              <p>TechCrunch, TheNextWeb등 IT전문미디어 등 30여개 해외 언론사에서</p>
              <p>IT기사를 실시간으로 수집합니다. 2016년 이후 기사들을 자유롭게 찾아볼 수 있습니다</p>
            </div>
          </div>
        </div>
        <div class="fb5-tech-line-1"></div>

        <!-- Container2 -->
        <div class="fb5-tech-container-2">
          <div class="fb5-tech-content-2">
            <h1 class="fb5-tech-title-2-1">검색</h1> 
            <h1 class="fb5-tech-title-2-2">엔진</h1>
            <div class="fb5-tech-desc-2">
              <p>검색을 통해 사용자가 원하는 기사를 빠르게 찾을 수 있습니다</p>
              <p>유저들의 검색어 기록을 학습, 중요도에 반영하여 사용자 별 맞춤 검색기능이 가능하고,</p>
              <p>기사들을 유사 기사로 묶어 내용이 비슷한 기사를 다시 보지 않을 수 있습니다</p>
            </div>
          </div>
          <img class="fb5-tech-img-2" src="../../../assets/img/practice.png" alt="자동 정보 수집기">
        </div>
        <div class="fb5-tech-line-2"></div>

        <!-- Container3 -->
        <div class="fb5-tech-container-3">
          <img class="fb5-tech-img-3" src="../../../assets/img/practice.png" alt="자동 정보 수집기">
          <div class="fb5-tech-content-3">
            <h1 class="fb5-tech-title-3-1">자연어 처리</h1>
            <h1 class="fb5-tech-title-3-2">AI</h1>
            <div class="fb5-tech-desc-3">
              <p>형태소 분석을 기반으로 하여 문서 내 중요단어 분석 뿐 아니라</p>
              <p>문서의 역가중치를 계싼하여 문서간 중요도를 분석하는 엔진을 제공합니다</p>
              <p>토픽 추출의 정확도를 위하여 LDA와 LSI 두 모델을 결합한 튜닝모델을 활용하고 있습니다</p>
              <p>또한 기사 400자 이내 요약기능으로 사용자에게 전문을 읽는 부담을 줄이고 있습니다</p>
            </div>
          </div>
        </div>
        <div class="fb5-tech-line-3"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.fb5-tech{
  height: $basic-height + 400px;
}

.fb5-tech-container{
  @extend %container;
  grid-template-rows: 33.3% 33.3% 33.3%;
  grid-gap: 3%;
  top: 50px;
  height: 900px;
}

.fb5-tech-title{
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 1024px;
  text-align: right;
  font-size: 40px;
  font-family: SCDream3;
}

.fb5-tech-container-1{
  position: relative;
  display: grid;
  grid-template-columns: 30% 50%;
}

.fb5-tech-img-1{
  height: 100%;
  justify-self: right;
  transition: all 5s linear;
}

.fb5-tech-content-1{
  align-self: center;
  display: grid;
  grid-template-areas:
  "tt11 tt12"
  "des1 des1";
  grid-template-columns: 55% 50%;
  grid-template-rows: 100px 100px;
}

.fb5-tech-title-1-1{
  grid-area: tt11;
  font-family: $main-font;
  font-size: 70px;
  letter-spacing: -5px;
}

.fb5-tech-title-1-2{
  grid-area: tt12;
  font-family: $main-font;
  font-size: 70px;
  letter-spacing: -5px;
  padding-top: 20px;
}

.fb5-tech-desc-1{
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

.fb5-tech-line-1{
  @extend %tech-line;
  position: absolute;
  width: 400px;
  height: 135px;
  left: 200px;
  border-image: linear-gradient(to right, white 85px, black 85px 430px);
  border-image-slice: 1;
}

.fb5-tech-img-1:hover + .fb5-tech-content-1 > .fb5-tech-desc-1{
  display: grid;
}


.fb5-tech-container-2{
  position: relative;
  display: grid;
  grid-template-columns: 60% 30%;
}

.fb5-tech-img-2{
  height: 100%;
  justify-self: center;
}


.fb5-tech-content-2{
 align-self: center;
  display: grid;
  grid-template-areas:
  "tt21 tt22"
  "des2 des2";
  grid-template-columns: 75% 50%;
  grid-template-rows: 100px 100px;
}

.fb5-tech-title-2-1{
  grid-area: tt21;
  justify-self: end;
  font-family: $main-font;
  font-size: 70px;
  letter-spacing: -5px;
  padding-top: 20px;
}

.fb5-tech-title-2-2{
  grid-area: tt22;
  font-family: $main-font;
  font-size: 70px;
  letter-spacing: -5px;
}

.fb5-tech-line-2{
  @extend %tech-line;
  position: absolute;
  width: 220px;
  height: 455px;
  left: 470px;
  border-image: linear-gradient(to right, black 0px 180px, white 180px 230px);
  border-image-slice: 1;
}

.fb5-tech-desc-2{
  display: none;
  grid-area: des2;
  padding-top: 30px;
  align-self: end;
  justify-self: end;
  margin-right: -170px;
  width: 600px;
  line-height: 20px;
}


.fb5-tech-img-2:hover + .fb5-tech-content-2 > .fb5-tech-desc-2{
  display: grid;
}

.fb5-tech-container-3{
  position: relative;
  display: grid;
  grid-template-columns: 30% 50%;
}

.fb5-tech-img-3{
  height: 100%;
  justify-self: right;
}

.fb5-tech-img-3:hover + .fb5-tech-content-3 > .fb5-tech-desc-3{
  display: grid;
}

.fb5-tech-content-3{
  align-self: center;
  display: grid;
  grid-template-areas:
  "tt31 tt32"
  "des3 des3";
  grid-template-columns: 65% 30%;
  grid-template-rows: 100px 100px;
}

.fb5-tech-title-3-1{
  align-self: center;
  grid-area: tt31;
  font-family: $main-font;
  font-size: 70px;
  letter-spacing: -5px;
}

.fb5-tech-title-3-2{
  grid-area: tt32;
  font-family: $main-font;
  font-size: 70px;
  letter-spacing: -5px;
  padding-top: 30px;
}

.fb5-tech-line-3{
  @extend %tech-line;
  position: absolute;
  width: 430px;
  height: 800px;
  left: 200px;
  border-image: linear-gradient(to right, white 85px, black 85px 430px);
  border-image-slice: 1;
}

.fb5-tech-desc-3{
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
