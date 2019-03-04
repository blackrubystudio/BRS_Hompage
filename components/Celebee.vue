<template>
    <div class="celebee">
        <div class="page1">
            <div class="one">
                매<span class="up">일</span> 전해 받는
            </div>
            
            <div class="two">
                <span class="up">내</span> 아이돌 소식
            </div>

            <div class="postimg">
                <img class="post" src="~/assets/img/celebee_post.png" width=100 />
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: SCDream9;
    font-size: 10vw;
}

.post {
    transform: rotate(20deg);
}

.postimg {
    position: absoulte;
    margin-top: -20px;
    z-index: 10;
}

.one {
    z-index: 0;
}

.two {
    z-index: 100;
}

.up {
    position: absolute;
    margin-top: -10px;
    margin-left: -5vw;
}
</style>