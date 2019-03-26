<template>
  <div class="postit">
    <div class="postit-container">
      <h1 class="postit-title">{{title}}</h1>
      <p class="postit-content" v-html="desc"></p>
    </div> 
  </div>
</template>

<script>
export default {
    props: ['title', 'desc']
}
</script>

<style lang="scss" scoped>
.postit{
  @extend %postit;
}

.postit-container{
  color: white;
}

.postit-title{
  position: absolute;
  top: 20px;
  padding-left: 40px;
  font-size: 30px;
  z-index: 200;
}

.postit-content{
  position: absolute;
  bottom: 50px;
  padding-left: 40px;
  font-size: 20px;
  line-height: 25px;
  z-index: 200;
}

.line{
  text-decoration:  underline;
  text-underline-position: under;
}

.beamme-introduce{
  position: relative;
  height: $basic-height + 100px;
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
  @extend %padding-right-1;
}

.beamme-introduce-2{
  @extend %padding-right-2;
}

.beamme-introduce-3{
  @extend %padding-right-3;
}

.beamme-introduce-4{
  @extend %padding-right-4;
}

.beamme-introduce-5{
  @extend %padding-right-5;
}
</style>
