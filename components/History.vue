<template>
    <!-- 회사 연혁 버전에 따라 변하도록 설정 -->
    <div class="history">
         <section class="history section">
            <div class="inner">
                <h3 class="sub-title">History</h3>
                <div class="history-tree">
                    <ol class="tree-branch-verti">
                        <li class="hot">
                            <i class=""></i>
                            <em>'18.01</em>                            
                            <span>정식 출시 예정</span>
                        </li>                       
                        <li>
                            <i class=""></i>
                            <em>'17.11</em>                            
                            <span>Findbig5 오픈 베타</span>
                        </li>                       
                        <li class="hot">
                            <i class=""></i>
                            <em>'17.06</em>                            
                            <span>17년 창업선도대학 선정</span>
                        </li>
                        <li>
                            <i class=""></i>
                            <em>'17.06</em>                            
                            <span>예비 사회적기업 선정</span>
                        </li>
                        <li>
                            <i class=""></i>
                            <em>'17.02</em>                            
                            <span>Findbig5 컨설팅 기업과 클로즈 베타</span>
                        </li>
                        <li class="hot">
                            <i class=""></i>
                            <em>'17.02</em>                            
                            <span>K-Global 빅데이터 스타트업 지원사업 선정</span>
                        </li>
                        <li>
                            <i class=""></i>
                            <em>'17.02</em>                            
                            <span>엔젤 투자 유치</span>
                        </li>
                        <li>
                            <i class=""></i>                            
                            <em>'16.10</em>
                            <span style="letter-spacing: -2px">Asia Pacific Social Venture Idea Competition 국내부분 대상</span>
                        </li>
                        <li class="hot">
                            <i class=""></i>
                            <em>'16.04</em>                            
                            <span>(주)블랙루비스튜디오 법인 설립</span>
                        </li>
                        <li>
                            <i class=""></i>
                            <em>'16.02</em>                            
                            <span>예비사회적기업가 육성사업 선정</span>
                        </li>                 
                    </ol>
                    <ol class="tree-branch">
                        <li class="on">
                            <em>16.02</em>
                            <i></i>
                        </li>                
                        <li>
                            <em>16.04</em>
                            <i></i>
                        </li>
                        <li>
                            <em>16.10</em>
                            <i></i>
                        </li>
                        <li>
                            <em>17.02</em>
                            <i></i>
                        </li>
                        <li class="hot">
                            <em>17.02</em>
                            <i></i>
                            <span>K-Global 빅데이터 스타트업 지원사업 선정</span>
                        </li>
                        <li>
                            <em>17.02</em>
                            <i></i>
                        </li>
                        <li>
                            <em>17.06</em>
                            <i></i>
                        </li>
                        <li class="hot">
                            <em>17.06</em>
                            <i></i>
                            <span>17년 창업선도대학 선정</span>
                        </li>
                        <li>
                            <em>17.11</em>
                            <i></i>
                        </li>
                        <li class="hot">
                            <em>18.01</em>
                            <i></i>
                            <span>정식 출시 예정</span>
                        </li>
                    </ol>                
                    <ol class="summary-list">
                        <li>예비사회적 기업가 육성사업 선정</li>
                        <li>(주)블랙루비스튜디오 법인설립</li>
                        <li>Asia Pacific Social Venture Idea Competition 국내부분 대상</li>
                        <li>엔젤투자 유치</li>
                        <li>K-Global 빅데이터 스타트업 지원사업 선정</li>
                        <li>Findbig5 컨설팅 기업과 클로즈 베타</li>
                        <li>예비 사회적기업 선정</li>
                        <li>17년 창업선도대학 선정</li>                    
                        <li>Findbig5 오픈 베타</li>
                        <li>정식 출시 예정</li>
                    </ol>
                    <p class="on-summary">예비사회적 기업가 육성사업 선정</p>
                </div>
            </div>
        </section>

    </div>
</template>

<style>
.history::after {
    display: none;
}

.history {
    padding-left: 10vw;
}

@media only screen and (min-width: 768px) {
    .history {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        align-items: center;
        justify-content: space-between;
    }
}

.history .inner {
    height: auto;
    width: 98%;
}

@media only screen and (min-width: 768px) {
    .history .inner .sub-title {
        text-align: center;
    }
    .history .inner .sub-title::after {
        left: 50%;
        margin-left: -30px;
    }
}

.history .inner .history-tree {
    position: relative;
}

@media only screen and (min-width: 768px) {
    .history .inner .history-tree {
        height: 200px;
    }
}

.history .inner .history-tree .tree-branch-verti {
    /* 모바일 */
    position: relative;
    display: block;
    margin: 0 auto;
    width: 390px;
    padding: 0 20px;
    font-size: 15px;
    letter-spacing: -1px;
}

@media only screen and (min-width: 768px) {
    .history .inner .history-tree .tree-branch-verti {
        display: none;
    }
}

.history .inner .history-tree .tree-branch-verti::after {
    position: absolute;
    top: 0;
    left: 15px;
    margin-top: -3px;
    content: " ";
    display: block;
    width: 2px;
    height: 100%;
    background-color: #c4c4c4;
    z-index: 100;
}

@media only screen and (min-width: 768px) {
    .history .inner .history-tree .tree-branch-verti::after {
        display: block;
    }
}

.history .inner .history-tree .tree-branch-verti li.hot * {
    color: #920000 !important;
    font-weight: bold;
}

.history .inner .history-tree .tree-branch-verti li.hot i {
    background-color: #920000;
}

.history .inner .history-tree .tree-branch-verti li em {
    display: inline-block;
    margin-right: 10px;
    width: 35px;
    letter-spacing: 0;
}

.history .inner .history-tree .tree-branch-verti li i {
    background-color: #c4c4c4;
    border-radius: 10px;
    display: inline-block;
    position: relative;
    left: -10px;
    width: 12px;
    height: 12px;
    z-index: 200;
}

.history .inner .history-tree .tree-branch-verti li+li {
    margin-top: 20px;
}

.history .inner .history-tree .tree-branch {
    /* medium size 이상 */
    display: none;
    margin: 0 auto;
    width: 100%;
    height: 200px;
    position: relative;
    z-index: 200;
}

@media only screen and (min-width: 768px) {
    .history .inner .history-tree .tree-branch {
        display: block;
    }
}

.history .inner .history-tree .tree-branch li {
    float: left;
    width: 10%;
    min-width: 75px;
    text-align: center;
    cursor: pointer;
}

.history .inner .history-tree .tree-branch li * {
    display: inline-block;
    width: 100%;
    height: 100px;
    line-height: 100px;
}

.history .inner .history-tree .tree-branch li em {
    color: #d9d9d9;
}

.history .inner .history-tree .tree-branch li i {
    background-color: #c4c4c4;
    border-radius: 10px;
    position: relative;
    top: -10px;
    width: 12px;
    height: 12px;
}

.history .inner .history-tree .tree-branch li span {
    line-height: 1.2;
}

.history .inner .history-tree .tree-branch li * {
    transition: all 0.1s ease;
}

.history .inner .history-tree .tree-branch li.hot em {
    color: black;
}

.history .inner .history-tree .tree-branch li.hot i {
    border: 2px solid #c4c4c4;
    background-color: white;
    border-radius: 10px;
    position: relative;
    top: -8px;
    width: 14px;
    height: 14px;
}

.history .inner .history-tree .tree-branch li.hot span {
    font-size: 15px;
    letter-spacing: -1px;
}

.history .inner .history-tree .tree-branch li.on * {
    color: #920000 !important;
    font-weight: bold;
}

.history .inner .history-tree .tree-branch li.on i {
    border: 2px solid #920000;
    background-color: #920000;
    width: 14px;
    height: 14px;
}

.history .inner .history-tree::after {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -3px;
    content: " ";
    display: none;
    width: 100%;
    height: 3px;
    background-color: #c4c4c4;
    z-index: 100;
}

@media only screen and (min-width: 768px) {
    .history .inner .history-tree::after {
        display: block;
    }
}

.history .inner .history-tree .summary-list {
    display: none;
}

.history .inner .history-tree .on-summary {
    display: none;
    background-color: #F9F9F9;
    color: #920000;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 30px;
    padding: 0 15px;
    min-width: 200px;
    max-width: 560px;
    width: auto;
    height: auto;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 50px;
}

@media only screen and (min-width: 768px) {
    .history .inner .history-tree .on-summary {
        display: block;
    }
}

.product .inner {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
}

@media only screen and (min-width: 768px) {
    .product .inner .con-left {
        padding: 0 5%;
        width: 50%;
        float: left;
    }
}

.product .inner .con-right {
    margin-top: 30px;
}

.product .inner .con-right img {
    width: 100%;
}

@media only screen and (min-width: 768px) {
    .product .inner .con-right {
        width: 50%;
        float: right;
        margin-top: 0;
    }
}
</style>