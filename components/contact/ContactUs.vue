<template>
  <div class="contact">
    <div class="contact-container">
      <div class="contact-container-title">CONTACT US</div>
      <div class="contact-container-desc">
        블랙루비스튜디오<br>
        서울특별시 강남구 학동로 47길 6, 일우빌딩 3층<br>
        <div><a href="mailto:info@blackrubystudio.com">info@blackrubystudio.com</a></div>
      </div>
    <GmapMap class="map"
      v-bind:center="center" 
      v-bind:zoom="16"
      >
      <GmapMarker
        v-for="(item, index) in markers"
        v-bind:key="index"
        v-bind:position="item.position"
        v-bind:clickable="true"
        v-bind:draggable="true"
        @click="center=item.position"
      />
    </GmapMap>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 37.517190, lng: 127.038939 },
      mapTypeId: "terrain",
      markers: [
        { position: { lat: 37.517190, lng: 127.038939 } },
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.map {
  grid-area: map;
  height: 400px;
  width: 445px;
  margin-left: 74px;
}
.contact{
  position: relative;
  background-image: url('../../assets/img/background/background_2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 1000px;
  margin-top: -250px;
}

.contact-container{
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

.contact-container-title{
  grid-area: tit;
  align-self: end;
  justify-self: end;
  font-family: $main-font;
  margin-right: 20px;
  font-size: 70px;
  text-decoration: underline;
  text-underline-position: under;
}

.contact-container-desc{
  grid-area: sub;
  justify-self: end;
  text-align: right;
  margin-top: 20px;
  margin-right: 20px;
  line-height: 20px;
}
</style>
