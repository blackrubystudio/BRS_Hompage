<template>
  <div class="postit">
    <div class="postit-container">
      <h1 class="postit-title">{{title}}</h1>
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
}

.postit-content{
  width: 100%;
  position: absolute;
  bottom: 50px;
  padding: 0 30px;
  font-size: 18px;
  line-height: 30px;
  z-index: 200;
}

</style>
