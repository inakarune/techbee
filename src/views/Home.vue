<template>
    <main> 
        <div class="slider-container">
            <section class="slider-box" :style="{ left: '-' + left + 'px' }">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            <div class="dot-box">
                <span v-bind:class="{ on: dot === 0, off: dot !== 0 }"></span>
                <span v-bind:class="{ on: dot === 1, off: dot !== 1 }"></span>
                <span v-bind:class="{ on: dot === 2, off: dot !== 2 }"></span>
                <span v-bind:class="{ on: dot === 3, off: dot !== 3 }"></span>
                <span v-bind:class="{ on: dot === 4, off: dot !== 4 }"></span>
            </div>
        </div>
        <section>
            <ul class="four-box">
                <li><p>회사소개</p></li>
                <li><p>제품정보</p></li>
                <li><p>홍보자료</p></li>
                <li><p>고객문의</p></li>
            </ul>
        </section>
    </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Home extends Vue {
    private dot: number = 0;
    private left: number = 0;
    private timer: any;

    private mounted() {
        let that = this;
        this.timer = setInterval(function() {
            if (that.dot === 4) {
                that.dot = 0;
                that.left = 0;
            } else if (that.dot < 4) {
                that.dot += 1;
                that.left += window.innerWidth;
            }
        }, 2000);
    }

    private circle(): void {
    }
}
</script>

<style lang="scss">
.slider-container {
    position: relative;
}
.on {
    background-color: gold;
}
.off {
    background-color: white;
}
.dot-box {
    position: absolute;
    text-align: center;
    bottom: 10px;
    width: 100%;

    & > span {
        margin-right: 5px;
        width: 54px;
        height: 8px;
        display: inline-block;
    }
}
.slider-box {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 700px;
    white-space: nowrap;
}
.slider-box > ul {
    position: absolute;
    left: 0px;
    margin: 0;
    padding: 0;
    width: 500vw;
    transition: all 500ms ease-in-out;
}
.slider-box li {
    width: 100vw;
    height: 700px;
    float: left;
    display: block;
}
.slider-box li:nth-child(1) {
    background: url("../assets/img/drill.jpg");
    background-size: cover;
}
.slider-box li:nth-child(2) {
    background: url("../assets/img/drill2.jpg");
    background-size: cover;
}
.slider-box li:nth-child(3) {
    background: url("../assets/img/drill3.jpg");
    background-size: cover;
}
.slider-box li:nth-child(4) {
    background: url("../assets/img/224.jpg");
    background-size: cover;
}
.slider-box li:nth-child(5) {
    background: url("../assets/img/210.jpg");
    background-size: cover;
}

.four-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 36px;
}

.four-box li {
    width: 286px;
    height: 202px;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.four-box li:hover p {
    background-color: gold;
    border-color: gold;
}

.four-box li:nth-child(1), .four-box li:nth-child(2), .four-box li:nth-child(3) {
    margin-right: 15px;
}  

.four-box li p {
    display: block;
    border: 2px solid white;
    width: 94px;
    height: 44px;
    color: white;
    text-align: center;
    line-height: 44px;
}
</style>
