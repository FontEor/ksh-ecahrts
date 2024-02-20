<template>
  <div>
    <div id="echartss" :style="{width: '1400px', height: '670px'}"></div>
  </div>
</template>

 <script>
import echarts from 'echarts'
import axios from 'axios'
    export default {
        name: "BarChart",
        data(){
          return{
            cityList:[],
            countList:[]
          }
        },
        methods:{
          getCityList(){
            var myChart = echarts.init(document.getElementById('echartss'));
            this.axios({
              methods:'get',
              url:"http://localhost:8080/getCityList",
              headers:{
                      'Content-type':'application/x-www-form-urlencoded'
                },
            }).then(function(resp){
              myChart.setOption({
                  xAxis: {
                      data: resp.data.cityList
                  },
                  title: { text: '安徽省2020年2月22日新冠状病毒感染人数' },
                  tooltip: {},
                  legend: {
                      data: ['新增确诊人数','新增治愈人数','新增疑似人数']
                  },
                  yAxis: {},
                  series: [{
                      name: '新增确诊人数',
                      type: 'bar',
                      data: resp.data.countList
                  },{
                      name: '新增治愈人数',
                      type: 'bar',
                      data: resp.data.countList1
                  },{
                      name: '新增疑似人数',
                      type: 'bar',
                      data: resp.data.countList2
                  }]
              });
            }).catch(function(){
              console.log("数据获取失败")
            })
          }
        },
        mounted() {
          this.getCityList();
       }
    }
</script>

<style scoped>

</style>