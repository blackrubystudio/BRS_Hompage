<template>
  <div class="class-study">
    <div class="class-study-container">
      <div class="class-study-img"></div>
      <div class="class-study-content">
        <div class="class-study-title">
          PYTH<span class="class-study-white">ON</span>
          CLA<span class="class-study-white">SS</span>  
        </div>
        <div class="class-study-desc">
          <span class="class-study-desc-1">블랙루비 주관의 '재미그래밍'프로그램은</span><br>
          <span class="class-study-desc-2">개발에 관심있는 모든이와 함께 진행하는 열린 교육 프로그램으로</span><br>
          <span class="class-study-desc-3">기초 프로그패밍 공부를 통해 개발 전반에 대한 이해를 돕는</span><br>
          <span class="class-study-desc-4">무료 프로그램입니다</span><br><br>
          <span class="class-study-desc-5">재미그래밍 / <a href="https://fungramming.github.io/class-list/" target="_blank">https://fungramming.github.io/class-list/</a></span><br>
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

.class-study{
  height: 700px;
}

.class-study-container{
  @extend %container;
  grid-template-areas:
  "bl1 img"
  "con img"
  "bl2 img";
  grid-template-columns: 50% 45%;
  grid-template-rows: 25% 35% 40%;
  right: -100px;
  margin-top: -50px;
  
}

.class-study-img{  
  grid-area: img;
  background-image: url('../../assets/img/background/background_1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
}

.class-study-content{
  grid-area: con;
  text-align: right;
}

.class-study-title{
  position: relative;
  right: -130px;
  font-family: $main-font;
  font-size: 100px;
}

.class-study-white{
  font-family: $main-font;
  font-size: 100px;
  color: white; 
}

.class-study-desc{
  position: relative;
  background: white;
  right: -130px;
  line-height: 20px;
  padding: 20px 10px 20px 0;
}

.class-study-desc-2{
  padding-right: 10px;
  
}

.class-study-desc-3{
  padding-right: 20px;
}

.class-study-desc-4{
  padding-right: 30px;
}

a{
  color: black;    
}

</style>
