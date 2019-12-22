<template>
    <header>
        <ul>
            <li><span></span><a href="#">KOREAN</a></li>
            <li><span></span><a href="#">ENGLISH</a></li>
        </ul>
        <nav>
            <h1 class="nav-logo"><router-link to="/">TECH<span>BEE</span></router-link></h1>
            <ul class="nav-menu">
                <li>회사소개
                    <ul class="submenu-box">
                        <li><router-link to="/about/overview">대표이사 인사말</router-link></li>
                        <li><router-link to="/about/history">회사연혁</router-link></li>
                        <li><router-link to="/about/organization">조직도</router-link></li>
                    </ul>
                </li>
                <li>제품정보
                    <ul class="submenu-box">
                        <li><router-link to="/product/drill">Hole making</router-link></li>
                        <li><router-link to="/product/finishing">Hole finishing</router-link></li>
                        <li><router-link to="/product/cutter">Miling cutter</router-link></li>
                        <li><router-link to="/product/tooling">Tooling system</router-link></li>
                        <li><router-link to="/product/accessary">Acceasary</router-link></li>
                    </ul>
                </li>
                <li><router-link to="#">다운로드</router-link></li>
                <li><router-link to="/notice">공지사항</router-link></li>
                <li><router-link to="/customer">고객문의</router-link></li>
            </ul>
        </nav>
    </header>
</template>
<style scoped lang="scss">
body {
    margin: 0px;
}

body * {
    font-family: NanumBarunGothic, "나눔고딕", NanumGothic, "맑은 고딕", Malgun Gothic, "돋움", Dotum, AppleGothic, sans-serif !important
}

a {
    text-decoration: none;
}

a:link, a:active, a:visited {
    color: #323232;
}

a:hover {
    color: gold;
}

ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
}

header > ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 12px;
}

header > ul > li {
    width: 82px;
    height: 26px;
    text-align: center;
    vertical-align: bottom;
    text-align: center;
    line-height: 38px;
    position: relative;
}

header > ul > li:hover {
    left: 0px;
}

header > ul > li:hover span {
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid #f00;
    z-index: 30;
    position: absolute;
    top: -4px;
    left: 38%;
}

.nav-logo {
    margin: 0px;
    height: 74px;
    line-height: 74px;
    font-size: 32px;
}

.nav-logo span {
    color: gold;
}

nav {
    display: flex;
    justify-content: space-between;
}

.nav-menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.nav-menu > li {
    width: 170px;
    height: 74px;
    text-align: center;
    line-height: 74px;
}

.nav-menu li:hover {
    color: gold;
}

.nav-menu li:nth-child(1) ul, .nav-menu li:nth-child(2) ul {
    display: none;
}

.nav-menu li:nth-child(1):hover .submenu-box,.nav-menu li:nth-child(2):hover .submenu-box {
    display: block;
    z-index: 10;
    position: absolute;
    width: 170px;
}

.submenu-box {
    background: rgba(255, 255, 255, 0.8);
    padding: 20px 0;
    border-radius: 0 0 8px 8px;
    color: #323232;
}

.submenu-box > li {
    font-size: 14px;
    height: 30px;
    line-height: 1.6em;
    transition: hegiht 0.5s;
}

.submenu-box li > a {
    line-height: 1.6em;
    height: 30px;
}

.product-list li{
    display: block;
    width: 252px;
    height: 252px;
    border: 1px solid #e2e2e2;
}

@media screen and (max-width: 415px) {

}
</style>