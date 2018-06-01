<template>
    <div class="wrapper">
        <Header></Header>
        <ul>
            <li v-for="(msg,index) in robotMsgGetter" :key="index">
               <chatItem v-if="msg.user" :msg="msg.name2" :name="msg.user" :time="time" :status="msg.status"></chatItem>
               <chatItem v-if="!msg.user" :msg="msg.name2" :me="true" :time="time" :img=img></chatItem>
            </li>
        </ul>
        <div class="input-msg">
             <textarea v-model="inputMsg" ref="message" @keydown.enter.prevent="sendMessage"></textarea>
             <p class="btn" @click="sendMessage" :class="{'enable':inputMsg!=''}">发送</p>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
import Header from 'components/header/header.vue'
import chatItem from 'components/chatItem/chatItem.vue'
import axios from "axios";
import picture from 'components/rootMessage/picture.jpg'

import {
    toNomalTime
} from "../../utils/transformTime";
import {
    mapGetters
}from 'vuex';
export default {
	data() {
		return {
            state:1,
            inputMsg:"",
            time:toNomalTime(Date.parse(new Date()) / 1000),
            img:picture
        }
	},
	components:{
        Header,chatItem
    },
    methods:{
        async sendMessage(){
            if(this.inputMsg.trim() == '') return;
            console.log(1)
            this.$store.commit('robotMsgMutation',{//提交自己的内容
                  name2:this.inputMsg
            })
            await this.$store.dispatch('robatMsgAction',{//提交自己的输入的内容作为参数请求接口异步得来的内容（机器人答案）
                  name2:this.inputMsg
            })
            this.inputMsg=''
        },
        refresh(){
            setTimeout(()=>{
                window.scrollTo(0,document.body.scrollHeight+10000)
            },0)
        },


    },
    watch:{
            robotMsgGetter(){ //数据改变，自动刷新
                this.refresh();
            },
            robotCommonGetter(){
                this.refresh()
            }
        },
    computed:{
        ...mapGetters([
               'robotMsgGetter',
        ])
    },
    mounted(){
        setTimeout(()=>{
            this.refresh()
        },200)
    },
    created(){
        this.$store.dispatch('msgLisAction')
    }
	
}
</script>
<style lang="stylus" scoped>
 .wrapper
   z-index:1
   ul
     display:flex
     flex-direction column
     width 100%
     overflow hidden
     padding-bottom :121px
     li
      margin-top 1.6rem
      padding 0 
   .input-msg
     display:flex
     position:fixed
     width:100%
     z-index:999
     bottom 0rem; 
     height :100px;  
     padding-top 20px
     padding-bottom 20px
     border-top: 1px solid 	#DCDCDC
     background rgb(245,246,248)
     textarea
       width 80%
       margin 0 20px;
       border-radius 6px
       padding-top 10px
       padding-left 8px
       outline :none
       border:none
       resize: none;
       overflow-y :hidden
       -webkit-appearance:none;
       font 30px 'Microsoft Yahei'
       color 	#696969       
     p.btn
       display:flex
       align-items:center
       text-align:center
       justify-content:center
       font-size:26px/*px*/ 
       margin-right:8px   
       height 100%
       width 11%
       background #ccc
       color: #ffffff
       border-radius 6px
       cursor :not-allowed
       font-family :'Microsoft Yahei';
       &.enable{
           background :#ffc125
           cursor: pointer;
       }
</style>