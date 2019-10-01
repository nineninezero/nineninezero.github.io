<template>
  <div class="require">
      <div class="require_main w">
          <h2>申请信息</h2>
          <div class="inp_box" v-for="(item,index) in names" :key="index">
              {{item}}：<input type="text">
          </div>
          <div class="areabox">应用项目：<textarea></textarea></div>
          <div class="btns">
              <button>返回</button>
              <button @click="postinfo()">提交</button>
          </div>
      </div>
      <div class="success">
          <div class="success_box">
              <img src="../../assets/imgs/同质服务/标准库/同质服务-标准库申请提交成功.gif" alt="">
              <h3>提交成功</h3>
              <span>近期会有工作人员联系您，请保持电话通畅！</span>
              <button @click="sure()">好的</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          names:["公司名称","联 系 人","QQ账号","联系电话","标 准 号","标准名称"]
      }
  },
  methods:{
      postinfo(){
          $(".success").show()
      },
      sure(){
          $(".success").hide()
      }
  }
}
</script>


<style lang="scss" scoped>
.require{
    position: relative;
    .require_main{
        height: 794px;
        padding-top: 40px;
        color: #333;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2{
            color: #1d4c95;
            font-size: 26px;
            font-weight: normal;
            margin-bottom: 35px;
        }
        .inp_box{
            width: 580px;
            margin-bottom: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            input{
                width: 490px;
                height: 40px;
                padding-left: 10px;
                border: 1px solid #c8c8c8;
                border-radius: 5px;
                font-size: 16px;
                color: #666;
            }
        }
        .areabox{
            width: 580px;
            height: 160px;
            margin-bottom: 26px;
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            textarea{
                width: 490px;
                padding: 10px;
                border: 1px solid #c8c8c8;  
                border-radius: 5px;              
            }            
        }
        .btns{
            width: 580px;
            display: flex;
            justify-content: flex-end;
            button{
                width: 100px;
                height: 30px;
                margin-left: 30px;
                border-radius: 5px;
            }
            button:first-child{
                background-color: #464646;
            }
        }
    }

    .success{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        display: none;
        .success_box{
            width: 716px;
            height: 490px;
            margin: 140px auto;
            padding-top: 60px;
            border: 1px solid #c8c8c8;
            background-color: #fff;
            color: #666;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                margin-bottom: 30px;
            }
            h3{
                font-size: 26px;
                color: #1d4c95;
                margin-bottom: 20px;
            }
            >span{
                margin-bottom: 70px;
            }
            >button{
                width: 100px;
                height: 30px;
                border-radius: 5px;
            }
        }
    }    
}

</style>

