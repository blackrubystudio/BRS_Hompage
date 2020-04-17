// Main: Index 페이지의 메인페이지

<template>
  <div class="main">
    <div class="main-container">
      <div class="main-title-1"><img class="main-title-img" src="@/assets/img/fonts_img/main/main1.png" alt="BlackRubyStudio Main1"></div>
      <div class="main-subtitle"><h3>복잡한<br>삶속의<br>가치</h3></div>
      <div class="main-title-2"><img class="main-title-img" src="@/assets/img/fonts_img/main/main2.png" alt="BlackRubyStudio Main2"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.main{
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

.main-container{
  @extend %container;
  grid-template-areas:
  "t1 t1"
  "st t2";
  top: 100px;
  grid-template-columns: 400px 600px;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  height: 600px;

  @include xl{
    width: 1000px;
    grid-template-columns: 380px 620px;
    -ms-grid-columns: 380px 0 620px;
  }
  @include lg{
    top: 0px;
    width: 760px;
     grid-template-columns: 340px 420px;
    -ms-grid-columns: 340px 0 420px;
  }
  @include md{
  //   top: 0;
    width: 550px;
    grid-template-columns: 220px 330px;
    -ms-grid-columns: 220px 0 330px;
  }
  @include sm{
    top: -100px;
    width: 300px;
    grid-template-columns: 40% 60%;
    -ms-grid-columns: 40% 0 60%;
  }
}

.main-title-1{
  grid-area: t1;
  justify-self: center;
  align-self: end;
  padding-right: 260px;
  
  @include lg{
    padding-right: 160px;
  }
  @include md{
    padding-right: 130px;
  }
  @include sm{
    padding-right: 70px;
  }
}

.main-title-2{
  grid-area: t2;
    // justify-self: center;
  // align-self: end;
  // padding-right: 260px;
  
  @include lg{
    padding-right: 50px;
  }
  @include md{
    padding-right: 130px;
  }
  @include sm{
    padding-right: 70px;
  }
}

.main-title-img{
  height: 100px;
    @include md{
    height: 80px;
  }
  @include sm{
    height: 50px;
  }
}

.main-title-img-2{

}

.main-subtitle{
  grid-area: st;
  justify-self: end;
  padding-right: 10px;
  text-align: right;
  font-size: 15px;
  line-height: 20px;
  @include lg{
    // margin-right: -50px;
  }
  @include sm{
    font-size: 10px;
    line-height: 12px;
  }
}

</style>
