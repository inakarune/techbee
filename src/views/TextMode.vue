<template>
    <section class="textbox-container">
        <form method="post">
            <input type="text" placeholder="title">
            <textarea placeholder="contents"></textarea>
            <input type="button" value="submit">
        </form>
    </section>
</template>
<style lang="scss" scoped>
.textbox-container {
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 11;
    display: flex;
    justify-content: center;
}
.textbox-container form {
    margin: 200px;
    display: block;
    width: 300px;
    background-color: white;
    flex-direction: column;
    padding: 30px;
    border-radius: 10px;
    height: max-content;

    & > input[type=text], & > textarea {
        width: 94%;
        padding: 7px;
    }

    & > textarea {
        margin-top: 10px;
        margin-bottom: 10px;
        height: 200px;
    }
}

.textbox-container form input[type=button] {
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