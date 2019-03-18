<template>
  <div class="weekly-study">
    <div class="weekly-study-container">
      <div class="weekly-study-img"></div>
      <div class="weekly-study-content">
        <div class="weekly-study-title">
          <span class="weekly-study-white">WE</span>EKLY<br>
          <span class="weekly-study-white">ME</span>ETING
        </div>
        <div class="weekly-study-desc">
          <span class="weekly-study-desc-1">회사의 상황을 전체 공유하고자 하는 목적으로</span><br>
          <span class="weekly-study-desc-2">회사 방향성에 대한 이해와 자신이 맡고 있지 않는 프로젝트에 대한</span><br>
          <span class="weekly-study-desc-3">이해를 높이기 위해 진행하고 있습니다</span><br><br>
          <span class="weekly-study-desc-4">매주 주간동향이라는 이름으로 팀별 진행상황을 발표하고</span><br>
          <span class="weekly-study-desc-5">질의 응답 및 피드백 시간을 가지고 있습니다</span><br>
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

.weekly-study{
  height: 750px;
}

.weekly-study-container{
  position: relative;
  width: 1024px;
  margin: 0 auto;
  display: grid;
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

.weekly-study-img{  
  grid-area: img;
  background-image: url('../../assets/img/background/background_1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.weekly-study-content{
  grid-area: con;
}

.weekly-study-title{
  position: relative;
  left: -165px;
  font-family: $main-font;
  font-size: 100px;
}

.weekly-study-white{
  font-family: $main-font;
  font-size: 100px;
  color: white; 
}

.weekly-study-desc{
  position: relative;
  background: white;
  width: 100%;
  left: -165px;
  line-height: 20px;
  padding: 20px 0 20px 10px;
}


.weekly-study-desc-2{
  padding-left: 10px;
  
}

.weekly-study-desc-3{
  padding-left: 20px;
}


.weekly-study-desc-5{
  padding-left: 10px;
}

</style>
