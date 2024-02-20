<template>
    <div class="login_box">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <h2 class="login_title">登录界面</h2>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密 码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item align="center">
          <el-button type="primary" @click="onSubmit('form')">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
         return {
          form: {
            name: '',
            password:''
          },
           rules: {
             name: [
               { required: true, message: '请输入用户名', trigger: 'blur' },
               { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
             ],
             password: [
               { required: true, message: '请输入密码', trigger: 'blur' },
               { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
             ]
           }
         }
      },
      methods: {
        onSubmit(form) {
          this.$refs[form].validate((valid) => {
            var vm=this;
            if (valid) {
              //表单验证成功
              this.axios({
                methods: "get",
                url:'http://localhost:8080/getUser',
                headers:{
                      'Content-type':'application/x-www-form-urlencoded'
                },
                //data:{}
              }).then(function (resp) {
                if(resp.data.username==vm.form.name&&resp.data.password==vm.form.password){
                    var user=resp.data.object;
                    sessionStorage.setItem('islogin','true')
                    //同步方式
                    //vm.$store.commit('updateUser',user)
                    //异步方式
                    vm.$store.dispatch('asyncUpdateUser',user)
                    console.log(vm.$store.getters.getUser)
                    vm.$router.push("/Home");
                }else{
                  vm.$message.error("用户名或密码错误");
                  return false;
                }
              }).catch(function(){
              console.log("数据获取失败")
            })
            } else {
              this.$messsage({
                message:'用户名或密码错误',
                type:'warning'
              })
            }
          });
        }
      }
    }
</script>

<style scoped>
.login_box{
  width:400px;
  height: 300px;
  border: 1px solid #DCDFE6;
  margin: 160px auto;
  padding: 20px 50px 20px 30px;
  border-radius: 20px;
  box-shadow: #DCDFE6;

}
  .login_title{
    text-align: center;
    margin-bottom: 40px;
  }
</style>