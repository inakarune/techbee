<template>
    <div class="login-box">
        <form>
            <input type="text" placeholder="id">
            <input type="password" placeholder="password">
            <input type="button" value="login">
        </form>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {

}
</script>
<style lang="scss" scoped>
.login-box {
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 11;
    display: flex;
    justify-content: center;
}
.login-box form {
    margin: 200px;
    display: block;
    width: 300px;
    background-color: white;
    flex-direction: column;
    padding: 30px;
    border-radius: 10px;
    height: max-content;

    & > input[type=text], & > input[type=password] {
        width: 94%;
    }

    & > input:nth-child(1), & > input:nth-child(2) {
        padding: 7px;
    }

    & > input:nth-child(2) {
        margin-bottom: 10px;
    }
}

.login-box form input[type=button] {
    display: block;
    border: 1px solid gold;
    background-color: gold;
    color: white;
    width: 100%;
    border-radius: 5px 5px 5px 5px;
    font-size: 16px;
    padding: 10px;
    font-weight: 900;
}
</style>