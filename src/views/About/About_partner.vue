<template>
  <div class="ab_partner">
      <h2>欢迎交换本站链接</h2>
      <div class="info">
        <div class="info_box">
          <div class="block"></div>
          <div class="text">
            <div class="title">
              链接要求
            </div>
            <p>a.圣云品配暂时只接受申请文字形式的友情链接；</p>
            <p>b.汽车及零部件行业网站优先；</p>          
          </div>
        </div>
        <div class="info_box">
          <div class="block"></div>
          <div class="text">
            <div class="title">
              请先做好圣云品配的链接，链接代码如下
            </div>
            <p>&lt;a href="http://www.syppqc.com" target="_blank" title="圣云品配"&gt;</a></p>
          </div>
        </div>
        <div class="info_box">
          <div class="block"></div>
          <div class="text">
            <div class="title">
              联系方式
            </div>
            <p>电话：020-3121 0275</p>
            <p>QQ：3324298478</p>   
            <p>邮箱：syppqc@syppqc.com</p>       
          </div>
        </div>        
      </div>
  </div>
</template>

<style lang="scss" scoped>

  .ab_partner{
    height: 800px;
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
      color: #1d4c95;
      font-size: 30px;
      margin-bottom: 80px;
    }
    .info{

    }
    .info_box{
      display: flex;
      margin-bottom: 40px;
      .block{
        width: 20px;
        height: 20px;
        margin-right: 10px;
        background-color: #1d4c95;
      } 
      .text{
        display: flex;
        flex-direction: column;
        .title{
          line-height: 20px;
          color: #1d4c95;
          font-size: 18px;
          font-weight: bold;
        }  
        p{
          color: #666;
          line-height: 30px;
        }       
      }
    }
  }
</style>
