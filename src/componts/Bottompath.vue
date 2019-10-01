<template>
    <div class="path" :style="{background:this.$store.state.bgc}">
        <div class="path_main w">
            <h3>同质服务流程</h3>
            <div class="p_boxs">
                <ul>
                    <li v-for="(item,index) in imgurls" :key="index">
                        <a href="javascript:;" @click="change(index)"><img :src="item.imgurl" alt=""><span>{{item.text}}</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
        imgurls:[
            {"imgurl":require("../assets/imgs/同质供应商_03.jpg"),"text":"商家注册"},
            {"imgurl":require("../assets/imgs/同质供应商_05.jpg"),"text":"企业认证"},
            {"imgurl":require("../assets/imgs/同质供应商_07.jpg"),"text":"合同管理"},
            {"imgurl":require("../assets/imgs/同质供应商_09.jpg"),"text":"检测申请"},
            {"imgurl":require("../assets/imgs/同质供应商_11.jpg"),"text":"追溯申请"},
            {"imgurl":require("../assets/imgs/同质供应商_13.jpg"),"text":"同质证书"}
        ]
    }
  },
  methods:{
      change(index){
        //   switch(index){
        //       case 0:this.$router.push({name:""})
        //   }
      }
  }
}
</script>

<style lang="scss" scoped>
.path{
    height: 477px;
    .path_main{
        height: 100%;
        display: flex;
        padding: 110px 0;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        h3{
            font-size: 30px;
            color: #1d4c95;
            font-weight: normal;
        }
        .p_boxs{
            width: 100%;
            ul{
                width: 100%;
                display: flex;
                justify-content: space-between;
                a{
                    position: relative;
                    span{
                        position: absolute;
                        font-size: 18px;
                        bottom: 20px;
                        left: 50%;
                        margin-left: -36px;
                    }
                }
            }
        }
    }
}
</style>


