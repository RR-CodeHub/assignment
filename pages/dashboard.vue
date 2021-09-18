<template>
    <div>
      <Sidebar />
  
      <div id="right-panel" class="right-panel">
        <NavHeader />
       
        <Home/>
        <div class="clearfix"></div>
      
      </div>
    </div>
  </template>
  <script>
  import NavHeader from "~/components/NavHeader.vue";
  import Sidebar from "~/components/Sidebar.vue";
  import Home from "~/components/Home.vue";
  export default {
    
  };
  </script>