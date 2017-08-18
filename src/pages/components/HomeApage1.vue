<template>
  <div id="homeA_page1">
    <div id="homeA_page1_wrapper">
        <div id="header">
          <div id="header_content" class="mountAnim">
              <div class="left" @click="returnPrePage"><i class="el-icon-arrow-left"></i></div>
              <div class="center"><span>homeA_page1</span></div>
              <div class="right"></div>
          </div>
        </div>
        <div id="content" class="mountAnim">
          <div class="row">
            <div class="img"></div>
            <div class="img"></div>
          </div>
          <div class="row">
            <div class="img"></div>
            <div class="img"></div>
          </div>
        </div>
    </div>
  </div>
</template>
<style>
  #homeA_page1 {
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
  }

  #homeA_page1_wrapper {
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  #homeA_page1 #header{
    display: flex;
    flex: 1;
    padding: 0px 10px 0px 10px;
    background-color: #20a0ff;
  }

  #homeA_page1 #header_content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  #homeA_page1 #header span {
    color: white;
  }

  #homeA_page1 #content {
    flex: 12;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  #homeA_page1 #content .row{
    display: flex;
    justify-content: space-around;
  }

  .img {
    width: 150px;
    height: 150px;
    background-image: url("../../../resource/whl1.png");
    background-size:cover;
    opacity: 0;
  }
</style>
<script>
  import 'velocity-animate'
  import 'velocity-animate/velocity.ui.js'
  export default {
    created: function () {
      
    },
    mounted: function () {
      //let main = document.getElementById('homeA_page1');
      let els = document.getElementsByClassName('mountAnim');
      Velocity(els, {opacity: [1, 0], translateX: [0, 75], translateZ: 0},{easing:"easeOutQuart" ,duration: 800});
      setTimeout(()=>{
        els = document.getElementsByClassName('img');
        Velocity(els, "transition.bounceIn", {stagger: '100ms'});
      },500);
    },
    methods: {
      returnPrePage: function () {
        let els = document.getElementsByClassName('mountAnim');
        Velocity(els, {opacity: [0, 1], translateX: [75, 0], translateZ: 0},{easing:"easeOutQuart" ,duration: 800});
        setTimeout(() => {
          this.$router.back();
        },100);
      }
    }
  }
</script>