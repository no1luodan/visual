<template>
    <div  id="mainTable">
    <table  id="oTb1">
    <tr><th>分公司</th><th>疑案金额（万元）</th><th>追回金额（万元）</th><th>移送人数（个）</th></tr>
     <tr v-for="(item,index) in tableArry">
            <td>{{item[0]}}</td>
            <td>{{item[1]}}</td>
            <td>{{item[2]}}</td>
            <td>{{item[3]}}</td>
            </tr>
    </table>

    </div>
</template>

<script>

    export default{
    
    data(){
        return{
        tableArry:[
            ['上海分公司','2000','2000','3'],
            ['大连分公司','3000','2200','3'],
            ['吉林省分公司','140','120','1'],
            ['北京分公司','2000','1200','3'],
            ['天津分公司','2000','1200','1'],
            ['内蒙古分公司','2000','1200','3'],
            ['西藏分公司','12000','1200','3'],
            ['安徽分公司','2500','1500','2'],
            ['深圳分公司','2000','1200','3'],
            ['常州分公司','2000','1200','3'],
            ['湖南分公司','2000','1200','3'],
            ['湖北分公司','2000','1200','3'],
            ['江西分公司','2000','1200','3'],
            ['广东分公司','2000','1200','3'],
            ['海南分公司','2000','1200','3'],
            ['河北分公司','2000','1200','3']
        ]
        }
    },
    created(){

    },
    mounted(){
     
    },
    methods:{

    }
}
</script>

<style scoped>
#mainTable{
    height:350px;
    width:100%;
    margin-top: 10px;
    overflow-y: auto;
    background: #16222f;
}

#oTb1{ 
    width: 90%;
    margin-left: 5%;
    height: 90%;
    margin-bottom: 10px;
    overflow-y: auto;
}
#oTb{
    margin-left: 5%;
    width: 90%;
    height: 90%;
    margin-bottom: 10px;
}
tr td{
    border: 1px solid royalblue;
    padding: .2rem;
    color:#00e8be;
    width: 25%;
}
#oTb tr th{
    /* border: 1px solid royalblue; */
    padding: .2rem;
    color:transparent;
    width: 25%;
    text-align: left;
   
}
#oTb1 tr th{
    border: 1px solid royalblue;
    padding: .2rem;
    color: #00dbdb;
    width: 25%;
    background: #16222f;
    text-align: left;
   
}
</style>