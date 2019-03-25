<template>
  <div class="beamme-title">
    <div class="beamme-container">
      <div class="beamme-container-title">
          <h1 class="beamme-font-down">언제</h1>
          <h1 class="beamme-font-down">어디서든</h1>  
          <h1 class="beamme-font-down">빠르게</h1>
      </div>  
      <img  class="beamme-title-img" src="../../../assets/img/beamme/beamme_wave.png" alt="beamme-search">
      <div class="beamme-postit">
        <div class="beamme-postit-container">
          <h1 class="beamme-postit-title">Beam Me</h1>
          <div class="beamme-postit-content">
            <span>클릭 한번으로 만나는</span><br>
            <span>당신의 고사양 PC</span><br>
            <span>컴퓨터 구입한다고 고민하지 말고</span><br>
            <span>BEAMME 하세요</span><br><br>
            <span class="beamme-line">우리집 노트북을 최신컴으로</span>
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

.beamme-title{
  position: relative;
  height: 700px;
}

.beamme-container{
  @extend %container;
  top: 100px;
  height: 500px;
}
.beamme-container-title{
  display: grid;
  grid-template-rows: 20% 20% 20%;
  justify-self: center;
  margin-right: 120px;
  font-size: 100px;
  text-align: right;
  z-index: 100;
}

h1{
  font-family: $main-font;
}

.beamme-font-down{
  padding-top: 30px;
}

.beamme-title-img{
  position: absolute;
  height: 220px;
  top: 150px;
  left: -100px;
  transform: rotate(10deg);
}


.beamme-postit{
  @extend %postit;
}

.beamme-postit-container{
  color: white;
}

.beamme-postit-title{
  font-size: 30px;
  padding: 20px 0 0 20px;
}

.beamme-postit-content{
  width: 350px;
  position: absolute;
  bottom: 50px;
  padding: 0 0 50px 20px;
  font-size: 20px;
  line-height: 25px;
}

.beamme-line{
  text-decoration:  underline;
  text-underline-position: under;
}

</style>