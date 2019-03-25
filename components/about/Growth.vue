<template>
  <div class="about-growth">
    <!-- Growth Container 시작 -->
    <div class="about-growth-container">
      <!-- Growth 왼쪽 시작 -->
      <div class="about-growth-left">
          <h1 class="about-growth-left-title">동반</h1>
          <div class="about-growth-left-content">
            <h3 class="about-growth-left-subtitle">GO-GROWTH</h3>
            <p class="about-growth-left-desc">기업의 성장 뿐 아니라<br>개인의 역량강화를<br>가장 중요한 성장지표로 삼고있기에<br><br>같이 성장할 수 있는 환경을 만들고자 합니다</p>
          </div>
      </div>
      <!-- // Growth 왼쪽 끝 -->
      <!-- Growth 오른쪽 시작 -->
      <div class="about-growth-right">
        <h1 class="about-growth-right-title">성장</h1>
        <div class="about-growth-right-content">
          <h3 class="about-growth-right-subtitle">EFFICIENTLY</h3>
          <p class="about-growth-right-desc">1인 생산성의 향상은<br>팀의 업무 분배능력과 효율성의<br>향상을 의미합니다<br><br>개개인의 강점을 살리는 업무 분배로<br>1인 생산성의 향상과<br>개인의 발전을 도모합니다</p>
        </div>
      </div>
      <!-- // Growth 오른쪽 끝 -->
    </div>
    <!-- // Growth Container 끝 -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.about-growth{
  height: $basic-height + 100px;
}

.about-growth-container{
  @extend %container;
  grid-template-areas:
  "lef bl2"
  "lef rgt"
  "bl4 rgt";
  grid-template-columns: 45% 45%;
  grid-template-rows: 15% 60% 15%;
  grid-column-gap: 10%;
  color: white;
}

.about-growth-left{
  @extend %background;
  grid-area: lef;
  margin-top: -50px;
  background-image: url('../../assets/img/background/background_3.png');
  box-shadow: 0 5px 8px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.about-growth-left-title{
  @extend %font-main;
  position: relative;
  top: 200px;
  text-align: right;
  right: -15px;
}

.about-growth-left-content{
  position: relative;
  top: 320px;
  padding-left: 50px;
}

.about-growth-left-subtitle{
  font-family: $about-sub
}

.about-growth-left-desc{
  position: relative;
  top: 50px;
  line-height: 20px;
}

.about-growth-right{
  @extend %background;
  grid-area: rgt;
  background-image: url('../../assets/img/background/background_3.png');
  box-shadow: 0 5px 8px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.about-growth-right-title{
  @extend %font-main;
  position: relative;
  top: 150px;
  left: -25px;
}

.about-growth-right-content{
  position: relative;
  top: 220px;
  padding-right: 50px;
  text-align: right;
}

.about-growth-right-subtitle{
  font-family: $about-sub
}

.about-growth-right-desc{
  position: relative;
  top: 50px;
  line-height: 20px;
}
</style>
