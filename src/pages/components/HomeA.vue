<template>
<div id="homeA">
  <div id="header">
    <div id="header_content" class="mountAnim">
        <div class="left"></div>
        <div class="center"><span>homeA</span></div>
        <div class="right"></div>
    </div>
  </div>
  <div id="content" class="mountAnim">
    <button @click="go">go</button>
  </div> 
</div>
</template>
<style>
  #homeA {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  #homeA #header {
    display: flex;
    flex: 1;
    padding: 0px 10px 0px 10px;
    background-color: #20a0ff;
  }

  #homeA #header_content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  #homeA #header span {
    color: white;
  }

  #homeA #content {
    flex: 12;
  }

  #homeA #content span {
    color: black;
  }
</style>
<script>
  import 'velocity-animate'
  import 'velocity-animate/velocity.ui.js'
  export default {
    data: function() {
      return {
        
      }
    },
    mounted: function () {
      let els = document.getElementsByClassName('mountAnim');
      Velocity(els, {opacity: [1, 0], translateX: [0, -75], translateZ: 0},{easing:"easeOutQuart" ,duration: 800});
    },
    beforeDestroy: function () {

    },
    methods: {
      go: function () {
        let main = document.getElementById('homeA');
        Velocity(main, {opacity: [0, 1], translateX: [-75, 0], translateZ: 0},{duration: 800});
        this.$router.push('/homeA/page1')
      },
    }
  }
</script>