<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Nav,
    Footer
  }
}
</script>
<style lang="scss">
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
</style>
