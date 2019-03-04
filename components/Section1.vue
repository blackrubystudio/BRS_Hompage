<template>
    <div class="section1">
        <div class="item1">
        경험의
        </div>
        <div class="item2">
        단순화
        </div>
        <div class="item3">
        복잡한<br>삶속의<br>가치
        </div>
    </div>
</template>

<style scoped>
.section1 {
    margin: 0 auto;
    display: grid;
    grid-template-areas:
        'item1 item1'
        'item3 item2';
}
.item1 {
    grid-area: item1;
    margin-left: 25vw;
    margin-top: 40vh;
}
.item2 {
    grid-area: item2;
    margin-right: 6vw;
    height: 50vh;
}
.item3 {
    grid-area: item3;
    font-family: NotoLight;
    font-size: 1.4vw;
    text-align: right;
    line-height: 2vw;
    margin-top: -10px;
}
</style>