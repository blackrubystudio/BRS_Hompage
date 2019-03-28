<template>
  <div class="tech">
    <div class="tech-container">
      <div class="tech-title">Technology</div>
        <!-- Container1 -->
        <div class="tech-container-1">
          <img id="tech-img-1" class="tech-img-1" :src="img1" :alt="alt1">
          <div id="tech-text-1" class="tech-content-1">
            <h1 class="tech-title-1-1">{{title11}}</h1>
            <h1 class="tech-title-1-2">{{title12}}</h1>
            <div class="tech-desc-1"><p v-html="desc1"></p></div>
          </div>
        </div>
        <div id="tech-line-1" class="tech-line-1"></div>

        <!-- Container2 -->
        <div class="tech-container-2">
          <div id="tech-text-2" class="tech-content-2">
            <h1 class="tech-title-2-1">{{title21}}</h1> 
            <h1 class="tech-title-2-2">{{title22}}</h1>
            <div class="tech-desc-2"><p v-html="desc2"></p></div>
          </div>
          <img id="tech-img-2" class="tech-img-2" :src="img2" :alt="alt2">
        </div>
        <div class="tech-line-2"></div>

        <!-- Container3 -->
        <div class="tech-container-3">
          <img id="tech-img-3" class="tech-img-3" :src="img3" :alt="alt3">
          <div id="tech-text-3" class="tech-content-3">
            <h1 class="tech-title-3-1">{{title31}}</h1>
            <h1 class="tech-title-3-2">{{title32}}</h1>
            <div class="tech-desc-3"><p v-html="desc3"></p></div>
          </div>
        </div>
        <div class="tech-line-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title11', 'title12', 'title21', 'title22', 'title31', 'title32', 
          'img1', 'img2', 'img3', 'alt1', 'alt2', 'alt3', 'desc1', 'desc2', 'desc3'],

  mounted(){
    window.addEventListener("scroll",  this.scrollDown);
  },

  methods: {
    scrollDown(){
        var tech1 = document.getElementById("tech-img-1")
        var tech2 = document.getElementById("tech-img-2")
        var tech3 = document.getElementById("tech-img-3")
        var text1 = document.getElementById("tech-text-1")
        var text2 = document.getElementById("tech-text-2")
        var text3 = document.getElementById("tech-text-3")
        // var line1 = document.getElementById("tech-line-1")
        // console.log(window)
        var y = window.scrollY;
        if(y < 1650){
          tech1.className = "tech-img-1"
          tech2.className = "tech-img-2"
          tech3.className = "tech-img-3"
          text1.className = "tech-content-1"
          text2.className = "tech-content-2"
          text3.className = "tech-content-3"
          // line1.className = "tech-content-1"
        } else if(y < 2000){
          tech1.className = "tech-img-1 animation-left-to-right"
          text1.className = "tech-content-1 animation-show-text"
          // line1.className = "tech-content-1 animation-show-line"
        } else if(y <2350){
          tech2.className = "tech-img-2 animation-right-to-left"
          text2.className = "tech-content-2 animation-show-text"         
        } else{
          tech3.className = "tech-img-3 animation-left-to-right"
          text3.className = "tech-content-3 animation-show-text"
        }
    },

  }
}
</script>

<style lang="scss" scoped>
.animation-left-to-right{
  animation-name: left-to-right;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.animation-right-to-left{
  animation-name: right-to-left;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.animation-show-text{
  animation-name: show-text;
  animation-duration: 3s;
  animation-fill-mode: forwards
}

@keyframes left-to-right{
  0%{
    left: 0px;
  }
  100% {
    left: 670px;
  }
}


@keyframes right-to-left{
  0%{
    left: 670px;
  }
  100% {
    left: 0px;
  }
}

@keyframes show-text{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.tech{
  height: $basic-height + 500px;
}

.tech-container{
  @extend %container;
  grid-template-rows: 300px 300px 300px;
  grid-gap: 50px;
  top: 50px;
  height: 1000px;
}

.tech-title{
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 1024px;
  text-align: right;
  font-size: 30px;
  font-family: $font-tech;
}

.tech-img-1{
  position: absolute;
  top: -50px;
  left: 0px;
  height: 350px;

}

.tech-content-1{
  align-self: center;
  display: grid;
  grid-template-areas:
  "tt11 tt12"
  "des1 des1";
  grid-template-columns: 70% 30%;
  grid-template-rows: 150px 150px;
  z-index: 100;

}

.tech-title-1-1{
  grid-area: tt11;
  justify-self: end;
  align-self: center;
  padding-right: 20px;
  font-family: $main-font;
  font-size: 90px;
  letter-spacing: -5px;
}

.tech-title-1-2{
  grid-area: tt12;
  font-family: $main-font;
  align-self: end;
  font-size: 90px;
  letter-spacing: -5px;
}

.tech-desc-1{
  grid-area: des1;
  font-size: 14px;
  padding-top: 15px;
  padding-right:85px;
  justify-self: center;
  text-align: right;
  margin-right:80px;
  width: 600px;
  line-height: 20px;
}

.tech-line-1{
  @extend %tech-line;
  position: absolute;
  width: 540px;
  height: 140px;
  left: 200px;
  border-image: linear-gradient(to right, white 140px, black 140px 540px);
  border-image-slice: 1;
}

.tech-container-2{
  position: relative;
  display: grid;
}

.tech-img-2{
  position: absolute;
  top: -50px;
  left: 660px;
  height: 350px;
}

.tech-content-2{
  align-self: center;
  display: grid;
  grid-template-areas:
  "tt21 tt22"
  "des2 des2";
  grid-template-columns: 45% 55%;
  grid-template-rows: 150px 150px;
  z-index: 100;
}

.tech-title-2-1{
  grid-area: tt21;
  justify-self: end;
  font-family: $main-font;
  font-size: 90px;
  letter-spacing: -5px;
  align-self: center;
}

.tech-title-2-2{
  grid-area: tt22;
  font-family: $main-font;
  font-size: 90px;
  letter-spacing: -5px;
}

.tech-line-2{
  @extend %tech-line;
  position: absolute;
  width: 320px;
  height: 460px;
  left: 470px;
  border-image: linear-gradient(to right, black 0px 200px, white 200px 320px);
  border-image-slice: 1;
}

.tech-desc-2{
  grid-area: des2;
  justify-self: end;
  margin-top: -10px;
  margin-right: 80px;
  width: 600px;
  font-size: 14px;
  line-height: 20px;
}

.tech-container-3{
  position: relative;
  display: grid;
}

.tech-img-3{
  position: absolute;
  top: -50px;
  left: 0px;
  height: 350px;
}

.tech-content-3{
  align-self: center;
  display: grid;
  grid-template-areas:
  "tt31 tt32"
  "des3 b1";
  grid-template-columns: 75% 25%;
  grid-template-rows: 150px 150px;
  z-index: 100;
}

.tech-title-3-1{
  grid-area: tt31;
  justify-self: end;
  align-self: center;
  font-family: $main-font;
  font-size: 90px;
  letter-spacing: -5px;
}

.tech-title-3-2{
  grid-area: tt32;
  align-self: end;
  font-family: $main-font;
  font-size: 90px;
  letter-spacing: -5px;
}

.tech-desc-3{
  grid-area: des3;
  justify-self: end;
  text-align: right;
  margin-right: 80px;
  font-size: 14px;
  line-height: 20px;
}

.tech-line-3{
  @extend %tech-line;
  position: absolute;
  width: 555px;
  height: 835px;
  left: 200px;
  border-image: linear-gradient(to right, white 140px, black 140px 555px);
  border-image-slice: 1;
}

</style>
