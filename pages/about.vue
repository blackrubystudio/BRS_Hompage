// About 페이지
// Header / Main / Growth / Study / Python / Weekly / Footer로 구성

<template>
  <div id="about">
    <!-- 1. Header -->
    <common-header :img=header.img :color=header.color></common-header>
    <!-- 2. Main -->
    <about-main></about-main> 
    <!-- 3. Growth -->
    <about-growth></about-growth>
    <!-- 4. Activity (Study, Python-Class, Weekly-Meeting) -->
    <common-activity class="about-study" :title=study.title :desc=study.desc :src=study.src :alt=study.alt></common-activity>
    <common-activity class="about-python" :title=python.title :desc=python.desc :src=python.src :alt=python.alt></common-activity>
    <common-activity class="about-weekly" :title=weekly.title :desc=weekly.desc :src=weekly.src :alt=weekly.alt></common-activity>

    <!-- <common-menumobile :color="color"></common-menumobile> -->
    <!-- 5. Footer -->
    <common-footer></common-footer>
  </div>
</template>

<script>
import AboutMain from "@/components/about/Main.vue";
import AboutGrowth from "@/components/about/Growth.vue";


export default {
  components: {
    AboutMain, 
    AboutGrowth,
  },
  
  data(){
    return{
      // Header white
      header:{
        img: require('@/assets/img/common/logo_name_white.svg'),
        color: "color:#FEFEFE"
      },
      color: "color: #212121",
      // Activity component content
      study:{
        title: "<span class='about-activity-white'>ST</span>UDY",
        desc:"<p><span class='about-activity-desc'>특기가 각기 다른 팀원들이</span><br>\
                 <span class='about-activity-desc-1'>자신이 자신있는 분야에 대해 강의를 진행합니다</span><br>\
                 <span class='about-activity-desc-2'>개발, 디자인, 스타트업, 경영, 교양 등 다양한 주제로</span><br>\
                 <span class='about-activity-desc-3'>강의를 진행하며, 팀원들의 융합적 사고를 도모하고 있습니다</span><br><br>\
                 <span class='about-activity-desc'>2017년 2월부터 매주 1회 진행하고 있습니다</span><br>\
              </p>",
        src: require("@/assets/img/about/study.jpg"),
        alt: "블랙루비 스터디 사진"
      },

      python:{
        title: "PYTH<span class='about-activity-white'>ON</span>\
                CLA<span class='about-activity-white'>SS</span>",
        desc: "<p><span class='about-activity-desc'>블랙루비 주관의 '재미그래밍'프로그램은</span><br>\
                  <span class='about-activity-desc-1'>개발에 관심있는 모든이와 함께 진행하는 열린 교육 프로그램으로</span><br>\
                  <span class='about-activity-desc-2'>기초 프로그패밍 공부를 통해 개발 전반에 대한 이해를 돕는</span><br>\
                  <span class='about-activity-desc-3'>무료 프로그램입니다</span><br><br>\
                  <span class='about-activity-desc'>재미그래밍 / <a href='https://fungramming.github.io/class-list/' target='_blank'>https://fungramming.github.io/class-list/</a></span><br>\
                </p>",
        src: require("@/assets/img/about/class.jpg"),
        alt: "블랙루비 파이썬 클래스 사진"
      },

      weekly:{
        title: "<span class='about-activity-white'>WE</span>EKLY<br>\
                <span class='about-activity-white'>ME</span>ETING",
        desc: "<p><span class='about-activity-desc'>회사의 상황을 전체 공유하고자 하는 목적으로</span><br>\
                  <span class='about-activity-desc-1'>회사 방향성에 대한 이해와 자신이 맡고 있지 않는 프로젝트에 대한</span><br>\
                  <span class='about-activity-desc-2'>이해를 높이기 위해 진행하고 있습니다</span><br><br>\
                  <span class='about-activity-desc'>매주 주간동향이라는 이름으로 팀별 진행상황을 발표하고</span><br>\
                  <span class='about-activity-desc-1'>질의 응답 및 피드백 시간을 가지고 있습니다</span><br>\
                </p>",
        src: require("@/assets/img/about/weekly.jpg"),
        alt: "블랙루비 주간동향 사진"
      }
    }
  }
}
</script>

<style lang="scss">
.about-activity-white{
  @extend %font-main;
  color: #FEFEFE;
  @include md{
    font-size: 80px;
  }  
    @include sm{
    font-size: 40px;
  }  
}

.about-activity-desc{
  @include md{
    font-size: 12px;
  }
  @include sm{
    font-size: 6px;
  }
}

.about-activity-desc-1{
  @extend %padding-left-1;
  @include md{
    font-size: 12px;
  }
    @include sm{
    font-size: 6px;
    padding-left: 3px;
  }
}

.about-activity-desc-2{
  @extend %padding-left-2;
    @include md{
    font-size: 12px;
  }
    @include sm{
    font-size: 6px;
    padding-left: 6px;
  }
}

.about-activity-desc-3{
  @extend %padding-left-3;
    @include md{
    font-size: 12px;
  }
    @include sm{
    font-size: 6px;
    padding-left: 9px;
  }
}

.about-python{
  .about-activity-container{
    grid-template-areas:
    "bl1 img"
    "con img"
    "bl2 img";
    grid-template-columns: 55% 45%;
    grid-template-rows: 25% 35% 40%;
    left: 100px;
    margin-top: -50px;
    @include xl{
      left: 0px;
    }
    @include md{
      left: 10px;
    }
  }

  .about-activity-content{
    text-align: right;
  }

  .about-activity-title{
    left: 130px;
    @include md{
      top: -30px;
      left: 100px;
    }
    @include sm{
      left: 50px;
    }
  }

  .about-activity-desc{
    left: 130px;
    padding: 20px 10px 20px 0;
    @include md{
      top: -30px;
      left: 70px;
    }
    @include sm{
      left: -40px;
      padding: 10px 0px 10px 0;
      width: 190px;
    }
  }

  .about-activity-desc-1{
    @extend %padding-right-1;
    @include sm{
      padding-right: 3px;
    }
  }

  .about-activity-desc-2{
    @extend %padding-right-2;
    @include sm{
      padding-right: 6px;
    }
  }

  .about-activity-desc-3{
    @extend %padding-right-3;
      @include sm{
      padding-right: 9px;
    }
  }

  a{
    color: #212121;
  }

}

.about-weekly {
  margin: -50px 0 50px 0;
  @include md{
    margin-top: -50px;
  }
  @include sm{
    
    margin-bottom: 0px;
  }

  .about-activity-content {
    margin-left: -40px;
    @include sm{
      margin-left: 0;
    }
  } 
}

p{  
  font-size: 14px;
}

</style>


