import json from '../static/file.json'
const state = {
  
  email:'',
  password:'',
  errormessage:'',
  list:[],
 
  }
  
  // actions 
  const actions = {
  
    getLogin({ commit }, payLoad) {   
      if (payLoad.email == json.username  && payLoad.password == json.password  ) {
        
        commit('setLogin', true);
        commit('setUserEmail', payLoad.email);
        commit('setPassword', payLoad.password);
        this.$router.push("/dashboard");
      }
      else{
        commit('setLogin', false);
        commit('setErrorMessage', "Invalid User");
      }
     
    },
    getLogout({ commit }, ) {
  
        
      commit('setLogin', false);
      commit('setUserEmail', '');
      commit('setPassword', '');
      this.$router.push("/");
  
    },
    //get list
    async getList({ commit }, payLoad) {
    
      try {
        const response = await this.$axios.$get('https://randomuser.me/api/0.8/?results=20')
        console.log(response.results)
          commit('setAllList', response.results);
        
      }
      catch (err) {
       
      }
  
    },
 
  }
  
  // mutations 
  const mutations = {
    setLogin(state, data) {
      state.login = data;
    },
    setErrorMessage(state, data) {
      state.errormessage = data;
    },
    setUserEmail(state, data) {
      state.email = data;
      localStorage.setItem('username', data);
    },
    setPassword(state, data) {
      state.password = data;
      localStorage.setItem('password', data);
    },
    setAllList(state, data) {
      state.list = data;
      
    },
   
  
  }
  
  // getters
  const getters = {

  
    errormessage: () => {
      return state.errormessage;
    },
    userEmail: () => {
      return state.email;
    },
    password: () => {
      return state.password;
    },
    list: () => {
      return state.list;
    },
  
  
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };