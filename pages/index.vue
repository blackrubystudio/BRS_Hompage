<template>
  <section class="container">
    <!--검은 배경의 첫 화면, 한문장으로 표현-->
    <div class="section1">
      <head-bar />
      <sec1 />
      <div class="btn">
        <div class="celebeebtn">
          <a href="/celebee">
          Celebee
          </a>
        </div>
        <div class="beammebtn">
          <a href="/beamme">
          Beam me
          </a>
        </div>
      </div>
    </div>
    <!--FindBig5 -->
    <div class="section2">
      <find />
    </div>

    <!--Tech + History-->
    <div class="section3">
      
      <History />
    </div>

    <!--footer-->
    <div class="section4">
    </div>
  </section>
</template>

<script>
import HeadBar from '~/components/HeadBar.vue';
import Find from '~/components/Findbig5.vue';
import Foot from '~/components/Footer.vue';
import Tech from '~/components/Tech.vue';
import Sec1 from '~/components/Section1.vue';
import History from '~/components/History.vue';

export default {
  layout: 'default',
  components: {
    HeadBar,
    Find,
    Tech,
    History,
    Foot,
    Sec1,
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.section1 {
  background-image: url('../assets/img/back1.png');
  background-size: cover;
  color: whitesmoke;
  font-family: 'SCDream9';
  font-size: 8vw;
  width: 100vw;
  height: 115vh;
}

.celebeebtn {
  font-family: SCDream3;
  text-align: center;
  width: 8vw;
  height: 6.5vh;
  font-size: 1.5vw;
  line-height: 3vw;
  border: 3px solid gray;
}

.beammebtn {
  font-family: SCDream3;
  text-align: center;
  width: 8vw;
  font-size: 1.5vw;
  line-height: 3vw;
  border: 3px solid gray;
}

.btn {
  position: absolute;
  margin-top: -15vh;
  margin-left: 61vw;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2vw;
  color: gray;
}
</style>
