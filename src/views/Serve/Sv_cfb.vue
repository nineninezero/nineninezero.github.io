<template>
  <div class="cfb">
      <div class="top">
          <img src="../../assets/imgs/同质服务/检测/同质服务-检测banner.jpg" alt="">
      </div>
      <div class="menu w">
          <div class="box" v-for="(item,index) in menulist" :key="index" :class="{active:index===actnum}" @click="changepage(index)">
              <img v-if="index===actnum" :src="item.a_imgurl" alt="">              
              <img v-else :src="item.imgurl" alt="">
              <a href="javascript:;">{{item.text}}</a>
          </div>
      </div>
      <router-view></router-view>
      <bottompath></bottompath>
  </div>
</template>

<script>
export default {
  data(){
      return{
          menulist:[
              {text:"同质检测",imgurl:require("../../assets/imgs/同质服务/同质服务-检测2.gif"),a_imgurl:require("../../assets/imgs/同质服务/同质服务-检测.gif")},
              {text:"同质追溯",imgurl:require("../../assets/imgs/同质服务/同质服务-追溯2.gif"),a_imgurl:require("../../assets/imgs/同质服务/同质服务-追溯.gif")},
              {text:"同质证书",imgurl:require("../../assets/imgs/同质服务/同质服务-证书2.gif"),a_imgurl:require("../../assets/imgs/同质服务/同质服务-证书.gif")}
          ]
      }
  },
  computed:{
      actnum:{
          get(){
            return this.$store.state.serve_actnum;
          },set(){}
      }
  },
  methods:{
      changepage(index){
        this.$store.state.serve_actnum=index
        let pagename
        switch(index){
            case 0:pagename="check";
            break;
            case 1:pagename="follow";
            break;
            case 2:pagename="book";
            break;
        }
        this.$router.push({name:pagename})
    }
  }
}
</script>


<style lang="scss" scoped>
    .top{
        img{
            margin: 0 auto;
        }
    }
    .menu{
        display: flex;
        .box{
            flex: 1;
            height: 200px;
            margin-top: 22px;
            border-bottom: 1px solid #f5f5f5;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            a{
                font-size: 26px;
                color: #464646;
            }
        }
        .active{
            border-color: #1d4c95;
            a{
                color: #1d4c95;
            }
        }
    }
</style>

