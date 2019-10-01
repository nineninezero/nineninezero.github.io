<template>
  <div class="news_inside">
      <div class="top w">
          <h2>{{newinfo.title}}</h2>
          <span>发布日期：{{newinfo.date_added}}　预览：xx</span>
      </div>
      <div class="contant w">
          <img :src="baseurl+newinfo.image" alt="">
          <p class="article" v-html="newinfo.description"></p>
      </div>
      <div class="bottom">
          <div class="bottom_main w">
              <div class="pre_page">上一篇：<a href="javascript:;" @click="otherpage(parseInt(id)-1)">{{pre_title}}</a></div>
              <div class="next_page">下一篇：<a href="javascript:;" @click="otherpage(parseInt(id)+1)">{{next_title}}</a></div>
          </div>
      </div>
  </div>
</template>

<script>
import {getNewsInfo} from '../../api/Api.js'
export default {
  data(){
      return{
          id:this.$route.query.id,
          pre_title:"",
          next_title:"",
          newinfo:{},
          baseurl:this.$store.state.baseurl          
      }
  },
  mounted(){
    this.initinfo()
  },
  watch: {
    '$route' (to, from) {
        this.$router.go(0);
        window.scrollTo(0,0);
    }
  },
  methods:{
        initinfo(){
            let preid=parseInt(this.id)-1
            let nextid=parseInt(this.id)+1
            getNewsInfo(this.id).then(res=>{
                this.newinfo=res.data.data.result
                // console.log("当前"+this.id)
            })
            getNewsInfo(preid).then(res=>{
                // console.log("上一页"+preid)
                this.pre_title=res.data.data.result.title
            })
            getNewsInfo(nextid).then(res=>{
                // console.log("下一页"+nextid)            
                this.next_title=res.data.data.result.title
            })
        },
        otherpage(id){
            this.$router.push({name:"news_inside",query:{id:id}}) 
            this.initinfo()
        }  
  }
}
</script>


<style lang="scss" scoped>
    .top{
        height: 206px;
        border-bottom: 1px solid #c8c8c8;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2{
            font-size: 24px;
            color: #1d4c95;
            margin-bottom: 30px;
        }
        span{
            font-size: 14px;
            color: #666;
        }
    }
    .contant{
        width: 1000px;
        display: flex;
        flex-direction: column;
        img{
            margin: 40px auto;
        }
        .article{
            width: 100%;
            word-wrap:break-word;
            color: #666;
        }
    }
    .bottom{
        height: 200px;
        background-color: #F8F8F8;
        .bottom_main{
            height: 100%;
            padding: 50px 100px;  
            color: #333;            
            display: flex;
            flex-direction: column;   
            justify-content: space-around; 
            >div{
                display: flex;
                a{
                    color: #333;
                }                
            }              
        }
    }
</style>

