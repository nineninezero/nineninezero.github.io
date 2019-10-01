<template>
  <div class="login">
      <div class="login_box boxs">
          <h2>商家系统登录</h2>
          <p class="warn tel_warn">xxx</p>
          <div class="inp">
              <span>手机号码：</span>
              <input type="text" placeholder="请输入手机号码" v-model="login['telephone']">
          </div>
          <p class="warn psw_warn">xxx</p>          
          <div class="inp">
              <span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
              <input type="password" placeholder="请输入密码" v-model="login['password']">
          </div>
          <div class="rmb">
            <div class="check">
                <input type="checkbox" class="rmb_chk">记住密码
            </div>
            <a href="javascript:;">手机验证码登录</a>              
          </div>
          <button @click="handleLogin()">登录</button>
          <div class="fgt">
              <div class="wxlogin">
                  <img src="../assets/imgs/wx图标.png" alt="">
                  <a href="javascript:;">微信登录</a>                  
              </div>
              <div class="zhuce">
                  <a href="javascript:;" @click="handleFoget()">忘记密码？</a>
                  <a href="javascript:;" @click="changepage('zhuce')">用户注册</a>
              </div>
          </div>
      </div>

      <div class="foget_box boxs">
            <h2>找回密码</h2>
            <div class="inp">
                <span>手机号码：</span>
                <input type="text" placeholder="请输入手机号码" v-model="login['telephone']">
            </div>
            <div class="inp">
                <span>验 证 码：</span>
                <input type="text" placeholder="请输入验证码" v-model="yzm">
                <a href="javascript:;">获取验证码</a>
            </div>
            <div class="inp">
                <span>新 密 码：</span>
                <input type="password" placeholder="请输入新密码" v-model="newpsw">
            </div>                         
            <div class="inp">
                <span>确认密码：</span>
                <input type="password" placeholder="请再次输入新密码" v-model="againpsw">
            </div>     
            <button>确定</button>                                
            <div class="others">
                <a href="javascript:;" @click="backlogin()">商家系统登录</a>
                <a href="javascript:;" @click="changepage('home')">返回首页</a>
            </div>                              
      </div>
  </div>
</template>

<script>
import {login} from "../api/Api.js"
export default {
    data(){
        return{
            yzm:"",
            newpsw:"",
            againpsw:"",
            login:{
                "telephone":"",
                "password":"",
                "warn_word":""
            }
        }
    },
    mounted(){
        this.login["telephone"] = localStorage.getItem('telephone')
        this.login["password"] = localStorage.getItem('password')
    },
  methods:{
      changepage(name){
          this.$router.push({name:name})
      },
      handleLogin () {
        login(qs.stringify(this.login)).then(res=>{
                console.log(res)                
            if(res.status===200){
                if(res.data.code===1005){
                    $(".psw_warn").css("visibility","hidden")                                
                    $(".tel_warn").css("visibility","visible").html(res.data.message)
                }else if(res.data.code===1006){
                    $(".tel_warn").css("visibility","hidden")
                    $(".psw_warn").css("visibility","visible").html(res.data.message)                
                }else if(res.data.code===1003){
                    $(".tel_warn").css("visibility","hidden")                
                    $(".psw_warn").css("visibility","visible").html(res.data.message)                
                }else if(res.data.code===1004){
                    $(".psw_warn").css("visibility","hidden")                
                    $(".tel_warn").css("visibility","visible").html(res.data.message)                
                }else if(res.data.code===0){
                    $(".warn").css("visibility","hidden")
                    localStorage.setItem('mytoken', res.data.data.token)                    
                    if($(".rmb_chk").prop('checked')===true){
                        localStorage.setItem('telephone', this.login["telephone"])
                        localStorage.setItem('password', this.login["password"])
                    }else{
                        localStorage.setItem('telephone', "")                        
                        localStorage.setItem('password', "")                        
                    } 
                    this.login["telephone"]=""
                    this.login["password"]=""                                                       
                }                
            }else{
                this.$message.error(res.statusText)
            }
        })      
      },
      handleFoget(){
          $(".login_box").hide()
          $(".foget_box").css("display","flex")
      },
      backlogin(){
          $(".foget_box").hide()
          $(".login_box").css("display","flex")
      }
  }
}
</script>


<style lang="scss" scoped>
    .warn{
        width: 100%;
        color: red;
        visibility: hidden;
        display: flex;
        justify-content: flex-end;
    }
    .login{
        height: 800px;
        background: url("../assets/imgs/登录背景.jpg") no-repeat;
        background-position: center 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        .boxs{
            width: 600px;
            height: 400px;
            padding: 50px;
            background-color: #fff;
            box-shadow: 0 0 20px 2px #333;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            h2{
                font-size: 30px;
                color: #1E4696;
            }
            .inp{
                width: 100%;
                height: 40px;
                display: flex;
                border: 1px solid #C8C8C8;
                border-radius: 5px;
                span{
                    width: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #666;
                }
                >input{
                    flex: 1;
                }
                >a{
                    width: 100px;
                    height: 40px;
                    margin-top: -1px;
                    background-color: #1E4696;
                    border-radius: 0 5px 5px 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                }                
            }
            .rmb{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #333;
                font-size: 14px;
                .check{
                    display: flex;
                    align-items: center;
                }
                a{
                    color: #333;
                }
            }
            button{
                width: 200px;
                height: 40px;
                border-radius: 5px;
                font-size: 18px;
            }
            .fgt{
                width: 100%;
                font-size: 14px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .wxlogin{
                    display: flex;
                    align-items: center;
                    img{
                        width: 20px;
                        height: 20px;
                        margin-right: 5px;
                    }
                }
                .zhuce{
                    display: flex;
                    align-items: center;
                    a{
                        margin-left: 10px;
                    }
                }
                a{
                    color: #1E4696;
                }
            }
        }
        .foget_box{
            display: none;
            height: 600px;
            .others{
                width: 100%;
                display: flex;
                justify-content: flex-end;
                a{
                    margin-left: 10px;                    
                    color: #1E4696;                    
                }
            }
        }        
    }
</style>

