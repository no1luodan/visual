<template>
    <div class="layOut" >
          <transition name="fade" mode="out-in">
        <div class='nav' id="menu"  v-if="showVal" >
            <!-- <transition name="fade" mode="out-in"> -->
            <headlists v-if="showVal" :idx='idx' :headerData="headerData"  @onchange="getIndex"></headlists>
            <!-- </transition>   @click="showVal=!showVal"-->
        </div>  
         </transition>
        <div  class='content'  @click="ifShow">
            {{showVal}}
    <swiper :options="swiperOption"  class="swp" ref="mySwiper">
    <swiper-slide class="swp"><mapChart ref="map" :showVal='showVal' ></mapChart></swiper-slide>
    <swiper-slide class="swp"><tableList></tableList></swiper-slide>
    <swiper-slide class="swp"><chart1 :showVal='showVal'></chart1></swiper-slide>
    <swiper-slide class="swp"><chart :showVal='showVal'></chart></swiper-slide>
  </swiper>




        </div>
</div>
</template>

<script>
import Vue from 'vue'
import store from '@/store'
import {  mapState,mapMutations} from 'vuex'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import headlists from './HeadList'
import mapChart from './map'
import chart1 from './chart1'
import chart from './chart2'
import tableList from './table'
           export default {
        components:{
            headlists,
            swiper,
            swiperSlide,
            chart,
            chart1,
            mapChart,
            tableList
        },
        data(){
            return{
                  listIndex:0,
                  idx:0,
                  showVal:true,
                  swiperOption: {
                    direction:'vertical',
                    slidesPerview:1,
            //   effect:"flip"
                      on: {
                            slideChangeTransitionStart: function(){
                                // this.idxObj.listIndex=this.activeIndex;
                                  sessionStorage.getItem('indexObj');
                            sessionStorage.setItem('key', this.activeIndex);
                                },
                           },
                    },
                headerData:[
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
                        }
                        // ,
                        // {
                        //     name: '首页',
                        //     path: 'page3',
                        //     url:'icon iconfont icon-1shouye',
                        //     active: false
                        // }
                    ]
            }
        },
         //定义这个sweiper对象  
        computed: {  
          
            swiper() {  
                console.log(this.$refs.mySwiper.swiper)
              return this.$refs.mySwiper.swiper;  
            }  
        }, 
        created(){
   
        },
        mounted () {
          this.changeIdx();
          var that=this.swiper;
          var self=this;
              this.swiper.onSlideToWrapperTransitionEnd=function(){
                 self.idx=that.realIndex;
             
    }
        },
        methods:{

            changeIdx(){
            this.idx=this.swiper.realIndex;
            },
            ifShow(){
                var thart=this;
               this.showVal=!this.showVal;
            },
            getIndex(params){ 
                console.log(this)
                this.idx=params;
                this.swiper.slideTo(this.idx, 1000, false);//切换到第一个slide，速度为1秒
                console.log('getIndex'+params)
                console.log('  this.activeIdx'+  this.activeIdx)
            },
          
        },
       store
    }
</script>

<style scoped>
.layOut{
    display: flex;
    flex-direction: row; 
    height: 100%;
}
.nav{
    flex: 1;
    font-size: 14px;
    height: 100%;
}
.content{
    flex: 7;
    position: relative;
    height: 100%;
    width: 100%;
    perspective: 2836px;
    overflow: hidden;

}
.swp{
    height: 100%;
    width: 100%;
    background: #16222f;
}
.fade-enter-active, .fade-leave-active {
  
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
     transform:translateX(-100px); 
 
}
</style>