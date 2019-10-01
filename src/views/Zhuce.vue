<template>
  <div class="zhuce">
      <div class="zhuce_box">
          <div class="zc_menu">
              <a href="javascript:;" v-for="(item,index) in menulist" :key="index" :class="{active:index===actnum}" @click="changemenu(index)"><i  class="iconfont" :class="item.icon"></i>{{item.title}}</a>
          </div>
          <div class="zc_contant">
            <div class="inp">
                <div class="warning warn_phone"></div>
                <span>手机号码：</span>
                <input type="text" placeholder="请输入手机号码" v-model="phonenum">
            </div>              
            <div class="inp">
                <div class="warning warn_yzm"></div>                
                <span>验 证 码：</span>
                <input type="text" placeholder="请输入验证码" v-model="yzm">
                <a href="javascript:;" @click="checkyzm()">获取验证码</a>
            </div> 
            <div class="inp" v-if="actnum===0">
                <div class="warning warn_lb"></div>                                
                <span>商品类别：</span>
                <el-select v-model="bechoies" border="none" placeholder="请选择商品类别">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                    </el-option>
                </el-select>                 
            </div> 
            <div class="inp" v-if="actnum===1">
                <div class="warning warn_name"></div>                                                
                <span>企业名称：</span>
                <input type="text" placeholder="请输入企业名称" v-model="companyname">
            </div>

            <div class="inp">
                <div class="warning warn_psw"></div>                                                               
                <span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
                <input type="password" placeholder="请输入密码，不可少于6位且不可多于12位" v-model="psw">
            </div> 
            <div class="inp">
                <div class="warning warn_surepsw"></div>                                                                
                <span>确认密码：</span>
                <input type="password" placeholder="请再次输入密码" v-model="surepsw">
            </div>                                     
          </div>
          <div class="zc_foot">
              <div class="warning warn_agree"></div>                                                                              
              <div class="agree"><input id="agree" type="checkbox">同意<a href="javascript:;">《圣云品配网站用户注册协议》</a></div>
              <button @click="checkall()">立即注册</button>
              <div class="already">
                  已有账号，<a href="javascript:;" @click="changepage('login')">立即登录</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
        actnum:0,
        phonenum:"",
        yzm:"",
        companyname:"",
        psw:"",
        surepsw:"",
        menulist:[
            {title:"供应商",icon:"icon-4"},
            {title:"采购商",icon:"icon-caigoudingdan"},
            {title:"车 主",icon:"icon-cheliang-"}
        ],
        options: [
            // value必需
            {value: '1',name: '类别1'}, 
            {value: '2',name: '类别2'}, 
            {value: '3',name: '类别3'}, 
            {value: '4',name: '类别4'}, 
            {value: '5',name: '类别55555555555555555555555555555'}
        ],
        bechoies: []
      }
  },
  methods:{
      changemenu(index){
          $("input").each(function(){$(this).val("666").change()})
             
          $("input").each(function(){console.log($(this).val())})          
          this.actnum=index
          $(".warning").hide()
      },
      changepage(name){
          this.$router.push({name:name})
      },
      checkall(){
          this.checkphone()
          this.checkyzm()
          this.checklb()
          this.checkname()
          this.checkpsw()
          this.checksurepsw()
          this.checkagree()
      },
      //手机格式验证
      checkphone(){
        let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(this.phonenum===''){
            $(".warn_phone").css("display","flex").html("请输入手机号码")
        }else if(!reg.test(this.phonenum)){
            $(".warn_phone").css("display","flex").html("格式错误")
        }else{
            $(".warn_phone").hide()
        }
      },
      //验证码验证
      checkyzm(){
          if(this.yzm===""){
            $(".warn_yzm").css("display","flex").html("请输入验证码")
          }else{
            $(".warn_yzm").hide()
          }
      },
      //类别验证
      checklb(){
          if(this.bechoies.length===0){
            $(".warn_lb").css("display","flex").html("请选择类别")
          }else{
            $(".warn_lb").hide()
          }          
      },
      //企业名称验证
      checkname(){
          if(this.companyname===""){
            $(".warn_name").css("display","flex").html("请输入企业名称")
          }else{
            $(".warn_name").hide()
          }
      },    
      checkpsw(){
          if(this.psw===""){
            $(".warn_psw").css("display","flex").html("请输入密码")              
          }else{
            $(".warn_psw").hide()              
          }
      },  
      checksurepsw(){
          if(this.surepsw!=this.psw){
            $(".warn_surepsw").css("display","flex").html("密码不一致")              
          }else if(this.surepsw===""){
            $(".warn_surepsw").css("display","flex").html("请再次输入密码")              
          }else{
            $(".warn_surepsw").hide()              
          }
      },
      checkagree(){
          if($("#agree").prop("checked")){
            $(".warn_agree").hide()                            
          }else{
            $(".warn_agree").css("display","flex").html("请同意注册协议")                            
          }
      }  
  }
}
</script>


<style>
/* element-ui默认样式修改 */
.el-select,.el-input{
    flex: 1;
    height: 38px;
}
.el-input--suffix .el-input__inner{
    border: none;
    padding: 0;
    height: 38px;
}
.el-select .el-select__tags>span{
}
.el-select .el-tag{

}
</style>

<style lang="scss" scoped>
    .zhuce{
        height: 800px;
        background-color: #E6E6E6;
        display: flex;
        justify-content: center;
        align-items: center;
        .zhuce_box{
            width: 640px;
            background-color: #fff;
            .zc_menu{
                display: flex;
                a{
                    flex: 1;
                    height: 65px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #C8C8C8;
                    i{
                        font-size: 20px;
                    }
                }
                .active{
                    background-color: #fff;
                    color: #1E4696;
                }
            }
            .zc_contant{
                height: 380px;
                padding: 20px 40px;
                font-size: 14px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                .inp{
                    position: relative;
                    width: 100%;
                    height: 40px;
                    display: flex;
                    border: 1px solid #C8C8C8;
                    border-radius: 5px;
                    .warning{
                        position: absolute;
                        width: 100%;
                        height: 20px;
                        top: -20px;
                        color: red;
                        font-size: 14px;
                        display: none;
                        justify-content: flex-end;
                        align-items: center;
                    }
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
            }
            .zc_foot{
                position: relative;
                padding: 0 40px;
                height: 140px;
                font-size: 14px;
                display: flex;
                flex-direction: column;
                align-items: center;
                a{
                    color: #1E4696;
                }
                .warn_agree{
                    position: absolute;
                    width: 100%;
                    height: 20px;
                    top: -20px;
                    color: red;
                    font-size: 14px;
                    // display: none;
                    justify-content: flex-start;
                    align-items: center;
                }                
                .agree{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    a{
                        font-weight: bold;
                    }
                }
                button{
                    width: 100%;
                    height: 40px;
                    margin: 10px 0;
                    border-radius: 5px;
                    font-size: 20px;
                }
                .already{
                    display: flex;
                    align-items: center;
                }
            }
        }

    }
</style>
