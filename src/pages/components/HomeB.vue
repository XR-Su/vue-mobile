<template>
<div id="homeB">
  <div id="header">
    <span>homeB</span>
  </div>
  <div id="content">
    bbb
  </div> 
</div>
</template>
<style>
  #homeB {
    display: flex;
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

  #homeB #content {
    flex: 12;
  }  
</style>
<script>
  export default {

  }
</script>