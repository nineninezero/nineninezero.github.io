<template>
  <div class="ab_help">
      <div class="help_menu w">
        <div class="help_box" v-for="(item,index) in help_menu" :key="index">
          <img v-if="index===actnum" src="../../assets/imgs/帮助中心小图标问号小图标问号.png" alt="">
          <img v-else src="../../assets/imgs/帮助中心小图标问号黑色.png" alt="">
          <div class="info">
            <h3><a href="javascript:;" @click="change(index)" :class="{active:index===actnum}">{{item.title}}</a></h3>
            <span>{{item.text}}</span>
          </div>
        </div>        
      </div>

      <router-view></router-view>      
  </div>
</template>

<script>
export default {
  data(){
    return{
      actnum:this.$store.state.help_actnum,
      help_menu:[
        {title:"用户注册",text:"用户注册流程视频教学"},
        {title:"企业认证",text:"企业认证流程视频教学"},
        {title:"合同管理",text:"合同管理流程视频教学"},
        {title:"检测申请",text:"检测申请流程视频教学"},
        {title:"追溯申请",text:"追溯申请流程视频教学"},
        {title:"证书管理",text:"证书管理流程视频教学"},
        {title:"常见问题",text:"常见问题解析"}
      ]
    }
  },
  methods:{
    change(index){
      this.actnum=index
      this.$store.state.help_actnum=index
      let pagename
      switch(index){
        case 0:pagename="help_zhuce";
        break;
        case 1:pagename="help_company";
        break;
        case 2:pagename="help_hetong";
        break;
        case 3:pagename="help_check";
        break;
        case 4:pagename="help_follow";
        break;
        case 5:pagename="help_book";
        break;
        case 6:pagename="help_ques";
        break;
      }
      this.$router.push({name:pagename,params:{trydata:pagename}})
      this.$store.state.help_actnum=0 //重置子路由为0
    }
  }
}
</script>


<style lang="scss" scoped>
  .help_menu{
    height: 320px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 100px;
    .help_box{
      width: 25%;
      height: 100px;
      display: flex;
      justify-content: center;
      >img{
        height: 22px;
      }
      .info{
        flex: 1;
        display: flex;
        flex-direction: column;
        a{
          color: #333;
          font-size: 18px;          
        }
        .active{
          color: #1d4c95;
        }
        span{
          font-size: 14px;
          color: #333;
        }
      }
    }
  }
</style>

