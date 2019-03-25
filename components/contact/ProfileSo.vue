<template>
  <div class="contact-profile2">
    <div class="contact-profile2-container">
      <div class="contact-profile2-title">Co.<span class="contact-profile2-white">CEO</span></div>
      <div class="contact-profile2-img"></div>
      <div class="contact-profile2-content">
        
        <div class="contact-profile2-desc-1">
          <span class="contact-profile2-name">소재우</span><br>
          <div class="contact-profile2-desc-1-1">
            Skills-Develop<br>
            서버 구축<br>
            금융 관련 인공지능 챗봇 서버
          </div>
          <span class="contact-profile2-sub">게임</span><br>
          <div class="contact-profile2-desc-1-2">
            Arctic Episode - 북극을 배경으로 한 퍼즐게임<br>
            OVE - 대학생 미술 작품들을 소재로 한 터치 게임<br>
            Oing - 스마트 밴드와 연계된 어린이 습관 개선 유도 게임<br>
            BRS PLAY - 인디음악을 활용한 액션형 리듬게임
          </div>
        </div>

        <div class="contact-profile2-desc-2">
            <span class="contact-profile2-sub">웹 개발</span><br>
            <div class="contact-profile2-desc-2-1">
                반복되는 서류를 자동으로 분석, 완성하는<br>
                웹앱 프론트<br>
                이어폰 리싸이클링 쇼핑몰 구축
            </div>
          
            <span class="contact-profile2-sub">어플리케이션</span><br>
            <div class="contact-profile2-desc-2-2">
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
export default {

}  
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";

.contact-profile2{
  height: 700px;
 
}

.contact-profile2-container{
  @extend %container;
  grid-template-areas:
  "tit img con";
  grid-template-columns: 0% 35% 65%;
  grid-gap: 2.5%;
  top: 170px;
   z-index: 100;
  
}

.contact-profile2-title{
  position: relative;
  grid-area: tit;
  justify-self: center;
  align-self: start;
  padding-top: 30px;
  bottom: -220px;
  font-family: $main-font; 
  font-size: 100px;
  letter-spacing: 10px;
  transform: rotate(90deg);  
}

.contact-profile2-white{
  font-family: $main-font; 
  color: white;
}

.contact-profile2-img{
  grid-area: img;
  background-image: url('../../assets/img/contact/contact_prfofile_2.png');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 170px;
}

.contact-profile2-content{
  grid-area: con;
  display: grid;
  grid-template-areas:
  "ds1 bl1"
  "ds1 ds2"
  "bl2 ds2";
  grid-gap: 10px;
  grid-template-columns: 50% 40%;
  grid-template-rows: 30% 42% 28%;
}

.contact-profile2-desc-1{
  grid-area: ds1;
  align-self: end; 
  
}

.contact-profile2-name{
  font-family: $profile-name;
  font-size: 30px;  
  letter-spacing: 10px;
}

.contact-profile2-sub{
  font-family: $profile-sub;
  font-size: 17px;  
  color: white;
  z-index: 100px;

}

.contact-profile2-desc-1-1, .contact-profile2-desc-2-1{
  padding: 20px 0 50px 0;
  font-size: 13px;
  line-height: 20px;
  color: white;
}

.contact-profile2-desc-1-2, .contact-profile2-desc-2-2{
  padding: 10px 0;
  font-size: 13px;
  line-height: 20px;
  color: white;
}

.contact-profile2-desc-2{
  grid-area: ds2;
  align-self: center;
  text-align: right;
}
</style>
