<template>
  <footer class="footer">
    <div class="footer-container">
      <img class="footer-logo" src="../../assets/img/common/logo_name_white.svg" alt="Blackrubystrudio-logo">
      <div class="footer-contents">
        <span class="footer-content">블랙루비 스튜디오</span><br>
        <span class="footer-content">대표 소재우</span><br>
        <span class="footer-content">사업자 등록번호 3878800394</span><br>
        <span class="footer-content">서울특별시 강남구 학동로 47길 6, 일우빌딩 3층</span><br>
        <span class="footer-content">Tel: 02-6949-2133 | FAX: 02-6949-2135</span><br>
        <span><a class="footer-content" href="mailto:info@blackrubystudio.com">info@blackrubystudio.com</a></span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "../../assets/css/common.scss";

.footer{
  background-image: url('../../assets/img/background/background_2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 150px;
  color: white;
  padding: 0 50px;
  
}

.footer-container{
  display: grid;
  grid-template-areas:
  "log con";
}

.footer-logo{
  grid-area: log;
  height: 80px;
  margin-top: 30px;
  align-self: center;
}

.footer-contents{
  grid-area: con;
  align-self: end;
  text-align: right;
  padding-top: 15px;
}

.footer-content{
  line-height: 20px;
  font-size: 14px;
  font-family:  $footer-font;
  color: #F5F5F5;
}
</style>
