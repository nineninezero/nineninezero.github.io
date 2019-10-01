<template>
  <div class="follow">
      <div class="part1 w">
        <h2>同质追溯服务</h2>
        <div class="article">
          <p>针对中国汽车零部件产品市场，消费者及商家非常关注产品的生产源头？缺陷产品如何追溯？如何快速定位责任及召回？标准院、国检中心与圣云品配合作推出“同质汽车零部件追溯源”的理念，是提高同质汽车零部件产品质量安全的保障，响应国家号召。</p>
          <p>同质汽车零部件产品追溯服务，使用全球统一编码体系“GS1编码”，制定标准规范，构建标准体系，使溯源体系贯穿每一个同质汽车零部件产品线，解决“信息孤岛”问题，为同质汽车零部件生产企业提供数据分析与决策支撑。</p>
        </div>
        <button>立即申请</button>
        <div class="three">
          <h3>3大赋码方式</h3>
          <span>赋码方式的选择需要工厂根据自身的实际情况自行选择</span>
        </div>
        <div class="p1_boxs">
          <div class="box" v-for="(item,index) in p1_boxs" :key="index">
            <img :src="item.imgurl" alt="">
            <div class="text">
              <h4>{{item.title}}</h4>
              <span>{{item.text}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="part2">
        <div class="part2_main w">
          <img src="../../assets/imgs/同质服务/追溯/同质服务-追溯标准院logo.gif" alt="">
          <span>（简称标准院）</span>
          <div class="article">
            <p>是长春市专业从事标准化科研、服务和应用的公益类事业机构，也是“打造长春标准，提升长春质量”的重要技术支撑力量的“服务机构“。</p>
            <p>同时，加挂有国际标准化组织发展中中国家事务委员会（ISO/DEVCO）国内技术对口单位、国家欧洲标准研究中心、全国组织机构代码管理中心长春分中心、中国物品编码中心长春分中心等国家级技术机构授牌。</p>
          </div>
        </div>
      </div>
      <div class="part3 w">
        <img src="../../assets/imgs/同质服务/追溯/同质服务-追溯委托书.jpg" alt="">
        <div class="right">
          <div class="text">
            <h2>长春市标准研究院</h2>
            <h2>（长春市WTO/TBT咨询中心）授权委托书</h2>            
          </div>
          <div class="bottom">
            <span>2018年5月2号</span>
            <span>长春市标准研究院授权圣云品配从事同质汽车零部件承揽单位</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      p1_boxs:[
        {title:"1.激光打码",text:"是直接用激光来刻的适合规则的金属零件",imgurl:require("../../assets/imgs/同质服务/追溯/同质服务-追溯1.jpg")},
        {title:"2.喷墨",text:"适合规则的非金属零件及其他零件",imgurl:require("../../assets/imgs/同质服务/追溯/同质服务-追溯2.jpg")},
        {title:"3.贴码",text:"是直接贴一个追溯标签，适合所有的情况",imgurl:require("../../assets/imgs/同质服务/追溯/同质服务-追溯3.jpg")}
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
  .part1{
    // height: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
      font-size: 28px;
      color: #1d4c95;
      margin-top: 88px;
      margin-bottom: 40px;
    }
    button{
      width: 160px;
      height: 40px;
      border-radius: 5px;
      margin-top: 10px;
      margin-bottom: 69px;
    }
    .article{
      width: 100%;
      p{
        color: #666;
        text-indent: 2em;
        line-height: 30px;
        margin-bottom: 40px;
      }
    }
    .three{
      width: 660px;
      height: 100px;
      padding: 20px 0;
      margin-bottom: 45px;
      border: 1px solid #c8c8c8;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      h3{
        color: #1d4c95;
      }
      span{
        color: #666;
      }
    }
    .p1_boxs{
      width: 100%;
      margin-bottom: 58px;
      display: flex;
      justify-content: space-between;
      .box{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          margin-bottom: 16px;
        }
        .text{
          display: flex;
          flex-direction: column;
          align-items: center;
          h4{
            font-weight: normal;
            color: #1d4c95;
          }
          span{
            color: #666;
          }
        }
      }
    }
  }
  .part2{
    height: 925px;
    background: url("../../assets/imgs/同质服务/追溯/同质服务-追溯0.jpg") no-repeat center;
    .part2_main{
      padding-top: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        margin-bottom: 80px;
      }
      >span{
        color: #464646;
        font-size: 26px;
        margin-bottom: 50px;
      }
      .article{
        width: 100%;
        p{
          color: #666;
          line-height: 30px;
          margin-bottom: 40px;
          text-indent: 2em;
        }
      }
    }
  }
  .part3{
    height: 787px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .right{
      height: 469px;
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .text{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #1d4c95;
        margin-top: 30px;
        h2{
          font-size: 32px;
          font-weight: normal;          
        }
      }
      .bottom{
        width: 740px;
        height: 200px;
        border: 1px solid #c8c8c8;
        color: #464646;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>

