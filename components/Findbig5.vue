<template>
    <div class="findbig5">
        <!--루비색 책갈피-->
        <div class="ruby">
            <span class='font'>Findbig5</span>
            <br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br>
            넘쳐나는 정보들<br>
            낭비되는 시간들,<br>
            <br>
            저희가 도와드리겠습니다<br>
            쉽게찾으세요.
            <div class='underline'></div>
        </div>
        <!--첫 섹션-->
        <div class="one">
            <div class="a">쉽게</div>
            <div class="b"><img class="searchimg" src='../assets/img/Findbig5_searchbar.png' /></div>
            <div class="c">찾으세요</div>
            <div class="font2">
            오늘날 무수히 많은 정보들은 결정하고 판단하는 일을 복잡하게 만듭니다<br>
            진흙 속에서 진주를 찾았을 때에는 이미 온몸이 흙 투성이지요<br>
            이제, 정보를 찾는 것에 시간을 낭비하지 마세요<br>
            그것은 저희의 몫입니다
            </div>
        </div>
        <!--설명 섹션-->
        <div class="two">
            FindBigFive
            전 세계 언론사에서 IT 관련 정보를 실시간으로 수집하여 일일 HOT TOPIC을 제공해 드립니다

            AI를 활용한 쉽고 섬세한 분류 및 검색기능,
            모든 기사를 400자 이내로 요약까지

            시간은 너무나도 소중하니까요
        </div>

        <!--Tech 섹션 -->
        <div class="three">
            자동 정보 수집기

            Forbes, NewYorkTimes 등 일반 뉴스미디어와
            TechCrunch, TheNextWeb등 IT전문미디어 등 30여개 해외 언론사에서
            IT기사를 실시간으로 수집합니다. 2016년 이후   기사들을 자유롭게 찾아 볼 수 있습니다

            검색 엔진

            검색을 통해 사용자가 원하는 기사를 빠르게 찾을 수 있습니다
            유저들의 검색어 기록을 학습, 중요도에 반영하여 사용자 별 맞춤 검색기능이 가능하고,
            기사들을 유사 기사로 묶어 내용이 비슷한 기사를 다시 보지 않을 수 있습니다

            자연어처리AI

            형태소 분석을 기반으로 하여 문서 내 중요단어 분석 뿐 아니라
            문서의 역가중치를 계산하여 문서 간 중요도를 분석하는 엔진을 제공합니다
            토픽 추출의 정확도를 위하여 LDA와 LSI 두 모델을 결합한 튜닝모델을 활용하고 있습니다
            또한 기사 400자 이내 요약기능으로 사용자에게 전문을 읽는 부담을 줄이고 있습니다
        </div>
    </div>
</template>

<style scoped>
.ruby {
    position: absolute;
    margin-left: 59vw;
    background-image: url('../assets/img/ruby.png');
    background-size: cover;
    color: white;
    font-family: NotoExtraLight;
    font-size: 2vw;
    width: 32vw;
    margin-top: -6vh;
    padding-top: 1.3vh;
    padding-left: 2.5vw;
    font-size: 1.7vw;
    line-height: 2.3vw;
    box-shadow: 1px 1px 50px 1px black;
    padding-bottom: 10vh;
}

.font {
    font-family: SCDream3;
}

.underline {
    background-color: white;
    width: 10.3vw;
    height: 1.5px;
    text-align: center;
    margin-top: 10px;
}

.one {
    width: 59vw;
    font-family: SCDream9;
    padding-top: 22vh;
}

.a {
    font-size: 10vw;
    text-align: right;
}
.b {
    position: absolute;
    padding-left: 22vw;
    margin-top: -30vh;
    
}
.c {
    padding-top: 15vh;
    margin-right: -3.5vw;
    font-size: 10vw;
    text-align: right;
}

.searchimg {
    width: 30vw;
}

.font2 {
    text-align: left;
    font-family: NotoLight;
    font-size: 1.05vw;
    line-height: 1.5vw;
    padding-left: 24.5vw;
}

.two {
    font-family: NotoLight;
    font-size: 1.05vw;
}

.three {
    font-family: SCDream9;
    font-size: 7vw;
}
</style>