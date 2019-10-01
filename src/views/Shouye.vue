<template>
  <div class="shouye">
    <div class="part1">
    </div>
    <div class="p1_bottom">
      <div class="p1_bt_main w">
        <!-- <span>正在检测：XXXXXXXX汽车零部件有限公司</span> -->
        <span class="p1_left">正在检测：<div><ul><li v-for="(item,index) in company1" :key="index">{{item}}</li></ul></div></span>
        <span class="p1_right">检测完成：<div><ul><li v-for="(item,index) in company2" :key="index">{{item}}</li></ul></div></span>
      </div>
    </div>
    <div class="part2">
      <div class="part2_main w">
        <div class="p2_title"><h2>我们的服务</h2><span>OUR SERVICES</span><div class="line"></div></div>
        <div class="p2_boxs w">
          <div class="p2_left">
            <div class="blue_box text_box"><img src="../assets/imgs/国检.png" alt=""></div>
            <div class="white_box text_box">
              <h3>同质检测服务</h3>
              <a href="javascript:;" class="p2_btn" @click="changepage('rq_check')">检测申请</a>
            </div>
          </div>
          <div class="p2_right">
            <div class="white_box text_box"><img src="../assets/imgs/标准院.png" alt=""></div>
            <div class="blue_box text_box">
              <h3>同质追溯服务</h3>
              <a href="javascript:;" class="p2_btn">追溯申请</a>
            </div>            
          </div>
        </div>
      </div>
    </div>
    <div class="part3">
      <div class="part3_main w">
        <div class="p3_text">
          <div class="p3_title">
            <h2>同质服务流程</h2>
            <span>SERVICE PROCESS</span>
            <div class="line"></div>
          </div>
          <div class="p3_boxs">
            <a href="javascript:;" class="p3_box" v-for="(item,index) in p3_boxs" :key="index" @mouseover="changebox(index+1)" @mouseout="recovebox(index+1)">
              <img :src="item.imgurl" alt="">
              <span>{{item.text}}</span>
            </a>
          </div>
        </div>
        <a href="javascript:;" class="p3_btn">了解更多</a>
      </div>
    </div>
    <div class="part4">
      <div class="part4_main w">
        <div class="p4_text">
          <a href="javascript:;" class="p4t_1" @mouseover="changeblue(1)" @mouseout="recoveblue(1)" @click="changepage('check',0)">
            <h3>同质检测价值</h3>
            <span>提升品牌价值,提升品牌知名度</span>
            <span>提高用户认可度</span>
          </a>
          <a href="javascript:;" class="p4t_2" @mouseover="changeblue(2)" @mouseout="recoveblue(2)" @click="changepage('about',3)">
            <h3>中国制造、中国质量、中国品牌</h3>
            <span>国家汽车零部件产品质量监督检验中心</span>
            <span>长春市标准研究院</span>
            <span>广州圣云品配网络科技公司</span>
          </a>
          <a href="javascript:;" class="p4t_3" @mouseover="changeblue(3)" @mouseout="recoveblue(3)" @click="changepage('follow',1)">
            <h3>同质追溯价值</h3>
            <span>节约生产，明细责任，规范生产</span>
            <span>防伪安全，准确召回，打造品牌</span>
          </a>
        </div>
        <div class="p4_bg">
          <div class="p4_1"></div>
          <div class="p4_2"></div>
          <div class="p4_3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      p3_boxs:[
        {"imgurl":require("../assets/imgs/p3_box1.png"),"text":"商家注册"},
        {"imgurl":require("../assets/imgs/p3_box2.png"),"text":"企业认证"},
        {"imgurl":require("../assets/imgs/p3_box3.png"),"text":"合同管理"},
        {"imgurl":require("../assets/imgs/p3_box4.png"),"text":"检测申请"},
        {"imgurl":require("../assets/imgs/p3_box5.png"),"text":"追溯申请"},
        {"imgurl":require("../assets/imgs/p3_box6.png"),"text":"同质证书"}
      ],
      company1:["测试公司1","测试公司2","测试公司3","测试公司1"],
      company2:["测试公司1","测试公司2","测试公司3","测试公司4","测试公司5","测试公司1"]
    }
  },
  mounted(){
    this.rowcompany(".p1_left",10000)
    this.rowcompany(".p1_right",10000)
  },
  methods:{
    changepage(pagename,index){
      this.$router.push({name:pagename})
      this.$store.state.home_actnum=1
      this.$store.state.serve_actnum=index
      window.scrollTo(0,0) //跳转后滚到顶部
    },
    changeblue(index){
      $(".p4_bg>div:nth-child("+index+")").stop().animate({ opacity : "0.5" },300)
      $(".p4_text>a:nth-child("+index+") span").stop().show(300)
    },
    recoveblue(index){
      $(".p4_bg>div:nth-child("+index+")").stop().animate({ opacity : "1" },300)
      $(".p4_text>a:nth-child("+index+") span").stop().hide(300)      
    },
    changebox(index){
      $(".p3_box:nth-child("+index+") span").css("color","#4c6faa")
      this.p3_boxs[index-1].imgurl=require("../assets/imgs/p3_box_chang"+index+".png")
    },
    recovebox(index){
      $(".p3_box:nth-child("+index+") span").css("color","#fff")
      this.p3_boxs[index-1].imgurl=require("../assets/imgs/p3_box"+index+".png")      
    },
    rowcompany(className,time){
      let mt=0,step=20,length=$(className+" li").length
      setInterval(()=>{
        if(mt>=step*length-step){
        $(className+" ul").css("marginTop","0px")
          mt=0
        }
        mt+=step
        $(className+" ul").animate({marginTop:"-"+mt+"px"})
      },time)
    }
  }
}
</script>

<style lang="scss" scoped>
  .line{
    width: 140px;
    border-bottom: 1px solid #1e4b95;
  }
  .part1{
    height: 692px;
    background: url("../assets/imgs/banner.jpg") no-repeat center;
  }
  .p1_bottom{
    height: 90px;
    background-color: #2a2a2a;
    .p1_bt_main{
      height: 100%;
      padding: 0 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span{
        color: #C8C8C8;
        font-size: 16px;
        display: flex;
        align-items: center;
        >div{
          height: 20px;
          overflow: hidden;          
          ul{
            height: 1000px;
            li{
              height: 20px;
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
    
  }
  .part2{
    height: 926px;
    background: url("../assets/imgs/map.png") no-repeat center;
    .p2_title{
      height: 150px;
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      h2{
        font-size:60px;
        font-family:Microsoft YaHei Light;
        font-weight:300;
        color:#464646;
      }
      span{
        font-size:30px;
        color: #B4B4B4;
        margin-bottom: 10px;
      }
    }
    .p2_boxs{
      height: 401px;
      margin-top: 92px;
      display: flex;
      justify-content: space-between;
      .p2_left,.p2_right{
        width:598px;
        height:401px;
        border:1px solid rgba(200, 200, 200, 1);
        box-shadow:0px 5px 5px 0px rgba(248,248,248,0.75);
      }
      .blue_box{
        width:598px;
        height:207px;
        background:#004EA2;
        h3{
          color: white;
        }
        .p2_btn:hover{
          background-color: #fff;
        }
      }
      .white_box{
        width:598px;
        height:194px;
        background-color: #fff;
        h3{
          color:#004EA2;
        }
        .p2_btn:hover{
          background-color: #004EA2;
        }
      }
      .text_box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3{
          font-size:48px;
          line-height:40px;
        }
        .p2_btn{
          width:152px;
          height:36px;
          border:1px solid #C8C8C8;
          border-radius:5px;
          font-size: 18px;
          color: #C8C8C8;
          margin-top: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .part3{
    position: relative;
    height: 929px;
    color: white;
    background:url("../assets/imgs/流程-bg.jpg") no-repeat center;
    .part3_main{
      .p3_text{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .p3_title{
          height: 150px;
          margin-top: 70px;                  
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          h2{
            font-size: 64px;
          }
          span{
            font-size: 26px;
            color: #c8c8c9;
          }
        }
        .p3_boxs{
          width: 520px;
          height: 350px;
          margin-top: 60px;                  
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .p3_box{
            width: 146px;
            height: 155px;
            padding: 10px 0;
            background-color: #333334;
            border: 1px solid white;
            font-size: 21px;            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
          }
          .p3_box:nth-last-child(-n+3){
            margin-bottom: -30px;
          }
        }
      }
      .p3_btn{
        position: absolute;
        bottom: 98px;
        left: 50%;
        margin-left: -126px;
        width:253px;
        height:50px;
        border:1px solid #fff;
        border-radius:5px;
        font-size:20px;
        font-weight:500;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .p3_btn:hover{
        border-color: #1d4c95;
        color: #1d4c95;
      }
    }
  }
  .part4{
    height: 827px;
    .part4_main{
      position: relative;
      height: 628px;
      margin-top: 69px;
      background-color: #1e4b95;
      color:rgba(238,238,238,1);      
      display: flex;
      .p4_text{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        display: flex;
        >a{
          height: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          h3{
            font-size:30px;
            font-weight:bold;
            text-shadow:0px 1px 1px rgba(200,200,200,0.75);
            margin-bottom: 20px;
          }
          span{
            display:none;
          }
        }
        .p4t_1{
          span{
            font-size:16px;
          }
        }
        .p4t_2{
          h3{
            font-size: 24px;
          }
        }
      }
      .p4_bg{
        width: 100%;
        height: 100%;
        display: flex;
        >div{
          flex: 1;
          height: 100%;
        }
        .p4_1{
          background-image: url("../assets/imgs/价值.png");
        }
        .p4_2{        
          background: url("../assets/imgs/品牌.png");
        }
        .p4_3{
          background: url("../assets/imgs/追溯.png");
        }
      }
    }
  }
</style>
