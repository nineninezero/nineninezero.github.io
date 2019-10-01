<template>
  <div id="pagination" class="pagination">
  </div>
</template>

<script>
export default {
  data(){
    return{
      curPage: 1, //初始页码
      pageAmount: 10, //每页多少条
      dataTotal: 3, //总共多少条数据
      pageSize: 5, //可选,分页个数
    }
  },
  mounted(){
    this.Page()
  },
  computed:{
    // 总页数
    pageTotal:function(){
      return Math.ceil(this.dataTotal/this.pageAmount) 
    }
  },
  methods:{
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
            console.log(page);
        }
      })
    }
  }
}
</script>

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

