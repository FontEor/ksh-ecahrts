<template>
  <div>
    <div id="echartss" :style="{width: '1400px', height: '670px'}"></div>
  </div>
</template>

 <script>
import echarts from 'echarts'
import axios from 'axios'
    export default {
        name: "PieChart",
        data(){
          return{}
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
                    title: {
                        text: '安徽省2020年2月22日新冠状病毒新增确诊感染人数',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        left: 'center',
                        top: 'bottom',
                        data: resp.data.cityList
                    },
                    series: [
                        {
                            name: '面积模式',
                            type: 'pie',
                            radius: [30, 300],
                            center: ['50%', '50%'],
                            roseType: 'area',
                            data:resp.data.countObject
                        }
                    ]
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
