<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
        console.log("加载读取中...")
    } 
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
        console.log("页面刷新")        
    })

  },
  watch:{
 
  }
}
</script>


<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
  }
  a{
    text-decoration: none;
    display: block;
  }
  ul{
    list-style: none;
  }
  img{
    display: block;
  }
  input,button,textarea{
    outline: none;
    resize: none;
    border: none;
  }
  button{
    cursor: pointer;
  }

  .w{
    width: 1200px;
    margin: 0 auto;
  }
  .isfix{
    position: fixed;
    top: 0;
  }
  .clearfix::before,
  .clearfix::after { 
    content:"";
    display:table;
  }
  .clearfix::after {
    clear:both;
  }
  .clearfix {
    *zoom:1;
  } 
</style>
