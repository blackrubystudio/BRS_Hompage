<template>
  <div class="about-weekly">
    <!-- Weekly Container 시작 -->
    <div class="about-weekly-container">
      <!-- Weekly Img 시작 -->
      <div class="about-weekly-img"></div>
      <!-- // Weekly Img 끝 -->
      <!-- Weekly Content 시작-->
      <div class="about-weekly-content">
        <div class="about-weekly-title">
          <span class="about-weekly-white">WE</span>EKLY<br>
          <span class="about-weekly-white">ME</span>ETING
        </div>
        <div class="about-weekly-desc">
          <p>
            <span class="about-weekly-desc-1">회사의 상황을 전체 공유하고자 하는 목적으로</span><br>
            <span class="about-weekly-desc-2">회사 방향성에 대한 이해와 자신이 맡고 있지 않는 프로젝트에 대한</span><br>
            <span class="about-weekly-desc-3">이해를 높이기 위해 진행하고 있습니다</span><br><br>
            <span class="about-weekly-desc-4">매주 주간동향이라는 이름으로 팀별 진행상황을 발표하고</span><br>
            <span class="about-weekly-desc-5">질의 응답 및 피드백 시간을 가지고 있습니다</span><br>
          </p>
        </div>
      </div>
      <!-- // Weekly Content 끝 -->
    </div>
    <!-- // Weekly Container 끝 -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.about-weekly{
  height: $basic-height + 50px;
}

.about-weekly-container{
  @extend %container;
  grid-template-areas:
  "img bl1"
  "img con"
  "img bl2";
  grid-template-columns: 45% 55%;
  grid-template-rows: 25% 35% 40%;
  left: -100px;
  height: 700px;
  margin-top: -50px;
  
}

.about-weekly-img{  
  @extend %background;
  grid-area: img;
  background-image: url('../../assets/img/background/background_1.png');
}

.about-weekly-content{
  grid-area: con;
}

.about-weekly-title{
  @extend %font-main;
  position: relative;
  left: -165px;
}

.about-weekly-white{
  @extend %font-main;
  color: #FEFEFE; 
}

.about-weekly-desc{
  @extend %about-desc;
  left: -165px;
  padding: 20px 0 20px 10px;
}


.about-weekly-desc-2{
  @extend %padding-left-1;
  
}

.about-weekly-desc-3{
  @extend %padding-left-2;
}


.about-weekly-desc-5{
  @extend %padding-left-1;
}

</style>
