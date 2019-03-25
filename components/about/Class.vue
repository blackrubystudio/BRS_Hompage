<template>
  <div class="about-python">
    <!-- Python Container 시작 -->
    <div class="about-python-container">
      <!-- Python Img 시작 -->
      <div class="about-python-img"></div>
      <!-- // Python Img 끝 -->
      <!-- Python Content 시작 -->
      <div class="about-python-content">
        <div class="about-python-title">
          PYTH<span class="about-python-white">ON</span>
          CLA<span class="about-python-white">SS</span>  
        </div>
        <div class="class-python-desc">
          <p>
            <span class="about-python-desc-1">블랙루비 주관의 '재미그래밍'프로그램은</span><br>
            <span class="about-python-desc-2">개발에 관심있는 모든이와 함께 진행하는 열린 교육 프로그램으로</span><br>
            <span class="about-python-desc-3">기초 프로그패밍 공부를 통해 개발 전반에 대한 이해를 돕는</span><br>
            <span class="about-python-desc-4">무료 프로그램입니다</span><br><br>
            <span class="about-python-desc-5">재미그래밍 / <a href="https://fungramming.github.io/class-list/" target="_blank">https://fungramming.github.io/class-list/</a></span><br>
          </p>
        </div>
      </div>
      <!-- // Python Content 끝 -->
    </div>
    <!-- // Python Container 끝 -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.about-python{
  height: $basic-height;
}

.about-python-container{
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

.about-python-img{  
  @extend %background;
  grid-area: img;
  background-image: url('../../assets/img/background/background_1.png');
}

.about-python-content{
  grid-area: con;
  text-align: right;
}

.about-python-title{
  @extend %font-main;
  position: relative;
  right: -130px;
}

.about-python-white{
  @extend %font-main;
  color: #FEFEFE; 
}

.about-python-desc{
  @extend %about-desc;
  right: -130px;
  padding: 20px 10px 20px 0;
}

.about-python-desc-2{
  @extend %padding-right-1;
  
}

.about-python-desc-3{
  @extend %padding-right-2;
}

.about-python-desc-4{
  @extend %padding-right-3;
}

a{
  color: black;    
}

</style>
