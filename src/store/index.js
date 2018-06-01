import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import qs from "qs";
import {
    toNomalTime
} from "../utils/transformTime";

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        //智能客服首语
        robotmsg:[
            {
                name2: "hi,欢迎与我聊天，问我问题哦！",
                user:'机器人大力' ,
                status:false,
        }
        ],

    },
    getters:{
        robotMsgGetter: state =>state.robotmsg,

    },
    mutations:{
        //智能客服消息
        robotMsgMutation(state,data){
            state.robotmsg.push(data)
            console.log(data)
        },
        robotCommonMutation(state,data){
            state.commonproblem.push(data)
            console.log(data)
        }
    },
    actions:{
       //智能客服
       robatMsgAction({
           commit
       },data){
        let config ={
            header:{
               'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
           axios.post('http://172.28.163.163:6550/rotd',qs.stringify(data),config)
           .then(res=>{
               if(res.data.code === 10000){
                   commit('robotMsgMutation',{
                       name2:res.data.text,
                       user:'机器人大力'
                   })
               }else if(res.data.code === 20000){
                   commit('robotMsgMutation',{
                       name2:res.data.text,
                       user:'机器人大力'
                   })
               }
           })
           .catch(err =>{
               console.log(err) 
           })
       },
       //常用问题展示
       async msgLisAction({commit}){
           await axios.get('http://172.28.163.163:6550/dataFromAjax')
           .then(res=>{
               if(res.data.code === 10000){
                   console.log(res.data.text)
                   commit('robotMsgMutation',{
                       name2:res.data.text,
                       user:'机器人大力',
                       status:true
                   })
               }
           })
           .catch(err =>{
               console.log(err.data)
           })
       }
    }
});
export default store;