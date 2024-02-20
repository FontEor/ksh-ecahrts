<template>
    <div class="header">
      <el-row :gutter="20">
        <el-col :span="4">
            <div class="grid-content bg-purple">
                <el-link >欢迎{{username}}</el-link>
                <el-link @click="$router.push('/login')">退出</el-link>
            </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple">
              <span class="headerData">数据可视化</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span >时间：{{time}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                time:"",
                username:this.$store.getters.getUser.username
            }
        },
        methods:{ 
            getTime(){
				      setInterval(()=>{
              //new Date() new一个data对象，当前日期和时间
              //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
              this.time = new Date().toLocaleString();
				},1000)
			},
        },
        created(){
            this.getTime()
        } 
    }
</script>

<style>
.headerData{
    font-size: 1.55rem;
}
/* .time{
   width: 30.85rem;
   height: 4.39rem;
   text-align: right;
   font-size: 0.71rem;
   position:absolute;
   line-height: 6.25rem;
} */
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 8em;
  }
  .row-bg {
    padding: 10px 0;
  }
</style>
