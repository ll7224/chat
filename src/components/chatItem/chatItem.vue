<template>
    <div class="chat-item">
        <div v-if="!me" class="otherrole">
            <img :src="service" alt="" class="img">
            <div class="role"><span v-if="name">{{name}}</span><span v-if="time">{{time}}</span></div>
            <div class="msg" v-if="!status"><span>{{msg}}</span></div>
            <div class="msg" v-if="status"><span class="commontitle">热门问题</span>
                <ul>
                    <li v-for="(i,index) in msg" :key="index" :class="`list-item-${index}`" @click="sendCommont(i)" :value="i">{{i}}</li>
                </ul>        
            </div>
        </div>
        <div v-if="me" class="myrole">
            <img :src="img" alt="" class="img">
            <div class="role"><span v-if="time">{{time}}</span ><span v-if="name">{{name}}</span></div>
            <div class="msg">{{msg}}</div>      
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
import service from 'components/rootMessage/service.png'
import {
    mapGetters
}from 'vuex';
    export default {
        name: 'chat-item',
        props: ['me', 'name', 'img', 'msg', 'time','href','status','msg2'],
        components: {},
        data() {
            return {
                service:service,
                url:'',
                aclick:false
            };
        },
        methods:{
            async sendCommont(i){
                 this.$store.commit('robotMsgMutation',{//点击提交自己的内容
                     name2:i
                 })
                 await this.$store.dispatch('robatMsgAction',{//将点击内容作为参数异步提交获取内容
                     name2:i
                 })
            }
        },
        computed:{
            ...mapGetters([
                 'robotMsgGetter',
            ]),
            // msgMessage(msg){
            //      let isurl = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
            //          if(!isurl.test(msg)){
                                
            //                      return msg 
            //          }else{
            //                return this.aclick = true
            //                 return this.url = msg
            //                 return msg
            //          }
                
            // }

            
        },
    
        watch: {
            
        },
    
        // methods: {
        //     lookInfo(){
        //         console.log('href',this.href)
        //         this.$router.push(`/user_info/${this.href}`)
        //     }
        // }
    }
</script>
<style lang="stylus" scoped>
      .chat-item
          width 100%
          margin 20px 0;
          .otherrole
             width 100%
             position relative
             .img
               width 80px
               height 80px
               border-radius 50%
               top 50%
               left 0.2rem
               transform :translateY(-50%)
               position absolute
             .role
               position absolute
               font-size 26px
               top -0.5rem
               left 110px
               color #686868
               span 
                  padding-right 20px
               span:nth-child(2)
                  font-size 18px
             .msg
               float:left
               max-width 60%
               background-color #ffffff
               margin-left 110px
               padding 20px
               border-radius 10px
               font-size 28px /*px*/
               line-height 36px
               &.astyle
                 cursor:none;
               .commontitle
                 display:block
                 border-bottom:1px solid #EDEDED
                 padding-bottom:10px
               ul
                margin-left 20px
                li
                  list-style:none
                  counter-reset counter
                  color:#63B8FF
                  padding 10px 0
                  &::before
                     content:"●"
                     color:#CCCCCC
                     padding-right 8px
          .myrole
             width 100%
             position relative
             .img
               width 80px
               height 80px
               border-radius 50%
               right 0
               position absolute
               top 50%
               right 20px
               transform translateY(-10%)
             .role
               font-size 26px
               right 110px
               position absolute
               top 0px
               color #686868
               span 
                 padding-left 20px
               span:nth-child(1)
                 font-size 18px
              .msg
                float right 
                max-width 60%
                background-color #4290F7
                padding 20px
                margin-right 110px
                border-radius 10px
                margin-top 50px
                font-size 28px/*px*/
                line-height 36px
                color #fff
</style>
