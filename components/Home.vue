<template>
   
  
        <div class="content">
            <!-- Animated -->
            <div class="animated fadeIn">
              
                <div class="orders">
                  
                <!-- /.orders -->
                <!-- To Do and Live Chat -->
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title box-title">Users</h4>
                                <div class="card-content">
                                    <div >
                                        <div >
                                            <div >
                                                <ul v-for ="(data, index) in name" :key="index">
                                                    <li>
                                                      {{data.title}} {{data.first}} {{data.last}} 
                                                    </li>
                                                   
                                                </ul>
                                            </div>
                                        </div>
                                    </div> <!-- /.todo-list -->
                                </div>
                            </div> <!-- /.card-body -->
                        </div><!-- /.card -->
                    </div>

                   
                </div>
               
             
            </div>
        </div>
     </div>
   
</template>
<script>
    import { mapState, mapActions } from 'vuex'
  export default {
  data(){
    return{
        name:[]
   
    };
  },
  
  mounted(){
  this.GetList();
  },
  computed: {
      ...mapState("login", {
      
        list: (state) => state.list,
      }),
    },
    methods: {
      
      ...mapActions("login", {
        getList: "getList",
      }),
      async GetList() {
        
          await this.getList({
            
          });
        this.list.forEach(element => {
            // alert(JSON.stringify(element.user.name))
            var schedulename ={};
            var title=element.user.name.title;
            var first = element.user.name.first;
            var last = element.user.name.last;
            schedulename['title']=title;
            schedulename['first']=first;
            schedulename['last']=last;
           
         this.name.push(schedulename)
         localStorage.setItem('users',this.name );
        });
      },
    },
  };
  </script>
  
  
  