// Activity: About 페이지에 블랙루비 활동을 소개해주는 Study, Class, Weekly의 뼈대가 되는 컴포넌트
// 특징: img url, img alt, title, desc를 props에 넘겨줌

<template>
  <div class="about-activity">
    <div class="about-activity-container">
      <img class="about-activity-img" :src="src" :alt="alt">
      <div class="about-activity-content">
        <div class="about-activity-title">
          <img class="about-activity-title-img"  :src="title_src1" :alt="title_alt1">
          <img class="about-activity-title-img"  :src="title_src2" :alt="title_alt2">
        </div>
        <div class="about-activity-desc" v-html="desc"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["title_src1", "title_src2", "title_alt1", "title_alt2", "desc", "src", "alt"]
}
</script>

<style lang="scss" scoped>
.about-activity{
  height: $basic-height;
  @include lg{
    height: 650px;
  }
  @include md{
    height: 500px;
  }
  @include sm{
    height: 250px;
  }
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
  @include xl{
    left: 0px;
  }
  @include lg{
    width: 760px;
  }
  @include md{
    width: 550px;
    left: -10px;
  }
  @include sm{
    width: 280px;
    height: 200px;
    grid-template-columns: 40% 60%;
  }
}

.about-activity-img{  
  grid-area: img;
  width: 100%;
  height: 100%;
  opacity: .7;
}

.about-activity-content{
  grid-area: con;
}

.about-activity-title{
  position: relative;
  left: -130px;
  @include md{
    left: -110px;
  }
  @include sm{
    // display: none;
    left: -60px;
  }
}

.about-activity-title-img{
  height: 100px;
  @include md{
    height: 80px;
  }
  @include sm{
    height: 40px;
  }
}

.about-activity-desc{
  @extend %about-desc;
  left: -130px;
  padding: 20px 0 20px 10px;
  @include md{
    width: 370px;
    left: -110px;
  }
  @include sm{
    // display: none;
    width: 180px;
    left: 0px;
    line-height: 7px;
    padding: 10px 0 10px 5px;
  }
}
</style>
