// About 페이지
// Header / Main / Growth / Study / Python / Weekly / Footer로 구성

<template>
  <div id="about">
    <div>
      <!-- 1. Header -->
      <common-header :img=header.img :color=header.color></common-header>
      <!-- 2. Main -->
      <about-main></about-main> 
      <!-- 3. Growth -->
      <about-growth></about-growth>
      <!-- 4. Activity (Study, Python-Class, Weekly-Meeting) -->
      <common-activity 
        class="about-study" 
        :title_src1= study.title_src1
        :title_alt1= study.title_alt1
        :desc=study.desc 
        :src=study.src 
        :alt=study.alt>
      </common-activity>
      <common-activity-reverse 
        class="about-python" 
        :title_src1= python.title_src1
        :title_alt1= python.title_alt1
        :title_src2= python.title_src2
        :title_alt2= python.title_alt2
        :desc=python.desc 
        :src=python.src 
        :alt=python.alt>
      </common-activity-reverse>
      <common-activity 
        class="about-weekly" 
        :title_src1= weekly.title_src1
        :title_alt1= weekly.title_alt1
        :title_src2= weekly.title_src2
        :title_alt2= weekly.title_alt2
        :title=weekly.title 
        :desc=weekly.desc 
        :src=weekly.src 
        :alt=weekly.alt>
      </common-activity>
      <common-activity
        class="about-study-mb" 
        :title_src1= study.title_src1
        :title_alt1= study.title_alt1
        :desc=study.desc_mb 
        :src=study.src 
        :alt=study.alt>
      </common-activity>
      <common-activity 
        class="about-python-mb" 
        :title_src1= python.title_src1
        :title_alt1= python.title_alt1
        :title_src2= python.title_src2
        :title_alt2= python.title_alt2
        :desc=python.desc_mb 
        :src=python.src 
        :alt=python.alt>
      </common-activity>
      <common-activity 
        class="about-weekly-mb" 
        :title_src1= weekly.title_src1
        :title_alt1= weekly.title_alt1
        :title_src2= weekly.title_src2
        :title_alt2= weekly.title_alt2 
        :desc=weekly.desc_mb 
        :src=weekly.src 
        :alt=weekly.alt>
      </common-activity>

        <!-- 4.5 Scroll Up button -->
      <div class="about-scrollup">
        <img class="about-scrollup-button" src="@/assets/img/common/up_black.png" alt="스크롤 상단 버튼" @click="scrollUp()">
      </div>

      <!-- 5. Footer -->
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
import AboutMain from "@/components/about/Main.vue";
import AboutGrowth from "@/components/about/Growth.vue";


export default {
  mounted(){
    this.$router.push('/about')
  },

  components: {
    AboutMain, 
    AboutGrowth,
  },

  methods:{
    scrollUp(){
      document.getElementById("about").scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },

  data(){
    return{
      // Header white
      header:{
        img: require('@/assets/img/common/logo_name_white.svg'),
        color: "color:#FEFEFE"
      },
      // color: "color: #212121",
      // Activity component content
      study:{
        title_src1: require('@/assets/img/fonts_img/about/study.png'),
        title_alt1: 'BlackRubyStudio About Study',
        desc:"<p><span class='about-activity-desc'>특기가 각기 다른 팀원들이</span><br>\
                 <span class='about-activity-desc-1'>자신이 자신있는 분야에 대해 강의를 진행합니다</span><br>\
                 <span class='about-activity-desc-2'>개발, 디자인, 스타트업, 경영, 교양 등 다양한 주제로</span><br>\
                 <span class='about-activity-desc-3'>강의를 진행하며, 팀원들의 융합적 사고를 도모하고 있습니다</span><br><br>\
                 <span class='about-activity-desc'>2017년 2월부터 매주 1회 진행하고 있습니다</span><br>\
              </p>",
        desc_mb:"<p><span class='about-activity-desc'>특기가 각기 다른 팀원들이 자신이 자신있는</span><br><br>\
                 <span class='about-activity-desc-1'> 분야에 대해 강의를 진행합니다</span><br><br>\
                 <span class='about-activity-desc-2'>개발, 디자인, 스타트업, 경영, 교양 등 다양한 </span><br><br>\
                 <span class='about-activity-desc-3'>주제로 강의를 진행하며, 팀원들의 융합적 사고</span><br><br>\
                 <span class='about-activity-desc-4'>를 도모하고 있습니다</span><br><br><br>\
                 <span class='about-activity-desc'>2017년 2월부터 매주 1회 진행하고 있습니다</span><br>\
              </p>",
        src: require("@/assets/img/about/study.jpg"),
        alt: "블랙루비 스터디 사진"
      },

      python:{
        title_src1: require('@/assets/img/fonts_img/about/python.png'),
        title_alt1: 'BlackRubyStudio About Python',
        title_src2: require('@/assets/img/fonts_img/about/class.png'),
        title_alt2: 'BlackRubyStudio About Class',
        desc: "<p><span class='about-activity-desc-1'>블랙루비 주관의 '재미그래밍'프로그램은</span><br>\
                  <span class='about-activity-desc-2'>개발에 관심있는 모든이와 함께 진행하는 열린 교육 프로그램으로</span><br>\
                  <span class='about-activity-desc-3'>기초 프로그패밍 공부를 통해 개발 전반에 대한 이해를 돕는</span><br>\
                  <span class='about-activity-desc-4'>무료 프로그램입니다</span><br><br>\
                </p>",
        desc_mb: "<p><span class='about-activity-desc'>블랙루비 주관의 '재미그래밍'프로그램은</span><br><br>\
                  <span class='about-activity-desc-1'>개발에 관심있는 모든이와 함께 진행하는 </span><br><br>\
                  <span class='about-activity-desc-2'>열린 교육 프로그램으로 기초 프로그패밍 공부를 </span><br><br>\
                  <span class='about-activity-desc-3'>통해 개발 전반에 대한 이해를 돕는</span><br><br>\
                  <span class='about-activity-desc-4'>무료 프로그램입니다</span><br><br>\
                </p>",
        src: require("@/assets/img/about/class.jpg"),
        alt: "블랙루비 파이썬 클래스 사진"
      },

      weekly:{
        title_src1: require('@/assets/img/fonts_img/about/weekly.png'),
        title_alt1: 'BlackRubyStudio About Weekly',
        title_src2: require('@/assets/img/fonts_img/about/meeting.png'),
        title_alt2: 'BlackRubyStudio About Meeting',
        desc: "<p><span class='about-activity-desc'>회사의 상황을 전체 공유하고자 하는 목적으로</span><br>\
                  <span class='about-activity-desc-1'>회사 방향성에 대한 이해와 자신이 맡고 있지 않는 프로젝트에 대한</span><br>\
                  <span class='about-activity-desc-2'>이해를 높이기 위해 진행하고 있습니다</span><br><br>\
                  <span class='about-activity-desc'>매주 주간동향이라는 이름으로 팀별 진행상황을 발표하고</span><br>\
                  <span class='about-activity-desc-1'>질의 응답 및 피드백 시간을 가지고 있습니다</span><br>\
                </p>",
        desc_mb: "<p><span class='about-activity-desc'>회사의 상황을 전체 공유하고자 하는 목적으로</span><br><br>\
                  <span class='about-activity-desc-1'>회사 방향성에 대한 이해와 자신이 맡고 있지 않는 </span><br><br>\
                  <span class='about-activity-desc-2'>프로젝트에 대한 이해를 높이기 위해 진행하고</span><br><br>\
                  <span class='about-activity-desc-3'>있습니다. 매주 주간동향이라는 이름으로 팀별</span><br><br>\
                  <span class='about-activity-desc-4'> 진행상황을 발표하고 질의 응답 및 피드백 </span><br><br>\
                  <span class='about-activity-desc-5'>시간을 가지고 있습니다</span><br><br>\
                </p>",        
        src: require("@/assets/img/about/weekly.jpg"),
        alt: "블랙루비 주간동향 사진"
      }
    }
  }
}
</script>

<style lang="scss">
.about-scrollup{
  height: 50px;
  width: 1200px;
  margin: 0 auto;
  text-align: right;
  margin-bottom: 20px;
  @include xl{
    width: 1000px;
  }
  @include lg{
    width: 760px;
  }
  @include md{
    margin-bottom: 10px;
    width: 550px;
  }
  @include sm{
    display: none;
  }
}

.about-scrollup-button{
  position: relative;
  width: 50px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
  animation-name: scrollup-button;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  @include lg{
    width: 40px;
  }
  @include md{
    width: 30px;
  }
}

@keyframes scrollup-button{
  0%{
    padding-top: 0px;
  }
  50%{
    padding-top: 5px;
  }
  100%{
    padding-top: 0px;
  }
}

.about-activity-desc{
  @include md{
    font-size: 12px;
  }
  @include sm{
    font-size: 8px;
  }
}

.about-activity-desc-1{
  @extend %padding-left-1;
  @include md{
    font-size: 12px;
  }
    @include sm{
    font-size: 8px;
    padding-left: 3px;
  }
}

.about-activity-desc-2{
  @extend %padding-left-2;
    @include md{
    font-size: 12px;
  }
    @include sm{
    font-size: 8px;
    padding-left: 6px;
  }
}

.about-activity-desc-3{
  @extend %padding-left-3;
    @include md{
    font-size: 12px;
  }
    @include sm{
    font-size: 8px;
    padding-left: 9px;
  }
}

.about-activity-desc-4{
  @extend %padding-left-4;
    @include md{
    font-size: 12px;
    }
    @include sm{
    font-size: 8px;
    padding-left: 12px;
  }
}

.about-python{
  .about-activity-container{
    grid-template-areas:
    "bl1 img"
    "con img"
    "bl2 img" !important;
    grid-template-columns: 55% 45% !important;
    grid-template-rows: 25% 35% 40% !important;
    left: 100px !important; 
    margin-top: -50px !important;
    @include xl{
      left: 0px !important;
    }
    @include md{
      left: 10px !important;
    }
    @include sm{
     left: 10px !important;
    }
  }

  .about-activity-img{
    // padding-left: 450px;
    // margin-left: 20px;
  }

  .about-activity-content{
    grid-area: con;
    text-align: right !important;
  }

  .about-activity-title{
    left: 130px !important;
    @include md{
      top: -30px !important;
      left: 100px !important;
    }
  }

  .about-activity-desc{
    left: 180px !important;
    padding: 20px 0px !important;

    @include lg{
      left: 40px !important;
    }
    @include md{
      top: -20px !important;
      left: 30px !important;
    }
    @include sm{
      left: -40px !important;
      padding: 10px 0px !important;
      width: 190px !important;
    }
  }

  .about-activity-desc-1{
    padding: 0;
    padding-right: 10px;
    @include sm{
      padding-right: 3px;
    }
  }

  .about-activity-desc-2{
    padding: 0;
    padding-right: 20px;
    @include sm{
      padding-right: 6px;
    }
  }

  .about-activity-desc-3{
    padding: 0;
    padding-right: 30px;
    @include sm{
      padding-right: 9px;
    }
  }

  .about-activity-desc-4{
    padding: 0;
    padding-right: 40px;
    @include sm{
      padding-right: 12px;
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

.about-study{
  @include sm{
    display: none
  }
}

.about-python{
  @include sm{
    display: none
  }
}

.about-weekly{
  @include sm{
    display: none;
  }
}

.about-study-mb{
  display: none;
  @include sm{
    display: grid;

    .about-activity-title, .about-activity-desc{
      top: -30px;
    }
  }

}

.about-python-mb{
  display: none;
  @include sm{
    display: grid;
    .about-activity-container{
    grid-template-areas:
    "bl1 img"
    "con img"
    "bl2 img";
    grid-template-columns: 55% 45%;
    grid-template-rows: 25% 35% 40%;
    left: 100px;
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
    left: 50px;
    top: -30px;
  }

  .about-activity-desc{
    left: 130px;
    top: -30px;
    padding: 20px 10px 20px 0;
    left: -40px;
    padding: 10px 0px 10px 0;
    width: 190px;
  }

  .about-activity-desc-1{
    padding-right: 3px;
  }

  .about-activity-desc-2{
    padding-right: 6px;
  }

  .about-activity-desc-3{
    padding-right: 9px;
  }
  
  .about-activity-desc-4{
    padding-right: 12px;
  }

  }
}

.about-weekly-mb{
  display: none;
  @include sm{
    display: grid;

    .about-activity-title, .about-activity-desc{
      top: -30px;
    }

    .about-activity-desc-5{
      padding-left: 15px;
      font-size: 8px;
  }
  }
}
</style>