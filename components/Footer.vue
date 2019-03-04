<template>
  <div class="footer">
    <!--회사 로고, 누르면 첫 페이지로 이동-->
    <div class="logo">
        <img class="logoimg" src="~/assets/img/blackruby.svg" alt="회사로고" />
    </div>

    <div class="footerdes">
    블랙루비 스튜디오<br>
    대표 박진호 & 소재우<br>
    사업자 등록번호 3878800394<br>
    서울특별시 강남구 학동로 47길 6, 일우빌딩 3층<br>
    TEL. 02-6949-2133<br>
    FAX. 02-6949-2135<br>
    info@blackrubystudio.com<br>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
}

.logo {
  position: absolute;
  text-align: left;
}

.logoimg {
  width: 20vw;
  padding-left: 10vw;
  padding-top: 3vh;
}

.footerdes {
  color: whitesmoke;
  background-color: black;
  text-align: right;
  width: 100vw;
  height: 20vh;
  padding-right: 10vw;
  line-height: 2vh;
  padding-top: 2vh;
}
</style>