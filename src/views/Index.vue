<!--
 * @Author: your name
 * @Date: 2021-12-06 12:40:19
 * @LastEditTime: 2022-07-04 16:04:03
 * @LastEditors: yuanhao
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vueTemplate\src\views\Index.vue
-->
<template>
    <div>
        <icon-font :iconName="'icon-dayu'" iconClass="color_e04582"></icon-font>
        <jw-table :columns="columns" :tableData="sourceData" skin=""></jw-table>
        <!-- <router-view v-if="isRouterAlive" :key="$route.fullPath"></router-view> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            isRouterAlive: true,//路由刷新判断
            columns: [
                {
                    title: '日期',
                    dataIndex: 'date',
                    align: 'center'
                },
                {
                    title: '单位等效利用时数(h)',
                    dataIndex: 'installedKw',
                    align: 'center'
                },
                {
                    title: '等效时数(h)',
                    dataIndex: 'equivalent',
                    align: 'center'
                },
                {
                    title: '总发电量(kWh)',
                    dataIndex: 'epTotal',
                    align: 'center'
                },
                {
                    title: '同比发电量(kWh)',
                    dataIndex: 'epPariPass',
                    align: 'center'
                },
                {
                    title: '同比增减率(%)',
                    dataIndex: 'ratePariPass',
                    align: 'center'
                },
                {
                    title: '减排CO₂(吨)',
                    dataIndex: 'co2Weight',
                    align: 'center'
                }
            ],
            sourceData: [
                {
                    date: '2022-5-1',
                    installedKw: '20',
                    equivalent: '30',
                    epTotal: '100',
                    epPariPass: '1',
                    ratePariPass: '22',
                    co2Weight: '10'
                }
            ],
        }
    },
    components: {
    },
    created() {
    },
    mounted() {
        // this.$router.push({name: this.menuSecond})
    },
    methods:{
        //点击菜单可以刷新当前页面
        reload (jumpId) {
            this.isRouterAlive = false
            this.$router.push(
                {
                    name: this.menuSecond,
                    // params: { jumpId }
                }
            )
            // localStorage.jumpId = jumpId
            this.$nextTick(() => (this.isRouterAlive = true))
        }
    },
    destroyed() {
    }
}
</script>

<style lang='less' scoped>
</style>
