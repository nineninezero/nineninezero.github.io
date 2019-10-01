<template>
  <div class="home">
    <!-- 顶部 -->
    <div class="top" :class="{mb50:scrollTop>=100}">
      <div class="top_main w">
        <h1><a href="javascript:;"><img src="../assets/imgs/logo.png" alt=""></a></h1>
        <div class="top_title"><h2>中国同质汽车零部件产品标准/检测/追溯/认证服务平台</h2><span>China homogeneous auto parts testing,certification,traceability service platform</span></div>
        <div class="top_user"><span>商家系统</span><a href="javascript:;" @click="changePage(100)">登陆</a>/<a href="javascript:;" @click="changePage(101)">注册</a></div>
      </div>
    </div>
    <!-- 顶部菜单 -->
    <div class="top_menu" :class="{isfix:scrollTop>=100}">
      <div class="top_menu_main w" id="top_menu_main">
        <ul>
          <li v-for="(item,index) in topmenu" :key="index"><a href="javascript:;" :class="{active:index===actnum}" @click="changePage(index)">{{item}}</a></li>
        </ul>
        <div class="slide_menu">
          <ul>
            <li v-for="(item,index) in slidemenu" :key="index"><a href="javascript:;" @click="slideChange(index)">{{item}}</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 页面内容 -->
    <router-view></router-view>

    <!-- 底部 -->
    <pagefooter></pagefooter>

    <!-- 侧边客服栏 -->
    <div class="kefu">
      <div class="kefu_top">
        <a href="javascript:;" class="title">客服咨询</a>
        <a href="javascript:;"><img src="../assets/imgs/qq图标.png">客服专员</a>
        <a href="javascript:;"><img src="../assets/imgs/qq图标.png">客服专员</a>
        <a href="javascript:;" class="wx"><img src="../assets/imgs/wx图标.png">微信咨询</a>
      </div>
      <div class="kefu_bottom">
        <a href="javascript:;" class="title">技术咨询</a>    
        <a href="javascript:;"><img src="../assets/imgs/qq图标.png">技术专员</a>        
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      scrollTop:0,
      topmenu:["首页","同质服务","同质供应商","关于圣云","行业活动","新闻动态"],
      slidemenu:["同质检测","同质追溯","同质证书","同质标准库"]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)// 头部滚动固定监听

    $("#top_menu_main>ul>li:nth-child(2)").on("mouseover",function(){    
      $(".slide_menu").show().on("mouseover",function(){
        $(this).show().on("mouseout",function(){
          $(this).hide()
        })
      })
    }).on("mouseout",function(){
      $(".slide_menu").hide()       
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch:{
    //监听路由变化判断底部背景色
    $route(to,from){
      if(to.name==="help_ques"){
        this.$store.state.bgc="#fff";
      }else{
        this.$store.state.bgc="#f8f8f8";        
      }
    }
  },
  computed:{
    actnum:{
      get(){
        return this.$store.state.home_actnum;
      },set(){} //computed里的，get获取监控数据，set触发动作
    }
  },
  methods:{
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop=scrollTop
    },
    changePage(index){
      this.$store.state.home_actnum=index
      let pagename
      switch(index){
        case 0:pagename="shouye";
        break;
        case 1:pagename="serve";
        break;
        case 2:pagename="supply";
        break;
        case 3:pagename="about";
        break;
        case 4:pagename="activity";
        break;
        case 5:pagename="news";
        break;
        case 100:pagename="login";
        break;
        case 101:pagename="zhuce";
        break;
      }
      this.$router.push({name:pagename})
      this.$store.state.about_actnum=0 //跳大路由后，把小路由重置0页    
      this.$store.state.help_actnum=0  
      window.scrollTo(0,0);
    },
    slideChange(index,data){
      this.$store.state.serve_actnum=index
      let pagename
      switch(index){
        case 0:pagename="check";
        break;
        case 1:pagename="follow";
        break;
        case 2:pagename="book";
        break;
        case 3:pagename="serve";
        break;
      }
      this.$router.push({name:pagename})    
      this.$store.state.home_actnum=1
      this.actnum=1
      $(".slide_menu").hide()     
      window.scrollTo(0,0); 
    }
  }
}
</script>

<style lang="scss" scoped>
.top{
  height: 90px;
  background:rgba(30,75,150,1);
  color: white;
  .top_main{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .top_title{
      flex: 1;
      height: 60px;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h2{
        font-size:26px;
        font-weight:400;
        color:rgba(255,255,255,1);
      }
      span{
        font-size:15px;
        font-weight:bold;
      }
    }
    .top_user{
      width:170px;
      height:34px;
      border:1px solid rgba(214, 215, 216, 1);
      border-radius:5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a{
        font-weight: bolder;
      }
    }
  }
}
.mb50{
  margin-bottom: 53px;
}

.top_menu{
  width: 100%;
  height: 53px;
  font-size:18px;
  padding-left: 40px;
  background-color: #0a2855;
  z-index: 9;
  .top_menu_main{
    position: relative;
    height: 100%;
    ul{
      height: 100%;
      display: flex;
      align-items: center;
      li{
        height: 100%;
        color: white;
        margin-right:100px;
        display: flex;
        align-items: center;
      }
      .active{
        color: #83cde3;
      }
    }
    .slide_menu{
      width: 120px;
      background-color: rgba(10,40,85,.8);
      margin-left: 110px;
      display: none;
      ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        li{
          width: 100%;
          margin-left: 100px;
          a{
            width: 100%;
            height: 36px;
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          a:hover{
            background-color: rgba(10,40,85,1);            
          }
        }
      }
    }
  }
}

.kefu{
  position: fixed;
  right: 0;
  top: 30%;
  width: 100px;
  padding: 0 10px;
  font-size: 14px;
  color: #fff;
  background-color: rgba(30,75,150,.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 20px;
    height: 20px;
  }
  >div{
    width: 100%;
    >a:last-child{
      border-bottom:none;
    }
  }
  a{
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title{
    font-size: 16px;
    justify-content: center;
    cursor: default;
  }
}
</style>
