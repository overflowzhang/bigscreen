/**
 * Created by Administrator on 2017/5/17.
 */
var buyTimeUpdatex=['1', '2', '3', '4', '5', '6', '7']
var buyTimeUpdatey=[120, 132, 101, 146, 199, 230, 150]
$(document).ready(function(){
    // 第二个(维保工单分析)页面 websocket连接与收数据部分
    console.log('建立连接2...');
    var websocket2 = new WebSocket("ws://127.0.0.1:8990/ws");
    websocket2.onopen = function(e){
        console.log('完成注册');
        var msg = {
            'content': '创建连接',
            'sendTime': (new Date()).getTime(),
            'spreadType': 'INITIAL',
            'groupId': 'group0004',
            'clientId': 'client0001',
            'sendClientId': 'client0002'
        }
        websocket2.send(JSON.stringify(msg))
    }
    websocket2.onmessage = function(e){
        console.log(e.data)
        // 把接下来的数据根据分类绑定到不同的echarts上即可
        // 提供动态更新echarts的方式：
        // 将 string 转化为 JSON
        var data = JSON.parse(e.data)
        // 巡检工单趋势 echarts
        var content1 = data['content1']
        buyTimeUpdatey = content1['data']
        buyTimeUpdater(buyTimeUpdatex,buyTimeUpdatey);

        // 故障因素分析 echarts
        var content2 = data['content2']
        failureFactor(content2)

        // 故障类型分析 echarts
        var content3 = data['content3']
        faultType(content3)

        // 工单修复数 echarts
        var content4 = data['content4']
        orderRepair(content4)

        // 维修工单趋势 echarts
        var content5 = data['content5']
        repairOrder(content5['data'])

        // 气候与工单量分析 echarts
        var content6 = data['content6']
        climateOrder(content6)

        // 工单完成量与工程师分析 echarts
        var content7 = data['content7']
        orderEngineer(content7)

        // 巡检工单行业分析 echarts
        var content8 = data['content8']
        orderIndustry(content8)

        // 平台活动与行业分析 echarts
        var content9 = data['content9']
        activityOrder(content9)

        // var secondaryRepair     // 工单二次维修数分析
    }


    // 第三个(项目信息分析)页面websocket连接与收数据部分
    console.log('建立连接3...');
    var websocket3 = new WebSocket("ws://127.0.0.1:8990/ws");
    websocket3.onopen = function(e) {
        console.log('完成注册');
        var msg = {
            'content': '创建连接',
            'sendTime': (new Date()).getTime(),
            'spreadType': 'INITIAL',
            'groupId': 'group0005',
            'clientId': 'client0001',
            'sendClientId': 'client0002'
        }
        websocket3.send(JSON.stringify(msg))
    }

    websocket3.onmessage = function(e) {
        console.log(e.data)
        // 把接下来的数据根据分类绑定到不同的echarts上即可
        // 提供动态更新echarts的方式：
        // 将 string 转化为 JSON
        var data = JSON.parse(e.data)

        // 收入行业分析 echarts
        var content1 = data['content1']
        IncomeIndustry(content1)
        // 项目数量分析 echarts
        var content2 = data['content2']
        ProjectNumber(content2)
        // 收入总额组成 echarts
        var content3 = data['content3']
        IncomeComposition(content3)
        // 成本总额组成 echarts
        var content4 = data['content4']
        CostComposition(content4)
        // 收入总额与成本总额 echarts
        var content5 = data['content5']
        IncomeAndCost(content5)
    }

    // 第四个(维保工程师分析)页面 websocket连接与收数据部分
    console.log('建立连接4...');
    var websocket4 = new WebSocket("ws://127.0.0.1:8990/ws");
    websocket4.onopen = function(e) {
        console.log('完成注册');
        var msg = {
            'content': '创建连接',
            'sendTime': (new Date()).getTime(),
            'spreadType': 'INITIAL',
            'groupId': 'group0006',
            'clientId': 'client0001',
            'sendClientId': 'client0002'
        }
        websocket4.send(JSON.stringify(msg))
    }

    websocket4.onmessage = function(e) {
        console.log(e.data)
        // 把接下来的数据根据分类绑定到不同的echarts上即可
        // 提供动态更新echarts的方式：
        // 将 string 转化为 JSON
        var data = JSON.parse(e.data)
        // 工程师性别占比
        var content1 = data['content1']
        GenderRatio(content1)
        // 工程师专业占比
        var content2 = data['content2']
        MajorRatio(content2)
        // 工程师年龄段占比
        var content3 = data['content3']
        AgeRatio(content3)
        // 各专业活跃工程师数量情况
        var content4 = data['content4']
        ProfessionNumber(content4)
        // 工单完成率排名
        var content5 = data['content5']
        OrderRank(content5)
        // 月在线工程师数量
        var content6 = data['content6']
        MonthOnline(content6)
        // 未按时完成工单数量情况
        var content7 = data['content7']
        NotComplete(content7)
        // 月工单完成情况工程师数量分析
        var content8 = data['content8']
        MonthCompletionNum(content8)
        // 月工单处理总量前7名工程师分析
        var content9 = data['content9']
        MonthTotalRank(content9)
        // 故障原因分析
        var content10 = data['content10']
        FailureCause(content10)
        // 故障处理情况
        var content11 = data['content11']
        FaultHand(content11)

    }

    // 第五个(终端客户分析)页面 websocket连接与收数据部分
    console.log('建立连接5...');
    var websocket4 = new WebSocket("ws://127.0.0.1:8990/ws");
    websocket4.onopen = function(e) {
        console.log('完成注册');
        var msg = {
            'content': '创建连接',
            'sendTime': (new Date()).getTime(),
            'spreadType': 'INITIAL',
            'groupId': 'group0007',
            'clientId': 'client0001',
            'sendClientId': 'client0002'
        }
        websocket5.send(JSON.stringify(msg))
    }

    websocket5.onmessage = function(e) {
        console.log(e.data)
        // 把接下来的数据根据分类绑定到不同的echarts上即可
        // 提供动态更新echarts的方式：
        // 将 string 转化为 JSON
        var data = JSON.parse(e.data)

        // 客户类型分析 echarts
        var content1 = data['content1']
        CustomerType(content1)

        // 客户区域分析 echarts
        var content2 = data['content2']
        CustomerArea(content2)

        // 客户行业分析 echarts
        var content3 = data['content3']
        CustomerIndustry(content3)

        // 月活跃客户数据分析 echarts
        var content4 = data['content4']
        MonthActiveCustomer(content4)

        // 当日客户在线情况 echarts
        var content5 = data['content5']
        CustomerOnline(content5)

        // 月客户总数分析 echarts
        var content6 = data['content6']
        TotalMonthCustomer(content6)

        // 分类客户趋势分析 echarts
        var content7 = data['content7']
        ClassifiedCustomer(content7)

        // 客户倾向性类型分析 echarts
        var content8 = data['content8']
        CustomerPreferenceType(content8)

        // 行业活跃客户数 echarts
        var content9 = data['content9']
        IndustryActiveCustomer(content9)

        // 天气与活跃客户数分析 echarts
        var content10 = data['content10']
        WeatherAndActiveCustomer(content10)

    }


})
$(function(){
    // index();
    $(".index_nav ul li").each(function(index){
        $(this).click(function(){
            $(this).addClass("nav_active").siblings().removeClass("nav_active");
            $(".index_tabs .inner").eq(index).fadeIn().siblings("div").stop().hide();
            if(index==1){
                yingXiao();
            }else if(index==2){
                shouRu();
            }else if(index==3){
                AnQuan();
            }else if(index==4){
                user();
            }else if(index==5){
                manage();
            }
        })
    });
    $(".tabs ul li").each(function(index){
        $(this).click(function(){
            $(".tabs ul li div .div").removeClass("tabs_active");
            $(this).find("div .div").addClass("tabs_active");
            $(".tabs_map>div").eq(index).fadeIn().siblings("div").stop().hide();
        })
    });
    $(".middle_top_bot ul li").each(function(){
        $(this).click(function(){
            $(".middle_top_bot ul li").removeClass("middle_top_bot_active");
            $(this).addClass("middle_top_bot_active");
        })
    });

});

var CustomerType        // 客户类型分析
var CustomerArea        // 客户区域分析
var CustomerIndustry    // 客户行业分析
var MonthActiveCustomer // 月活跃客户数据分析
var CustomerOnline      // 当日客户在线情况
var TotalMonthCustomer  // 月客户总数分析
var ClassifiedCustomer  // 分类客户趋势分析
var CustomerPreferenceType  // 客户倾向性类型分析
var IndustryActiveCustomer  // 行业活跃客户数
var WeatherAndActiveCustomer    // 天气与活跃客户数分析

function user(){
    // 终端客户分析
    // 客户区域分析
    $(CustomerArea=function(dataa){
        var myChart = echarts.init($("#container1")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'center',
                y:"16",
                data: [],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {
                            value:dataa['海淀'],
                            name:'海淀',
                            itemStyle:{
                                normal:{
                                    color:"#2864ab"
                                }
                            }
                        },
                        {
                            value:dataa['西城'],
                            name:'西城',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }
                        },
                        {
                            value:dataa['丰台'],
                            name:'丰台',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }
                        }
                        ,
                        {
                            value:dataa['朝阳'],
                            name:'朝阳',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }
                        }
                        ,
                        {
                            value:dataa['其他'],
                            name:'其他',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }
                        }

                    ]
                    //data:[
                    //    {value:90, name:'男性'},
                    //    {value:10, name:'女性',
                    //        itemStyle:{
                    //            normal:{
                    //                color:"#ff81cb"
                    //            }
                    //        }}
                    //]
                }
            ]
        };

        console.log("客户区域分析.......................")

        myChart.setOption(option);
    });

// 客户类型分析
    $(CustomerType=function(dataa){
        var myChart = echarts.init($("#container2")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                y:"16",
                data: ['单位客户','个人客户'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:dataa['单位客户'], name:'单位客户',
                            itemStyle:{
                                normal:{
                                    color:"#2865aa"
                                }
                            }},
                        {value:dataa['个体客户'], name:'个人客户',
                            itemStyle:{
                                normal:{
                                    color:"#ff81cb"
                                }
                            }}
                    ]
                }
            ]
        };



        myChart.setOption(option);
    });

// 客户行业分析
    $(CustomerIndustry=function(dataa){
        var myChart = echarts.init($("#container3")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                y:"16",
                data: ['金融','能源','教育','医疗','其他'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:dataa['金融'], name:'金融',
                            itemStyle:{
                                normal:{
                                    color:"#45c0ff"
                                }
                            }},
                        {value:dataa['能源'], name:'能源',
                            itemStyle:{
                                normal:{
                                    color:"#e15828"
                                }
                            }},
                        {value:dataa['教育'], name:'教育',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }},
                        {value:dataa['医疗'], name:'医疗',
                            itemStyle:{
                                normal:{
                                    color:"#ff81cb"
                                }
                            }},
                        {value:dataa['其他'], name:'其他',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });

// 月活跃客户收据分析
    $(MonthActiveCustomer=function(dataa){
        var myChart = echarts.init(document.getElementById('container4'));
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            //legend: {
            //    data:['散客（万人）','团队（万人）'],
            //    y:'20',
            //    textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            //},
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'两方合同客户（个）',
                    type:'bar',
                    stack: '广告',
                    barWidth:'30',
                    data:dataa['两方合同客户'],
                    itemStyle:{
                        normal:{
                            color:"#1afffd"
                        }
                    }
                },
                {
                    name:'三方合同客户（个）',
                    type:'bar',
                    stack: '广告',
                    data:dataa['三方合同客户'],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });

// 天气与活跃客户数分析
    $(WeatherAndActiveCustomer=function(dataa){
        var myChart = echarts.init(document.getElementById('container5'));
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            //legend: {
            //    data:['散客人数（万人）','团队人数（万人）'],
            //    textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            //},
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['炎热', '晴朗', '阴天', '多风', '大雾', '雨天','雨雪'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'个人客户（百人）',
                    type:'bar',
                    data:dataa['个体客户'],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'单位客户（百人）',
                    type:'bar',
                    stack: '广告',
                    data:dataa['单位客户'],
                    itemStyle:{
                        normal:{
                            color:"#0ad5ff"
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });

// 行业活跃客户数
    $(IndustryActiveCustomer=function(dataa){
        var myChart = echarts.init($("#container6")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['金融','能源','教育','医疗','文博','其他'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'客户数量（千个）',
                    type:'bar',
                    barWidth:'30',
                    data:[dataa['金融'], dataa['能源'], dataa['教育'], dataa['医疗'], dataa['文博'], dataa['其他']],
                    itemStyle: {
                        normal: {
                            color:"#0aff6c"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

    // 当日客户在线情况
    $(CustomerOnline=function(dataa){
        var myChart = echarts.init($("#container9")[0]);
        var option = {
            tooltip: {   //提示框，鼠标悬浮交互时的信息提示
                show: true,
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data: [],
                orient: 'vertical',
                textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            },

            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['8:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        //rotate:20,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }

            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '在线客户数（个）',
                    type: 'line',
                    stack: '在线客户数',
                    data: [dataa['8:00-10:00'], dataa['10:00-12:00'], dataa['12:00-14:00'], dataa['14:00-16:00'], dataa['16:00-18:00'], dataa['18:00-20:00']],
                    itemStyle: {
                        normal: {
                            color: '#02bcbc'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });

// 月客户总数分析
    $(TotalMonthCustomer=function(dataa){
        var myChart = echarts.init($("#container10")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'客户数量（千个）',
                    type:'bar',
                    barWidth:'30',
                    data:dataa['月客户总数'],
                    itemStyle: {
                        normal: {
                            color:"#269fec"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

// 分类客户趋势分析
    $(ClassifiedCustomer=function(dataa){
        var myChart = echarts.init(document.getElementById('container11'));
        var option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }

                }
            ],
            series : [
                {
                    name:'个人客户',
                    type:'line',
                    stack: '人',
                    data:dataa['个体客户'],
                    itemStyle: {
                        normal: {
                            color:"#e15828"
                        }
                    }
                },
                {
                    name:'单位客户',
                    type:'line',
                    stack: '人',
                    data:dataa['单位客户'],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

// 客户倾向性类型分析
    $(CustomerPreferenceType=function(dataa){
        var myChart = echarts.init($("#container12")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis:  {
                type: 'value',
                x:'180',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['其他','熟悉','效率','专业','成本'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            series: [
                {
                    name: '客户数量（个）',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [dataa['其他'], dataa['熟悉'], dataa['效率'], dataa['专业'], dataa['成本']],
                    itemStyle: {
                        normal: {
                            color:"#ff7d0a"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

}

var GenderRatio         // 工程师性别占比
var MajorRatio          // 工程师专业占比
var AgeRatio            // 工程师年龄段占比
var ProfessionNumber    // 各专业活跃工程师数量情况
var OrderRank           // 工单完成率排名
var MonthOnline         // 月在线工程师数量
var NotComplete         // 未按时完成工单数量情况
var MonthCompletionNum  // 月工单完成情况工程师数量分析
var MonthTotalRank      // 月工单处理总量前7名工程师分析
var FailureCause        // 故障原因分析
var FaultHand           // 故障处理情况

function manage(){

// 工程师性别占比
    $(GenderRatio=function(dataa){
        var myChart = echarts.init($("#userContainerSex")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                y:"16",
                data: ['男性','女性'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:dataa['男性'], name:'男性',
                            itemStyle:{
                                normal:{
                                    color:"#2865aa"
                                }
                            }},
                        {value:dataa['女性'], name:'女性',
                            itemStyle:{
                                normal:{
                                    color:"#ff81cb"
                                }
                            }}
                    ]
                }
            ]
        };



        myChart.setOption(option);
    });

// 工程师专业占比
    $(MajorRatio=function(dataa){
        var myChart = echarts.init($("#userContainerManage")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'center',
                y:"16",
                data:['视频监控', '入侵和报警', '防爆安全', '停车场安全', '出入口控制', '其他专业'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {
                            value:dataa['视频监控'],
                            name:'视频监控',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }
                        },
                        {
                            value:dataa['入侵和报警'],
                            name:'入侵和报警',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }
                        },
                        {
                            value:dataa['出入口控制'],
                            name:'出入口控制',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }
                        }
                        ,
                        {
                            value:dataa['停车场安全'],
                            name:'停车场安全',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }
                        }
                        ,
                        {
                            value:dataa['防爆安全'],
                            name:'防爆安全',
                            itemStyle:{
                                normal:{
                                    color:"#0ad5ff"
                                }
                            }
                        },
                        {
                            value:dataa['其他专业'],
                            name:'其他专业',
                            itemStyle:{
                                normal:{
                                    color:"#feb602"
                                }
                            }
                        }

                    ]
                    //data:[
                    //    {value:90, name:'男性',
                    //        itemStyle:{
                    //            normal:{
                    //                color:"#2865aa"
                    //            }
                    //        }},
                    //    {value:10, name:'女性',
                    //        itemStyle:{
                    //            normal:{
                    //                color:"#ff81cb"
                    //            }
                    //        }}
                    //]
                }
            ]
        };



        myChart.setOption(option);
    });

// 工程师年龄段占比
    $(AgeRatio=function(dataa){
        var myChart = echarts.init($("#userContainerAge")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                y:"16",
                data: ['少年','青年','中年','老年','其他'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:dataa['少年'], name:'少年',
                            itemStyle:{
                                normal:{
                                    color:"#0ad5ff"
                                }
                            }},
                        {value:dataa['青年'], name:'青年',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }},
                        {value:dataa['中年'], name:'中年',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }},
                        {value:dataa['老年'], name:'老年',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }},
                        {value:dataa['其他'], name:'其他',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });

// 各专业活跃工程师数量情况
    $(ProfessionNumber=function(dataa){
        var myChart = echarts.init($("#userContainerAttendance")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['视频监控', '入侵和报警', '防爆安全', '停车场安全', '出入口控制', '其他专业'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'工程师数（人）',
                    type:'bar',
                    barWidth:'30',
                    data:dataa['工程师数'],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

// 工单完成率排名
    $(OrderRank=function(dataa){
        var myChart = echarts.init($("#userContainerPersonal")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis:  {
                type: 'value',
                x:'180',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: dataa['工程师'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            series: [
                {
                    name: '完成率（%）',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: dataa['完成率'],
                    itemStyle: {
                        normal: {
                            color:"#45c0ff"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

// 月在线工程师数量
    $(MonthOnline=function(dataa){
        var myChart = echarts.init(document.getElementById('userContainerFlow'));
        var option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }

                }
            ],
            series : [
                {
                    name:'工程师人数',
                    type:'line',
                    stack: '人',
                    data:dataa['工程师人数'],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

// 未按时完成工单工程师数量
    $(NotComplete=function(dataa){
        var myChart = echarts.init($("#userContainerIllegal")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['视频监控', '入侵和报警', '防爆安全', '停车场安全', '出入口控制', '其他专业'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'工程师数量（人）',
                    type:'bar',
                    barWidth:'30',
                    data:dataa['工程师数量'],
                    itemStyle: {
                        normal: {
                            color:"#269fec"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

// 月工单完成情况工程师数量分析
    $(MonthCompletionNum=function(dataa){
        var myChart = echarts.init(document.getElementById('userContainerComplaint'));
        var option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }

                }
            ],
            series : [
                {
                    name:'其他',
                    type:'line',
                    stack: '人',
                    data:dataa['其他'],
                    itemStyle: {
                        normal: {
                            color:"#45c0ff"
                        }
                    }
                },
                {
                    name:'客户好评',
                    type:'line',
                    stack: '人',
                    data:dataa['客户好评'],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    name:'未按时完成',
                    type:'line',
                    stack: '人',
                    data:dataa['未按时完成'],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },
                {
                    name:'超期完成',
                    type:'line',
                    stack: '人',
                    data:dataa['超期完成'],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'二次维修',
                    type:'line',
                    stack: '人',
                    data:dataa['二次维修'],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'一次维修',
                    type:'line',
                    stack: '人',
                    data:dataa['一次维修'],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

// 月工单处理总量前7名工程师分析
    $(MonthTotalRank=function(dataa){
        var myChart = echarts.init(document.getElementById('userContainerPrize'));
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            //legend: {
            //    data:['散客人数（万人）','团队人数（万人）'],
            //    textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            //},
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis : [
                {
                    type : 'category',
                    data : dataa['工程师'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'好评（次）',
                    type:'bar',
                    data:dataa['好评'],
                    itemStyle:{
                        normal:{
                            color:"#1afffd"
                        }
                    }
                },
                {
                    name:'差评（次）',
                    type:'bar',
                    stack: '广告',
                    data:dataa['差评'],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });

// 故障原因分析
    $(FailureCause=function(dataa){
        var myChart = echarts.init(document.getElementById('userContainerReason'));
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['人为破坏','年久失修','自然因素','设备过期','其他'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    name: '故障原因',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:dataa['人为破坏'], name:'人为破坏',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }},
                        {value:dataa['年久未修'], name:'年久失修',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }},
                        {value:dataa['自然因素'], name:'自然因素',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }},
                        {value:dataa['设备过期'], name:'设备过期',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }},
                        {value:dataa['其他'], name:'其他',
                            itemStyle:{
                                normal:{
                                    color:"#45c0ff"
                                }
                            }}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

// 故障处理情况
    $(FaultHand=function(dataa){
        var myChart = echarts.init(document.getElementById('userContainerHandle'));
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: ['已处理','未处理','超期未处理','其他'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    name: '处理情况',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:dataa['已处理'], name:'已处理',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }},
                        {value:dataa['未处理'], name:'未处理',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }},
                        {value:dataa['超期未处理'], name:'超期未处理',
                            itemStyle:{
                                normal:{
                                    color:"#2864ab"
                                }
                            }},
                        {value:dataa['其他'], name:'其他',
                            itemStyle:{
                                normal:{
                                    color:"#e15828"
                                }
                            }}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });
}
var buyTimeUpdater      // 巡检工单趋势
var failureFactor       // 故障因素分析
var faultType           // 故障类型分析
var orderRepair         // 工单修复数
var repairOrder         // 维修工单趋势
var climateOrder        // 气候与工单量分析
var orderEngineer       // 工单完成量与工程师分析
var orderIndustry       // 巡检工单行业分析
var activityOrder       // 平台活动与工单量分析
var secondaryRepair     // 工单二次维修数分析
//['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
//[120, 132, 101, 146, 199, 230, 210, 230, 240, 256, 278, 300,120, 132, 101, 146, 199, 230, 210, 230, 240, 256, 278, 300]
function yingXiao(){
// 营销分析
// 24小时购买时间分析
// 巡检工单趋势(7日)
    $(buyTimeUpdater=function(xData,yData){
        if(typeof(arguments[1])=="undefined"){
            xData=buyTimeUpdatex
            yData=buyTimeUpdatey
        }
        var myChart = echarts.init($("#buyTime")[0]);
        var option = {
            tooltip: {   //提示框，鼠标悬浮交互时的信息提示
                show: true,
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data: [],
                orient: 'vertical',
                textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            },

            calculable: false,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: xData,
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }

            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    stack: '24小时购买时间',
                    data: yData,
                    itemStyle: {
                        normal: {
                            color: '#02bcbc'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });
// 故障因素分析
    $(failureFactor=function(dataa){
        var myChart = echarts.init($("#Package01")[0]);
        option = {
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['天气','质量','环境','人为','其他'], textStyle:{
                    color:"#e9ebee"

                }
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : false,
            series : [
                {
                    name:'套餐',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:dataa['天气'], name:'天气',
                            itemStyle: {
                                normal: {
                                    color:"#1afffd"
                                }
                            }},
                        {value:dataa['质量'], name:'质量',
                            itemStyle: {
                                normal: {
                                    color:"#2e7cff"
                                }
                            }},
                        {value:dataa['环境'], name:'环境',
                            itemStyle: {
                                normal: {
                                    color:"#ffcb89"
                                }
                            }},
                        {value:dataa['人为'], name:'人为',
                            itemStyle: {
                                normal: {
                                    color:"#005ea1"
                                }
                            }},
                        {value:dataa['其他'], name:'其他',
                            itemStyle: {
                                normal: {
                                    color:"#0ad5ff"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
// 故障类型分析
    $(faultType=function(dataa){
        var myChart = echarts.init($("#rode01")[0]);
        option = {


            legend: {
                orient : 'vertical',
                x : 'left',
                data:['摄像机','监视器','NVR','拾音器','报警','门禁','电源','其他'], textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            series : [

                {
                    name:'面积模式',
                    type:'pie',
                    radius : '60%',
                    center: ['50%', '60%'],
                    roseType : 'area',
                    x: '50%',               // for funnel
                    max: 40,                // for funnel
                    sort : 'ascending',     // for funnel
                    data:[
                        {value:dataa['摄像机'], name:'摄像机',
                            itemStyle: {
                                normal: {
                                    color:"#45c0ff"
                                }
                            }},
                        {value:dataa['监视器'], name:'监视器',
                            itemStyle: {
                                normal: {
                                    color:"#e15828"
                                }
                            }},
                        {value:dataa['NVR'], name:'NVR',
                            itemStyle: {
                                normal: {
                                    color:"#ff81cb"
                                }
                            }},
                        {value:dataa['拾音器'], name:'拾音器',
                            itemStyle: {
                                normal: {
                                    color:"#2e7cff"
                                }
                            }},
                        {value:dataa['报警'], name:'报警',
                            itemStyle: {
                                normal: {
                                    color:"#feb602"
                                }
                            }},
                        {value:dataa['门禁'], name:'门禁',
                            itemStyle: {
                                normal: {
                                    color:"#ff7d0a"
                                }
                            }},
                        {value:dataa['电源'], name:'电源',
                            itemStyle: {
                                normal: {
                                    color:"#1afffd"
                                }
                            }},
                        {value:dataa['其他'], name:'其他',
                            itemStyle: {
                                normal: {
                                    color:"#2e7cff"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
// 工单修复数
    $(orderRepair=function(dataa){
        var myChart = echarts.init($("#bookAret")[0]);
        option = {

            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data:['未修复数','已修复数'],
                textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        },
                        splitLine: {
                            show: false
                        },
                    }
                }

            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                }
            ],
            series : [
                {
                    name:'未修复数',
                    type:'bar',
                    data:dataa['未修复'],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'已修复数',
                    type:'bar',
                    data:dataa['已修复'],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };


        myChart.setOption(option);
    });
// 维修工单趋势
    $(repairOrder=function(dataa){
        console.log('维修工单趋势...')
        var myChart = echarts.init($("#bookBmonth")[0]);
        var option = {
            tooltip: {   //提示框，鼠标悬浮交互时的信息提示
                show: true,
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data: [],
                orient: 'vertical',
                textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            },

            calculable: false,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }

            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    stack: '已修复数',
                    data:dataa,
                    itemStyle: {
                        normal: {
                            color: '#02bcbc'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
// 气候与工单量分析
    $(climateOrder=function(dataa){
        console.log('气候与工单量分析...')
        var myChart = echarts.init($("#whearAbook")[0]);
        option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:20,
                borderWidth: 0
            },

            calculable : false,
            legend: {
                data:['下雨','下雪','晴天','工单量'],
                textStyle:{
                    color:"#e9ebee"

                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }

                }
            ],
            yAxis : [
                {
                    type : 'value',

                    name : '工单量',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },
                {
                    type : 'value',
                    name : '温度',
                    axisLabel : {
                        formatter: '{value} °C',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },

            ],
            series : [

                {
                    name:'下雨',
                    type:'bar',
                    data:dataa['下雨'],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    name:'下雪',
                    type:'bar',
                    data:dataa['下雪'],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },
                {
                    name:'晴天',
                    type:'bar',
                    data:dataa['晴天'],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'工单量',
                    type:'line',
                    yAxisIndex: 1,
                    data:dataa['工单量'],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
// 工单完成量与工程师分析
    $(orderEngineer=function(dataa){
        console.log('工单完成量与工程师分析...')
        var myChart = echarts.init($("#rodeAbook")[0]);
        option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:20,
                borderWidth: 0
            },

            calculable : false,
            legend: {
                data:['忙碌','有空','工单量'],
                textStyle:{
                    color:"#e9ebee"

                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }

                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '工单量',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },
                {
                    type : 'value',
                    name : '工程师',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },

            ],
            series : [

                {
                    name:'有空',
                    type:'bar',
                    stack: '工程师',
                    data:dataa['有空'],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'忙碌',
                    type:'bar',
                    stack: '工程师',
                    data:dataa['忙碌'],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },

                {
                    name:'工单量',
                    type:'line',
                    yAxisIndex: 1,
                    data:dataa['工单量'],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
// 巡检工单行业分析
    $(orderIndustry=function(dataa){
        var myChart = echarts.init($("#seaAbook01")[0]);
        option = {


            legend: {
                orient : 'vertical',
                x : 'left',
                data:['银行','教育','医疗','其他'], textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            series : [

                {
                    name:'季节与订单关系',
                    type:'pie',
                    radius : '70%',
                    center: ['50%', '60%'],
                    splitLine:{show: false},
                    roseType : 'area',
                    x: '50%',               // for funnel
                    max: 40,                // for funnel
                    sort : 'ascending',     // for funnel
                    data:[
                        {value:dataa['银行'], name:'银行',
                            itemStyle: {
                                normal: {
                                    color:"#2e7cff"
                                }
                            }},
                        {value:dataa['教育'], name:'教育',
                            itemStyle: {
                                normal: {
                                    color:"#ffcb89"
                                }
                            }},
                        {value:dataa['医疗'], name:'医疗',
                            itemStyle: {
                                normal: {
                                    color:"#005ea1"
                                }
                            }},
                        {value:dataa['其他'], name:'其他',
                            itemStyle: {
                                normal: {
                                    color:"#0ad5ff"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
// 平台活动与工单量分析
    $(activityOrder=function(dataa){
        var myChart = echarts.init($("#actionBook")[0]);
        option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:20,
                borderWidth: 0
            },

            calculable : false,
            legend: {
                data:['降价','包年','账期','送积分'],
                textStyle:{
                    color:"#e9ebee"

                }
            },
            xAxis : [
                {
                    type : 'category',
                    splitLine : {show : false},
                    data : ['周一','周二','周三','周四','周五','周六','周日'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    position: 'right',
                    splitLine : {show : false},
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            align: 'center'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'降价',
                    type:'bar',
                    data:dataa['降价'],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'包年',
                    type:'bar',
                    tooltip : {trigger: 'item'},
                    stack: '广告',
                    data:dataa['包年'],
                    itemStyle: {
                        normal: {
                            color:"#feb602"
                        }
                    }
                },
                {
                    name:'账期',
                    type:'bar',
                    tooltip : {trigger: 'item'},
                    stack: '广告',
                    data:dataa['账期'],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'送积分',
                    type:'bar',
                    tooltip : {trigger: 'item'},
                    stack: '广告',
                    data:dataa['送积分'],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },

                {
                    name:'订单趋势',
                    type:'line',
                    data:dataa['订单趋势'],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },

                {
                    name:'工单细分',
                    type:'pie',
                    tooltip : {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    center: [100,80],
                    radius : [0, 30],
                    itemStyle :　{
                        normal : {
                            labelLine : {
                                length : 20
                            }
                        }
                    },
                    data:[
                        {value:dataa['降价总'], name:'降价',
                            itemStyle: {
                                normal: {
                                    color:"#1afffd"
                                }
                            }},
                        {value:dataa['包年总'], name:'包年',
                            itemStyle: {
                                normal: {
                                    color:"#2e7cff"
                                }
                            }},
                        {value:dataa['账期总'], name:'账期',
                            itemStyle: {
                                normal: {
                                    color:"#ffcb89"
                                }
                            }},
                        {value:dataa['送积分总'], name:'送积分',
                            itemStyle: {
                                normal: {
                                    color:"#005ea1"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
// 工单二次维修数分析
    $(function(){
        var myChart = echarts.init($("#sperceBook01")[0]);
        option = {

            tooltip : {
                trigger: 'axis',
                formatter: function (params) {
                    var res = params[0].seriesName + ' ' + params[0].name;
                    res += '<br/>  0-05 : ' + params[0].value[0] + '  06-12 : ' + params[0].value[3];
                    res += '<br/>   13-18: ' + params[0].value[1] + '  19-24 : ' + params[0].value[2];
                    return res;
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:20,
                borderWidth: 0
            },
            legend: {
                data:['二次维修数'],
                textStyle:{
                    color:"#e9ebee"

                }
            },

            dataZoom : {
                show : true,
                realtime: true,
                start : 50,
                end : 100
            },
            xAxis : [
                {
                    type : 'category',
                    textStyle: {
                        color: '#a4a7ab',

                    },
                    boundaryGap : true,
                    axisTick: {onGap:false},
                    splitLine: {show:false},
                    data : [
                        "2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
                        "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6",
                        "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20",
                        "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27",
                        "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6",
                        "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13",
                        "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20",
                        "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27",
                        "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3",
                        "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12",
                        "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19",
                        "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26",
                        "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8",
                        "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15",
                        "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22",
                        "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29",
                        "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5",
                        "2013/6/6", "2013/6/7", "2013/6/13"
                    ]
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    textStyle: {
                        color: '#a4a7ab',

                    },
                    scale:true,
                    boundaryGap: [0.01, 0.01],
                    splitLine: {
                        show: false
                    },
                }
            ],
            series : [
                {
                    name:'二次维修数',
                    type:'k',
                    data:[ // 开盘，收盘，最低，最高
                        [2320.26,2302.6,2287.3,2362.94],
                        [2300,2291.3,2288.26,2308.38],
                        [2295.35,2346.5,2295.35,2346.92],
                        [2347.22,2358.98,2337.35,2363.8],
                        [2360.75,2382.48,2347.89,2383.76],
                        [2383.43,2385.42,2371.23,2391.82],
                        [2377.41,2419.02,2369.57,2421.15],
                        [2425.92,2428.15,2417.58,2440.38],
                        [2411,2433.13,2403.3,2437.42],
                        [2432.68,2434.48,2427.7,2441.73],
                        [2430.69,2418.53,2394.22,2433.89],
                        [2416.62,2432.4,2414.4,2443.03],
                        [2441.91,2421.56,2415.43,2444.8],
                        [2420.26,2382.91,2373.53,2427.07],
                        [2383.49,2397.18,2370.61,2397.94],
                        [2378.82,2325.95,2309.17,2378.82],
                        [2322.94,2314.16,2308.76,2330.88],
                        [2320.62,2325.82,2315.01,2338.78],
                        [2313.74,2293.34,2289.89,2340.71],
                        [2297.77,2313.22,2292.03,2324.63],
                        [2322.32,2365.59,2308.92,2366.16],
                        [2364.54,2359.51,2330.86,2369.65],
                        [2332.08,2273.4,2259.25,2333.54],
                        [2274.81,2326.31,2270.1,2328.14],
                        [2333.61,2347.18,2321.6,2351.44],
                        [2340.44,2324.29,2304.27,2352.02],
                        [2326.42,2318.61,2314.59,2333.67],
                        [2314.68,2310.59,2296.58,2320.96],
                        [2309.16,2286.6,2264.83,2333.29],
                        [2282.17,2263.97,2253.25,2286.33],
                        [2255.77,2270.28,2253.31,2276.22],
                        [2269.31,2278.4,2250,2312.08],
                        [2267.29,2240.02,2239.21,2276.05],
                        [2244.26,2257.43,2232.02,2261.31],
                        [2257.74,2317.37,2257.42,2317.86],
                        [2318.21,2324.24,2311.6,2330.81],
                        [2321.4,2328.28,2314.97,2332],
                        [2334.74,2326.72,2319.91,2344.89],
                        [2318.58,2297.67,2281.12,2319.99],
                        [2299.38,2301.26,2289,2323.48],
                        [2273.55,2236.3,2232.91,2273.55],
                        [2238.49,2236.62,2228.81,2246.87],
                        [2229.46,2234.4,2227.31,2243.95],
                        [2234.9,2227.74,2220.44,2253.42],
                        [2232.69,2225.29,2217.25,2241.34],
                        [2196.24,2211.59,2180.67,2212.59],
                        [2215.47,2225.77,2215.47,2234.73],
                        [2224.93,2226.13,2212.56,2233.04],
                        [2236.98,2219.55,2217.26,2242.48],
                        [2218.09,2206.78,2204.44,2226.26],
                        [2199.91,2181.94,2177.39,2204.99],
                        [2169.63,2194.85,2165.78,2196.43],
                        [2195.03,2193.8,2178.47,2197.51],
                        [2181.82,2197.6,2175.44,2206.03],
                        [2201.12,2244.64,2200.58,2250.11],
                        [2236.4,2242.17,2232.26,2245.12],
                        [2242.62,2184.54,2182.81,2242.62],
                        [2187.35,2218.32,2184.11,2226.12],
                        [2213.19,2199.31,2191.85,2224.63],
                        [2203.89,2177.91,2173.86,2210.58],
                        [2170.78,2174.12,2161.14,2179.65],
                        [2179.05,2205.5,2179.05,2222.81],
                        [2212.5,2231.17,2212.5,2236.07],
                        [2227.86,2235.57,2219.44,2240.26],
                        [2242.39,2246.3,2235.42,2255.21],
                        [2246.96,2232.97,2221.38,2247.86],
                        [2228.82,2246.83,2225.81,2247.67],
                        [2247.68,2241.92,2231.36,2250.85],
                        [2238.9,2217.01,2205.87,2239.93],
                        [2217.09,2224.8,2213.58,2225.19],
                        [2221.34,2251.81,2210.77,2252.87],
                        [2249.81,2282.87,2248.41,2288.09],
                        [2286.33,2299.99,2281.9,2309.39],
                        [2297.11,2305.11,2290.12,2305.3],
                        [2303.75,2302.4,2292.43,2314.18],
                        [2293.81,2275.67,2274.1,2304.95],
                        [2281.45,2288.53,2270.25,2292.59],
                        [2286.66,2293.08,2283.94,2301.7],
                        [2293.4,2321.32,2281.47,2322.1],
                        [2323.54,2324.02,2321.17,2334.33],
                        [2316.25,2317.75,2310.49,2325.72],
                        [2320.74,2300.59,2299.37,2325.53],
                        [2300.21,2299.25,2294.11,2313.43],
                        [2297.1,2272.42,2264.76,2297.1],
                        [2270.71,2270.93,2260.87,2276.86],
                        [2264.43,2242.11,2240.07,2266.69],
                        [2242.26,2210.9,2205.07,2250.63],
                        [2190.1,2148.35,2126.22,2190.1]
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });

}

var IncomeIndustry      // 收入行业分析
var ProjectNumber       // 项目数量分析
var IncomeComposition   // 收入总额组成
var CostComposition     // 成本总额组成
var IncomeAndCost       // 收入总额与成本总额

function shouRu(){
// 项目信息分析
// 收入行业分析
    $(IncomeIndustry=function(dataa){
        var myChart = echarts.init($("#zhanbi02")[0]);
        var option = {

            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[0];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            grid:{
                borderWidth:0
            },
            xAxis : [
                {
                    type : 'category',

                    data : ['总收入','金融','能源','教育','医疗','文博'],
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            series : [
                {
                    name:'总收入',
                    type:'bar',
                    stack: '总量',
                    itemStyle:{
                        normal:{
                            barBorderColor:'rgba(0,0,0,0)',
                            color:'rgba(0,0,0,0)'
                        },
                        emphasis:{
                            barBorderColor:'rgba(0,0,0,0)',
                            color:'rgba(0,0,0,0)'
                        }
                    },
                    data:[0, 1700, 1400, 1200, 300, 0]
                },
                {
                    name:'渠道',
                    type:'bar',
                    stack: '总量',
                    data:[dataa['总收入'], dataa['金融'], dataa['能源'], dataa['教育'], dataa['医疗'], dataa['文博']],
                    itemStyle: {
                        normal: {
                            color: '#2481ff'
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });
// 项目数量分析
    $(ProjectNumber=function(dataa){
        var myChart = echarts.init($("#zhanbi03")[0]);
        option = {

            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[0];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },

            xAxis : [
                {
                    type : 'category',
                    splitLine: {show:false},
                    data : ['总项目数','协会引入','客户推荐','服务商引入','厂商引入','自行拓展'],
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            grid:{
                borderWidth:0
            },
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            series : [
                {
                    name:'总项目数',
                    type:'bar',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            color: '#1afffd'
                        }
                    },
                    data:dataa['总项目数']
                },
                {
                    name:'渠道',
                    type:'bar',
                    stack: '总量',
                    itemStyle:{
                        normal:{
                            color:'#28a3e1'

                        }
                    },
                    data:dataa['渠道']
                }
            ]
        };


        myChart.setOption(option);
    });
// 营销投入与项目收入总额分析
    $(IncomeComposition=function(dataa){
        var myChart = echarts.init($("#allAly01")[0]);
        option = {
            title : {
                text: '收入总额组成',
                textStyle:{
                    color:"#e9ebee"

                },

                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['项目收入','咨询评价','备品备件','其他收入','增值业务'],
                textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            series : [
                {
                    name:'收入总额组成',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:dataa['项目收入'], name:'项目收入',
                            itemStyle:{
                                normal:{
                                    color:'#1afffd'

                                }
                            }
                        },
                        {value:dataa['咨询评价'], name:'咨询评价',
                            itemStyle:{
                                normal:{
                                    color:'#2e7cff'

                                }
                            }},
                        {value:dataa['备品备件'], name:'备品备件',
                            itemStyle:{
                                normal:{
                                    color:'#ffcb89'

                                }
                            }},
                        {value:dataa['其他收入'], name:'其他收入',
                            itemStyle:{
                                normal:{
                                    color:'#005ea1'

                                }
                            }},
                        {value:dataa['增值业务'], name:'增值业务',
                            itemStyle:{
                                normal:{
                                    color:'#0ad5ff'

                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
    $(CostComposition=function(dataa){
        var myChart = echarts.init($("#allAly02")[0]);
        option = {
            title : {
                text: '成本总额组成',
                textStyle:{
                    color:"#e9ebee"

                },

                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['金融','能源','教育','医疗','文博','酒店','写字楼','物业','军队'],
                textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            series : [
                {
                    name:'成本总额组成',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:dataa['金融'], name:'金融',
                            itemStyle:{
                                normal:{
                                    color:'#06b8f8'

                                }
                            }},
                        {value:dataa['能源'], name:'能源',
                            itemStyle:{
                                normal:{
                                    color:'#ff5c58'

                                }
                            }},
                        {value:dataa['教育'], name:'教育',
                            itemStyle:{
                                normal:{
                                    color:'#ffffb3'

                                }
                            }},
                        {value:dataa['医疗'], name:'医疗',
                            itemStyle:{
                                normal:{
                                    color:'#fee581'

                                }
                            }},
                        {value:dataa['文博'], name:'文博',
                            itemStyle:{
                                normal:{
                                    color:'#1afffd'

                                }
                            }},
                        {value:dataa['酒店'], name:'酒店',
                            itemStyle:{
                                normal:{
                                    color:'#1ec7f1'

                                }
                            }},
                        {value:dataa['写字楼'], name:'写字楼',
                            itemStyle:{
                                normal:{
                                    color:'#e15828'

                                }
                            }},
                        {value:dataa['物业'], name:'物业',
                            itemStyle:{
                                normal:{
                                    color:'#28a3e1'

                                }
                            }},
                        {value:dataa['军队'], name:'军队',
                            itemStyle:{
                                normal:{
                                    color:'#72e7d5'

                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
    $(IncomeAndCost=function(dataa){
        var myChart = echarts.init($("#allAly03")[0]);
        option = {
            title : {
                text: '收入总额与成本总额',
                textStyle:{
                    color:"#e9ebee"

                },
                x:'center'

            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['成本总额','收入总额'],
                textStyle:{
                    color:"#e9ebee"

                },
            },

            calculable : false,
            xAxis : [
                {
                    type : 'category',
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            grid:{
                borderWidth:0
            },
            series : [
                {
                    name:'成本总额',
                    type:'bar',
                    data:dataa['成本总额'],
                    itemStyle: {
                        normal: {
                            color: '#2481ff'
                        }
                    },
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'收入总额',
                    type:'bar',
                    data:dataa['收入总额'],
                    itemStyle: {
                        normal: {
                            color: '#1afffd'
                        }
                    },

                    markPoint : {
                        data : [
                            {name : '最高', type: 'max', xAxis: 7, yAxis: 183, symbolSize:18},
                            {name : '最低', type: 'min', xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };


        myChart.setOption(option);
    });
}



function AnQuan(){
// 服务商信息分析
// 服务商数量分析
    $(function(){
        var myChart = echarts.init($("#shijian01")[0]);
        option = {

            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c}"
            },
            legend: {
                x: 'center',
                data: ["活跃服务商趋势分析"],
                textStyle:{
                    color:"#e9ebee"

                }
            },
            xAxis: [
                {
                    type: "category",
                    name: "x",
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            grid:{
                borderWidth:0
            },
            yAxis: [
                {
                    type: "log",
                    name: "y",
                    splitLine:{show: false},
                    data : ['10','30','50','70','90','110','120','130','150','170','190','210','250'],
                    axisLabel : {

                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                }
            ],

            calculable: false,
            series: [
                {
                    name: "活跃服务商趋势分析",
                    type: "line",
                    data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 188, 60, 23],
                    itemStyle: {
                        normal: {
                            color:"#0aabff"
                        }
                    }

                }

            ]
        };


        myChart.setOption(option);
    });
// 服务商与工单类型倾向分析
    $(function(){
        var myChart = echarts.init($("#shijian02")[0]);
        var placeHoledStyle = {
            normal:{
                barBorderColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)'
            },
            emphasis:{
                barBorderColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)'
            }
        };
        var dataStyle = {
            normal: {
                label : {
                    show: true,
                    position: 'insideLeft',
                    formatter: '{c}%'
                }
            }
        };
        option = {

            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter : '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
            },
            legend: {
                y: 55,
                data:['非常感兴趣', '比较感兴趣','一般感兴趣', '不感兴趣'],
                textStyle:{
                    color:"#fff"

                }
            },

            grid: {
                y: 80,
                y2: 30
            },
            xAxis : [
                {
                    type : 'value',
                    position: 'top',
                    splitLine: {show: false},
                    axisLabel: {show: false}
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    splitLine: {show: false},
                    axisLabel : {

                        textStyle: {
                            color: '#fff',
                            align: 'right'
                        }
                    },
                    data : ['成本优先', '效率优先', '专业优先', '熟悉优先']
                }
            ],
            series : [
                {
                    name:'非常感兴趣',
                    type:'bar',
                    stack: '总量',
                    data:[38, 50, 33, 72],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                },
                {
                    name:'非常感兴趣',
                    type:'bar',
                    stack: '总量',
                    itemStyle: placeHoledStyle,
                    data:[62, 50, 67, 28],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'比较感兴趣',
                    type:'bar',
                    stack: '总量',
                    itemStyle : dataStyle,
                    data:[61, 41, 42, 30],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'比较感兴趣',
                    type:'bar',
                    stack: '总量',
                    itemStyle: placeHoledStyle,
                    data:[39, 59, 58, 70],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },
                {
                    name:'一般感兴趣',
                    type:'bar',
                    stack: '总量',
                    itemStyle : dataStyle,
                    data:[37, 35, 44, 60],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    name:'一般感兴趣',
                    type:'bar',
                    stack: '总量',
                    itemStyle: placeHoledStyle,
                    data:[63, 65, 56, 40],
                    itemStyle: {
                        normal: {
                            color:"#e15828"
                        }
                    }
                },
                {
                    name:'不感兴趣',
                    type:'bar',
                    stack: '总量',
                    itemStyle : dataStyle,
                    data:[71, 50, 31, 39],
                    itemStyle: {
                        normal: {
                            color:"#ff81cb"
                        }
                    }
                },
                {
                    name:'不感兴趣',
                    type:'bar',
                    stack: '总量',
                    itemStyle: placeHoledStyle,
                    data:[29, 50, 69, 61],
                    itemStyle: {
                        normal: {
                            color:"#feb602"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });
// 服务商对行业兴趣分析
    $(function(){
        var myChart = echarts.init($("#shijian03")[0]);
        var labelTop = {
            normal : {
                label : {
                    show : true,
                    position : 'center',
                    formatter : '{b}',
                    textStyle: {
                        baseline : 'bottom'
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };
        var labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        baseline : 'top'
                    }
                }
            },
        }
        var labelBottom = {
            normal : {
                color: '#111b21',
                label : {
                    show : true,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        var radius = [40, 55];
        option = {
            legend: {
                x : 'center',

                textStyle:{
                    color:"#fff"

                },
                data:[
                    '金融','能源','教育','医疗','其他'

                ]
            },


            series : [
                {
                    type : 'pie',
                    center : ['10%', '30%'],
                    radius : radius,
                    x: '0%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'解决', value:46, itemStyle : labelBottom},
                        {name:'金融', value:54,itemStyle : labelTop}
                    ],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    type : 'pie',
                    center : ['30%', '30%'],
                    radius : radius,
                    x:'20%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'解决', value:56, itemStyle : labelBottom},
                        {name:'能源', value:44,itemStyle : labelTop}
                    ],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    type : 'pie',
                    center : ['50%', '30%'],
                    radius : radius,
                    x:'40%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'解决', value:65, itemStyle : labelBottom},
                        {name:'教育', value:35,itemStyle : labelTop}
                    ],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    type : 'pie',
                    center : ['70%', '30%'],
                    radius : radius,
                    x:'60%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'解决', value:70, itemStyle : labelBottom},
                        {name:'医疗', value:30,itemStyle : labelTop}

                    ],
                    itemStyle: {
                        normal: {
                            color:"#4cffd3"
                        }
                    }
                },


                {
                    type : 'pie',
                    center : ['90%', '30%'],
                    radius : radius,
                    // for funnel
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'解决', value:70, itemStyle : labelBottom},
                        {name:'其他', value:11,itemStyle : labelTop}
                    ],
                    itemStyle: {
                        normal: {
                            color:"#feb602"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });
// 前24家服务商关注行业分析
    $(function(){
        var myChart = echarts.init($("#shijian04")[0]);
        option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['金融', '能源','教育','医疗','其它'],
                textStyle:{
                    color:"#fff"

                },
            },

            calculable : false,
            xAxis : [
                {
                    type : 'value',
                    splitLine: {show: false},
                    axisLabel : {

                        textStyle: {
                            color: '#fff',
                            align: 'right'
                        }
                    },
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    splitLine: {show: false},
                    axisLabel : {

                        textStyle: {
                            color: '#fff',
                            align: 'right'
                        }
                    },
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
                }
            ],
            series : [
                {
                    name:'金融',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data: [12, 13, 10, 16, 19, 23, 21, 23, 20, 26, 27, 30,12, 12, 11, 14, 19, 23, 21, 20, 20, 25, 28, 30]
                    ,
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    name:'能源',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data: [1, 13, 0, 16, 19, 23, 21, 23, 20, 26, 27, 30,12, 12, 11, 14, 19, 23, 21, 20, 0, 25, 8, 30]
                    ,
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },
                {
                    name:'教育',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data: [12, 13, 10, 16, 19, 3, 2, 3, 0, 6, 9, 30,12, 12, 11, 14, 1, 3, 1, 2, 0, 5, 2, 0]
                    ,
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'医疗',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data: [2, 13, 10, 6, 19, 23, 21, 3, 20, 6, 7, 30,12, 12, 11, 14, 19, 3, 21, 0, 20, 5, 8, 0]
                    ,
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'其它',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data: [1, 3, 10, 6, 9, 3, 11, 3, 0, 6, 7, 0,2, 2, 1, 4, 9, 3, 1, 0, 0, 5, 8, 3]
                    ,
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
}


