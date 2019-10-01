<template>
  <div class="help_ques">
      <div class="ques_main w">
        <div class="title">
          <img src="../../../assets/imgs/关于圣云-帮助中心-常见问题.png" alt="">
          <h3>用户常见问题解析</h3>
        </div>
        <div class="questions">
          <div class="box">
            <img src="../../../assets/imgs/关于圣云-帮助中心-常见问题问好.png" alt="">
            <div class="text">
              <div class="ques">
                xxxxxxxxxxxxxxxxx？
                <a href="javascript:;" class="zk" @click="show()"><img src="../../../assets/imgs/展开.gif">展开</a>
                <a href="javascript:;" class="sq" @click="hide()"><img src="../../../assets/imgs/收起.gif">收起</a>
              </div>
              <div class="answer">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods:{
    show(){
      $(".zk").hide()
      $(".sq").css("display","flex")
      $(".answer").stop().slideDown(100)
    },
    hide(){
      $(".sq").hide()
      $(".zk").show()
      $(".answer").stop().slideUp(100)      
    }
  }
}
</script>
<style lang="scss" scoped>
  .help_ques{
    background-color: #F8F8F8;
    overflow: hidden;
    .title{
      margin: 60px 0;
      display: flex;
      font-size: 20px;
      color: #1d4c95;
    }
    .questions{
      margin-left: 50px;
      margin-bottom: 140px;
      color: #1d4c95;
      .box{
        display: flex;
        >img{
          height: 31px;
        }
        .text{
          flex: 1;
          display: flex;
          flex-direction: column;
          .ques{
            width: 100%;
            height: 31px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a{
              color: #1d4c95;
              margin-right: 300px;
              font-size: 18px;
              display: flex;
              align-items: center;
            }
            .sq{
              display: none;
            }
          }
          .answer{
            display: none;
            color: #666;
            word-break: break-all;    
          }
        }
      }
    }
  }
</style>

