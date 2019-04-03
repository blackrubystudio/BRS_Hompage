// Postit : 메인페이지에 있는 보라색 포스트잇 내용에 관한 컴포넌트
// 특징 : 보라색 이미지는 메인에 고정되어 있고 title과 desc에 관한 것만 지정되어 있음
// 메인 페이지로 props를 넘겨주는 것이 아닌 각 프로젝트 컴포넌트(FindBig5,  Celebee, Beamme)에 넘겨줌

<template>
  <div class="postit">
    <div class="postit-container">
      <h1 class="postit-title" v-text="title"></h1>
      <p class="postit-content" v-html="desc"></p>
    </div> 
  </div>
</template>

<script>
export default {
  props: ['title', 'desc']
}
</script>

<style lang="scss" scoped>
.postit{
  @extend %postit;

  @include lg{
    left: 450px;
  }
  @include md{
    left: 310px;
  }
  @include sm{
    width: 300px;
  }
}

.postit-container{
  color: white;
}

.postit-title{
  @extend %font-postit-title;
  position: absolute;
  top: 40px;
  padding-left: 30px;
  z-index: 200;
  @include md{
    top: 50px;
    font-size: 15px;
  }
  @include sm{
    padding-left: 0px;
    left: -190px;
    top: 120px;
    font-size: 15px;
  }
}

.postit-content{
  width: 100%;
  position: absolute;
  bottom: 50px;
  padding: 0 30px;
  font-size: 18px;
  line-height: 30px;
  z-index: 200;
  @include lg{
    font-size: 17px;
    padding: 0 30px ;
  }
  @include md{
    font-size: 12.5px;
    line-height: 20px;
    bottom: 100px;
  }
  @include sm{
    bottom: 150px;
    font-size: 13px;
    line-height: 20px;
    padding-left: 50px;
    width: 270px;
    margin-left: -280px;
  }
}

</style>
