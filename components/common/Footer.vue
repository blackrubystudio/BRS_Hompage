// Footer: 모든 페이지에서 공통적으로 사용하는 하단 Footer 컴포넌트

<template>
  <footer class="footer">
    <div class="footer-container">
      <img class="footer-logo" src="@/assets/img/common/logo_name_white.svg" alt="Blackrubystrudio-logo">
      <div class="footer-content-group">
          <li class="footer-content">블랙루비 스튜디오</li><br>
          <li class="footer-content">대표 박진호 소재우</li><br>
          <li class="footer-content">사업자 등록번호 3878800394</li><br>
          <li class="footer-content">서울특별시 강남구 학동로 47길 6, 일우빌딩 3층</li><br>
          <li class="footer-content">TEL: 02-6949-2133 | FAX: 02-6949-2135</li><br>
          <a href="mailto:info@blackrubystudio.com"><li class="footer-content mail">info@blackrubystudio.com</li></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.footer{
  @extend %background;
  position: relative;
  background-image: url('../../assets/img/background/background_2.png');
  height: 150px;
  bottom: 0;
  @include lg{
    height: 130px;
  }
  @include md{
    height: 110px;
  }
  @include sm{
    height: 100px;
  }
}

.footer-container{
  @extend %hf-container;

  @include xl{
    width: 1000px;
  }
  @include lg{
    width: 760px;
  }
  @include md{
    width: 550px;
  }
  @include sm{
    width: 100%;
  }
}

.footer-logo{
  @extend %hf-logo;
  @include lg{
    height: 70px;
  }
  @include md{
    height: 60px;
  }
    @include sm{
    padding-left: 20px;
    height: 40px;
  }

}

.footer-content-group{
  @extend %hf-content-group;
   align-self: end;
   font-size: 14px;
   height: 100%;
   padding-top: 25px;
  
  @include lg{
    padding-top: 15px;
  }
  @include md{
    font-size: 10px;
    padding-top: 15px;
  }
  @include sm{
    padding-top: 17px;
    font-size: 9px;
    line-height: 7px;
    padding-right: 10px;
  }
}

.footer-content{
  font-family:  $font-footer;
  line-height: 5px;
  color: #FEFEFE;
  opacity: .7;
}
</style>
