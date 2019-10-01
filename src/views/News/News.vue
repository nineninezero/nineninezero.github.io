<template>
  <div class="news">
      <div class="hot">
          <div class="hot_main w">
              <div class="head_logo">
                  <span>热点</span>
                  <span>HOT</span>
              </div>
              <div class="hot_contant">
                  <h3>{{topinfo.meta_title}}</h3>
                  <span>发布日期：{{topinfo.date_added}}　预览：xx</span>
                  <div class="hot_img"><img :src="baseurl+topinfo.image" alt=""></div>
                  
                  <p v-html="topinfo.description"></p>
                  <button @click="gotoinside(topinfo.id)">了解更多</button>
              </div>
          </div>
      </div>
      <div class="new">
          <div class="new_main w">
              <div class="head_logo">
                  <span>最新</span>
                  <span>NEWEST</span>                  
              </div>
              <div class="new_contant">
                  <div class="new_box" v-for="(item,index) in newslist" :key="index" :data-myid="item.id" :ref="'mybox'+index" @click="gotoinside(item.id,index)">
                      <div class="new_img"><img :src="baseurl+item.image" alt=""></div>
                      <div class="new_info">
                          <h3>{{item.title}}</h3>
                          <p v-html="item.description">{{item.description}}</p>
                          <span>发布日期：2018-04-12　预览：xx</span>                            
                      </div>
                  </div>
                  <div class="path">
                        <div id="pagination" class="pagination"></div>
                  </div>
              </div>
          </div>
      </div>
      <bottompath></bottompath>
  </div>
</template>

<script>
import {getNews,getNewsInfo} from '../../api/Api.js'
export default {
    data(){
        return{
            topinfo:{},
            newslist:[],
            baseurl:this.$store.state.baseurl,

            curPage: 1, //初始页码
            pageAmount: 10, //每页多少条
            dataTotal: 3, //总共多少条数据
            pageSize: 5, //可选,分页个数
        }
    },
    methods:{
        gotoinside(id,index){            
            this.$router.push({name:"news_inside",query:{id:id}}) 
            window.scrollTo(0,0);     
        },
        Page(){
            new Page({
                id: 'pagination',
                curPage: this.curPage, //初始页码
                pageTotal: this.pageTotal, //总页数
                pageAmount: this.pageAmount, //每页多少条
                dataTotal: this.dataTotal, //总共多少条数据
                pageSize: this.pageSize, //可选,分页个数
                showPageTotalFlag: true, //是否显示数据统计
                showSkipInputFlag: true, //是否支持跳转
                getPage: function(page) {
                    //获取当前页数
                    // console.log(page);
                }
            })
        }        
    },
    computed:{
        // 总页数
        pageTotal:function(){
        return Math.ceil(this.dataTotal/this.pageAmount) 
        }
    },    
    mounted(){
            getNews(1).then(res=>{
                this.newslist=res.data.data.result.data
                this.topinfo=res.data.data.top

                this.curPage=res.data.data.result.current_page
                this.pageAmount=res.data.data.result.per_page
                this.dataTotal=res.data.data.result.total
            })
        this.Page()
    }
}
</script>  

<style lang="scss" scoped>
img{
    width: 100%;
}
    .head_logo{
        width: 90px;
        height: 90px;
        padding: 20px 0;
        color: #fff;
        background-color: #1d4c95;
        margin-right: 26px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .hot{
        background-color: #F8F8F8;
        .hot_main{
            display: flex;
            height: 800px;
            padding: 34px 0;
            .hot_contant{
                padding: 20px 30px;
                width: 1000px;
                height: 100%;
                border: 1px solid #c8c8c8;
                background-color: #fff;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                h3{
                    font-size: 20px;
                    color: #333;
                    font-weight: normal;
                }
                >span{
                    margin-top: -20px;
                    font-size: 12px;
                    color: #666;
                }
                .hot_img{
                    width: 100%;
                    height: 500px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                }
                >p{
                    color: #666;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    word-break: break-all;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-indent: 2em;
                }
                button{
                    width: 126px;
                    height: 32px;
                    border-radius: 10px;
                }
            }            
        }
    }
    .new{
        .new_main{
            display: flex;
            padding: 50px 0;
            >.head_logo{
                background-color: #72B4CC;
            }
            .new_contant{
                width: 1000px;
                padding: 30px;                
                border: 1px solid #c8c8c8;
                .new_box{
                    height: 200px;
                    display: flex;
                    margin-bottom: 90px;
                    cursor: pointer;
                    .new_img{
                        width: 300px;
                        height: 200px;
                        margin-right: 45px;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                    }
                    .new_info{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        h3{
                            font-size: 20px;
                            color: #333;
                        }
                        >p{
                            font-size: 16px;
                            color: #666;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            word-break: break-all;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                        }    
                        span{
                            font-size: 14px;
                            color: #666;
                        }                    
                    }
                }
                .path{
                    display: flex;
                    justify-content: flex-end;
                }
            }            
        }
    }
</style>
<style>
.pagination ul {
    list-style: none;
    padding-left: 0;
}
.pagination ul li {
    padding: 0 10px;
    vertical-align: top;
    display: inline-block;
    font-size: 14px;
    min-width: 36px;
    min-height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    color: #1d4c95;
    margin: 0 1px;
    border: 1px solid #e6e6e6;
    height: 30px;
}
.pagination ul li:hover {
}
.pagination  li.active {
    color: #333;
    border-color: #1d4c95;
}
.pagination li.totalPage {
    background: transparent;
    cursor: default;
    border: none;
    padding: 0 6px;
}
.pagination li.totalPage:hover {
    transform: none;
}
.pagination li input {
    -webkit-appearance: none;
    background-image: none;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: none;
    padding: 3px 5px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 30px;
    height: 30px;
    margin: 0 6px;
}
.pagination li input:focus{
    border-color: #98A6AD;
}
.pagination{
    user-select: none;
}
.pagination ul:nth-child(2){
    border-radius: 6px;
}
input[type=number] {
    -moz-appearance:textfield;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>


