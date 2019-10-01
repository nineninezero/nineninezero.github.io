<template>
    <div class="foot">
      <div class="foot_menu">
        <div class="foot_menu_main w">
          <ul class="fm_list"><li  v-for="(item,index) in footmenu" :key="index"><a href="javascript:;" @click="changepage(index)">{{item}}</a></li></ul>
          <div class="fm_phone">服务热线：<span>020-3121 0275</span></div>
        </div>
      </div>
      <div class="foot_bottom">
        <div class="fb_list w">友情链接：<ul><li  v-for="(item,index) in friendlink" :key="index">{{item}}</li></ul></div>
        <div class="fb_last w">
          <div class="fb_left"><span>国家汽车零部件产品质量监督检验中心</span><span>长春市标准研究院</span><span>广州圣云品配网络科技有限公司</span></div>
          <div class="fb_right">
            <div>
              <div class="ewm"><img src="../assets/imgs/二维码.png" alt="">公众号</div>
              <img src="../assets/imgs/工商网监.png" alt="">
            </div>
            <span>圣云品配&copy;版权所有 粤ICP备18061253号-1</span>
          </div>
        </div>
      </div>
    </div>  
</template>

<script>
export default {
  data(){
      return{
        footmenu:["首页","关于我们","联系我们","帮助中心","企业入驻","法律声明","服务条款","友情链接合作"],
        friendlink:["国家食品（产品）安全追溯平台","|","长春市食品追溯平台","|","国检中心","|","圣云品配","|","圣贤通","|","快递查询"]          
      }
  },
  methods:{
      changepage(index){
          let pagename;
          switch(index){
              case 0:pagename="shouye";this.$store.state.home_actnum=0;
              break;
              case 1:pagename="ab_about";this.$store.state.about_actnum=0;
              break;
              case 2:pagename="ab_connect";this.$store.state.about_actnum=1;
              break;
              case 3:pagename="help_zhuce";this.$store.state.about_actnum=2;
              break;
              case 4:pagename="zhuce";this.$store.state.home_actnum=null;
              break;
              case 5:pagename="ab_law";this.$store.state.about_actnum=3;
              break;
              case 6:pagename="ab_serve";this.$store.state.about_actnum=5;
              break;
              case 7:pagename="ab_partner";this.$store.state.about_actnum=6;
              break;
          }
          this.$router.push({name:pagename})
          window.scrollTo(0,0);
      }
  }
}
</script>

<style lang="scss" scoped>
.foot{
  .foot_menu{
    height: 90px;
    background-color: #0a2855;
    .foot_menu_main{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      ul{
        height: 100%;
        display: flex;
        align-items: center;
        li{
          margin-right: 50px;
        }
      }
      .fm_phone{
        color: white;
        height: 100%;
        display: flex;
        align-items: center;
        span{
          font-size: 26px;
          font-weight: bold;
        }
      }
    }
  }
  .foot_bottom{
    height: 270px;
    background-color: #1d4c95;
    .fb_list{
      height: 100px;
      border-bottom: 1px solid #3187cd;
      color: white;
      display: flex;
      align-items: center;
      ul{
        height: 100%;
        display: flex;
        align-items: center;
        li{
          margin-right: 10px;
        }
      }
    }
    .fb_last{
        color: white;      
      display: flex;
      justify-content: space-between;
      .fb_left{
        display: flex;
        flex-direction: column;
        margin-top: 25px;
      }
      .fb_right{
        width: 260px;
        display: flex;
        flex-direction: column;
        >div{
          height: 100px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          >img{
            width: 140px;
          }
          .ewm{
            text-align: center;
          }
          span{
            font-style: 13px;
          }
        }
        >span{
          font-size: 13px;
        }
      }
    }
  }
}
</style>


