<template>
  <div class="about-growth">
    <div class="about-growth-container">
      <div class="about-growth-left">
          <div class="about-growth-left-title">동반</div>
          <div class="about-growth-left-content">
            <div class="about-growth-left-subtitle">GO-GROWTH</div>
            <div class="about-growth-left-desc">기업의 성장 뿐 아니라<br>개인의 역량강화를<br>가장 중요한 성장지표로 삼고있기에<br><br>같이 성장할 수 있는 환경을 만들고자 합니다</div>
          </div>
      </div>
      <div class="about-growth-center"></div>
      <div class="about-growth-right">
        <div class="about-growth-right-title">성장</div>
        <div class="about-growth-right-content">
          <div class="about-growth-right-subtitle">EFFICIENTLY</div>
          <div class="about-growth-right-desc">1인 생산성의 향상은<br>팀의 업무 분배능력과 효율성의<br>향상을 의미합니다<br><br>개개인의 강점을 살리는 업무 분배로<br>1인 생산성의 향상과<br>개인의 발전을 도모합니다</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";

.about-growth{
  position: relative;
  height: 800px;
}

.about-growth-container{
  position: relative;
  width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
  "lef bl1 bl2"
  "lef bl3 rgt"
  "bl4 bl5 rgt";
  grid-template-columns: 45% 10% 45%;
  grid-template-rows: 15% 60% 15%;
  height: 100%;
  color: white;
}

.about-growth-left{
  grid-area: lef;
  margin-top: -50px;
  background-image: url('../../assets/img/background/background_3.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 5px 8px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.about-growth-left-title{
  position: relative;
  top: 200px;
  text-align: right;
  font-family: $main-font;
  font-size: 100px;
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
  grid-area: rgt;
  background-image: url('../../assets/img/background/background_3.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 5px 8px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.about-growth-right-title{
  position: relative;
  top: 150px;
  font-family: $main-font;
  font-size: 100px;
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
