<template>
 <div class="fb5-title">
   <div class="fb5-container">
     <div class="fb5-search">
     <img  class="fb5-search-img" src="../../../assets/img/findbig5/findbig5_search.png" alt="findbig5-search">
     </div>
     <h1 class="fb5-title-1">쉽게</h1>
     <h1 class="fb5-title-2">찾으세요</h1>
     <p class="fb5-desc">
       오늘날 무수히 많은 정보들은 결정하고 판단하는 일을 복잡하게 만듭니다<br>
       진흙 속에서 진주를 찾았을 때에는 이미 온몸이 흙 투성이지요<br>
       이제, 정보를 찾는 것에 시간을 낭비하지 마세요<br>
       그것은 저희의 몫입니다
     </p>
   </div>
<!-- <h1>FB5 TITLE - post</h1>
<div>넘쳐나는 정보들</div>
<div>낭비되는 시간들,</div>
<div>저희가 도와드리겠습니다</div>
<div>쉽게 찾으세요.</div>  -->
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
 position: relative;
 width: 1024px;
 margin: 0 auto;
 top: 200px;
 display: grid;
 grid-template-areas:
 "img tl1"
 "tl2 tl2"
 "des des";
 grid-template-rows: 57% 30% 20%;
 grid-template-columns: 36% 60%;
 height: 500px;
}

.fb5-search{
 grid-area: img;
 padding-left: 100px;
 z-index: 100;
}

.fb5-search-img{
 height: 350px;
 justify-self: center;
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
 font-family: $main-font;
 font-size: 130px;
 padding-left: 128px;
 margin-bottom: 100px;
}

.fb5-desc{
 grid-area: des;
}


</style>