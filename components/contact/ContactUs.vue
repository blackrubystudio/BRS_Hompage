<template>
  <div class="contactus">
    <!-- Contactus Container -->
   
    <div class="contactus-container">
      <!-- Contactus Title 시작 -->
      <div class="contactus-container-title">CONTACT US</div>
      <!-- // Contactus Title 끝 -->
      <!-- Contactus Description 시작 -->
      <div class="contactus-container-desc">
        블랙루비스튜디오<br>
        서울특별시 강남구 학동로 47길 6, 일우빌딩 3층<br>
        <div><a href="mailto:info@blackrubystudio.com">info@blackrubystudio.com</a></div>
      </div>
      <!-- // Contactus Description 끝 -->
      <!-- Google 지도 시작 -->
      <GmapMap class="contacus-container-map" v-bind:center="center" v-bind:zoom="16">
        <GmapMarker
          v-bind:position="marker.position"
          v-bind:clickable="true"
          v-bind:draggable="true"/>
      </GmapMap>
      <!-- // Google 지도 끝 -->
       <div class="contactus-line"></div>
       <div class="contactus-background"></div>
    </div>
    <!-- // Contactus Container 끝 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 37.517190, lng: 127.038939 },
      mapTypeId: "terrain",
      marker: { position: { lat: 37.517190, lng: 127.038939 } }
    };
  }
};
</script>


<style lang="scss" scoped>

.contactus{
  @extend %background;
  position: relative;
  background-image: url('../../assets/img/background/background_2.png');
  height: $basic-height + 250px;
  margin-top: -320px;

}

.contactus-container{
  @extend %container;
  grid-template-areas:
  "tit map"
  "sub map";
  grid-template-columns:  500px 500px;
  grid-template-rows: 30% 70%;
  top: 450px;
  color: white;
  height: 500px;
  
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
}

.contactus-container-desc{
  grid-area: sub;
  justify-self: end;
  text-align: right;
  margin-top: 20px;
  margin-right: 40px;
  line-height: 20px;
  z-index: 100;
}

.contacus-container-map {
  grid-area: map;
  height: 400px;
  width: 445px;
  margin-left: 74px;
  z-index: 100;
}

.contactus-line{
  position: absolute;
  top: -220px;
  width: 10px;
  height: 380px;
  border-left: 2px solid #FEFEFE;
}

.contactus-background{
  // @extend %background;
  position: absolute;
  background: url('../../assets/img/background/background_3.png') transparent center center no-repeat;
  top: 110px;
  left: 295px;
  width: 280px;
  height: 180px;
}
a{
  color: #FEFEFE;
}
</style>
