// Footer: 모든 페이지에서 공통적으로 사용하는 하단 Footer 컴포넌트

<template>
  <footer class="footer">
    <div class="footer-container">
      <img
        class="footer-logo"
        src="@/assets/img/common/logo_name_white.svg"
        alt="Blackrubystrudio-logo"
      />
      <div class="footer-content-group">
        <li class="footer-con1 footer-content">블랙루비 스튜디오</li>
        <br />
        <li class="footer-con2 footer-content">대표 박진호</li>
        <br />
        <li class="footer-con3 footer-content">사업자 등록번호 3878800394</li>
        <br />
        <li class="footer-con4 footer-content">서울특별시 강남구 학동로 47길 6, 일우빌딩 3층</li>
        <br />
        <li class="footer-con5 footer-content">TEL: 02-6949-2133 | FAX: 02-6949-2135</li>
        <br />
        <li class="footer-con6 footer-mail">
          <span>
            <a class="icon1 footer-icon" href="https://medium.com/@rubyblack" target="_blank">
              <img
                class="footer-icon"
                src="@/assets/img/footer/medium.png"
                alt="BlackRubyStudo 미디엄"
              />
            </a>
          </span>
          <span>
            <a
              class="icon1 footer-icon"
              href="https://blog.naver.com/PostList.nhn?blogId=blackruby_studio"
              target="_blank"
            >
              <img class="footer-icon" src="@/assets/img/footer/blog.png" alt="BlackRubyStudo 블로그" />
            </a>
          </span>
          <span>
            <a
              class="icon1 footer-icon"
              href="https://www.youtube.com/channel/UCekGq0aZVTYTzfHfLQuWuAg"
              target="_blank"
            >
              <img
                class="footer-icon"
                src="@/assets/img/footer/youtube.png"
                alt="BlackRubyStudo 유투브"
              />
            </a>
          </span>
          <span>
            <a href="mailto:info@blackrubystudio.com">
              <span class="footer-content mail">info@blackrubystudio.com</span>
            </a>
          </span>
        </li>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  @extend %background;
  position: relative;
  background-image: url("../../assets/img/background/background_2.png");
  height: 150px;
  bottom: 0;
  @include lg {
    height: 130px;
  }
  @include md {
    height: 110px;
  }
  @include sm {
    height: 100px;
  }
}
.footer-container {
  @extend %hf-container;
  @include xl {
    width: 1000px;
  }
  @include lg {
    width: 760px;
  }
  @include md {
    width: 550px;
  }
  @include sm {
    width: 100%;
  }
}
.footer-logo {
  @extend %hf-logo;
  @include lg {
    height: 70px;
  }
  @include md {
    height: 60px;
  }
  @include sm {
    padding-left: 20px;
    height: 40px;
  }
}
.footer-content-group {
  @extend %hf-content-group;
  grid-template-areas:
    "con1"
    "con2"
    "con3"
    "con4"
    "con5"
    "con6";
  width: 1070px;
  font-size: 14px;
  height: 100%;
  padding-top: 25px;
  @include xl {
    width: 850px;
  }
  @include lg {
    width: 640px;
    padding-top: 15px;
  }
  @include md {
    width: 440px;
    font-size: 10px;
    padding-top: 15px;
  }
  @include sm {
    width: 100%;
    padding-top: 17px;
    font-size: 8px;
    line-height: 7px;
    padding-right: 10px;
  }
}

.footer-con1 {
  grid-area: con1;
}

.footer-con2 {
  grid-area: con2;
}

.footer-con3 {
  grid-area: con3;
}

.footer-con4 {
  grid-area: con4;
}

.footer-con5 {
  grid-area: con5;
}

.footer-con6 {
  grid-area: con6;
}

.footer-content {
  font-family: $font-footer;
  line-height: 5px;
  color: #fefefe;
  opacity: 0.7;
}
.footer-mail {
  display: grid;
  grid-area: "icon1 icon2 icon3 mail";
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 10px;
  width: 100%;
  padding-left: 710px;
  justify-content: right;
  justify-self: end;
  @include xl {
    padding-left: 490px;
  }
  @include lg {
    padding-left: 280px;
  }
  @include md {
    padding-left: 180px;
  }
  @include sm {
    padding-left: 0;
  }
}
.mail {
  grid-area: mail;
  line-height: 25px;
  @include md {
    line-height: 15px;
  }
  @include sm {
    line-height: 10px;
  }
}
.footer-icon {
  height: 20px;
  opacity: 0.9;
  padding-right: 20px;
  @include md {
    height: 15px;
    padding-right: 15px;
  }
  @include sm {
    height: 10px;
    padding-right: 10px;
  }
}

.icon1 {
  grid-area: icon1;
}

.icon2 {
  grid-area: icon2;
}

.icon3 {
  grid-area: icon3;
}
</style>