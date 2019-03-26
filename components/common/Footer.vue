<template>
  <footer class="footer">
    <!-- Footer Container 시작 -->
    <div class="footer-container">
      <!-- Footer Logo 시작 -->
      <img class="footer-logo" src="../../assets/img/common/logo_name_white.svg" alt="Blackrubystrudio-logo">
      <!-- // Footer Logo 끝 -->
      <!-- Footer Content 시작 -->
      <div class="footer-content-group">
        <p>
          <span class="footer-content">블랙루비 스튜디오</span><br>
          <span class="footer-content">대표 소재우</span><br>
          <span class="footer-content">사업자 등록번호 3878800394</span><br>
          <span class="footer-content">서울특별시 강남구 학동로 47길 6, 일우빌딩 3층</span><br>
          <span class="footer-content">TEL: 02-6949-2133 | FAX: 02-6949-2135</span><br>
          <span><a class="footer-content" href="mailto:info@blackrubystudio.com">info@blackrubystudio.com</a></span>
        </p>
      </div>
      <!-- // Footer Content 끝 -->
    </div>
  </footer>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>

.footer{
  @extend %background;
  position: relative;
  background-image: url('../../assets/img/background/background_2.png');
  height: 150px;
  padding: 0 50px;
  bottom: 0;
  
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

.footer-content-group{
  grid-area: con;
  align-self: end;
  text-align: right;
  padding-top: 15px;
}

.footer-content{
  font-family:  $font-footer;
  line-height: 20px;
  font-size: 14px;
  color: #FEFEFE;
  opacity: .8;
}
</style>
