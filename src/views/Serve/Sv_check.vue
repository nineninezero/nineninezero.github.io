<template>
  <div class="check">
      <div class="part1 w">
        <h2>同质检测服务</h2>
        <div class="article">
          <p>同质汽车零部件产品检测，由国家汽车零部件产品质量监督检验中心（长春）提供检测检验，与圣云品配合作提供同质检测与平台服务。</p>
          <p>国检中心经国家质检总局、国家认监委批准成立，是具有第三方公正地位的专业从事同质汽车零部件产品检验的检测机构。现有检验实验室面积2.4万平方米，检测仪器500余台（套），建有仪器分析室、恒温恒湿室、百级净化无菌室、车灯检验暗室、燃烧防爆实验室等。</p>
          <p>同质汽车零部件产品检测，对检测合作产品颁发“同质检测合格证书”、“同质检测报告”，确保生产商获得市场同质标签及认可。</p>
        </div>
        <button>立即申请</button>
        <div class="lunbo">
          <div class="lunbo_main">
            <ul>
              <li v-for="(item,index) in lunbo" :key="index">
                <img :src="item.imgurl" alt="">
              </li>
            </ul>
          </div> 
          <img class="btns btl" src="../../assets/imgs/其他/bl.png" @click="back()"></img>
          <img class="btns btr" src="../../assets/imgs/其他/br.png" @click="next()"></img>         
        </div>
        <span>同质检测报告</span>
      </div>
      <div class="part2">
        <div class="part2_main w">
          <h2>国家汽车零部件产品质量监督检验中心（简称国检中心）</h2>
          <div class="btn">国家质检总局国质检科批准成立的国家级质检中心</div>
          <div class="info">
            <img src="../../assets/imgs/同质服务/检测/同质服务-检测国检logo.gif" alt="">
            <div class="article">
              <p>是经国家认证认可监督管理委员会授权，国家质量监督检验检疫总局、国家认证认可监督管理委员会批准成立的专门从事汽车零部件产品质量监督检验的国家级具有第三方公正地位的权威检验机构。</p>
              <p>国检中心通过了国家实验室认可委员会的认可、计量认证，并获得国家强制性认证产品检验室等资质，是CQC、CCAP的CCC检验机构，生产许可证产品检验机构，为国内多家汽车整车生产企业出具了零部件及原材料的检测报告。</p>
              <p>国检中心的职能是为各级政府相关部门提供科学可靠的质量数据，为相关企业提供高效优质的技术服务，目前中心拥有进口及国产设备500余台套，检测能力覆盖大部分汽车零部件。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="part3 w">
        <img src="../../assets/imgs/同质服务/检测/同质服务-检测-委托书.jpg" alt="">
        <div class="right">
          <div class="text">
            <h2>国家汽车零部件产品质量监督检验中心（长春）</h2>
            <h2>授权委托书</h2>            
          </div>
          <div class="bottom">
            <span>2018年1月18号</span>
            <span>国检中心授权圣云品配从事同质汽车零部件承揽单位</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lun_left:0,
      lunbo:[
        {imgurl:require("../../assets/imgs/同质服务/检测/同质服务-检测01.jpg")},
        {imgurl:require("../../assets/imgs/同质服务/检测/同质服务-检测02.jpg")},
        {imgurl:require("../../assets/imgs/同质服务/检测/同质服务-检测03.jpg")},
        {imgurl:require("../../assets/imgs/同质服务/检测/同质服务-检测04.jpg")}
      ]
    }
  },
  methods:{
    next(){
      let step=300
      if(this.lun_left>=-step){
        this.lun_left-=step
        $(".lunbo_main ul").animate({left:this.lun_left+"px"},300)        
      }
    },
    back(){
      let step=300
      if(this.lun_left<0){
        this.lun_left+=step
        $(".lunbo_main ul").animate({left:this.lun_left+"px"},300)        
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .part1{
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
      font-size: 28px;
      color: #1d4c95;
      margin-top: 88px;
      margin-bottom: 38px;
    }
    .article{
      width: 100%;
      p{
        color: #666;
        text-indent: 2em;
        margin-bottom: 30px;
        line-height: 30px;
      }
    }
    >button{
      width: 142px;
      height: 37px;
      border-radius: 5px;
      margin-top: 10px;
      margin-bottom: 80px;
    }
    .lunbo{
      position: relative;
      margin-bottom: 30px;
      .lunbo_main{
        position: relative;
        width: 550px;
        height: 360px;
        margin: 0 auto;
        overflow: hidden;
        ul{
          position: absolute;
          display: flex;
          li{
            margin-right: 50px;
          }
        }
      }     
      .btns{
        position: absolute;
        top: 50%;
        cursor: pointer;
      }
      .btl{
        left: -100px;
      }
      .btr{
        right: -100px;
      }       
    }
    >span{
      color: #1d4c95;
      margin-bottom: 80px;
    }

  }
  .part2{
    height: 925px;
    background:url("../../assets/imgs/同质服务/检测/同质服务-检测_12.gif") no-repeat center;
    .part2_main{
      color: #fff;
      padding-top: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2{
        font-size: 38px;
        margin-bottom: 30px;
      }
      .btn{
        width: 510px;
        height: 46px;
        border: 1px solid #fff;
        border-radius: 5px;
        margin-bottom: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        // cursor: pointer;
      }
      .info{
        width: 100%;
        display: flex;
        .article{
          margin-top: 30px;
          p{
            text-indent: 2em;
            line-height: 30px;
            margin-bottom: 40px;
          }
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
          font-size: 36px;
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

