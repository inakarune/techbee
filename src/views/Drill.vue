<template>
    <ul class="product-list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</template>
<style lang="scss">
@import url(../assets/css/list.scss);

.product-list {

    & > li:nth-child(1) {
        background: url(../assets/img/b1-drill.jpg);
        background-size: cover;
        background-position: center;
    }

    & > li:nth-child(2) {
        background: url(../assets/img/b2-drill.jpg);
        background-size: cover;
        background-position: center;
    }

    & > li:nth-child(3) {
        background: url(../assets/img/b4-drill.jpg);
        background-size: cover;
        background-position: center;
    }

    & > li:nth-child(4) {
        background: url(../assets/img/b5-drill.jpg);
        background-size: cover;
        background-position: center;
    }

    & > li:nth-child(5) {
        background: url(../assets/img/b5-drill.jpg);
        background-size: cover;
        background-position: center;
    }

    & > li:nth-child(6) {
        background: url(../assets/img/b7-drill.jpg);
        background-size: cover;
        background-position: center;
    }
}

@media screen and (max-width: 415px) {
    .product-list {
        margin: 0;
        width: auto;
    }
}
</style>