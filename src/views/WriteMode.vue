<template>
<div>
    <div class="write-mode">
        <input type="text" v-model="title" class="title-input">
        <textarea v-model="content" class="content-input"></textarea>
        <button @click="register" class="register-btn">Register</button>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component
export default class WriteMode extends Vue {
    private title: string = '';
    private content: string = '';

    private register() {
        const date = new Date().toString().split('GMT')[0].trim();
        firebase.firestore().collection('notice').doc(date).set({
            title: this.title,
            content: this.content,
            date: date
        }).then(() => {
            console.log('success!');
        }).catch(() => {
            console.log('fail');
        });
    }
}
</script>
<style lang="scss" scoped>
.write-mode {
    width: 80%;
}
.content-input {
    border: 1px solid #ddd;
    width: 100%;
    padding: 15px;
    font-size: 15px;
    margin-top: 15px;
    box-sizing: border-box;
    min-height: 400px;
}
.register-btn {
    background-color: #323232;
    color: white;
    padding: 15px;
    border-radius: 5px;
    display: block;
    margin: 15px auto;
}
.register-btn:hover {
    color: gold;
}
.title-input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 15px;
    display: block;
    width: 100%;
    box-sizing: border-box;
}
</style>
