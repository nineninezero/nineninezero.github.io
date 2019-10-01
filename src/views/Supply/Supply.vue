<template>
  <div class="supply">
      <div class="top">
          <div class="top_main w">
              <h2>同质供应商检索</h2>
                <div class="top_search">
                    <input type="text">
                    <button>搜索</button>
                </div>
          </div>
      </div>
      <div class="top_menu w">
        <div class="menu_1">
            <span>地　址：</span>
            <div class="menu_list">
              <ul>
                <li  v-for="(item,index) in topmenu1" :key="index"><a href="javascript:;" :class="{active:index===actnum1}" @click="change1(index)">{{item}}</a></li>
              </ul>
            </div>
            <a class="zk" href="javascript:;" @click="slideDown()">
                <img src="../../assets/imgs/同质供应商三角形.gif" alt="">展开
            </a> 
            <a class="sq" href="javascript:;" @click="slideUp()">
                <img src="../../assets/imgs/展开.gif" alt="">收起
            </a> 
        </div>
        <div class="menu_2">
            <span>零部件：</span>
            <div class="menu_list">
              <ul>
                <li  v-for="(item,index) in topmenu2" :key="index"><a href="javascript:;" :class="{active:index===actnum2}" @click="change2(index)">{{item}}</a></li>
              </ul>
            </div>
        </div>
        <div class="menu_3">
            <span>品　牌：</span>
            <div class="menu_list">
              <ul>
                <li  v-for="(item,index) in topmenu3" :key="index"><a href="javascript:;" :class="{active:index===actnum3}" @click="change3(index)">{{item}}</a></li>
              </ul>
            </div>
        </div>
      </div>
      <div class="res_title">
          <div class="res_title_main w">为您找到相关结果约xxx个</div>
      </div>
      <div class="result w">
          <div class="res_box">
              <div class="rbox_top">
                  <div class="main_img" @click="gotoinside()"></div>
                  <div class="main_info">
                      <h3>xxxxxx公司</h3>
                      <p class="info_text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                      <div class="info_btns">
                          <button>其他零件</button>
                          <button>发动机垫片及缸盖</button>
                      </div>
                      <div class="info_last">
                          <div class="address"><img src="../../assets/imgs/地址小图标1.gif">广东省广州市白云区</div>
                          <div class="phone"><img src="../../assets/imgs/电话小图标1.gif">020-xxxxxxx</div>
                      </div>
                  </div>
                  <a href="javascript:;" @click="gotoinside()"><img src="../../assets/imgs/展开.gif">展开</a>
              </div>
              <div class="rbox_bottom">
                  <div class="title">
                      <img src="../../assets/imgs/supply_car.gif" alt="">同质产品
                  </div>
                  <div class="same">
                    <div class="same_box">
                        <div class="same_img"></div>
                        <div class="same_info">
                            <h3>博世/BOSCH 前刹车片</h3>
                            <span>品牌：博世</span>
                            <span>适用车型：沃尔沃</span>
                        </div>
                    </div>                      
                  </div>
              </div>
          </div>
      </div>
      <div class="path w">
          <pagination></pagination>
      </div>
      <bottompath class="bottompath"></bottompath>
  </div>
</template>

<script>
export default {
  data(){
      return{
        actnum1:0,          
        actnum2:0,          
        actnum3:0,          
        topmenu1:["测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别"],
        topmenu2:["测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别"],
        topmenu3:["测试类别","测试类别","测试类别"]
      }
  },
  methods:{
    change1(index){
      this.actnum1=index     
    },
    change2(index){
      this.actnum2=index     
    },
    change3(index){
      this.actnum3=index     
    },
    slideDown(){
        $(".zk").hide()
        $(".sq").css("display","flex")
        $(".menu_1 .menu_list").addClass("h_auto")
    },
    slideUp(){
        $(".sq").hide()
        $(".zk").show()
        $(".menu_1 .menu_list").removeClass("h_auto")
    },
    gotoinside(){
        this.$router.push({name:"spl_inside"})      
    }
    // nowrap(){
    //     $(".main_info .info_text").toggleClass("nowrap")
    // }
  }
}
</script>


<style lang="scss" scoped>
    .top{
        height: 500px;
        color: #fff;
        background: url("../../assets/imgs/同质供应商banner.jpg") no-repeat center;
        .top_main{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;  
            h2{
                font-size: 36px;
                font-weight: 400;
                margin-bottom: 24px;
            }                   
            .top_search{
                display: flex;
                align-items: center;                
                input{
                    width: 645px;
                    height: 48px;
                    padding-left: 10px;
                    font-size: 20px;
                    color: #333;
                    border-radius: 5px;
                    background-color: rgba(248, 248, 248,.8);
                }
                button{
                    width: 106px;
                    height: 47px;    
                    font-size: 20px;
                    border-radius: 5px;      
                    margin-left: 12px;
                }
            }
        }
    }
    .top_menu{
        padding: 30px 0;
        font-size: 16px;
        >div{
            display: flex;
            margin-bottom: 20px;
            span{
                color: #1d4c95;
            }
            .menu_list{
                flex: 1;
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    li{
                        margin-right: 40px;
                        margin-bottom: 10px;
                        a{
                            padding: 5px 10px;
                            color: #666;
                            line-height: 16px;
                        }   
                        .active{
                            background-color: #1d4c95;
                            color: #fff;
                        }                     
                    }
                }
            }       
        }
        .menu_1{
            .menu_list{
                height: 26px;
                overflow: hidden;
            }
            .h_auto{
                height: auto;
            }
            >a{
                height: 16px;
                color: #1d4c95;
                display: flex;
                align-items: center;
            } 
            .sq{
                display: none;
            }
        }
    }
    .res_title{
        height: 70px;
        color: #666;
        background-color: #F8F8F8;
        .res_title_main{
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
    .result{
        padding-top: 60px;
        .res_box{
            height: 570px;
            padding: 0px 15px;
            margin-bottom: 57px;            
            border: 1px solid #c8c8c8;
            .rbox_top{
                height: 278px;
                border-bottom: 1px solid #c8c8c8;
                display: flex;
                align-items: center;
                .main_img{
                    width: 224px;
                    height: 224px;
                    margin-left: 25px;
                    background-color: #000;
                }
                .main_info{
                    height: 224px;
                    margin-left: 35px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    h3{
                        font-size: 22px;
                        color: #333;
                        font-weight: 600;
                    }
                    .info_text{
                        width: 100%;
                        color: #666;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        word-break: break-all;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                    }
                    .nowrap{
                        -webkit-line-clamp: 6;                        
                    }
                    .info_btns{
                        button{
                            width: 120px;
                            height: 30px;
                            margin-right: 28px;
                            border-radius: 5px;
                            cursor: auto;
                        }
                        button:last-child{
                            width: 150px;
                        }
                    }
                    .info_last{
                        color: #333;
                        display: flex;
                        >div{
                            display: flex;
                            align-items: center;    
                            img{
                                margin-right: 5px;
                            }                        
                        }
                        .address{
                            margin-right: 50px;
                        }
                    }
                }
                >a{
                    color: #1d4c95;
                    margin: 0 30px;
                    display: flex;
                    align-items: center;
                }
            }
            .rbox_bottom{
                padding: 0 20px;
                .title{
                    margin: 30px 0;
                    display: flex;
                    align-items: center;
                }
                .same{
                    display: flex;
                    justify-content: space-between;
                    .same_box{
                        flex: 1;
                        height: 100px;
                        color: #333;
                        display: flex;
                        .same_img{
                            width: 100px;
                            height: 100%;
                            background-color: gray;
                        }
                        .same_info{
                            margin-left: 10px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            h3{
                                font-weight: normal;
                                font-size: 20px;
                            }
                            span{
                                color: #666;
                            }
                        }
                    }
                }
            }
        }
    }
    .path{
        display: flex;
        justify-content: flex-end;
    }
    .bottompath{
        margin-top: 117px;
    }
</style>

