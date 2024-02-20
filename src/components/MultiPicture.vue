<template>
  <div>
    <div id="echartss" :style="{width: '1400px', height: '670px'}"></div>
  </div>
</template>

 <script>
import echarts from 'echarts'
import axios from 'axios'
    export default {
        name: "MultiPicture",
        data(){
          return{}
        },
        methods:{
          getCityList1(){
            var myChart = echarts.init(document.getElementById('echartss'));
            this.axios({
              methods:'get',
              url:"http://localhost:8080/getCityList1",
              headers:{
                      'Content-type':'application/x-www-form-urlencoded'
                },
            }).then(function(resp){
                console.log(resp.data.sumCount[0])
                myChart.setOption({
                    baseOption: {
                        timeline: {
                            axisType: 'category',
                            autoPlay: true,
                            playInterval: 2000,
                            data: resp.data.dateList
                        },
                        title: {
                            subtext: ''
                        },
                        tooltip: {},
                        legend: {
                            left: 'right',
                            data: resp.data.typeList
                        },
                        grid: {
                            top: 80,
                            bottom: 100
                        },
                        xAxis: [
                            {
                                'type':'category',
                                'axisLabel':{'interval':0},
                                'data':resp.data.cityList
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                name: '人数',
                                max: 25
                            }
                        ],
                        series: [
                            { // 系列新增确诊病例的一些其他配置
                                name: '新增确诊病例',
                                type: 'bar',
                            },{ // 系列新增疑似病例的一些其他配置
                                name: '新增疑似病例',
                                type: 'bar',
                            },,{ // 系列新增治愈出院病例的一些其他配置
                                name: '新增治愈出院病例',
                                type: 'bar',
                            },
                            { // 系列三的一些其他配置        
                                name: '百分比',
                                type: 'pie',
                                center: ['50%', '25%'],
                                radius: '28%' ,
                                tooltip: {
                                    trigger: 'item',
                                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                                }    
                            }
                        ]
                    },
                    options: [
                        { // 这是'02-15' 对应的 option
                            title: {
                                text: '安徽省02月15日新冠病毒人数统计值'
                            },
                            series: [
                                {data: resp.data.newConfirmed[0]}, // 系列新增确诊病例的数据
                                {data: resp.data.newSuspected[0]},// 系列新增疑似病例的数据
                                {data: resp.data.newCured[0]},// 系列新增治愈出院病例的数据
                                {data: resp.data.sumCount[0]}  // 系列三的数据
                            ]
                        },
                        { // 这是'02-16' 对应的 option
                            title: {
                                text: '安徽省02月16日新冠病毒人数统计值'
                            },
                            series: [
                                {data: resp.data.newConfirmed[1]}, // 系列新增确诊病例的数据
                                {data: resp.data.newSuspected[1]},// 系列新增疑似病例的数据
                                {data: resp.data.newCured[1]},// 系列新增治愈出院病例的数据
                                {data: resp.data.sumCount[1]}  // 系列三的数据
                            ]
                        },
                        { // 这是'02-17' 对应的 option
                            title: {
                                text: '安徽省02月17日新冠病毒人数统计值'
                            },
                            series: [
                                {data: resp.data.newConfirmed[2]}, // 系列新增确诊病例的数据
                                {data: resp.data.newSuspected[2]},// 系列新增疑似病例的数据
                                {data: resp.data.newCured[2]},// 系列新增治愈出院病例的数据
                                {data: resp.data.sumCount[2]}  // 系列三的数据
                            ]
                        },
                        { // 这是'02-18' 对应的 option
                            title: {
                                text: '安徽省02月18日新冠病毒人数统计值'
                            },
                            series: [
                                {data: resp.data.newConfirmed[3]}, // 系列新增确诊病例的数据
                                {data: resp.data.newSuspected[3]},// 系列新增疑似病例的数据
                                {data: resp.data.newCured[3]},// 系列新增治愈出院病例的数据
                                {data: resp.data.sumCount[3]}  // 系列三的数据
                            ]
                        },
                        { // 这是'02-19' 对应的 option
                            title: {
                                text: '安徽省02月19日新冠病毒人数统计值'
                            },
                            series: [
                                {data: resp.data.newConfirmed[4]}, // 系列新增确诊病例的数据
                                {data: resp.data.newSuspected[4]},// 系列新增疑似病例的数据
                                {data: resp.data.newCured[4]},// 系列新增治愈出院病例的数据
                                {data: resp.data.sumCount[4]}  // 系列三的数据
                            ]
                        },
                        { // 这是'02-20' 对应的 option
                            title: {
                                text: '安徽省02月20日新冠病毒人数统计值'
                            },
                            series: [
                                {data: resp.data.newConfirmed[5]}, // 系列新增确诊病例的数据
                                {data: resp.data.newSuspected[5]},// 系列新增疑似病例的数据
                                {data: resp.data.newCured[5]},// 系列新增治愈出院病例的数据
                                {data: resp.data.sumCount[5]}  // 系列三的数据
                            ]
                        },
                        { // 这是'02-21' 对应的 option
                            title: {
                                text: '安徽省02月21日新冠病毒人数统计值'
                            },
                            series: [
                                {data: resp.data.newConfirmed[6]}, // 系列新增确诊病例的数据
                                {data: resp.data.newSuspected[6]},// 系列新增疑似病例的数据
                                {data: resp.data.newCured[6]},// 系列新增治愈出院病例的数据
                                {data: resp.data.sumCount[6]}  // 系列三的数据
                            ]
                        }
                    ]
                });
            }).catch(function(){
              console.log("数据获取失败")
            })
          }
        },
        mounted() {
          this.getCityList1()
       }
    }
</script>

<style scoped>

</style>