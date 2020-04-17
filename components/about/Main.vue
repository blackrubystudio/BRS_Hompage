// Main: About 페이지의 메인 페이지

<template>
  <div class="about-main">
    <div class="about-main-container">
      <h1 class="about-main-title-1">BLACKRUBYSTUDIO</h1>
      <h1 class="about-main-title-2">
        <img class="about-main-title-img1" src="@/assets/img/fonts_img/about/main1.png" alt="blackrubystudio main1"><br>
        <img class="about-main-title-img2" src="@/assets/img/fonts_img/about/main2.png" alt="blackrubystudio main2">
      </h1>
      <h3 class="about-main-subtitle"><div class="about-main-line"></div>팀과 함께<br>간단하고 효율적으로</h3>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about-main{
  @extend %main-page;
  @include lg{
    height: 650px;
  }
  @include md{
    height: 550px;
  }
  @include sm{
    height: 400px;
  }
}

.about-main-container{
  @extend %container;
  grid-template-areas:
  "tt1 bl1 bl2"
  "tt1 tt2 bl3"
  "bl4 bl5 sub";
  grid-template-columns: 100px 450px 300px;
  grid-template-rows: 120px 300px 180px;
  top: 100px;
  height: 600px;

  @include xl{
    width: 1000px;
    grid-template-columns: 200px 450px 180px;
  }
  @include lg{
    width: 760px;
    height: 550px;
    grid-template-columns: 100px 470px 150px;
    grid-template-rows: 50px 350px 200px;
  }
  @include md{
    width: 550px;
    height: 450px;
    grid-template-columns: 20px 370px 125px;
    grid-template-rows: 0px 300px 200px;
  }
  @include sm{
    width: 300px;
    height: 350px;
    grid-template-columns: 70px 200px 0px;
    grid-template-rows: 0px 200px 300px;
  }
}

.about-main-title-1{
  grid-area: tt1;
  font-family: $about-sub;
  font-size: 25px;
  transform: rotate(90deg);
  justify-self: end;
  padding-right: 40px;
  @include lg{
    padding-right: 10px;
  }
  @include md{
    font-size: 20px;
  }
  @include sm{
    font-size: 14px;
    padding-right: 90px;
  }
  }

.about-main-title-2{
  @extend %font-main;
  grid-area: tt2;
  align-self: end;
  justify-self: end;
  @include sm{
    align-self: center;
    width: 210px;
  }
}

.about-main-title-img1,.about-main-title-img2{
  @include lg{
    width: 350px;
    margin-right: 50px;
  }
  @include md{
    width: 280px;
    margin-right: 30px;
     margin-bottom: -50px;
  }
  @include sm{
    width: 200px;
  }
}

.about-main-title-img1{
  @include md{
    margin-bottom: -50px;
  }
}

.about-main-title-img1{
  @include lg{
    margin-top: 50px;
  }
}

.about-main-subtitle{
  grid-area: sub;
  text-align: right;
  font-size: 15px;
  line-height: 20px;
  @include md{
    font-size: 13px;
  }
  @include sm{
    display: none;
  }
}

.about-main-line{
  position: relative;
  top: 10px; 
  margin-top: 10px;
  right: -180px;
  width: 50px;
  border-bottom: 0.5px solid #FEFEFE;
  @include xl{
    right: -60px;
  }
  @include lg{
    right: -25px;
    border-bottom: 1px solid #FEFEFE;
  }
  @include md{ 
    right: -10px;
  }
  @include sm{
    display: none;
  }
}
</style>
