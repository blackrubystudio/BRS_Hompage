<template>
<div class="beamme-introduce">
  <div class="beamme-introduce-container">
    <img class="beamme-introduce-logo" src="../../../assets/img/beamme/beamme_logo.png" alt="빔미 로고">
    <div class="beamme-introduce-desc">
        <p>
          <span class="beamme-introduce-1">클라우드 PC서비스를 통해</span><br>
          <span class="beamme-introduce-2">다양한 디바이스를 지원하고</span><br>
          <span class="beamme-introduce-3">게임 뿐 아니라 고사양 PC가 필요한</span><br>
          <span class="beamme-introduce-4">3D, 영상, 음악 작업 등에도</span><br>
          <span class="beamme-introduce-5">사용할 수 있습니다.</span>
        </p>
    </div>
    <img class="beamme-introduce-img" src="../../../assets/img/beamme/beamme_homepage.png" alt="빔미 홈페이지">
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.beamme-introduce{
  position: relative;
  height: 800px;
}

.beamme-introduce-container{
  @extend %container;
  grid-template-areas:
  "log hom"
  "des hom";
  grid-template-rows: 45% 55%;
  grid-template-columns: 35% 55%;
  height: 600px;
  top: 100px;
}

.beamme-introduce-logo{
  grid-area: log;
  margin-top: 120px;
  margin-left: -50px;
  height: 140px;
  z-index: 100;
  box-shadow: 0 15px 6px -6px rgba(0, 0, 0, 0.2);
}

.beamme-introduce-desc{
  grid-area: des;
  text-align: right;
  align-self: start;
  justify-self: center;
  margin-right: -50px;
  line-height: 25px;
  font-size: 15px;
}

.beamme-introduce-img{
  grid-area: hom;
  height: 80%;
  box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.2);
}

.beamme-introduce-2{
  padding-right: 10px;
}

.beamme-introduce-2{
  padding-right: 20px;
}

.beamme-introduce-3{
  padding-right: 30px;
}

.beamme-introduce-4{
  padding-right: 40px;
}

.beamme-introduce-5{
  padding-right: 50px;
}
</style>
