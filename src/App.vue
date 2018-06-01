<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  data(){
    return{

    }
  },
  components:{

  }
}
</script>

<style>
*,
*:after,
*:before {
    max-height: 100000px;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body,
html {
    background-color: #F5F6F8;
    width: 100%;
    height: 100%;
    font-family: 'Microsoft Yahei' !important;
}
a{
  text-decoration: none;
 color:#708090
}
</style>
