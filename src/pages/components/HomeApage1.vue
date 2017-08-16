<template>
  <div id="homeA_page1">
    <div id="header">
      <div id="header_content" class="mountAnim">
          <div class="left" @click="returnPrePage"><i class="el-icon-arrow-left"></i></div>
          <div class="center"><span>homeA_page1</span></div>
          <div class="right"></div>
      </div>
    </div>
    <div id="content" class="mountAnim">
      homeAChilren
    </div>
  </div>
</template>
<style>
  #homeA_page1 {
    display: flex;
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
    },
    methods: {
      returnPrePage: function () {
        let els = document.getElementsByClassName('mountAnim');
        Velocity(els, {opacity: [0, 1], translateX: [75, 0], translateZ: 0},{easing:"easeInQuad" ,duration: 800});
        setTimeout(() => {
          this.$router.back();
        },1000);
      }
    }
  }
</script>