<template>
  <footer class="footer">
    <div class="footer-container">
      <img class="footer-logo" src="../../assets/img/common/logo_name_white.svg" alt="Blackrubystrudio-logo">
      <div class="footer-content">
        <div>블랙루비 스튜디오</div>
        <div>대표 소재우</div>
        <div>사업자 등록번호 3878800394</div>
        <div>서울특별시 강남구 학동로 47길 6, 일우빌딩 3층</div>
        <div>Tel: 02-6949-2133 | FAX: 02-6949-2135</div>
        <div>아이콘 info blackrubystudio.com</div>
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
  align-self: center;
}

.footer-content{
  grid-area: con;
  text-align: right;
  align-self: center;
  line-height: 20px;
  font-size: 15px;
  font-family: $footer-font;
}
</style>
