<template>
<div>
<div id="main3" ref="chart"></div>
</div>


</template>


<script>
     export default {
        props: ['showVal'],
        data(){
            return{
                myChart:null,
                domWidth:0,
                w:0,
            }
        },
        mounted(){
            console.log(this.domHeight1)
            var domHeight1=document.documentElement.clientHeight||document.body.clientHeight;
            document.getElementById("main3").style.height=domHeight1+'px';    
            this.domWidth=document.documentElement.clientWidth||document.body.clientWidth;
            this.w=this.domWidth/8*7;
            this.$refs.chart.style.width=this.w+'px';
            this.drawChart();
     
           
        },
        watch:{
            showVal(newval,oldval){
             this.chartResize(newval);
            }
        },
        methods:{   
           chartResize(rel){
               if(rel==false){
                     this.w=this.domWidth;
                    
               }else{
                    this.w=this.domWidth/8*7;
               }
                this.$refs.chart.style.width=this.w+'px';
                this.drawChart();
                console.log(this.myChart)
                this.myChart.resize();
                    
           },
            drawChart(){
                this.myChart = this.$echarts.init(document.getElementById('main3'))
var option={
                title: {
                    text: ''
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        var tar = params[1];
                        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                    }
                },
                grid: {
                    borderWidth:1,
                    borderColor:'red',
                    //  left: 'center',
                    // right: '4%',
                     bottom: '7%',
                    containLabel: true
                },
                xAxis: {
                    type : 'category',
                    axisLine:{
                        show:false
                    },
                    splitLine: {show:false},
                    axisLabel:{
                        color:'#ccc',
                        interval:0,
                        rotate:0
                    },
                    data : ['监测\n发现\n上报','整改\n督办\n函','疑案\n转办\n函','风险\n警示\n函','风险\n提示\n函']
                },
                yAxis: {
                    type : 'value',
                    axisLine:{
                        show:false
                    }, axisLabel:{
                        color:'#ccc'
                       
                    }
                   
                },
                legend:{
                data:['未完成','已完成'],
                top:'3%',
                textStyle: {
                    color: '#fff'
                }
                },
                series: [
                    {
                        name: '未完成',
                        type: 'bar',
                        stack:  '总量',
                        barWidth:'50%',
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderColor: '#61a0a8',
                                color: '#61a0a8'
                            },
                            emphasis: {
                                barBorderColor: '#61a0a8',
                                color: '#61a0a8'
                            }
                        },
                        data: [300, 1700, 1400, 1200, 300]
                    },
                    {
                        name: '已完成',
                        type: 'bar',
                        stack: '总量',
                        barWidth:'50%',
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            }
                        },
                        data:[900, 1200, 300, 200, 900]
                    }
                ]
            };
                this.myChart.setOption(option)
            }
        }
    
}
</script>

<style scoped>
#main3{
    height: 300px;
    width: 100%;
    margin:0 auto;
    background: #16222f;
}
</style>