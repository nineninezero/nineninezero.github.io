<template>
  <div class="ab_about">
      <div class="ab_main w">
        <div class="article">
          <p>圣云品配是一家以同质汽车零部件标准、检测、追溯、认证服务为主的创新科技公司。</p>
          <p>圣云品配秉承“中国品质，全球视野，包容开放，质量安全”的经营理念，与国家汽车零部件产品质量监督检验中心、长春标准研究院合作搭建圣云品配同质服务平台，提供同质汽车零部件标准、检测、追溯、认证、企业信用经营等服务，是国检中心、标准院授权的服务平台。</p>
          <p>圣云品配从源头帮助中国同质汽车零部件提升国际品牌价值与公信力，让全球车主用户与中国优质汽车零部件生产企业实现信息互通，为明日国际品牌化奠定基础和指明方向。</p>
        </div>
        <div class="imgs">
          <img src="../../assets/imgs/关于圣云_08.jpg" alt="">
          <img src="../../assets/imgs/关于圣云_10.jpg" alt="">
        </div>
      </div>
  </div>
</template>

<script>
import {getAboutPage} from "../../api/Api.js"
export default {
  data(){
    return{
      // pagecode:""
    }
  },
  mounted(){
    // getAboutPage(1).then(res=>{
    //   this.pagecode=res.data.data.result
    //   console.log(this.pagecode)
    // })
  }
}
</script>


<style lang="scss" scoped>
  .ab_about{
    .ab_main{
      height: 100%;
      .article{
        margin-top: 140px;
        p{
          color: #666;
          text-indent: 2em;
          line-height: 30px;
          margin-bottom: 40px;
        }
      }
      .imgs{
        width: 100%;
        margin-top: 70px;
        margin-bottom: 170px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>

