<template>
  <div class="spl_inside">
    <div class="top">
        <div class="img"></div>
        <h2>XXXXXXXXXXXX</h2>
        <div class="article">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
    </div>
    <div class="contant">
        <div class="contant_main w">
            <div class="title">
                <h3>同质汽车零部件产品</h3>
                <span>（共xx个同质汽车零部件产品）</span>
                <div class="line"></div>
            </div>
            <div class="boxs">
                <a href="javascript:;" class="box" @click="goinside()">
                    <div class="box_img"></div>
                    <div class="box_info">
                        <h3>PPAP刹车片</h3>
                        <div><span>产 品 品 牌：</span><span>xxx</span></div>
                        <div><span>建议市场价：</span><span>￥xxx</span></div>
                        <div><span>适 用 车 型：</span><span class="info_text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span></div>
                    </div>
                    <div class="cover_box">
                        <div class="ewm">
                            <div class="ewm_img"></div>扫追溯码 查看详情
                        </div>
                        <div class="cover_info">
                            <h3>PPAP刹车片</h3>
                            <div><span>产 品 品 牌：</span><span>xxx</span></div>
                            <div><span>建议市场价：</span><span>￥xxx</span></div>
                            <div><span>适 用 车 型：</span></div>    
                            <span class="info_text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>                        
                        </div>
                    </div>
                </a>
            </div>
            <div class="path">
                <pagination></pagination>
            </div>
        </div>
    </div>    
    <div class="company_info w">
        <h3>企业联系信息</h3>
        <p>（登陆查看完整信息）</p>
        <div class="line"></div>
        <div class="phone">
            <span>联系电话：xxxxx</span>
            <span>客服电话：xxx</span>
            <span>联系地址：xxxxx</span>            
        </div>

    </div> 
    <bottompath></bottompath> 
  </div>
</template>

<script>
export default {
  mounted(){
      $(".box").on("mouseover",function(){
          $(".cover_box").show().on("mouseout",function(){
              $(this).hide()
          })
      })
  },
  methods:{
      goinside(){
          
      }
  }
}
</script>


<style lang="scss" scoped>
    .top{
        height: 782px;
        background:url("../../assets/imgs/同质供应商内页banner.jpg") no-repeat center;
        padding-top: 180px;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        .img{
            width: 150px;
            height: 150px;
            background-color: pink;
        }
        h2{
            font-size: 40px;
            margin-bottom: 40px;
        }
        .article{
            width: 740px;
            word-break: break-all;
        }
    }
    .contant{
        background-color: #F8F8F8;
        .contant_main{
            overflow: hidden;
            .title{
                margin: 70px 0;
                height: 100px;                
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                h3{
                    font-size: 30px;
                    color: #1d4c95;
                }
                >span{
                    color: #666;
                    margin-bottom: 20px;
                }
            }
            .boxs{
                .box{
                    position: relative;
                    width: 350px;
                    height: 400px;
                    margin-bottom: 50px;
                    padding: 24px;
                    background-color: #fff;
                    border: 1px solid #c8c8c8;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .box_img{
                        width: 100%;
                        height: 250px;
                        background-color: pink;
                    }
                    .box_info{
                        color: #1d4c95;
                        >div{
                            display: flex;
                            .info_text{
                                flex: 0.8;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;                                
                            }
                            >span{
                                font-size: 14px;
                            }                            
                            >span:last-child{
                                color: #666;
                            }                            
                        }
                    }
                    .cover_box{
                        position: absolute;
                        display: none;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        padding: 30px;
                        color: #fff;
                        background-color: rgba(11, 39, 86,.8);
                        .ewm{
                            margin-top: 40px;
                            margin-bottom: 60px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .ewm_img{
                                width: 80px;
                                height: 80px;
                                background-color: pink;
                            }
                        }
                        .cover_info{
                            .info_text{
                                width: 100%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                word-break: break-all;
                                -webkit-line-clamp: 3; //行数
                                -webkit-box-orient: vertical                          
                            }
                        }
                    }                    
                }

            }
        }
        .path{
            margin-bottom: 90px;
            display: flex;
            justify-content: flex-end;
        }
    }
    .company_info{
        height: 406px;
        padding-top: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3{
            color: #1d4c95;
            font-size: 30px;
            margin-bottom: 10px;
        }
        >p{
            color: #333;
            margin-bottom: 20px;
        }
        .line{
            margin-bottom: 20px;
        }
        .phone{
            width: 200px;
            color: #666;
            display: flex;
            flex-direction: column;
            span{
                margin-bottom: 10px;
            }
        }
    }
    .line{
        width: 180px;
        border-bottom: 1px solid #1e4c9a;
    }    
</style>

