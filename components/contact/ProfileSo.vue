// ProfileSo: 소재우 대표님 약력에 관한 컴포넌트

<template>
  <div class="contact-profileSo">
    <div class="contact-profileSo-container">
      <div class="contact-profileSo-title">Co.<span class="contact-profileSo-white">CEO</span></div>
      <div class="contact-profileSo-img"></div>
      <div class="contact-profileSo-content">
        <div class="contact-profileSo-desc-1">
          <span class="contact-profileSo-name">소재우</span>
          <span class="contact-ceo">CEO & Developer</span>
          <br>
          <div class="contact-profileSo-desc-1-1">Skills-Develop<br>서버 구축<br>금융 관련 인공지능 챗봇 서버</div>
          <span class="contact-profileSo-sub">게임</span><br>
          <div class="contact-profileSo-desc-1-2">
            Arctic Episode - 북극을 배경으로 한 퍼즐게임<br>
            OVE - 대학생 미술 작품들을 소재로 한 터치 게임<br>
            Oing - 스마트 밴드와 연계된 어린이 습관 개선 유도 게임<br>
            BRS PLAY - 인디음악을 활용한 액션형 리듬게임
          </div>
        </div>
        <div class="contact-profileSo-desc-2">
          <span class="contact-profileSo-sub">웹 개발</span><br>
          <div class="contact-profileSo-desc-2-1">반복되는 서류를 자동으로 분석, 완성하는<br>웹앱 프론트<br>이어폰 리싸이클링 쇼핑몰 구축</div>
          <span class="contact-profileSo-sub">어플리케이션</span><br>
          <div class="contact-profileSo-desc-2-2">
            소비패턴 분석 가계부 어플 개발<br>
            소상공인을 위한 맛집 큐레이션 어플 개발<br>
            1인 가구를 위한 청소 관련 소셜벤처 어플 개발
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}  
</script>

<style lang="scss" scoped>

.contact-profileSo{
  height: $basic-height;
  @include lg{
    height: 600px;
  }
  @include md{
    height: 550px;
  }
}

.contact-profileSo-container{
  @extend %container;
  grid-template-areas:
  "tit img con";
  grid-template-columns: 0% 35% 65%;
  grid-gap: 2.5%;
  top: 50px;
  z-index: 100;
  @include xl{
    width: 1000px;
    grid-template-columns: 0% 35% 60%;
    grid-gap: 3%;
  }
  @include lg{
    width: 760px;
    height: 400px;
    grid-gap: 2%;
  }
  @include md{
    width: 550px;
    height: 350px;
  }
  @include sm{
    width: 300px;
  }
}

.contact-profileSo-title{
  @extend %font-main;
  font-size: 120px;
  position: relative;
  grid-area: tit;
  justify-self: center;
  align-self: start;
  padding-top: 30px;
  bottom: -200px;
  letter-spacing: 10px;
  transform: rotate(90deg); 
  @include xl{
    right: -60px;
  } 
  @include lg{
    font-size: 80px;
    top: 100px;
    right: -40px;
  }
  @include md{
    font-size: 65px;
    top: 50px;
  }
}

.contact-profileSo-white{
  @extend %font-main;
  font-size: 120px;
  color: white;
  @include lg{
    font-size: 80px;
  }
  @include md{
    font-size: 60px;
  }
}

.contact-profileSo-img{
  @extend %background;
  grid-area: img;
  background-image: url('../../assets/img/contact/contact_prfofile_2.png');
  background-size: 100%;
  margin-bottom: 50px;
}

.contact-profileSo-content{
  grid-area: con;
  display: grid;
  grid-template-areas:
  "ds1 bl1"
  "ds1 ds2"
  "bl2 ds2";
  grid-gap: 10px;
  grid-template-columns: 50% 40%;
  grid-template-rows: 30% 42% 28%;
  @include xl{
    grid-template-rows: 33% 42% 25%;
  }
  @include lg{
    grid-template-columns: 50% 38%;
  }
}

.contact-profileSo-desc-1{
  grid-area: ds1;
  align-self: end; 
  @include lg{
    color: black;
  }
}

.contact-profileSo-name{
  font-family: $profile-name;
  font-size: 30px;  
  letter-spacing: 10px;
  @include lg{
    font-size: 25px;
  }
  @include md{
    font-size: 18px;
  }
}

.contact-ceo{
  font-family: $font-contact-ceo;
  @include lg{
    font-size: 15px;
  }
  @include md{
    font-size: 10px;
  }
}

.contact-profileSo-sub{
  font-family: $profile-sub;
  font-size: 17px;  
  color: white;
  z-index: 100px;
  @include lg{
    font-size: 15px;
  }
  @include md{
    font-size: 13px;
  }

}

.contact-profileSo-desc-1-1, .contact-profileSo-desc-2-1{
  padding: 20px 0 50px 0;
  font-size: 13px;
  line-height: 20px;
  color: white;
   @include lg{
  font-size: 12px;
  }
  @include md{
    font-size: 10px;
    line-height: 13px;
  }
}

.contact-profileSo-desc-1-2, .contact-profileSo-desc-2-2{
  padding: 10px 0;
  font-size: 13px;
  line-height: 20px;
  color: white;
   @include lg{
  font-size: 12px;
}
@include md{
  font-size: 10px;
  line-height: 13px;
}
}

.contact-profileSo-desc-1-1{
  @include lg{
    height: 100px;
    align-self: end;
  }
  @include md{
    height: 100px;
  }
}

.contact-profileSo-desc-1-2{
  @include lg{
  height: 80px;
  }
  @include md{
    height: 90px;
  }
}

.contact-profileSo-desc-2-1{
  @include lg{
  height: 110px;
  }
  @include md{
    // margin-top: -50px;
    height: 100px;
  }
}

.contact-profileSo-desc-2-2{
  @include lg{
    height: 130px;
  }
  @include md{
    height: 100px;
  }
}

.contact-profileSo-desc-2{
  grid-area: ds2;
  align-self: center;
  text-align: right;
}
</style>
