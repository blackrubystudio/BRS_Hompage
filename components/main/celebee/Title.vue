<template>
  <div class="celebee-title">
    <div class="celebee-container">
      <div class="celebee-container-title">
        <div class="celebee-container-title-1">
          <h1 class="celebee-font-down">매</h1>
          <h1>일</h1>
          <h1 class="celebee-font-down">전해받는</h1>  
        </div>
        <div class="celebee-container-title-2">
          <h1>내</h1>
          <h1 class="celebee-font-down">아이돌 소식</h1>
        </div>
        
      </div>  
      <img  class="celebee-title-img" src="../../../assets/img/celebee/celebee_mail.png" alt="celebee-search">
      <div class="celebee-postit">
        <div class="celebee-postit-container">
          <h1 class="celebee-postit-title">Celebee</h1>
          <div class="celebee-postit-content">
            <span>매일 전해받는</span><br>
            <span>내 아이돌 소식</span><br>
            <span>From. 셀레비</span><br><br>
            <span>이제 좋아하는 아이돌을</span><br>
            <span class="celebee-line">빠짐없이 만나보세요</span>
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

.celebee-title{
 position: relative;
 height: 700px;
}

.celebee-container{
 @extend %container;
 top: 100px;
 height: 500px;
}
.celebee-container-title{
  display: grid;
  grid-template-rows: 30% 50%;
  font-size: 100px;
  margin-left: 100px;
}

h1{
font-family: $main-font;
}

.celebee-font-down{
  padding-top: 30px;
}

.celebee-container-title-1{
  display: grid;
  grid-template-columns: 10% 10% 80%;
}

.celebee-container-title-2{
  display: grid;
  grid-template-columns: 10% 90%;
  z-index: 100;
  // margin-left: 100px;
}

.celebee-title-img{
  position: absolute;
 height: 320px;
 top: 100px;
 left: 150px;
 transform: rotate(10deg);
 box-shadow: 0 20px 6px -6px rgba(0, 0, 0, 0.2);
}


.celebee-postit{
  @extend %postit;
}

.celebee-postit-container{
  color: white;
}

.celebee-postit-title{
  font-size: 30px;
  padding: 20px 0 0 20px;
}

.celebee-postit-content{
  width: 350px;
  text-align: right;
  position: absolute;
  bottom: 50px;
  padding: 0 20px 0 0px;
  font-size: 20px;
  line-height: 25px;
}

.celebee-line{
  text-decoration:  underline;
  text-underline-position: under;
}

</style>