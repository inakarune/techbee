<template>
    <div class="timeline">
        <div class="container left">
            <div class="content">
                <h2>2010's</h2>
                <p><span>2017.01</span>BF 드릴 개발</p>
                <p><span>2013.03</span>CMN 드릴 개발</p>
                <p><span>2009.03</span>스페이드 드릴 개발</p>
            </div>
        </div>
        <div class="container right">
            <div class="content">
                <h2>2000's</h2>
                <p><span>2008.06</span>초경 코팅 특허 획득</p>
                <p><span>2007.03</span>B11 드릴 특허 획득</p>
                <p><span>2007.01</span>실용신안 획득</p>
                <p><span>2006.08</span>알루미늄 커터 생산</p>
                <p><span>2005.05</span>MEC 커터 생산</p>
                <p><span>2005.03</span>B1 드릴 개발</p>
                <p><span>2004.10</span>스페이드 드릴 생산</p>
            </div>
        </div>
        <div class="container left">
            <div class="content">
                <h2>1990's</h2>
                <p><span>1999.04</span>보링바 생산</p>
                <p><span>1995.10</span>엔드밀 커터 생산</p>
                <p><span>1994.04</span>헬리컬 커터 생산</p>
                <p><span>1993.08</span>볼커터 생산</p>
            </div>
        </div>
        <div class="container right">
            <div class="content">
                <h2>1980's</h2>
                <p><span>1988.03</span>스퀘어 숄더 밀링 커터 생산</p>
                <p><span>1988.01</span>한국정밀 설립</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: black;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid gold;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  border: 1px solid black;
  text-align: left;

    & span {
        font-weight: 600;
        margin-right: 20px;
    }
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }
  
  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
    left: 15px;
  }
  
  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>