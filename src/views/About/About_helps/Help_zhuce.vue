<template>
  <div class="help_zhuce">
    <div class="part1">
      <div class="part1_main w">
        <div class="title"><img src="../../../assets/imgs/关于圣云-帮助中心视频图标.png" alt="">{{this.$route.params.trydata}}流程</div>
        <div class="video"></div>          
      </div>
    </div>
    <div class="part2">
      <div class="part2_main w">
        <div class="title"><img src="../../../assets/imgs/关于圣云-帮助中心讲解图标.png" alt="">教程讲解</div>
        <p>1.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>       
        <div class="fake_img"></div> 
        <p>2.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>  
        <div class="fake_img"></div>               
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
    console.log(this.$route.params.trydata)
  }
}
</script>


<style lang="scss" scoped>
  .title{
    margin-top: 60px;
    margin-bottom: 40px;
    font-size: 22px;
    font-weight: bold;
    color: #1d4c95;
    display: flex;
    align-items: center;
  }
  .fake_img{
    width: 500px;
    height: 200px;
    margin: 0 auto;
    background-color: pink;
  }
  .part1{
    background-color: #f8f8f8;
    overflow: hidden;
    .video{
      width: 100%;
      height: 600px;
      margin-bottom: 77px;
      background-color: pink;
    }      
  }
  .part2{
    background-color: #fff;
 
  }
</style>
