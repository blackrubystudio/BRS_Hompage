// ContacUs: Contact 페이지의 하단 부분 (주소 및 지도 표시)
// 특징: 구글맵을 표시할 때 플러그인을 사용 (googleMap.js)

<template>
  <div class="contactus">  
    <div class="contactus-container">
      <div class="contactus-container-title">CONTACT US</div>
      <div class="contactus-container-desc">
        블랙루비스튜디오<br>
        서울특별시 강남구 학동로 47길 6, 일우빌딩 3층<br>
        <div><a href="mailto:info@blackrubystudio.com">info@blackrubystudio.com</a></div>
      </div>
      <GmapMap class="contacus-container-map" v-bind:center="center" v-bind:zoom="16">
        <GmapMarker
          v-bind:position="marker.position"
          v-bind:clickable="true"
          v-bind:draggable="true"/>
      </GmapMap>
       <!-- <div class="contactus-line"></div> -->
       <div class="contactus-background"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 37.517190, lng: 127.038939 },
      mapTypeId: "terrain",
      marker: { position: { lat: 37.517190, lng: 127.038939 } },
      optimized: false,
    };
  },

  beforeMount(){
    this.$router.push('/contact')
  }
};
</script>


<style lang="scss" scoped>

.contactus{
  @extend %background;
  position: relative;
  background-image: url('../../assets/img/background/background_2.png');
  height:100vh;
  @include lg{
    // height: 800px;
    // margin-top: -430px;
  }
  @include md{
    // height: 700px;
  }
}

.contactus-container{
  @extend %container;
  grid-template-areas:
  "tit map"
  "sub map";
  grid-template-columns:  500px 500px;
  grid-template-rows: 30% 70%;
  top: 30vh;
  color: white;
  height: 500px; 
  @include xl{
    width: 1000px;
    grid-template-columns: 450px 450px;
  }
  @include lg{
    grid-template-columns: 400px 320px;
    width: 760px;
  }
  @include md{
    grid-template-columns: 280px 250px;
    width: 550px;
    height: 300px;
  }
  @include sm{
    grid-template-columns: 150px 150px;
    width: 300px;
  }
}

.contactus-container-title{
  grid-area: tit;
  align-self: end;
  justify-self: start;
  font-family: $main-font;
  font-size: 70px;
  text-decoration: underline;
  text-underline-position: under;
  z-index: 100;
  @include xl{
    font-size: 60px;
    justify-self: end;
  }
  @include lg{
    font-size: 50px;
    justify-self: start;
    padding-left: 40px;
  }
  @include md{
    font-size: 35px;
    padding-left: 30px;
  }
  @include sm{
    font-size: 20px;
    padding-left: 0;
  }
}

.contactus-container-desc{
  grid-area: sub;
  justify-self: end;
  text-align: right;
  margin-top: 20px;
  margin-right: 40px;
  line-height: 20px;
  z-index: 100;
  @include md{
    font-size: 12px;
    margin-right: 20px;
    line-height: 17px;
  }
  @include sm{
    font-size: 9px;
    line-height: 12px;
  }
}

.contacus-container-map {
  grid-area: map;
  height: 400px;
  width: 445px;
  margin-left: 74px;
  z-index: 100;
  @include lg{
    width: 320px;
    height: 280px;
    margin-left: 0;
  }
  @include md{
    width: 260px;
    height: 200px;
  }
  @include sm{
    width: 150px;
    height: 100px;
    margin-top: 60px;

  }
}

.contactus-line{
  position: absolute;
  top: -190px;
  width: 10px;
  height: 350px;
  border-left: 0.5px solid #FEFEFE;
  @include xl{
    top: -200px;
    height: 360px;
    left: 55px;
  }
  @include lg{
    left: 40px;
    height: 350px;
    top: -195px;
  }
  @include md{
    left: 30px;
    height: 290px;
  }
}

.contactus-background{
  position: absolute;
  background: url('../../assets/img/background/background_3.png') transparent center center no-repeat;
  top: 120px;
  left: 295px;
  width: 280px;
  height: 180px;
  @include lg{
    top: 100px;
    left: 250px;
    width: 200px;
    height: 140px;
  }
  @include md{
    top: 50px;
    left: 200px;
    height: 120px;
  }
  @include sm{
    top: 80px;
    width: 80px;
    left: 100px;
    height: 60px;
  }
}

a{
  color: #FEFEFE;
}
</style>