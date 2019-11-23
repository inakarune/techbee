<template>
    <div class="about-container">
    <p>
        ㈜테크비는 2017년 1월 창립하여 국내 공구 시장 및 전 세계 40여개국에 인덱스블 드릴, 밀링 커터, 인서트 등<br/>
        고품격의 절삭 공구를 제조, 생산, 판매 하는 회사입니다.<br/>
        당사는 끊임없이 발전 하는 다양한 산업 분야에서 요구 되어지는 고객의 최적의 공구 선택과 최상의 가공 만족을 제공할 수 있는<br/>
        고성능, 고품질 절삭 가공 제품의 연구개발에 최선의 노력을 다하고 있습니다.<br/>
        늘 처음과 같은 변함없는 마음으로, 당사의 제품을 사용하는 현재의 고객 및 미래의 모든 고객에게, 정직한 제품으로 지속적인 고객 신뢰를 이끌 수 있는<br/>
        ㈜테크비 임,직원의 끊임없는 열정으로 고객 만족을 위해 최선을 다 할 것을 약속드립니다.
    </p>
    <p class="border-bottom"><span>사훈</span></p>
    <div id="mark">
      <span>초지일관</span>
      <span>열정</span>
      <span>정직</span>
    </div>    
    </div>
</template>
<style lang="scss">
#mark {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#mark > span {
    width: 148px;
    height: 148px;
    border-radius: 100%;
    background-color: gold;
    display: block;
    line-height: 148px;
    font-weight: 900;
    text-align: center;
}

.about-container > p {
    line-height: 2em;
    font-size: 16px;
    margin: 50px 0;
    text-align: center;
}

.about-container > p:nth-child(2) {
    width: 100%;  
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #444;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    position: relative;

    & > span {
      width: 80px;
      display: block;
      background: #fff;
      position: absolute;
      top: 20px;
      left: 46.5%;
    }
}
</style>