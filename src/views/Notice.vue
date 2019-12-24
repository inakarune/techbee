<template>
    <section>
        <Login v-if="toggle" />
        <TextMode v-if="writeToggle" />
        <div class="sub-img">
        <ul>
            <li>공지사항</li>
        </ul>
    </div>
        <p class="total-box">
            <span>total 0건 1페이지</span>
            <button class="login-btn">write</button>
            <button class="login-btn" v-on:click="toggle = !toggle">login</button>
        </p>        
        <table class="notice">
            <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col">글쓴이</th>
                    <th scope="col">날짜</th>
                    <th scope="col">조회</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="5" align="center">게시물이 없습니다.</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/views/Login.vue';
import TextMode from '@/views/TextMode.vue';

@Component({
    components: {
        Login,
        TextMode
    }
})
export default class Notice extends Vue {
    private toggle: boolean = false;
    private writeToggle: boolean = false;
}
</script>
<style lang="scss">
.sub-img {
    width: auto;
    height: 350px;
    background: url("../assets/img/0121.jpg");
    background-position: center;

    & ul > li {
        width: 33.33333%;
        height: 54px;
        line-height: 54px;
        background-color: rgba(255, 255, 255, 1);
        font-weight: 900;
        font-size: 20px;
        color: black;
        text-align: center;
    }
}

.sub-img ul {
    display: flex;
    justify-content: space-around;
    z-index: 10;
    margin-top: 296px;
    position: absolute;
    width: 100%;
}
.total-box {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 64px 50px 0px 50px;

    & > span {
        flex-grow: 2;
        font-size: 12px;
    }
}
table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 90%;
}

thead th {
    padding: 12px 0;
    border-top: 1px solid #d1dee2;
    border-bottom: 1px solid #d1dee2;
    background: #e5ecef;
    color: #383838;
    font-size: 0.95em;
    text-align: center;
    letter-spacing: -0.1em;
}

td {
    border-bottom: 1px solid #e9e9e9;
    line-height: 1.5em;
    word-break: break-all;
}

.notice {
    margin-bottom: 64px;
    margin-right: 50px;
    margin-left: 50px;
}
.login-btn {
    background-color: gold;
    color: white;
    border: none;
}
</style>