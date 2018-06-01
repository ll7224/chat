<template>
    <div class="header">
         <div class="back">
             <a href="javascript:history.go(-1)"><img class="" :src="back"></a>
        </div>
        <div class="title">格力客服</div>
        <div class="service">
            <a href="http://zxkf.gree.com/zxkf/chatClient/chatbox.jsp?companyID=8942&configID=11&skillId=1&enterurl=&k=1"><img class="serviceLogo" :src="service"></a>
            <br>
            <span class="Mservice"><a href="http://zxkf.gree.com/zxkf/chatClient/chatbox.jsp?companyID=8942&configID=11&skillId=1&enterurl=&k=1">人工客服</a></span>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
import back from '../../components/header/back.png';
import service from '../../components/header/service.png'
export default{
      data(){
          return{
               back:back,
               service:service
          }
      }
  }
</script>
<style lang="stylus" scoped>
 .header
    display:flex
    width:100%
    height:90px;
    background:rgb(137,195,252)
    z-index 9
    position fixed
    flex-direction: row;
    .back
      flex :1
      float:left
      margin-top 10px;
    .title
      flex :1
      float:left
      margin-top 24px;
      text-align center
      font-size:30px /*px*/
    .service
      flex :1
      margin-top 15px;
      text-align right 
      
      .serviceLogo
          height 36px
          width 36px 
          margin-right 20px
      .Mservice
        display:block
        font-size:18px /*px*/
        margin-right 10px
        color #708090
</style>