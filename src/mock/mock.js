import Mock from 'mockjs'
//使用mock模拟数据

function getCityList(){
  return Mock.mock({
    'code':'0',
    'mes':'成功',
    'cityList|1-1': ["合肥","淮北","亳州","宿州","蚌埠","阜阳","淮南","六安","芜湖","铜陵","安庆"],
    'countList|1-1': [11,5,6,2,24,10,2,5,1,2,6],
    'countList1|1-1':[11,5,1,2,4,2,1,1,11,25,4],
    'countList2|1-1':[3,0,1,2,0,0,1,0,0,1,0,1],
    'countObject|1-1': [{value: 11, name: '合肥'},
        {value: 5, name: '淮北'},
        {value: 6, name: '亳州'},
        {value: 2, name: '宿州'},
        {value: 24, name: '蚌埠'},
        {value: 10, name: '阜阳'},
        {value: 2, name: '淮南'},
        {value: 5, name: '六安'},
        {value: 1, name: '芜湖'},
        {value: 2, name: '铜陵'},
        {value: 6, name: '安庆'}
        ]
    })
}
function getCityList1(){
  return Mock.mock({
    'code':'0',
    'mes':'成功',

    'cityList|1-1': ["合肥","亳州" ,"淮北", "淮南","安庆","芜湖","马鞍山","滁州","宿州","黄山","铜陵","阜阳","池州","宣城","蚌埠","六安"],

    'dateList|1-1':['02-15', '02-16', '02-17', '02-18', '02-19', '02-20', '02-21'],

    'typeList|1-1':['新增确诊病例','新增疑似病例','新增治愈出院病例','百分比'],

    'newConfirmed|1-1':[[1,1,0,1,0,0,1,0,0,0,0,2,0,0,0,2],[2,0,1,1,1,0,0,0,1,0,0,1,0,0,1,3],[2,0,0,2,0,2,0,0,1,0,1,0,0,0,1,0],[0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],

    'newSuspected|1-1':[[0,0,0,3,1,0,0,0,0,0,0,0,0,0,0,2],[3,0,1,0,0,2,0,0,1,0,0,1,0,0,1,0],[4,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],

    'newCured|1-1':[[5,6,4,1,1,3,1,0,0,0,0,4,0,0,2,7],[6,10,0,1,1,2,0,0,2,0,0,5,2,0,4,1],[1,0,1,0,0,0,2,0,3,2,1,4,0,0,8,5],[21,12,2,3,5,4,2,0,1,0,1,6,0,0,9,2],[4,11,0,1,5,0,1,0,3,3,0,17,1,0,10,7],[4,11,0,1,5,0,1,0,3,3,0,17,1,0,10,7],[11,5,1,0,2,4,2,0,1,0,1,11,0,0,25,4]],

    'sumCount|1-1':[[{name:'新增确诊病例',value:12},{name:'新增疑似病例',value:6},{name:'新增治愈出院病例',value:34}],[{name:'新增确诊病例',value:11},{name:'新增疑似病例',value:9},{name:'新增治愈出院病例',value:34}],[{name:'新增确诊病例',value:9},{name:'新增疑似病例',value:7},{name:'新增治愈出院病例',value:27}],[{name:'新增确诊病例',value:4},{name:'新增疑似病例',value:0},{name:'新增治愈出院病例',value:68}],[{name:'新增确诊病例',value:1},{name:'新增疑似病例',value:0},{name:'新增治愈出院病例',value:63}],[{name:'新增确诊病例',value:1},{name:'新增疑似病例',value:1},{name:'新增治愈出院病例',value:76}],[{name:'新增确诊病例',value:1},{name:'新增疑似病例',value:0},{name:'新增治愈出院病例',value:67}]]

    })
}
function getUser(){
  return Mock.mock({
    'code':'0',
    'mes':'成功',
    "username":'admin',
    "password":'123456',
    'object|1-1':{
      "username":'admin'
    }
  })
}
Mock.mock('http://localhost:8080/getCityList', 'get', getCityList)//获取城市数据列表
Mock.mock('http://localhost:8080/getCityList1', 'get', getCityList1)//获取城市数据列表
Mock.mock('http://localhost:8080/getUser', 'get', getUser)//获取用户名和密码
export default Mock