<template>
<div id="homeA">
  <div id="header">
    <div class="left"></div>
    <div class="center"><span>homeA</span></div>
    <div class="right"></div>
  </div>
  <div id="content">
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
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex: 1;
    background-color: #20a0ff;
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
    methods: {
      go: function () {
        this.$router.push('/homeA/page1')
      },
    }
  }
</script>