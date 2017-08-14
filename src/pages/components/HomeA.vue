<template>
<div id="homeA">
  <div id="header">
    <span>homeA</span>
  </div>
  <div id="content">
    aaa
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
    flex: 1;
    background-color: #20a0ff;
  }

  #homeA #content {
    flex: 12;
  }
</style>
<script>
  export default {

  }
</script>