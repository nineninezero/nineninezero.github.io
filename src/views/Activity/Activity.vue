<template>
  <div class="activity">
    <div class="top_menu w">
        <div class="menu_1">
            <span>时　间：</span>
            <div class="menu_list">
              <ul>
                <li><a href="javascript:;" :class="{active:actnum1===''}" @click="all1()">全部</a></li>                  
                <li  v-for="(item,index) in topmenu1" :key="index"><a href="javascript:;" :class="{active:index===actnum1}" @click="change1(index)">{{item}}</a></li>
              </ul>
            </div>
            <div class="menu_search">
                <input type="text" placeholder="请输入关键字" v-model="actobj['title,LIKE']">
                <a @click="initlist()" href="javascript:;">搜索</a>
            </div>
        </div>
        <div class="menu_2">
            <span>地　址：</span>
            <div class="menu_list">
              <ul>
                <li><a href="javascript:;" :class="{active:actnum2===''}" @click="all2()">全部</a></li>
                <li  v-for="(item,index) in topmenu2" :key="index"><a href="javascript:;" :class="{active:index===actnum2}" @click="change2(index,item.id)">{{item.name}}</a></li>
              </ul>
            </div>
            <a class="zk" href="javascript:;" @click="slideDown()">
                <img src="../../assets/imgs/同质供应商三角形.gif" alt="">展开
            </a> 
            <a class="sq" href="javascript:;" @click="slideUp()">
                <img src="../../assets/imgs/展开.gif" alt="">收起
            </a> 
        </div>
    </div>
    <div class="res_title">
        <div class="res_title_main w">为您找到相关结果约{{resinfo.total}}个</div>
    </div>    
    <div class="result w">
        <div class="res_box" v-for="(item,index) in actlist" :key="index">
            <div class="box_img"><img :src="baseurl+item.image" alt=""></div>
            
            <div class="box_info">
                <div class="box_top">
                    <h3>{{item.title}}</h3>
                    <span class="timeview">发布日期：<span class="dates">{{item.date_added}}</span>　预览：{{item.viewed}}</span>
                    <p v-html="item.description"></p>                    
                </div>
                <div class="box_bottom">
                    <span>活动时间：<span class="dates">{{item.date_start}}</span>　至　<span class="dates">{{item.date_end}}</span></span>
                    <span>活动地点：{{item.address}}</span>
                    <div class="btn"><button @click="goinside(item.id)">了解更多</button></div>                    
                </div>
            </div>
        </div>
    </div>
    <div class="path w">
        <div id="pagination" class="pagination"></div>
    </div>
    <bottompath></bottompath>
  </div>
</template>

<script>
import {getActivity,getAdress} from '../../api/Api.js'
export default {
  data(){
      return{
          actnum1:"",
          actnum2:"",
          resinfo:{},
          actlist:[],
          baseurl:this.$store.state.baseurl,
          topmenu1:["近一周","近一月","近一年"],
          topmenu2:[],

        actobj:{
            "page":1,
            "date_added":"",
            "title,LIKE":"",
            "province_id":""
        },

        curPage: 1, //初始页码
        pageAmount: 10, //每页多少条
        dataTotal: 3, //总共多少条数据
        pageSize: 5, //可选,分页个数      
      }
  },
  mounted(){
            getAdress().then(res=>{
                  this.topmenu2=res.data.data.result
            })
            this.initlist()
  },
    computed:{
        // 总页数
        pageTotal:function(){
            return Math.ceil(this.dataTotal/this.pageAmount) 
        }
    },   
  methods:{
      initlist(){
            //直接传对象有问题，要用qs转一下请求类型          
            getActivity(qs.stringify(this.actobj)).then(res=>{
                this.actlist=res.data.data.result.data
                this.resinfo=res.data.data.result
                $.each(res.data.data.result.data,function(index,item){
                    item.date_added=item.date_added.substring(0,10)
                    item.date_start=item.date_start.substring(0,10)
                    item.date_end=item.date_end.substring(0,10)
                })
            }).then()
            this.actobj["title,LIKE"]=""
      },
    change1(index){
      this.actnum1=index     
    },
    change2(index,id){
      this.actnum2=index    
      this.actobj.province_id=id
      this.initlist()
    },
    all1(){
        this.actobj["date_added"]=""
        this.actnum1=""
        this.initlist()
    },
    all2(){
        this.actobj["province_id"]=""
        this.actnum2=""
        this.initlist()
    },
    slideDown(){
        $(".zk").hide()
        $(".sq").css("display","flex")
        $(".menu_2 .menu_list").addClass("h_auto")
    },
    slideUp(){
        $(".sq").hide()
        $(".zk").show()
        $(".menu_2 .menu_list").removeClass("h_auto")
    },
    goinside(id){
        this.$router.push({name:"act_inside",query:{id:id}})
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
  }
}
</script>

<style lang="scss" scoped>
    .top_menu{
        font-size: 18px;
        padding: 60px 0;
        >div{
            display: flex;
            margin-bottom: 10px;
            span{
                color: #1d4c95;
                font-weight: bold;
            }
            .menu_list{
                flex: 1;
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    li{
                        margin-right: 20px;
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
            .menu_search{
                display: flex;
                align-items: center;
                input{
                    width: 340px;
                    height: 34px;
                    border: 1px solid #c8c8c8;
                    border-radius: 10px;
                    padding-left: 10px;
                }
                >a{
                    color: #1d4c95;
                    font-weight: bold;
                    margin-left: 10px;
                }
            } 
        }
        .menu_2{
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
        height: 68px;
        margin-bottom: 20px;
        background-color: #F8F8F8;
        .res_title_main{
            height: 100%;
            color: #666;
            display: flex;
            align-items: center;
        }
    }
    .result{
        .res_box{
            width: 100%;
            height: 550px;
            margin-bottom: 70px;
            padding: 30px;
            border: 1px solid #c8c8c8;
            display: flex;
            .box_img{
                width: 700px;
                height: 100%;
                overflow: hidden;
                display: flex;
                align-items: center;
                img{
                    width: 100%;
                }
            }
            .box_info{
                flex: 1;
                margin-left: 40px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                >div{
                    display: flex;
                    flex-direction: column;
                }
                .box_top{
                    h3{
                        font-size: 20px;
                        color: #1d4c95;
                        line-height: 50px;
                        display: flex;
                        align-items: center;
                    }
                    .timeview{
                        font-size: 18px;
                        color: #666;
                        margin-bottom: 30px;
                    }                    
                    >p{
                        width: 100%;
                        color: #666;
                        font-size: 14px;
                        line-height: 24px;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        word-break: break-all;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                        text-indent: 2em;
                    }
                  
                }
                .box_bottom{
                    >span{
                        margin-bottom: 14px;
                        font-size: 20px;
                        color: #333;
                    }  
                    .btn{
                        margin-top: 20px;
                        margin-bottom: 20px;
                        display: flex;
                        justify-content: flex-end;
                        button{
                            width: 126px;
                            height: 32px;
                            border-radius: 10px;
                        }                    
                    }                    
                }
            }
        }
    }
    .path{
        padding-bottom: 160px;
        display: flex;
        justify-content: flex-end;
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