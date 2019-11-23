<template>
  <section class="about-container">
    <div class="sub-img">
      <ul>
        <li><router-link to="/about/overview">대표이사 인사말</router-link></li>
        <li><router-link to="/about/history">회사연혁</router-link></li>
        <li><router-link to="/about/organization">조직도</router-link></li>
      </ul>
    </div>
    <router-view/>
  </section>
</template>
<style lang="scss">
.about-container {

    .sub-img {
      width: auto;
      height: 350px;
      background: url("../assets/img/mec cutters.jpg");
      background-position: center;
    }
    text-align: center;
  
    & > div > ul {
      display: flex;
      justify-content: space-around;
      z-index: 10;
      margin-top: 296px;
      position: absolute;
      width: 100%;
  
      & > li {
        width: 33.33333%;
        height: 54px;
        line-height: 54px;
        background-color: rgba(0, 0, 0, 0.7);
        font-weight: 900;
        font-size: 20px;
        border-right: 1px solid white;
  
        & > a {
          color: white;
        }
  
        & > li:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
      }
    }
}
</style>
