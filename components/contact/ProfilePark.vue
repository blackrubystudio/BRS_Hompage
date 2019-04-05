// ProfilePark: 박진호 대표님 약력에 관한 컴포넌트

<template>
  <div class="contact-profilePark">
    <div class="contact-profilePark-container">
      <div class="contact-profilePark-img"></div>
      <div class="contact-profilePark-content">
        <div class="contact-profilePark-title">CEO</div>
        <div class="contact-profilePark-desc-1">
          <span class="contact-profilePark-name">박진호</span>
          <span class="contact-ceo">CEO</span>
          <br>
          <div class="contact-profilePark-desc-1-1"> Skills-Develop<br>서버 구축<br>금융 관련 인공지능 챗봇 서버</div>
          <span class="contact-profilePark-sub">게임</span><br>
          <div class="contact-profilePark-desc-1-2">
            Arctic Episode - 북극을 배경으로 한 퍼즐게임<br>
            OVE - 대학생 미술 작품들을 소재로 한 터치 게임<br>
            Oing - 스마트 밴드와 연계된 어린이 습관 개선 유도 게임<br>
            BRS PLAY - 인디음악을 활용한 액션형 리듬게임
          </div>
        </div>
        <div class="contact-profilePark-desc-2">
          <span class="contact-profilePark-sub">웹 개발</span><br>
          <div class="contact-profilePark-desc-2-1">반복되는 서류를 자동으로 분석, 완성하는<br>웹앱 프론트<br>이어폰 리싸이클링 쇼핑몰 구축</div>
          <span class="contact-profilePark-sub">어플리케이션</span><br>
          <div class="contact-profilePark-desc-2-2">
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

.contact-profilePark{
  height: $basic-height;
  @include lg{
    height: 650px;
  }
  @include md{
    height: 600px;
  }
}

.contact-profilePark-container{
  position: relative;
  top: 200px;
  width: 1024px;
  margin:0 auto;
  display: grid;
  grid-template-areas:
  "img con";
  grid-template-columns: 35% 65%;
  grid-gap: 5%;
  height: 500px;
  @include xl{
    width: 1000px;
    grid-template-columns: 38% 58%;
    grid-gap: 3%;
  }
  @include lg{
    width: 760px;
    height: 400px;
  }
  @include md{
    width: 550px;
    height: 350px;
  }
  @include sm{
    width: 300px;
  }
}

.contact-profilePark-img{
  @extend %background;
  grid-area: img;
  background-image: url('../../assets/img/background/background_2.png');
}

.contact-profilePark-content{
  grid-area: con;
  display: grid;
  grid-template-areas:
  "ds1 tit"
  "ds1 ds2"
  "bl1 ds2";
  grid-gap: 10px;
  grid-template-columns: 46% 46%;
  @include xl{
    grid-template-columns: 50% 40%; 
  }
  @include lg{
    grid-template-columns: 50% 38%;
  }
}

.contact-profilePark-title{
  @extend %font-main;
  grid-area: tit;
  justify-self: end;
  margin-right: -100px;
  @include xl{
    margin-right: -30px;
  }
  @include lg{
    font-size: 80px;
    margin-right: -30px;
  }
  @include md{
    font-size: 60px;
    margin-right: -40px;
  }
}

.contact-profilePark-desc-1{
  grid-area: ds1;
  align-self: end; 

}

.contact-profilePark-name{
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

.contact-profilePark-sub{
  font-family: $profile-sub;
  font-size: 17px;  
  @include lg{
    font-size: 15px;
  }
  @include md{
    font-size: 13px;
  }
}

.contact-profilePark-desc-1-1, .contact-profilePark-desc-2-1{
  padding: 20px 0 50px 0;
  font-size: 13px;
  line-height: 20px;
@include lg{
  font-size: 12px;
}
@include md{
  font-size: 10px;
  line-height: 13px;
}
}

.contact-profilePark-desc-1-2, .contact-profilePark-desc-2-2{
  padding: 10px 0;
  font-size: 13px;
  line-height: 20px;
  @include lg{
  font-size: 12px;
}
@include md{
  font-size: 10px;
  line-height: 13px;
}
}

.contact-profilePark-desc-1-1{
  @include lg{
    height: 120px;
  }
  @include md{
    height: 100px;
  }
}

.contact-profilePark-desc-1-2{
  @include lg{
  height: 100px;
  }
  @include md{
    height: 90px;
  }
}

.contact-profilePark-desc-2-1{
  @include lg{
  height: 130px;
  }
  @include md{
    height: 100px;
  }
}

.contact-profilePark-desc-2-2{
  @include lg{
    height: 110px;
  }
  @include md{
    height: 100px;
  }
}

.contact-profilePark-desc-2{
  grid-area: ds2;
  align-self: center;
  text-align: right;
}
</style>
