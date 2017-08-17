<template>
<div id="homeB">
  <div id="homeB_wrapper">
      <div id="header">
        <div class="left"></div>
        <div class="center"><span>homeB</span></div>
        <div class="right"></div>
      </div>
      <div id="content">
        bbb
      </div> 
  </div>
</div>
</template>
<style>
  #homeB {
    display: flex;
    height: 100%;
    width: 100%;
  }

  #homeB_wrapper {
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  #homeB #header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    background-color: #20a0ff;
  }

  #homeB #header span {
    color: white;
  }

  #homeB #content {
    flex: 12;
  }  
</style>
<script>
  export default {

  }
</script>