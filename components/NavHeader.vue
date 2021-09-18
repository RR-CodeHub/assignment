<template>
    <header id="header" class="header">
           <div class="top-left">
               <div class="navbar-header">
                   <!-- <a class="navbar-brand" href="/dashboard"><img src=""alt="Logo"></a> -->
                   <a class="navbar-brand hidden" href="./"><img src="~/assets/images/logo2.png" alt="Logo"></a>
                   <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a>
               </div>
           </div>
           <div class="top-right">
               <div class="header-menu">
                

                   <div class="user-area dropdown float-end mx-5">
                    <a class="nav-link" href="#" @click="GetLogout()"><i class="fa fa-power -off"></i>Logout</a>

                       <div>
                           


                           

                           
                       </div>
                   </div>

               </div>
           </div>
       </header>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
   name:"NavHeader",
   mounted(){
   if(!localStorage.getItem('username')){
     this.$router.push("/");
   }
 },
   computed: { 
   ...mapState({
   
   }), 
 },
 
 methods: {
   ...mapActions( 'login',{
   
     getLogout: "getLogout",
     
   }),

   async GetLogout() {
     await this.getLogout({
     });
   },
  
 },
 
}
</script>