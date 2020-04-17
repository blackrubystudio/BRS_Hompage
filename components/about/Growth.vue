// Growth: About 페이지에서 동반 성장을 표시해주는 컴포넌트

<template>
  <div class="about-growth">
    <!-- Growth Container 시작 -->
    <div class="about-growth-container">
      <!-- Growth 왼쪽 시작 -->
      <div class="about-growth-left">
          <div class="about-growth-left-title"><img class="about-growth-img" src="@/assets/img/fonts_img/about/main3.png" alt="BlackRubyStudio About Main3"></div>
          <div class="about-growth-left-content">
            <h3 class="about-growth-left-subtitle">GO-GROWTH</h3>
            <p class="about-growth-left-desc">기업의 성장 뿐 아니라<br>개인의 역량강화를<br>가장 중요한 성장지표로 삼고있기에<br><br>같이 성장할 수 있는 환경을 만들고자 합니다</p>
          </div>
      </div>
      <!-- // Growth 왼쪽 끝 -->
      <!-- Growth 오른쪽 시작 -->
      <div class="about-growth-right">
        <div class="about-growth-right-title"><img class="about-growth-img" src="@/assets/img/fonts_img/about/main4.png" alt="BlackRubyStudio About Main4"></div>
        <div class="about-growth-right-content">
          <h3 class="about-growth-right-subtitle">EFFICIENTLY</h3>
          <p class="about-growth-right-desc">1인 생산성의 향상은<br>팀의 업무 분배능력과 효율성의<br>향상을 의미합니다<br><br>개개인의 강점을 살리는 업무 분배로<br>1인 생산성의 향상과<br>개인의 발전을 도모합니다</p>
        </div>
      </div>
      <!-- // Growth 오른쪽 끝 -->
    </div>
    <!-- // Growth Container 끝 -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.about-growth{
  height: $basic-height + 100px;
  @include lg{
    height: 650px;
  }
  @include md{
    height: 600px;
  }
  @include sm{
    height: 350px;
  }
}

.about-growth-container{
  @extend %container;
  grid-template-areas:
  "lef bl2"
  "lef rgt"
  "bl4 rgt";
  grid-template-columns: 45% 45%;
  grid-template-rows: 15% 60% 15%;
  grid-column-gap: 10%;
  color: white;
  @include lg{
    width: 760px;
  }
  @include md{
    width: 550px;
  }
  @include sm{
    width: 300px;
    grid-template-columns: 48% 48%;
    grid-column-gap: 4%;
  }
}

.about-growth-left{
  @extend %background;
  grid-area: lef;
  margin-top: -50px;
  background-image: url('../../assets/img/background/background_3.png');
  box-shadow: 0 5px 8px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.about-growth-left-title{
  position: relative;
  top: 200px;
  text-align: right;
  right: -15px;
  @include lg{
    top: 150px;
  }
  @include sm{
    top: 80px;
    right: -10px;
  }
}

.about-growth-img{
  @include md{
    height: 80px;
  }
  @include sm{
    height: 50px;
  }
}


.about-growth-left-content{
  position: relative;
  top: 320px;
  padding-left: 50px;
  @include lg{
    top: 250px;
  }
  @include md{
    top: 200px;
    padding-left: 20px;
  }
  @include sm{
    top: 100px;
    padding-left: 10px;
  }
}

.about-growth-left-subtitle{
  font-family: $about-sub;
  @include sm{
    font-size: 13px;
  }
}

.about-growth-left-desc{
  position: relative;
  top: 50px;
  line-height: 20px;
  @include md{
    top: 30px;
    font-size: 11px;
  }
  @include sm{
    font-size: 8px;
    line-height: 15px;
  }
}

.about-growth-right{
  @extend %background;
  grid-area: rgt;
  background-image: url('../../assets/img/background/background_3.png');
  box-shadow: 0 5px 8px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.about-growth-right-title{
  @extend %font-main;
  position: relative;
  top: 150px;
  left: -25px;
  @include lg{
    top: 100px;
  }
  @include md{
  font-size: 80px;
  }
  @include sm{
  top: 30px;
  font-size: 50px;
  left: -15px;
  }
}

.about-growth-right-content{
  position: relative;
  top: 220px;
  padding-right: 50px;
  text-align: right;
  @include lg{
    top: 150px;
  }
  @include md{
    top: 130px;
    padding-right: 20px;
  }
  @include sm{
    top: 60px;
    padding-right: 10px;
  }
}

.about-growth-right-subtitle{
  font-family: $about-sub;
    @include sm{
    font-size: 13px;
  }
}

.about-growth-right-desc{
  position: relative;
  top: 50px;
  line-height: 20px;
    @include md{
    top: 30px;
    font-size: 11px;
  }
    @include sm{
    font-size: 8px;
    line-height: 15px;
  }
}
</style>
