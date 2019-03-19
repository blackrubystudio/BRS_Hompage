<template>
  <div class="about-study">
    <div class="about-study-container">
      <div class="about-study-img"></div>
      <div class="about-study-content">
        <div class="about-study-title"><span class="about-study-white">ST</span>UDY</div>
        <div class="about-study-desc">
          <span class="about-study-desc-1">특기가 각기 다른 팀원들이</span><br>
          <span class="about-study-desc-2">자신이 자신있는 분야에 대해 강의를 진행합니다</span><br>
          <span class="about-study-desc-3">개발, 디자인, 스타트업, 경영, 교양 등 다양한 주제로</span><br>
          <span class="about-study-desc-4">강의를 진행하며, 팀원들의 융합적 사고를 도모하고 있습니다</span><br><br>
          <span class="about-study-desc-5">2017년 2월부터 매주 1회 진행하고 있습니다</span><br>
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

.about-study{
  height: 700px;
}

.about-study-container{
  @extend %container;
  grid-template-areas:
  "img bl1"
  "img con"
  "img bl2";
  grid-template-columns: 45% 45%;
  grid-template-rows: 25% 35% 40%;
  left: -100px;
}

.about-study-img{  
  grid-area: img;
  background-image: url('../../assets/img/background/background_1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.about-study-content{
  grid-area: con;
}

.about-study-title{
  position: relative;
  left: -130px;
  font-family: $main-font;
  font-size: 100px;
}

.about-study-white{
  font-family: $main-font;
  font-size: 100px;
  color: white; 
}

.about-study-desc{
  position: relative;
  background: white;
  left: -130px;
  line-height: 20px;
  padding: 20px 0 20px 10px;
}


.about-study-desc-2{
  padding-left: 10px;
}

.about-study-desc-3{
  padding-left: 20px;
}

.about-study-desc-4{
  padding-left: 30px;
}


</style>
