<!--
 * @Author: yuanhao
 * @Date: 2022-07-04 10:42:19
 * @LastEditTime: 2022-07-04 10:53:58
 * @LastEditors: yuanhao
 * @Description: 
 * @FilePath: \vueTemplate\src\components\Icon.vue
-->
<template>
    <svg class="icon" aria-hidden="true" :class="iconClass">
        <use v-bind:xlink:href="`#${iconName}`"></use>
    </svg>
</template>

<script>
export default {
    props:{
        iconName:{
            type:String
        },
        iconClass:{
            type:String
        },
    },
    name: 'iconFont'
}
</script>

<style>

</style>