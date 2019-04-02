// Activity: About 페이지에 블랙루비 활동을 소개해주는 Study, Class, Weekly의 뼈대가 되는 컴포넌트
// 특징: img url, img alt, title, desc를 props에 넘겨줌

<template>
  <div class="about-activity">
    <div class="about-activity-container">
      <img class="about-activity-img" :src="src" :alt="alt">
      <div class="about-activity-content">
        <div class="about-activity-title" v-html="title"></div>
        <div class="about-activity-desc" v-html="desc"></div>
      </div>
    </div>
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
