<template>
  <div class="about-activity">
    <!-- Activity Container 시작 -->
    <div class="about-activity-container">
      <!-- Activity Img 시작 -->
      <img class="about-activity-img" :src="src" :alt="alt">
      <!-- // Activity Img 끝 -->
      <!-- Activity Conent 시작 -->
      <div class="about-activity-content">
        <div class="about-activity-title" v-html="title"></div>
        <div class="about-activity-desc" v-html="desc"></div>
      </div>
      <!-- // Activity Content 끝 -->
    </div>
    <!-- // Activity Container 끝 -->
  </div>
</template>

<script>
export default {
  props:["title", "desc", "src", "alt"]
}
</script>

<style lang="scss" scoped>
.about-activity{
  height: $basic-height;
}

.about-activity-container{
  @extend %container;
  grid-template-areas:
  "img bl1"
  "img con"
  "img bl2";
  grid-template-columns: 45% 55%;
  grid-template-rows: 25% 35% 40%;
  left: -100px;
}

.about-activity-img{  
  grid-area: img;
  width: 100%;
  height: 100%;
}

.about-activity-content{
  grid-area: con;
}

.about-activity-title{
  @extend %font-main;
  position: relative;
  left: -130px;
}

.about-activity-white{
  @extend %font-main;
  color: #FEFEFE;  
}

.about-activity-desc{
  @extend %about-desc;
  left: -130px;
  padding: 20px 0 20px 10px;
}
</style>
