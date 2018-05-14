<template>
   <div class="header">
     <div v-for="(item,index) in headerData"
      :key="index" 
      :class="{active:index==idx?true:false}"
      @click="chooseItem(index)"
      >
       
       <div  :class="item.url"></div>
          
        <span> {{item.name}}</span>
     </div> 



    
   </div>
</template>

<script>
import store from '@/store'
import {  mapState,mapMutations} from 'vuex'
import '../assets/css/demo.css'
import '../assets/css/iconfont.css'
    export default {
      props:{
            idx: {
                type: Number,
                default:0 
              },
              headerData:{
                   type: Array,
                default:[]
              }
          },
        data(){
            return {
                nowIndex:this.idx,
               headerData1:[
                        {
                            name: '天眼地图',
                            path: 'page0',
                            url:'icon iconfont icon-china-',
                            active: false
                        },
                        {
                        name: '数据看板',
                        path: 'page1',
                        url:'icon iconfont icon-shujutongji',
                        active: false   
                        },
                        {
                        name: '完成进度',
                        path: 'page2',
                        url:'icon iconfont icon-jindutiao',
                        active: false
                        },
                        {
                        name: '排行榜',
                        path: 'page4',
                        url:'icon iconfont icon-renwupaihang',
                        active: false
                        },
                        {
                            name: '首页',
                            path: 'page3',
                            url:'icon iconfont icon-1shouye',
                            active: false
                        }
                    ]
            }
        },
        watch: {
                nowIndex(newVal,oldVal){
console.log('newVal'+newVal)
                }
            
        },
        methods:{
            chooseItem(index){
               
         this.nowIndex=index;
          sessionStorage.setItem('key',  this.nowIndex);
         this.$emit('onchange',this.nowIndex)
       
            }
        }
    }
</script>

<style scoped>
.header {
    height: 100%;
    border-right:1px solid #0c1319;
    /* display: flex;
    flex-wrap: nowrap;
    flex-direction: column; */
  
}
.header >div{
    height: 25%;
    text-align: center;
}
.active{
    color: #0275d0;
}
</style>