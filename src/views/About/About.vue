<template>
  <div class="about">
      <div class="top">
          <img src="../../assets/imgs/关于圣云_02.jpg" alt="">
      </div>
      <div class="top_menu">
          <div class="top_menu_main w">
              <ul>
                <li v-for="(item,index) in topmenu" :key="index" :class="{active:index===actnum}" @click="changePage(index)">
                    <a href="javascript:;" @click="changePage(index)"><img :src="item.imgurl" v-if="actnum==index"><span>{{item.text}}</span><img src="../../assets/imgs/下拉箭头.png" v-if="actnum==index"></a>
                </li>
              </ul>
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
        topmenu:[
            {"imgurl":require("../../assets/imgs/关于圣云_04.jpg"),"text":"关于我们"},
            {"imgurl":require("../../assets/imgs/关于圣云-联系我们.jpg"),"text":"联系我们"},
            {"imgurl":require("../../assets/imgs/关于圣云-帮助中心.jpg"),"text":"帮助中心"},
            {"imgurl":require("../../assets/imgs/关于圣云-法律声明.jpg"),"text":"法律声明"},
            {"imgurl":require("../../assets/imgs/关于圣云-隐私保护.jpg"),"text":"隐私保护"},
            {"imgurl":require("../../assets/imgs/关于圣云-服务协议.jpg"),"text":"服务协议"},
            {"imgurl":require("../../assets/imgs/关于圣云-合作链接.jpg"),"text":"合作链接"}
        ]
      }
  },
  computed:{
      actnum:{
          get(){
              return this.$store.state.about_actnum;
          },set(){}
      }
  },
  methods:{
      changePage(index){
        this.$store.state.about_actnum=index
        let pagename
        switch(index){
            case 0:pagename="ab_about";
            break;
            case 1:pagename="ab_connect";
            break;
            case 2:pagename="ab_help";
            break;
            case 3:pagename="ab_law";
            break;
            case 4:pagename="ab_secret";
            break;
            case 5:pagename="ab_serve";
            break;
            case 6:pagename="ab_partner";
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
            width: 100%;
            margin: 0 auto;
        }
    }
    .top_menu{
        height: 100px;
        background-color: #F8F8F8;
        .top_menu_main{
            height: 100%;
            ul{
                height: 100%;                
                display: flex;
                justify-content: space-around;
                li{
                    width: 120px;
                    height: 100%;
                    z-index: 2;
                    a{
                        flex: 1;
                        height: 100%;
                        color: #000;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                    }
                }
                .active{
                    a{
                        height: 120px;
                        position: relative;                        
                        color: #fff;
                        justify-content: flex-end;
                        img:first-child{
                            position: absolute;
                            top: 0;
                        }
                        span{
                            z-index: 2;
                            margin-bottom: 5px;
                            font-size: 18px;
                            font-weight: 400;
                        }
                        img:last-child{
                            z-index: 2;
                        }
                    }
                }
            }
        }
    }
</style>

