<template>
  <div class="serve">
      <div class="top">
        <div class="top_main w">
          <h2>同质标准库</h2>
          <div class="top_search">
            <input type="text">
            <button>搜 索</button>
          </div>
        </div>
      </div>
      <div class="top_menu w">
        <div>
          <span>目录类别：</span>
          <div class="menu_list">
            <ul>
              <li  v-for="(item,index) in topmenu" :key="index"><a href="javascript:;" :class="{active:index===actnum}" @click="changePage(index)">{{item}}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="res_title">
        <div class="res_title_main w">
          为您找到相关结果约xxx个
        </div>
      </div>
      <div class="result">
        <div class="result_main w">
          <ul>
            <li>
              <div class="resbox_top">
                xxxxxxxxxx
              </div>
              <div class="resbox_bottom">
                <div class="base">基础通用标准：<span>xxx</span></div>
                <button @click="totable()">申请查看</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="page w"><pagination></pagination></div>
      <bottompath></bottompath>
  </div>
</template>

<script>
export default {
  data(){
    return{
      actnum:0,
      currentPage:1,
      topmenu:["测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别","测试类别"]
    }
  },
  methods:{
    changePage(index){
      this.actnum=index     
    },
    totable(){
      this.$router.push({name:"require"})      
    }
  }
}
</script>


<style lang="scss" scoped>
  .top{
    height: 502px;
    padding-top: 70px;
    color: #fff;
    background:url("../../assets/imgs/同质服务/标准库/同质服务-标准库banner.jpg") no-repeat center;   
    .top_main{
      height: 100%;
      display: flex;
      flex-direction: column;
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
          width: 737px;
          height: 47px;
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
    padding: 60px 0;
    display: flex;
    align-items: center;
    >div{
      display: flex;
      span{
        color: #1D4B96;
        margin-top: 5px;
      }
      .menu_list{
        flex: 1;
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            margin-right: 50px;
            margin-bottom: 10px;
            a{
              padding: 5px 10px;
              color: #000;
            }
            .active{
              background-color: #1D4B96;
              color: #fff;
            }
          }
        }
      }      
    }
  }
  .res_title{
    height: 68px;
    margin-bottom: 20px;
    color: #666;
    background-color: #F8F8F8;
    display: flex;
    align-items: center;
  }
  .result{
    .result_main{
      ul{
        display: flex;
        width: 100%;
        flex-direction: column;
        li{
          flex: 1;
          color: #1d4c95;
          border: 2px solid #c8c8c8;
          margin-bottom: 50px;
          padding: 0 10px;
          .resbox_top{
            height: 54px;
            border-bottom: 1px solid #c8c8c8;
            display: flex;
            align-items: center;
          }
          .resbox_bottom{
            height: 62px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .base{
              span{
                color: #666;
              }
            }
            >button{
              width: 114px;
              height: 32px;
              border-radius: 5px;
            }
          }
        }          
      }   
    }
  }
  .page{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;
  }
</style>

