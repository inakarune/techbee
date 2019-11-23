<template>
    <section class="product-container">
        <div class="sub-img">
            <ul class="tab-submenu">
                <li><router-link to="/product/drill">Hole making</router-link></li>
                <li><router-link to="/product/finishing">Hole finishing</router-link></li>
                <li><router-link to="/product/cutter">Milling cutter</router-link></li>
                <li><router-link to="/product/tooling">Tooling system</router-link></li>
                <li><router-link to="/product/accessary">Accessary</router-link></li>
            </ul>
        </div>
         <router-view/>
    </section>
</template>
<style lang="scss" scoped>
.product-container {

    .sub-img {
      width: auto;
      height: 350px;
      background: url("../assets/img/drill.jpg");
      background-position: center;
    }
    text-align: center;
  
    & > div > .tab-submenu {
      display: flex;
      justify-content: space-around;
      z-index: 10;
      margin-top: 296px;
      position: absolute;
      width: 100%;
  
      & > li {
        width: 20%;
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