<template>
  <body class="bg-dark" >

    <div class="sufee-login d-flex align-content-center flex-wrap">
        <div class="container">
            <div class="login-content">
                <div class="login-logo">
                    <a href="index.html">
                        <!-- <img class="align-content" src="~/assets/images/logo.png" alt=""> -->
                        
                    </a>
                </div>
                <div class="login-form "  >
                    <form @submit.prevent="GetLogin">
                  
                        <div class="form-group">
                            <label>User Name</label>
                            <input type="text" class="form-control" placeholder="User name"
                            v-model="Email" />
                           
                            
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Password"v-model=" Password"  />
                            
                        </div>
                       <span style="color:red">{{errormessage}}</span>
                        <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                    
                    </form>
                </div>
            </div>
        </div>
    </div>
  </body>
 
</template>

<script>
  import { mapState, mapActions } from 'vuex'
export default {
data(){
  return{
 Email:"",
 Password:"",
 
  };
},

mounted(){

},
computed: {
    ...mapState("login", {
    
      errormessage: (state) => state.errormessage,
    }),
  },
  methods: {
    
    ...mapActions("login", {
      getLogin: "getLogin",
    }),
    async GetLogin() {
      
        await this.getLogin({
          email: this.Email,
          password: this.Password,
        });
      
    },
  },
};
</script>

}
</script>
