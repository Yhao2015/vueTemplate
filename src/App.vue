<!--
 * @Author: your name
 * @Date: 2021-08-09 16:36:30
 * @LastEditTime: 2022-02-21 15:40:01
 * @LastEditors: yuanhao
 * @Description: In User Settings Edit
 * @FilePath: \energy_admin\src\App.vue
-->
<template>
	<div class='jw_page' :style="{transform:transform}">
		<a-config-provider :locale="zhCN" :transformCellText="({text,column,record,index})=>text || '-'">
			<template  #renderEmpty>
				<div class="text-center">
					<a-empty :image="emptyImage"/>
				</div>
			</template>
			<router-view/>
		</a-config-provider>
	</div>
</template>

<script>
	import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
	import moment from 'moment';
	import { Empty } from 'ant-design-vue';
	import 'moment/locale/zh-cn';
	moment.locale('zh-cn');
	export default {
		name: 'App',
		data() {
			return {
				zhCN,
				transform:'scale(1,1)',
				emptyImage: Empty.PRESENTED_IMAGE_SIMPLE,
			};
		},
		mounted(){
			this.initScale()
			window.onresize = () =>{
				this.initScale()
			}
		},
		methods:{
			initScale(){
                let xRate = (parseInt(window.innerWidth/1920 * 10000) / 10000).toFixed(4)
                let yRate = (parseInt(window.innerHeight/1080 * 10000) / 10000).toFixed(4)
                sessionStorage.xRate = xRate
                sessionStorage.yRate = yRate
				this.transform = 'scale('+xRate+','+yRate+')'
			},
		}	
	}
</script>
<style>
	.jw_page{
		width:1920px;
		height:1080px;
		overflow: hidden;
		-moz-transform-origin: 0 0;
		-webkit-transform-origin:0 0;
		-o-transform-origin:0 0;
	}
</style>
