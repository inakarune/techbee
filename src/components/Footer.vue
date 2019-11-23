<template>
    <footer>
        <h1 class="footer-logo">TECH<span>BEE</span></h1>
        <address>경기도 부천시 소향로 225 B동 802호<br/>
            TEL. 032-328-4750<span>|</span>FAX. 032-328-4754<span>|</span>Email. techbee@naver.com
        </address>
        <p>COPYRIGHT(C) 2019 TECHBEE. ALL RIGHTS RESERVED</p>
    </footer>
</template>
<style lang="scss">

.footer-logo {
    color: #777777;
    float: left;
}

.footer-logo span {
    color: gold;
}

footer {
    width: 100%;
    height: 104px;
    background-color: #323232;
    color: #c3c3c3;
    padding: 30px 0px;
    margin: 36px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

address {
    font-size: 14px;
    line-height: 1.8em;
    font-style: normal;
}

address span {
    padding: 0 16px;
}

footer p {
    width: 392px;
    height: 44px;
    line-height: 78px;
    font-size: 12px;
    text-align: right;
    vertical-align: bottom;
}
</style>
