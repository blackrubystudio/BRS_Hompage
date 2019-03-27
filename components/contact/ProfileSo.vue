<template>
  <div class="contact-profileSo">
    <!-- ProfileSo Conttainer 시작 -->
    <div class="contact-profileSo-container">
      <div class="contact-profileSo-title">Co.<span class="contact-profileSo-white">CEO</span></div>
      <!-- ProfileSo Img 시작 -->
      <div class="contact-profileSo-img"></div>
      <!-- // ProfileSo Img 끝 -->
      <!-- ProfileSo Content 시작 -->
      <div class="contact-profileSo-content">
        <!-- ProfileSo 약력 파트 1 시작 -->
        <div class="contact-profileSo-desc-1">
          <span class="contact-profileSo-name">소재우</span><br>
          <div class="contact-profileSo-desc-1-1">Skills-Develop<br>서버 구축<br>금융 관련 인공지능 챗봇 서버</div>
          <span class="contact-profileSo-sub">게임</span><br>
          <div class="contact-profileSo-desc-1-2">
            Arctic Episode - 북극을 배경으로 한 퍼즐게임<br>
            OVE - 대학생 미술 작품들을 소재로 한 터치 게임<br>
            Oing - 스마트 밴드와 연계된 어린이 습관 개선 유도 게임<br>
            BRS PLAY - 인디음악을 활용한 액션형 리듬게임
          </div>
        </div>
        <!-- // ProfileSo 약력 파트 1 끝 -->
        <!-- ProfileSo 약력 파트 2 시작-->
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
        <!-- // ProfileSo 약력 파트 2 끝 -->
      </div>
      <!-- // ProfileSo Content 끝 -->
    </div>
    <!-- // ProfileSo Container 끝 -->
  </div>
</template>

<script>
export default {

}  
</script>

<style lang="scss" scoped>

.contact-profileSo{
  height: $basic-height;
}

.contact-profileSo-container{
  @extend %container;
  grid-template-areas:
  "tit img con";
  grid-template-columns: 0% 35% 65%;
  grid-gap: 2.5%;
  top: 100px;
   z-index: 100;
  
}

.contact-profileSo-title{
  @extend %font-main;
  position: relative;
  grid-area: tit;
  justify-self: center;
  align-self: start;
  padding-top: 30px;
  bottom: -220px;
  letter-spacing: 10px;
  transform: rotate(90deg);  
}

.contact-profileSo-white{
  @extend %font-main;
  color: white;
}

.contact-profileSo-img{
  @extend %background;
  grid-area: img;
  background-image: url('../../assets/img/contact/contact_prfofile_2.png');
  background-size: 100%;
  margin-bottom: 170px;
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
}

.contact-profileSo-desc-1{
  grid-area: ds1;
  align-self: end; 
  
}

.contact-profileSo-name{
  font-family: $profile-name;
  font-size: 30px;  
  letter-spacing: 10px;
}

.contact-profileSo-sub{
  font-family: $profile-sub;
  font-size: 17px;  
  color: white;
  z-index: 100px;

}

.contact-profileSo-desc-1-1, .contact-profileSo-desc-2-1{
  padding: 20px 0 50px 0;
  font-size: 13px;
  line-height: 20px;
  color: white;
}

.contact-profileSo-desc-1-2, .contact-profileSo-desc-2-2{
  padding: 10px 0;
  font-size: 13px;
  line-height: 20px;
  color: white;
}

.contact-profileSo-desc-2{
  grid-area: ds2;
  align-self: center;
  text-align: right;
}
</style>
