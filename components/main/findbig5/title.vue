<template>
 <div class="fb5-title">
   <div class="fb5-container">
     <div class="fb5-search">
     <img  class="fb5-search-img" src="../../../assets/img/findbig5/findbig5_search.png" alt="findbig5-search">
     </div>
     <h1 class="fb5-title-1">쉽게</h1>
     <h1 class="fb5-title-2">찾으세요</h1>
     <p class="fb5-desc">
       오늘날 많은 정보들은 결정하고 판단하는 일을 복잡하게 만듭니다<br>
       진흙 속에서 진주를 찾았을 때에는 이미 온몸이 흙 투성이지요<br>
       이제, 정보를 찾는 것에 시간을 낭비하지 마세요<br>
       그것은 저희의 몫입니다
     </p>
      <div class="fb5-postit">
        <div class="fb5-postit-container">
          <h1 class="fb5-postit-title">FindBig5</h1>
          <div class="fb5-postit-content">
            <span>넘쳐나는 정보들</span><br>
            <span>낭비되는 시간들,</span><br><br>
            <span>저희가 도와드리겠습니다</span><br>
            <span  class="fb5-line">쉽게 찾으세요.</span>
          </div>
        </div> 
      </div>

   </div>

 </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/common.scss";

.fb5-title{
 position: relative;
 height: 700px;
}

.fb5-container{
 @extend %container;
 top: 100px;
 grid-template-areas:
 "img tl1"
 "tl2 tl2"
 "des des";
 grid-template-rows: 55% 30% 15%;
 grid-template-columns: 400px 700px;
 height: 500px;
}

.fb5-search{
 grid-area: img;
 padding-left: 100px;
 z-index: 100;
}

.fb5-search-img{
 height: 320px;
 padding-left: 53px;
 margin-top: 20px;
 align-self: end;
}

.fb5-title-1{
 grid-area: tl1;
 font-family: $main-font;
 font-size: 130px;
 align-self: center;
}

.fb5-title-2{
 grid-area: tl2;
 justify-self: center;
 font-family: $main-font;
 font-size: 130px;
 padding-right: 250px;
 margin-bottom: 100px;
}

.fb5-desc{
 grid-area: des;
 padding-left: 180px;
 font-size: 15px;
 line-height: 18px;
}

.fb5-postit{
  @extend %postit;
}

.fb5-postit-container{
  color: white;
}

.fb5-postit-title{
  font-size: 30px;
  padding: 20px 0 0 20px;
}

.fb5-postit-content{
  position: absolute;
  bottom: 50px;
  padding: 0 0 0 20px;
  font-size: 20px;
  line-height: 25px;
}

.fb5-line{
  text-decoration:  underline;
  text-underline-position: under;
}

</style>