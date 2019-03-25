<template>
  <div class="about-study">
    <!-- Study Container 시작 -->
    <div class="about-study-container">
      <!-- Study Img 시작 -->
      <div class="about-study-img"></div>
      <!-- // Study Img 끝 -->
      <!-- Study Conent 시작 -->
      <div class="about-study-content">
        <div class="about-study-title"><span class="about-study-white">ST</span>UDY</div>
        <div class="about-study-desc">
          <p>
            <span class="about-study-desc-1">특기가 각기 다른 팀원들이</span><br>
            <span class="about-study-desc-2">자신이 자신있는 분야에 대해 강의를 진행합니다</span><br>
            <span class="about-study-desc-3">개발, 디자인, 스타트업, 경영, 교양 등 다양한 주제로</span><br>
            <span class="about-study-desc-4">강의를 진행하며, 팀원들의 융합적 사고를 도모하고 있습니다</span><br><br>
            <span class="about-study-desc-5">2017년 2월부터 매주 1회 진행하고 있습니다</span><br>
          </p>
        </div>
      </div>
      <!-- // Study Content 끝 -->
    </div>
    <!-- // Study Container 끝 -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.about-study{
  height: $basic-height;
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
  @extend %background;
  grid-area: img;
  background-image: url('../../assets/img/background/background_1.png');
}

.about-study-content{
  grid-area: con;
}

.about-study-title{
  @extend %font-main;
  position: relative;
  left: -130px;
}

.about-study-white{
  @extend %font-main;
  color: #FEFEFE;  
}

.about-study-desc{
  @extend %about-desc;
  left: -130px;
  padding: 20px 0 20px 10px;
}


.about-study-desc-2{
  @extend %padding-left-1;
}

.about-study-desc-3{
  @extend %padding-left-2;
}

.about-study-desc-4{
  @extend %padding-left-3;
}


</style>
