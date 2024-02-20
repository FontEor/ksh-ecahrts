import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    //全局state对象，用于保存所有组件的公共数据
    state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
        user: {
            username: ''
        },
        menu: [{
            title: "导航一",
            path: "/shuipingBar",
            group: [{
                    title: "分组一",
                    path: "/shuipingBar",
                    group: [{ title: '柱状图', path: "/BarChart" }, { title: '折线图', path: "/shuipingBar" }]
                },
                {
                    title: "分组二",
                    path: "/shuipingBar",
                    group: [{ title: '柱状图', path: "/BarChart" }, { title: '折线图', path: "/shuipingBar" }]
                }
            ]

        }, {
            title: "导航二",
            group: [{
                    title: "分组一",
                    path: "/shuipingBar",
                    group: [{ title: '柱状图', path: "/BarChart" }, { title: '折线图', path: "/shuipingBar" }]
                },
                {
                    title: "分组二",
                    path: "/shuipingBar",
                    group: [{ title: '柱状图', path: "/BarChart" }, { title: '折线图', path: "/shuipingBar" }]
                }
            ]
        }]
    },
    //   state: {
    //       //定义一个user对象，在组件中通过this.$store.state.user来获取
    //     user:{
    //         username:''
    //     }
    //   },
    //实时监测state值得最新状态，getters可以理解为计算属性
    getters: {
        //在组件中通过this.$store.getters.getUser获取
        getUser(state) {
            return state.menu
        }
    },
    //定义改变state初始值的方法，这里是唯一可以改变state的地方，缺点是只能同步执行
    //类似setters
    mutations: {
        //在组件中通过this.$store.commit('updateUser',user)来调用mutations
        updateUser(state, user) {
            state.user = user
        }
    },
    //定义触发mutations里函数的方法，可以异步执行mutations里的函数
    actions: {
        //在组件中通过this.$store.dispatch('asyncUpdateUser',user)来调用actions
        asyncUpdateUser(context, user) {
            context.commit('updateUser', user)
        }
    }
})
export default store;