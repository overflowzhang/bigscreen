<!DOCTYPE html>
<#assign base=springMacroRequestContext.getContextUrl("")>
<html lang="en">
<head>
    <link href="${base}/bigscreen/template3/css/BigData.css" rel="stylesheet" type="text/css" />
    <link href="${base}/bigscreen/template3/css/index.css" rel="stylesheet" type="text/css" />
    <link href="${base}/bigscreen/template3/css/index01.css" rel="stylesheet" type="text/css" />
    <script src="${base}/bigscreen/template3/js/jquery.js"></script>
    <link href="${base}/bigscreen/template3/js/bstable/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="${base}/bigscreen/template3/js/bstable/css/bootstrap-table.css" rel="stylesheet" type="text/css" />
    <link href="${base}/bigscreen/template3/css/Security_operation.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="${base}/bigscreen/template3/js/artDialog/skins/default.css" type="text/css"/>
    <script src="${base}/bigscreen/template3/js/laydate.js"></script>
    <script src="${base}/bigscreen/template3/js/Home_page.js"></script>
    <meta charset="UTF-8">
    <title>安安运维信息平台</title>

</head>
<body >
<div class="data_bodey">
    <div class="index_nav" >
        <ul style="height: 30px; margin-bottom: 0px;">
            <li class="l_left total_chose_fr nav_active">平台实时监测</li>
            <li class="l_left total_chose_pl">维保工单分析</li>
            <li class="l_left total_chose_pl">项目信息分析</li>
            <li class="r_right total_chose_pl">服务商信息分析</li>
            <li class="r_right total_chose_pl">终端客户分析</li>
            <li class="r_right total_chose_pl">维保工程师分析</li>
        </ul>
        <div class="c_center">安 安 运 维 信 息 平 台</div>
        <div class="total_chose_box" style="display: none;">
            <div style="height: 32px;"></div>
            <span class="chose_tltle">请选择年份：</span>
            <select class="year_chose">
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
            </select>
            <span class="chose_tltle">请输入月份：</span>
            <input class="chose_text_in">
            <span class="chose_tltle">请选择区域：</span>
            <select class="year_chose">
                <option> 北京市</option>
                <option>自贡市</option>
                <option>攀枝花市</option>
                <option>泸州市</option>
                <option>德阳市</option>
                <option>绵阳市</option>
                <option>广元市</option>
                <option>遂宁市</option>
                <option>内江市</option>
                <option>乐山市</option>
                <option>南充市</option>
                <option>宜宾市</option>
                <option>广安市</option>
                <option>达州市</option>
                <option>巴中市</option>
                <option>雅安市</option>
                <option>眉山市</option>
                <option>资阳市</option>
                <option>阿坝州</option>
                <option>甘孜州</option>
                <option>凉山州</option>
            </select>
            <button class="chose_enter">确定</button>
        </div>
        <div class="clear"></div>
    </div>
    <div class="index_tabs" >
        <!--安防运作-->
        <div class="inner" style="height: 109%;">

            <div class="left_cage">
                <div class="dataAllBorder01 cage_cl" style="margin-top: 9% !important; height: 24%;">
                    <video autoplay="autoplay" loop="loop" class="dataAllBorder02 video_cage">
                        <source class="video" title="主监控位" src="${base}/bigscreen/template3/video/test_mv02.mov"/>
                    </video>
                </div>
                <div class="dataAllBorder01 cage_cl" style="margin-top: 1.5% !important; height: 38%;">
                    <div class="dataAllBorder02 video_cage">
                        <img class="video_around video_around_chose" src="${base}/bigscreen/template3/video/video.jpg">
                        <img class="video_around" src="${base}/bigscreen/template3/video/video.jpg">
                        <img class="video_around" src="${base}/bigscreen/template3/video/video.jpg">
                        <img class="video_around" src="${base}/bigscreen/template3/video/video.jpg">
                        <!--<video autoplay="autoplay" loop="loop" class="video_around video_around_chose" title="循环监控01" style="margin-right: 1%; margin-bottom: 1%">-->
                            <!--<source class="video" title="主监控位" src="video/video.jpg"/>-->
                        <!--</video>-->
                        <!--<video autoplay="autoplay" loop="loop"  class="video_around" title="循环监控02"  style="margin-bottom: 1%">-->
                            <!--<source class="video" title="主监控位" src="video/test_mv03.mov"/>-->
                        <!--</video>-->
                        <!--<video autoplay="autoplay" loop="loop"  class="video_around" title="循环监控03" style="margin-right: 1%">-->
                            <!--<source class="video" title="主监控位" src="video/test_mv03.mov"/>-->
                        <!--</video>-->
                        <!--<video autoplay="autoplay" loop="loop"  class="video_around" title="循环监控04">-->
                            <!--<source class="video" title="主监控位" src="video/test_mv05.mov"/>-->
                        <!--</video>-->
                    </div>
                </div>
                <div class="dataAllBorder01 cage_cl" style="margin-top: 1.5% !important; height: 32%; position: relative;">
                    <div class="dataAllBorder02" style="padding: 1.2%; overflow: hidden">

                        <div class="message_scroll_box">
                            <div class="message_scroll">
                            <div class="scroll_top">
                                <span class="scroll_title">维修维保工单</span>
                                <span class="scroll_level scroll_level01">一级</span>
                                <a class="localize"></a>
                                <span class="scroll_timer">19-12-5/12:52</span>
                            </div>
                            <div class="msg_cage">
                                <a class="localize_title">海淀区西土城路9号，123号摄像机需要维修。</a>
                            </div>
                            <div class="msg_cage">
                                <a class="localize_msg">平安银行-海淀区支行</a>
                            </div>
                        </div>
                            <div class="message_scroll">
                                <div class="scroll_top">
                                    <span class="scroll_title">维修维保工单</span>
                                    <span class="scroll_level scroll_level03">三级</span>
                                    <a class="localize"></a>
                                    <span class="scroll_timer">19-12-2/9:22</span>
                                </div>
                                <div class="msg_cage">
                                    <a class="localize_title">朝阳区大望路23号，NVR工作不正常。</a>
                                </div>
                                <div class="msg_cage">
                                    <a class="localize_msg">中信银行-朝阳支行</a>
                                </div>
                            </div>
                            <div class="message_scroll">
                                <div class="scroll_top">
                                    <span class="scroll_title">巡检任务工单</span>
                                    <span class="scroll_level scroll_level02">二级</span>
                                    <a class="localize"></a>
                                    <span class="scroll_timer">19-12-1/10:32</span>
                                </div>
                                <div class="msg_cage">
                                    <a class="localize_title">医院全部安防设备及系统进行逐项化巡检。</a>
                                </div>
                                <div class="msg_cage">
                                    <a class="localize_msg">中日友好医院</a>
                                </div>
                            </div>
                            <div class="message_scroll">
                                <div class="scroll_top">
                                    <span class="scroll_title">巡检任务工单</span>
                                    <span class="scroll_level scroll_level01">一级</span>
                                    <a class="localize"></a>
                                    <span class="scroll_timer">19-12-6/8:32</span>
                                </div>
                                <div class="msg_cage">
                                    <a class="localize_title">当前安防系统正常工作设备占比低，急需对全校安防设备及系统进行巡检。</a>
                                </div>
                                <div class="msg_cage">
                                    <a class="localize_msg">北师大三附中</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="scroll_tool_outbox">
                        <div class="scroll_tool_box">
                            <a class="scroll_tool" href="#">查看历史推送</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="center_cage">
                <div class="dataAllBorder01 cage_cl" style="margin-top: 3.5% !important; height: 62.7%; position: relative;">
                    <div class="dataAllBorder02" style="position: relative; overflow: hidden;">
                        <!--标题栏-->
                        <div class="map_title_box" style="height: 6%">
                            <div class="map_title_innerbox">
                                <div class="map_title">工单动态实时地图</div>
                            </div>
                        </div>
                        <div class="map" id="map"  ></div>
                        <!--地图显示信息选择-->
                        <div class="display_type_box display_box" style="display: none;overflow:auto">
                            <div class="display_type_center_box">
                                <ul class="display_type_inner_box" id="layerList">
                                    <li class="display_type_msg"><input id="zt_4" type="checkbox" class="display_type_chose"/>银行</li>
                                    <li class="display_type_msg"><input id="zt_1" type="checkbox" class="display_type_chose"/>仓库</li>
                                    <li class="display_type_msg"><input id="zt_5" type="checkbox" class="display_type_chose"/>学校</li>
                                    <li class="display_type_msg"><input id="zt_6" type="checkbox" class="display_type_chose"/>医院</li>
                                    <li class="display_type_msg"><input id="zt_2" type="checkbox" class="display_type_chose"/>加油站</li>
                                    <li class="display_type_msg"><input id="zt_0" type="checkbox" class="display_type_chose"/>停车场</li>
                                    <li class="display_type_msg"><input id="zt_3" type="checkbox" class="display_type_chose"/>博物馆</li>
                                    <li class="display_type_msg"><input id="zt_7" type="checkbox" class="display_type_chose"/>音乐厅</li>
                                    <li class="display_type_msg">----------------------------------</li>
                                    <li class="display_type_msg"><input id="zt_14" type="checkbox" class="display_type_chose" />维修维护</li>
                                    <li class="display_type_msg"><input id="zt_11" type="checkbox" class="display_type_chose" />安防设备</li>
                                    <li class="display_type_msg"><input id="zt_13" type="checkbox" class="display_type_chose" />安防系统</li>
                                    <li class="display_type_msg"><input id="zt_12" type="checkbox" class="display_type_chose" />消防系统</li>
                                </ul>
                            </div>
                            <div class="display_type_funct_box">
                                <span class="display_type_funct display_type_funct_sure">确定</span>
                            </div>
                        </div>
                        <!--城市选择-->
                        <div class="city_chose_box display_box" style="display: none">
                            <div class="display_type_center_box">
                                <ul class="display_type_inner_box" id="ulCity">
                                    <li class="display_type_msg"> 北京市</li>
                                    <li class="display_type_msg">天津市</li>
                                    <li class="display_type_msg">重庆市</li>
                                    <li class="display_type_msg">海南省</li>
                                    <li class="display_type_msg">浙江省</li>
                                    <li class="display_type_msg">江苏省</li>
                                    <li class="display_type_msg">广东省</li>
                                    <li class="display_type_msg">新疆</li>
                                    <li class="display_type_msg">西藏</li>
                                    <li class="display_type_msg">湖南省</li>
                                    <li class="display_type_msg">湖北省</li>
                                    <li class="display_type_msg">四川省</li>
                                    <li class="display_type_msg">河北省</li>
                                    <li class="display_type_msg">河南省</li>
                                    <li class="display_type_msg">山东省</li>
                                    <li class="display_type_msg">雅安市</li>
                                    <li class="display_type_msg">眉山市</li>
                                    <li class="display_type_msg">资阳市</li>
                                    <li class="display_type_msg">阿坝州</li>
                                    <li class="display_type_msg">安徽省</li>
                                    <li class="display_type_msg">凉山州</li>
                                </ul>
                            </div>
                            <div class="display_type_funct_box">
                                <span class="display_type_funct display_type_funct_sure">确定</span>
                            </div>
                        </div>
                        <!--轨迹回放-->
                        <div class="trajectory_box" style="display: none" id="divRouteReview">
                            <input class="trajectory" id="start" placeholder="开始时间">
                            <input class="trajectory" id="end"  placeholder="结束时间">
                            <select class="ratio">
                                <option>1倍</option>
                                <option>2倍</option>
                                <option>3倍</option>
                            </select>
                            <button class="playback" onclick="showRoute()">回放</button>
                            <button class="playback close_playback">关闭</button>
                        </div>
                        <!--缓冲区设置-->
                        <div class="trajectory_box" style="display: none" id="divBufferSetting">
                            <button class="playback" style="width:60px" onclick="setBufferCenter()">设置点</button>
                            <input class="trajectory" id="txtBufferX" placeholder="坐标X">
                            <input class="trajectory" id="txtBufferY" placeholder="坐标Y">
                            <input value="10" class="trajectory" id="txtBufferDis" placeholder="缓冲距离">
                            <select class="ratio">
                                <option>米</option>
                                <option>千米</option>
                            </select>
                            <button class="playback"  onclick="executeBuffer();edit()" style="width:60px">分析</button>
                            <button class="playback close_playback">关闭</button>
                        </div>

                        <!--地图工具栏-->
                        <div class="map_tool_outbox">
                            <span class="map_tool" onclick="zoomFull()">
                                    <a class="map_tool_inner" title="全图" ></a>
                            </span>
                            <span class="map_tool" onclick="zoomOut()">
                                    <a class="map_tool_inner" title="放大" style="background-position-x:-36px"></a>
                                </span>
                            <span class="map_tool" onclick="zoomIn()">
                                    <a class="map_tool_inner" title="缩小" style="background-position-x:-72px"></a>
                                </span>
                            <span class="map_tool" onclick="showHeatMap()">
                                    <a class="map_tool_inner" title="倒退视图" style="background-position-x:-108px"></a>
                                </span>
                            <span class="map_tool">
                                    <a class="map_tool_inner" title="前进视图" style="background-position-x:-144px"></a>
                                </span>
                            <span class="map_tool">
                                    <a class="map_tool_inner display_type_btn" title="专题地图" style="background-position-x:-180px"></a>
                                </span>
                            <span class="map_tool">
                                    <a class="map_tool_inner city_chose_btn" title="城市定位" style="background-position-x:-432px"></a>
                                </span>
                            <span class="map_tool" id="btnBuffer">
                                    <a class="map_tool_inner" title="缓冲区分析" style="background-position-x:-216px"></a>
                                </span>
                            <span class="map_tool">
                                    <a class="map_tool_inner addition_check_btn check_btn" title="地址检索" style="background-position-x:-252px"></a>
                                </span>
                            <span class="map_tool">
                                    <a class="map_tool_inner chemistry_check_btn check_btn" onclick="chemistryCheck()" title="危化品检索" style="background-position-x:-288px"></a>
                                </span>
                            <span class="map_tool">
                                    <a class="map_tool_inner enterprise_check_btn check_btn" onclick="enterpriseCheck()"  title="企业检索" style="background-position-x:-324px"></a>
                                </span>
                            <span class="map_tool">
                                    <a class="map_tool_inner car_check_btn check_btn" onclick="carCheck()" title="工单检索"  style="background-position-x:-360px"></a>
                                </span>
                            <span class="map_tool">
                                    <a class="map_tool_inner" onclick="Search()" title="搜索" style="background-position-x:-468px"></a>
                                </span>
                            <span class="map_tool">
                                    <a class="map_tool_inner" onclick="cancel()" id="fresh_tool" title="清空" style="background-position-x:-396px"></a>
                                </span>
                            <span class="map_tool">
                               <input type="text" id="txtCoord" style="width:150px;visibility:hidden" />
                            </span>
                        </div>
                    </div>
                </div>

                <div class="dataAllBorder01 cage_cl" style="margin-top: 0.6% !important; height: 32.1%;">
                    <div class="dataAllBorder02" id="map_title_innerbox">
                        <div class="map_title_box">
                            <div class="map_title_innerbox">
                                <div class="map_title" style="background-image: url(img/second_title.png);">当前活跃服务商</div>
                            </div>
                            <div >
                                <select id="selLayer" style="width:100px;">
                                    <option value="">一级服务商</option>
                                    <option value="">二级服务商</option>
                                    <option value="">三级服务商</option>
                                    <option value="">四级服务商</option>
                                </select>
                            </div>
                        </div>
                        <table id="table" style="width: 100%">
                            <tbody>
                            <tr>
                                <td>中国通信建设集团有限公司</td>
                                <td>91110000100009606Y</td>
                                <td>安防工程企业设计施工维护能力证书-壹级</td>
                                <td>通信、信息化</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>北京金城安防科技有限公司</td>
                                <td>91110003250009606Y</td>
                                <td>安防工程企业设计施工维护能力证书-贰级</td>
                                <td>安防维护</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>北京电气化工程有限公司</td>
                                <td>91234000100003206Y</td>
                                <td>安防工程企业设计施工维护能力证书-三级</td>
                                <td>通信、信息化</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>北京易华录网络科技有限公司</td>
                                <td>91962000100009606Y</td>
                                <td>安防工程企业设计施工维护能力证书-壹级</td>
                                <td>集成信息化</td>
                                <td>2000</td>
                            </tr>
                            <tr>
                                <td>中国电子科技集团太极网络科技有限公司</td>
                                <td>91193000100009606Y</td>
                                <td>安防工程企业设计施工维护能力证书-贰级</td>
                                <td>电子、信息化</td>
                                <td>4000</td>
                            </tr>
                            <tr>
                                <td>北京国双科技有限公司</td>
                                <td>91520000100009606Y</td>
                                <td>安防工程企业设计施工维护能力证书-壹级</td>
                                <td>大数据、信息化</td>
                                <td>700</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="dataAllBorder02" id="map_title_innerbox1" style="display: none; position: relative;">
                        <div class="map_title_box">
                            <div class="map_title_innerbox">
                                <div class="map_title" style="background-image: url(img/second_title.png);">工单相关信息</div>
                            </div>
                        </div>
                        <ul class="tab_msg_box">
                           <li class="tab_msg tab_msg01 tab_msg_current">甲方联系人</li>
                            <li class="tab_msg tab_msg02">备品备件更换历史</li>
                        </ul>
                        <div class="table1">
                        <table id="table1" style="width: 100%">
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>张勇</td>
                                    <td>甲方</td>
                                    <td>保安干事</td>
                                    <td>13578329634</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>刘凡</td>
                                    <td>第三方</td>
                                    <td>值机员</td>
                                    <td>13572349634</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>李策</td>
                                    <td>第三方</td>
                                    <td>值机员</td>
                                    <td>13672296341</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div class="table2" style=" display: none;">
                        <table id="table2" style="width: 100%;">
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>795523077759835136</td>
                                    <td>摄像机</td>
                                    <td>XS-ss123</td>
                                    <td>芯片损坏</td>
                                    <td>海康</td>
                                    <td>张亮</td>
                                    <td>2018年1月4日 14时</td>
                                    <td>正常</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>795525508811987968</td>
                                    <td>NVR</td>
                                    <td>TS-ts133</td>
                                    <td>硬盘损坏</td>
                                    <td>大华</td>
                                    <td>张志勇</td>
                                    <td>2018年3月4日 9时</td>
                                    <td>正常</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>795546358562954240</td>
                                    <td>摄像机</td>
                                    <td>MDS-lk38</td>
                                    <td>镜片损坏</td>
                                    <td>华为</td>
                                    <td>李华</td>
                                    <td>2018年6月4日 17时</td>
                                    <td>正常</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>

                </div>
            </div>

            <div class="right_cage">
                <!--顶部切换位置-->
                <div class="dataAllBorder01 cage_cl" style="margin-top: 9% !important; height: 24%">
                    <div class="dataAllBorder02" id="cage_cl" >
                        <div class="analysis">当日实时工单总量及前四名：</div>
                        <ul  class="data_show_box">
                            <li class="data_cage">2</li>
                            <li class="data_cage">1</li>
                            <li class="data_cage" style="background-image: none;">,</li>
                            <li class="data_cage">7</li>
                            <li class="data_cage">0</li>
                            <li class="data_cage">2</li>
                        </ul>
                        <div class="depart_number_box">
                            <ul class="depart_number_cage">
                                <li class="depart_name">海淀区：</li>
                                <li class="depart_number">4,238</li>
                            </ul>
                            <ul class="depart_number_cage">
                                <li class="depart_name">朝阳区：</li>
                                <li class="depart_number">3,630</li>
                            </ul>
                            <ul class="depart_number_cage" style="margin-bottom: 0px;">
                                <li class="depart_name">丰台区：</li>
                                <li class="depart_number">2,251</li>
                            </ul>
                            <ul class="depart_number_cage" style="margin-bottom: 0px;">
                                <li class="depart_name">西城区：</li>
                                <li class="depart_number">1,224</li>
                            </ul>
                        </div>
                    </div>
                    <div class="dataAllBorder02 over_hide" id="cage_cl1" style="display: none" >
                        <div class="analysis">工单基础信息：</div>
                        <ul class="location_msg_box">
                            <li class="location_msg01 location_single">故障级别：<a href="#" style="color: #dc0000;">一级</a></li>
                            <li class="location_msg02 location_single">故障内容：关键点位摄像机停机</a></li>
                            <li class="location_msg02 location_double">故障时间：<a href="#" style="color: #cdd6db;">2017-09-10<br>11:40</a></li>
                            <li class="location_msg01 location_double">工单地址：北京市海淀区一环路南三段45#</a></li>
                            <li class="location_msg01 location_single" style="width: 100%; height: 40%">工单关联：“2018年4月12日 更换132号摄像机电源”、“2018年6月23日替换摄像机硬盘”。“2018年9月18日维修摄像机镜头”。</a></li>
                        </ul>
                    </div>
                </div>

                <div class="dataAllBorder01 cage_cl check_increase" style=" margin-top: 1.5% !important;">
                    <!--切换01-->
                    <div class="dataAllBorder02 over_hide dataAllBorder20" id="over_hide">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th style="width: 18%">工单位置</th>
                                <th>故障名称</th>
                                <th>工程师</th>
                                <th>工单状态</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>海淀区</td>
                                <td>摄像机故障</td>
                                <td>张三</td>
                                <td>维修中</td>
                            </tr>
                            <tr>
                                <td>海淀区</td>
                                <td>监视器故障</td>
                                <td>李四</td>
                                <td>维修中</td>
                            </tr>
                            <tr>
                                <td>朝阳区</td>
                                <td>硬盘刻录机故障</td>
                                <td>王五</td>
                                <td>维修中</td>
                            </tr>
                            <tr>
                                <td>丰台区</td>
                                <td>摄像机故障</td>
                                <td>逯兴</td>
                                <td>维修中</td>
                            </tr>
                            <tr>
                                <td>海淀区</td>
                                <td>拾音器故障</td>
                                <td>张勇</td>
                                <td>维修中</td>
                            </tr>
                            <tr>
                                <td>朝阳区</td>
                                <td>报警系统故障</td>
                                <td>陈默</td>
                                <td>维修中</td>
                            </tr>
                            <tr>
                                <td>西城区</td>
                                <td>门禁系统故障</td>
                                <td>侯勇</td>
                                <td>维修中</td>
                            </tr>

                            </tbody>
                        </table>
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th style="width: 18%">客户类型</th>
                                <th>巡检任务客户名称</th>
                                <th>巡检完成进度</th>
                                <th>巡检任务范围</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>银行</td>
                                <td>中信银行</td>
                                <td>30%</td>
                                <td>海淀区营业网点</td>
                            </tr>
                            <tr>
                                <td>医院</td>
                                <td>中日友好医院</td>
                                <td>50%</td>
                                <td>安防系统全部设备及系统</td>
                            </tr>
                            <tr>
                                <td>通信</td>
                                <td>中国电信集团</td>
                                <td>69%</td>
                                <td>集团大厦全部安防系统</td>
                            </tr>
                            <tr>
                                <td>学校</td>
                                <td>北京邮电大学</td>
                                <td>100%</td>
                                <td>全校安防系统及设备</td>
                            </tr>
                            <tr>
                                <td>能源</td>
                                <td>中国石油</td>
                                <td>28%</td>
                                <td>北京区域加油站点</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--切换02-->
                    <div class="dataAllBorder02 over_hide dataAllBorder20" id="over_hide1"  style="display: none">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th style="width: 18%">名称</th>
                                <th>安全等级</th>
                                <th>大小</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>下载文本</td>
                                <td>三级</td>
                                <td>5Kb</td>
                                <td>下载</td>
                            </tr>
                            <tr>
                                <td>浏览图片</td>
                                <td>三级</td>
                                <td>5.6M</td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>浏览视频</td>
                                <td>一级</td>
                                <td>26M</td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>下载图片</td>
                                <td>一级</td>
                                <td>5.6M</td>
                                <td>下载</td>
                            </tr>
                            <tr>
                                <td>下载视频</td>
                                <td>一级</td>
                                <td>26M</td>
                                <td>下载</td>
                            </tr>
                            <tr>
                                <td>在线处理</td>
                                <td>一级</td>
                                <td> / </td>
                                <td>处理</td>
                            </tr>
                            <tr>
                                <td>在线查询</td>
                                <td>一级</td>
                                <td> / </td>
                                <td>查询</td>
                            </tr>
                            <tr>
                                <td>项目信息</td>
                                <td>一级</td>
                                <td> / </td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>合同信息</td>
                                <td>一级</td>
                                <td> / </td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>用户信息</td>
                                <td>一级</td>
                                <td> / </td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>建设信息</td>
                                <td>一级</td>
                                <td> / </td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>产商信息</td>
                                <td>一级</td>
                                <td> / </td>
                                <td>查看</td>
                            </tr>
                            <tr>
                                <td>维保信息</td>
                                <td>一级</td>
                                <td> / </td>
                                <td>查看</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--地址检索切换03-->
                    <div class="dataAllBorder02 addition_check_in" style="display: none;position: relative" >
                        <div class="analysis" style="height: 34px;%">地址检索：</div>
                        <div class="search_plate_box">
                            <ul class="search_separate">
                                <li class="search_title">地址类型：</li>
                                <select class="search_input_box search_chose_box">
                                    <option>全部</option>
                                    <option>银行</option>
                                    <option>仓库</option>
                                    <option>学校</option>
                                    <option>医院</option>
                                    <option>加油站</option>
                                    <option>园区</option>
                                    <option>大楼</option>
                                    <option>其他</option>
                                </select>
                            </ul>
                            <ul class="search_separate">
                                <li class="search_title">地址名称：</li>
                                <li class="search_input_box"><input class="search_input" type="text"></li>
                            </ul>
                            <button class="search_btn">开始检索</button>
                        </div>
                        <!--检索结果板块-->
                        <div class="search_sesult_box">
                            <ul  class="search_result">
                                <li class="search_result_add">中信银行海淀区支行</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" title="操作"></li>
                                <li class="search_result_road">北京市>海淀区>西土城路20号</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">中日友好医院</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" title="操作"></li>
                                <li class="search_result_road">北京市>朝阳区>樱花园东街2号</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">国家会议中心</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" title="操作"></li>
                                <li class="search_result_road">北京市>朝阳区>北辰西路8号院</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">北京邮电大学</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" title="操作"></li>
                                <li class="search_result_road">北京市>海淀区>西土城路10号</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">国家图书馆</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" title="操作"></li>
                                <li class="search_result_road">北京市>海淀区>中关村南大街33号</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">鼎好大厦</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" title="操作"></li>
                                <li class="search_result_road">北京市>海淀区>海淀大街3-4号</li>
                            </ul>
                        </div>
                        <!--翻页模块-->
                        <div class="tcdPageCode"></div>
                    </div>
                    <!--危化品检索切换04-->
                    <div class="dataAllBorder02 chemistry_check_in" id="chemistry_check_in" style="display: none;position: relative" >
                        <div class="analysis" style="height: 34px;">编码检索：</div>
                        <div class="search_plate_box">
                            <ul class="search_separate">
                                <li class="search_title">编码类型：</li>
                                <select class="search_input_box search_chose_box">
                                    <option>全部</option>
                                    <option>唯一项目编码</option>
                                    <option>唯一工单编码</option>
                                    <option>系统故障代码</option>
                                </select>
                            </ul>
                            <ul class="search_separate">
                                <li class="search_title">输入编码：</li>
                                <li class="search_input_box"><input class="search_input" type="text"></li>
                            </ul>
                            <button class="search_btn">开始检索</button>
                        </div>
                        <!--检索结果板块-->
                        <div class="search_sesult_box">
                            <ul  class="search_result">
                                <li class="search_result_add danger_result">164号摄像机故障</li>
                                <li class="danger_level level03">三级</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" title="生命周期" onclick="showLife()"></li>
                                <li class="search_result_car car_personal">北京金城安防科技有限公司</li>
                                <li class="search_result_car car_time">日月光鼎好大厦</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add danger_result">报警系统故障</li>
                                <li class="danger_level level03">三级</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" title="生命周期"></li>
                                <li class="search_result_car car_personal">北京安防帮科技有限公司</li>
                                <li class="search_result_car car_time">顺义物流园区</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add danger_result">监视器故障</li>
                                <li class="danger_level level02">二级</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" title="生命周期"></li>
                                <li class="search_result_car car_personal">北京安防维护公司</li>
                                <li class="search_result_car car_time">中关村海龙大厦</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add danger_result">银行营业网点巡检任务</li>
                                <li class="danger_level level02">二级</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" title="生命周期"></li>
                                <li class="search_result_car car_personal">北京易华录科技有限公司</li>
                                <li class="search_result_car car_time">中国银行北京营业网点</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add danger_result">NVR故障</li>
                                <li class="danger_level level03">三级</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" title="生命周期"></li>
                                <li class="search_result_car car_personal">北京国双科技有限公司</li>
                                <li class="search_result_car car_time">东城区国贸大厦</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add danger_result">报警系统故障</li>
                                <li class="danger_level level01">一级</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" title="生命周期"></li>
                                <li class="search_result_car car_personal">北京安防维护维保公司</li>
                                <li class="search_result_car car_time">地坛公园</li>
                            </ul>
                        </div>
                        <!--翻页模块-->
                        <div class="chemistry_tcdPageCode"></div>
                    </div>
                    <!--企业检索切换05-->
                    <div class="dataAllBorder02 enterprise_check_in" id="enterprise_check_in" style="display: none;position: relative" >
                        <div class="analysis" style="height: 34px;">企业检索：</div>
                        <div class="search_plate_box">
                            <ul class="search_separate">
                                <li class="search_title">行业选择：</li>
                                <select class="search_input_box search_chose_box">
                                    <option>物流企业</option>
                                    <option>维保企业</option>
                                    <option>用户企业</option>
                                    <option>医院单位</option>
                                    <option>学校单位</option>
                                    <option>文化单位</option>
                                </select>
                            </ul>
                            <ul class="search_separate">
                                <li class="search_title">企业名字：</li>
                                <li class="search_input_box"><input class="search_input" type="text"></li>
                            </ul>
                            <ul class="search_separate">
                                <li class="search_title">统一社会信用代码：</li>
                                <li class="search_input_box"><input class="search_input" type="text"></li>
                            </ul>
                            <button class="search_btn">开始检索</button>
                        </div>
                        <!--检索结果板块-->
                        <div class="search_sesult_box">
                            <ul  class="search_result">
                                <li class="search_result_add">中国银行总部（350298100000405）</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" onclick="people()" title="操作"></li>
                                <li class="search_result_road">北京市>西城区>复兴门内大街1号</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">北京邮电大学（260220100003523）</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" onclick="people()" title="操作"></li>
                                <li class="search_result_road">北京市>海淀区>西土城路10号</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">中国石油（260220100003523）</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" onclick="people()" title="操作"></li>
                                <li class="search_result_road">北京市>西城区>六铺炕</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">中国工商银行（350298100000405）</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" onclick="people()" title="操作"></li>
                                <li class="search_result_road">北京市>西城区>复兴门内大街55号</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">北京金城安防科技有限公司（260220100003523）</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" onclick="people()" title="操作"></li>
                                <li class="search_result_road">北京市>海淀区>莲花桥路55号</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">中国铝业集团有限公司（350298100000405）</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_eddit" onclick="people()" title="操作"></li>
                                <li class="search_result_road">北京市>海淀区>西直门北大街62号</li>
                            </ul>
                        </div>
                        <!--翻页模块-->
                        <div class="enterprise_tcdPageCode"></div>
                    </div>
                    <!--车辆检索切换06-->
                    <div class="dataAllBorder02" id="car_check_in" style="display: none;position: relative" >
                        <div class="analysis" style="height: 34px;">工单检索：</div>
                        <div class="search_plate_box">
                            <ul class="search_separate">
                                <li class="search_title">工单编号：</li>
                                <li class="search_input_box"><input class="search_input" type="text"></li>
                            </ul>
                            <ul class="search_separate">
                                <li class="search_title">用户名称：</li>
                                <li class="search_input_box"><input class="search_input" type="text"></li>
                            </ul>
                            <ul class="search_separate">
                                <li class="search_title">项目编号：</li>
                                <li class="search_input_box"><input class="search_input" type="text"></li>
                            </ul>
                            <button class="search_btn">检索</button>
                        </div>
                        <!--检索结果板块-->
                        <div class="search_sesult_box">
                            <ul  class="search_result">
                                <li class="search_result_add">164号摄像机故障（陈浩）</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_guiji"  title="轨迹回放"></li>
                                <li class="search_result_car car_personal">北京金城安防科技有限公司</li>
                                <li class="search_result_car car_time">日月光鼎好大厦</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">报警系统故障（张正涛）</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_guiji" title="轨迹回放"></li>
                                <li class="search_result_car car_personal">北京安防帮科技有限公司</li>
                                <li class="search_result_car car_time">顺义物流园区</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">监视器故障（李雪）</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_guiji" title="轨迹回放"></li>
                                <li class="search_result_car car_personal">北京安防维护公司</li>
                                <li class="search_result_car car_time">中关村海龙大厦</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">银行营业网点巡检任务（刘红）</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_guiji" title="轨迹回放"></li>
                                <li class="search_result_car car_personal">北京易华录科技有限公司</li>
                                <li class="search_result_car car_time">中国银行北京营业网点</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">NVR故障（陈浩）</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_guiji" title="轨迹回放"></li>
                                <li class="search_result_car car_personal">北京国双科技有限公司</li>
                                <li class="search_result_car car_time">东城区国贸大厦</li>
                            </ul>
                            <ul  class="search_result">
                                <li class="search_result_add">报警系统故障（张起国）</li>
                                <li class="search_location" title="定位"></li>
                                <li class="search_guiji" title="轨迹回放"></li>
                                <li class="search_result_car car_personal">北京安防维护维保公司</li>
                                <li class="search_result_car car_time">地坛公园</li>
                            </ul>
                        </div>
                        <!--翻页模块-->
                        <div class="car_tcdPageCode"></div>
                    </div>
                </div>

                <div class="dataAllBorder01 cage_cl check_decrease" style="margin-top: 1.5% !important; height: 32%; position: relative;">
                    <div class="dataAllBorder02 over_hide" style="padding: 1.2%;">
                        <div class="analysis">安防系统故障构成因素占比：</div>
                        <div class="danger_contain_box">
                            <div id="container_huan" style="height: 90%;width: 100%"></div>
                        </div>
                        <div class="danger_depart_box">

                            <ul class="danger_depart">
                                <li class="danger_ico" style="background-image: url(img/images/pic_ico_01.png); background-position-x: 0px"></li>
                                <li class="data_name">摄像机故障</li>
                                <li class="data data01">652</li>
                                <li class="data data02">↑&nbsp&nbsp1.2%</li>
                            </ul>
                            <ul class="danger_depart">
                                <li class="danger_ico" style="background-image: url(img/images/pic_ico_02.png); background-position-x: 0px"></li>
                                <li class="data_name">网络传输故障</li>
                                <li class="data data01">597</li>
                                <li class="data data02" style="color: #ff2865;">↓&nbsp&nbsp0.3%</li>
                            </ul>
                            <ul class="danger_depart danger_depart01">
                                <li class="danger_ico" style="background-image: url(img/images/pic_ico_03.png); background-position-x: 0px"></li>
                                <li class="data_name">报警系统故障</li>
                                <li class="data data01">423</li>
                                <li class="data data02">↑&nbsp&nbsp1%</li>
                            </ul>
                            <ul class="danger_depart danger_depart01">
                                <li class="danger_ico" style="background-image: url(img/images/pic_ico_01.png); background-position-x: 0px"></li>
                                <li class="data_name">硬盘刻录机故障</li>
                                <li class="data data01">218</li>
                                <li class="data data02">↑&nbsp&nbsp0.3%</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>

        </div>

        <div class="inner" style="display: none;" >
            <div class="data_left01">
                <div class="dataAll maginS">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit1">巡检工单趋势</div>
                            <div class="data_chart" id="buyTime"></div>
                        </div>
                    </div>
                </div>
                <div class="dataAll">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit1">故障因素分析</div>
                            <p class="data_chart" id="Package01"></p>
                        </div>
                    </div>
                </div>
                <div class="dataAll">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit1">故障类型分析</div>
                            <p class="data_chart" id="rode01"></p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="data_left01">
                <div class="dataAll maginS">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit1">工单修复数</div>
                            <p class="data_chart" id="bookAret"></p>
                        </div>
                    </div>
                </div>
                <div class="dataAll">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit1">维修工单趋势</div>
                            <p class="data_chart" id="bookBmonth"></p>
                        </div>
                    </div>
                </div>
                <div class="dataAll">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit1">气候与工单量分析</div>
                            <p class="data_chart" id="whearAbook"></p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="data_left02">
                <div class="dataAll01">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit2">维护维保工单数据汇总</div>
                            <table class="table_data01" >
                                <tr><td>维修工单总数</td><td colspan="3" class="font01">56320</td></tr>
                                <tr><td>巡检工单总数</td><td colspan="3" class="font02">24182</td></tr>
                                <tr>
                                    <td>报修用户数：</td>
                                    <td>10个</td>
                                    <td>客户所属行业数：</td>
                                    <td>6个</td>
                                </tr>
                                <tr>
                                    <td>单日工单量最大值：</td>
                                    <td>2620个</td>
                                    <td>巡检工单最多月：</td>
                                    <td>12月</td>
                                </tr>
                                <tr>
                                    <td>维修维保最多季节：</td>
                                    <td>春季</td>
                                    <td>对应天气：</td>
                                    <td>湿润多雨</td>
                                </tr>
                                <tr>
                                    <td>客户采用最多的巡检方案：</td>
                                    <td>系统级巡检</td>
                                    <td>高频巡检行业：</td>
                                    <td>金融</td>
                                </tr>
                                <tr>
                                    <td>高频巡检行业平均巡检次数：</td>
                                    <td>8次</td>
                                    <td>高频巡检节假日：</td>
                                    <td>国庆节</td>
                                </tr>
                                <tr>
                                    <td>当天完成率：</td>
                                    <td>40%</td>
                                    <td>超期完成率：</td>
                                    <td>30%</td>
                                </tr>
                                <tr>
                                    <td>一次维修率：</td>
                                    <td>80%</td>
                                    <td>二次维修率：</td>
                                    <td>15%</td>
                                </tr>
                                <tr>
                                    <td>安防系统故障修复率：</td>
                                    <td>95%</td>
                                    <td>故障平均维修周期：</td>
                                    <td>4小时</td>
                                </tr>
                                <tr>
                                    <td>服务闭合率：</td>
                                    <td>93%</td>
                                    <td>客户主动评价率：</td>
                                    <td>68%</td>
                                </tr>
                                <tr>
                                    <td>工单完成最多服务商：</td>
                                    <td colspan="3" style="color: red">北京金城安防科技有限公司</td>
                                </tr>
                                <tr>
                                    <td>使用量最多的备件：</td>
                                    <td colspan="3" style="color: red">摄像机</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="dataAll02">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit1">工单完成量与工程师分析</div>
                            <p class="data_chart" id="rodeAbook"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="data_left01">
                <div class="dataAll maginS">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit1">巡检工单行业分析</div>
                            <p class="data_chart" id="seaAbook01"></p>
                        </div>
                    </div>
                </div>
                <div class="dataAll">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit1">平台活动与工单量分析</div>
                            <p class="data_chart" id="actionBook"></p>
                        </div>
                    </div>
                </div>
                <div class="dataAll">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit1">工单二次维修数分析</div>
                            <p class="data_chart" id="sperceBook01"></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="inner" style="display:none" >
            <div class="data_left03">
                <div class="dataAllNo01 maginS01">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit3">收入行业分析</div>
                            <table class="table_data01">
                                <tr>
                                    <td>项目总收入：</td><td colspan="3" class="font01">18,123,653元</td>
                                </tr>
                                <tr>
                                    <td>收入行业数：</td><td colspan="3" class="font03">9个</td>
                                </tr>
                                <tr><td>收入最多行业</td><td class="font04">金融(56%)</td><td>收入最少行业</td><td class="font05">教育(2.8%)</td></tr>
                                <tr><td>金融行业收入</td><td class="font6">602万元</td><td>金融行业收入占比</td><td class="font6">34.8%</td></tr>
                                <tr><td>能源行业收入</td><td class="font6">461万元</td><td>能源行业收入占比</td><td class="font6">4.8%</td></tr>
                                <tr><td>教育行业收入</td><td class="font6">388万元</td><td>教育行业收入占比</td><td class="font6">2.8%</td></tr>

                            </table>
                            <p class="data_chart01" id="zhanbi02"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="data_left04">

                <!--style="margin-top: 6.3%"-->
                <div class="dataAllNo01">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit3">营销投入与项目收入总额分析</div>
                            <table class="table_data02">
                                <tr><td class="font07">收入总额</td><td class="font03">1560万元</td><td class="font07">成本总额</td><td class="font02">560万</td></tr>
                                <tr><td class="font07">总利润</td><td class="font01">1000万元</td><td class="font07">利润率</td><td class="font01">464.15%</td></tr>

                            </table>
                            <p>
                                <div class="zhanleft01"  id="allAly01"></div>
                                <div class="zhanleft01"  id="allAly02"></div>
                            </p>
                            <p class="zhanleft02" id="allAly03"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="data_left03">
                <div class="dataAllNo01 maginS01">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit3">项目数量分析</div>
                            <table class="table_data01">
                                <tr>
                                    <td>当前项目总数：</td><td colspan="3" class="font02">123653个</td>
                                </tr>
                                <tr>
                                    <td>项目渠道数：</td><td colspan="3" class="font02">5个</td>
                                </tr>
                                <tr><td>项目最多渠道</td><td class="font05">协会引入(56%)</td><td>项目最少渠道</td><td class="font04">自行拓展(2.8%)</td></tr>
                                <tr><td>协会引入项目数</td><td class="font6">53602个</td><td>协会引入渠道占比</td><td class="font6">53%</td></tr>
                                <tr><td>服务商引入项目数</td><td class="font6">3602个</td><td>服务商引入占比</td><td class="font6">4.8%</td></tr>
                                <tr><td>自行拓展项目数</td><td class="font6">2202个</td><td>自行拓展占比</td><td class="font6">3.2%</td></tr>

                            </table>
                            <p class="data_chart01" id="zhanbi03"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="inner" style="display: none">
            <div class="clear"></div>
            <div class="data_left05">
                <div class="dataAllNo02 ">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit">服务商数量分析</div>
                            <p class="data_chart02" id="shijian01"></p>

                        </div>
                    </div>

                </div>
            </div>
            <div class="data_left05">
                <div class="dataAllNo02 ">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit">服务商对行业兴趣分析</div>
                            <table class="table_data02">
                                <tr><td class="font07">主要行业类型：</td><td class="font03">5个</td><td class="font07">在线服务商数量</td><td class="font02">563个</td></tr>
                                <tr><td class="font07">最感兴趣的行业</td><td class="font01">金融</td><td class="font07">最不感兴趣的行业</td><td class="font01">教育</td></tr>

                            </table>
                            <p class="data_chart02" id="shijian03"></p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="clear"></div>
            <div class="data_left05">
                <div class="dataAllNo02">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit">服务商与工单类型倾向分析</div>
                            <p class="data_chart02" id="shijian02"></p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="data_left05">
                <div class="dataAllNo02">
                    <div class="dataAllBorder01">
                        <div class="dataAllBorder02">
                            <div class="data_tit">前24家服务商关注行业分析</div>

                            <p class="data_chart03" id="shijian04"></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="inner" style="display: none">
            <div class="manage_left l_left">
                <!--<div class="manage_left_nav"><img src="img/left_nav.png"/></div>-->
                <div class="manage_line1">
                    <div class="manage_line2">
                        <div class="manage_top_middle">
                            <table class="table table-bordered">
                                <tbody>
                                <tr>
                                    <td>终端客户总数</td>
                                    <td colspan="3">25414（单位/个人）</td>
                                </tr>
                                <tr>
                                    <td>主要客户类型</td>
                                    <td colspan="3">单位客户</td>
                                </tr>
                                <tr>
                                    <td>客户主要分布</td>
                                    <td colspan="3">海淀区</td>
                                </tr>
                                <tr>
                                    <td>两方合同客户数</td>
                                    <td>4123个</td>
                                    <td>三方合同客户数</td>
                                    <td>5457个</td>
                                </tr>
                                <tr>
                                    <td>单位客户</td>
                                    <td>5424个</td>
                                    <td>个人客户</td>
                                    <td>8317个</td>
                                </tr>
                                <tr>
                                    <td>终端客户月同比</td>
                                    <td>上升5%</td>
                                    <td>终端客户月环比</td>
                                    <td>上升5.6%</td>
                                </tr>
                                </tbody>
                            </table>
                            <p>终端客户数据汇总</p>
                        </div>
                        <div class="manage_left_top">
                            <div class="manage_top_left l_left">
                                <div id="container2" style="height: 90%"></div>
                                <p>客户类型分析</p>
                            </div>
                            <div class="manage_top_left l_left">
                                <div id="container1" style="height: 90%"></div>
                                <p>客户区域分析</p>
                            </div>
                            <div class="manage_top_left l_left">
                                <div id="container3" style="height:90%"></div>
                                <p>客户行业分析</p>
                            </div>

                        </div>
                        <div class="manage_top_middle">
                            <div id="container4" style="height: 90%"></div>
                            <p>月活跃客户数据分析</p>
                        </div>
                        <!--<div class="manage_top_middle l_left">-->
                        <!--<div id="container5" style="height: 90%"></div>-->
                        <!--<p>天气——游客数据分析</p>-->
                        <!--</div>-->
                    </div>
                </div>
            </div>
            <div class="manage_left l_left">
                <!--<div class="manage_left_nav"><img src="img/left_nav.png"/></div>-->
                <div class="manage_line1">
                    <div class="manage_line2">
                        <div class="manage_top_middle l_left">
                            <div id="container9" style="height: 90%"></div>
                            <p>当日客户在线情况</p>
                        </div>
                        <div class="manage_top_middle l_left">
                            <div id="container10" style="height: 90%"></div>
                            <p>月客户总数分析</p>
                        </div>
                        <div class="manage_top_middle l_left">
                            <div id="container11" style="height: 90%"></div>
                            <p>分类客户趋势分析</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="manage_left l_left">
                <!--<div class="manage_left_nav"><img src="img/left_nav.png"/></div>-->
                <div class="manage_line1">
                    <div class="manage_line2">
                        <div class="manage_top_middle">
                            <div id="container12" style="height: 90%"></div>
                            <p>客户倾向性类型分析</p>
                        </div>
                        <div class="manage_top_middle">
                            <div id="container6" style="height: 90%"></div>
                            <p>行业活跃客户数</p>
                        </div>
                        <div class="manage_top_middle l_left">
                            <div id="container5" style="height: 90%"></div>
                            <p>天气与活跃客户数分析</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="inner" style="display: none;">
            <div class="user_left l_left" style=" margin-left: 0.6%">
                <!--<div class="user_left_nav"><img src="../images/left_nav.png"/></div>-->
                <div class="user_line1">
                    <div class="user_line2">
                        <div class="user_top_middle">
                            <table class="table table-bordered">
                                <tbody>
                                <tr>
                                    <td>注册维保工程师总数</td>
                                    <td colspan="3">52965人</td>
                                </tr>
                                <tr>
                                    <td>高级工程师数量</td>
                                    <td>625人</td>
                                    <td>初级工程师数量</td>
                                    <td>32452人</td>
                                </tr>
                                <tr>
                                    <td>中级工程师数量</td>
                                    <td>940人</td>
                                    <td>客户满意度最高</td>
                                    <td>周晓鹏</td>
                                </tr>
                                <tr>
                                    <td>工程师数量最多单位</td>
                                    <td>中国安全防范维保服务有限公司</td>
                                    <td>工程师高工最多单位</td>
                                    <td>北京市金城安防科技有限公司</td>
                                </tr>
                                <tr>
                                    <td>当天完成率最高</td>
                                    <td>李焕</td>
                                    <td>一次完成率最高</td>
                                    <td>周伟</td>
                                </tr>

                                </tbody>
                            </table>
                            <p>维修维保工程师管理汇总</p>
                        </div>
                        <div class="user_left_top">
                            <div class="user_top_left l_left">
                                <div id="userContainerSex" style="height: 90%"></div>
                                <p>工程师性别占比</p>
                            </div>
                            <div class="user_top_left l_left">
                                <div id="userContainerManage" style="height: 90%"></div>
                                <p>工程师专业占比</p>
                            </div>
                            <div class="user_top_left l_left">
                                <div id="userContainerAge" style="height:90%"></div>
                                <p>工程师年龄段占比</p>
                            </div>

                        </div>
                        <div class="user_top_middle">
                            <div id="userContainerAttendance" style="height: 90%"></div>
                            <p>各专业活跃工程师数量情况</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="user_left l_left" style=" margin-left: 0.6%">
                <!--<div class="manage_left_nav"><img src="../images/left_nav.png"/></div>-->
                <div class="user_line1">
                    <div class="user_line2">
                        <div class="user_top_middle l_left">
                            <div id="userContainerPersonal" style="height: 90%"></div>
                            <p>工单完成率排名</p>
                        </div>
                        <div class="user_top_middle l_left">
                            <div id="userContainerFlow" style="height: 90%"></div>
                            <p>月在线工程师数量</p>
                        </div>
                        <div class="user_top_middle l_left">
                            <div id="userContainerIllegal" style="height: 90%"></div>
                            <p>未按时完成工单工程师数量</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="user_left l_left" style=" margin-left: 0.6%">
                <!--<div class="manage_left_nav"><img src="../images/left_nav.png"/></div>-->
                <div class="user_line1">
                    <div class="user_line2">
                        <div class="user_top_middle">
                            <div id="userContainerComplaint" style="height: 90%"></div>
                            <p>月工单完成情况工程师数量分析</p>
                        </div>
                        <div class="user_top_middle">
                            <div id="userContainerPrize" style="height: 90%"></div>
                            <p>月工单处理总量前7名工程师分析</p>
                        </div>
                        <div class="user_top_middle l_left">
                            <div class="user_right_left l_left">
                                <div id="userContainerReason" style="height: 90%"></div>
                                <p>故障原因分析</p>
                            </div>
                            <div class="user_right_left l_left">
                                <div id="userContainerHandle" style="height: 90%"></div>
                                <p>故障处理情况</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<script src="${base}/bigscreen/template3/js/echarts-all.js"></script>
<script src="${base}/bigscreen/template3/js/index.js"></script>
<script src="${base}/bigscreen/template3/js/bstable/js/bootstrap.min.js"></script>
<script src="${base}/bigscreen/template3/js/bstable/js/bootstrap-table.js"></script>
<script type="text/javascript" src="${base}/bigscreen/template3/js/jquery.pagination.js"></script>
<script src="${base}/bigscreen/template3/js/bstable/js/bootstrap-table-zh-CN.min.js"></script>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=5ieMMexWmzB9jivTq6oCRX9j&callback"></script>

<script src="${base}/bigscreen/template3/js/MainMap.js"></script>
<script src="${base}/bigscreen/template3/js/Home_page.js"></script>
<script src="${base}/bigscreen/template3/js/artDialog/artDialog.js"></script>
<script src="${base}/bigscreen/template3/js/artDialog/plugins/iframeTools.source.js"></script>
<script>
    // websocket连接与收数据部分
    $(document).ready(function(){
        console.log('建立连接');
        var websocket = new WebSocket("ws://127.0.0.1:8990/ws");
        websocket.onopen = function(e){
            console.log('完成注册');
            var msg = {
                'content': '创建连接',
                'sendTime': (new Date()).getTime(),
                'spreadType': 'INITIAL',
                'groupId': 'group0003',
                'clientId': 'client0001',
                'sendClientId': 'client0001'
            }
            websocket.send(JSON.stringify(msg))
        }
        websocket.onmessage = function(e){
            console.log(e.data)
            // 把接下来的数据根据分类绑定到不同的组件(第一个页面 其他五个echarts组成的页面需要在index.js里去接收)
        }
    })
    var number;
    $(function() {
        if (window.screen.height <= 768) {
            number = 4;
        } else if (window.screen.height > 768 && window.screen.height <= 900) {
            number = 6
        } else if (window.screen.height > 1080) {
            number = 8
        }
    });


//    翻页模块
    $(".tcdPageCode").createPage({
        pageCount:5,
        current:1,
        backFn:function(p){}
    });
    $(".chemistry_tcdPageCode").createPage({
    pageCount:4,
    current:1,
    backFn:function(p){}
});
    $(".enterprise_tcdPageCode").createPage({
    pageCount:4,
    current:1,
    backFn:function(p){}
});
    $(".car_tcdPageCode").createPage({
    pageCount:4,
    current:1,
    backFn:function(p){}
});

    $(function () {
        $(".tit02Diva a").each(function (index) {
            $(this).on("click",function () {
                $(".data_map").eq(index).fadeIn().siblings(".data_map").stop().hide();
                $(this).prev('i').removeClass('i_crlieAction');
                $(this).siblings('a').prev('i').addClass('i_crlieAction');

            })
        });
        BootstrapTable();
        Echarts();
        $("#fresh_tool").click(function(event){
            event.stopPropagation();
            cancel();
        })

    });
    function EventClick(){
        $(".check_increase").removeClass("check_increase_act");
        $("#over_hide1").show().siblings().hide();
        $(".check_decrease").show();
        $("#cage_cl").hide();
        $("#map_title_innerbox").hide();
        $("#cage_cl1").show();
//        $("#over_hide").show();
        $("#map_title_innerbox1").show();
        $(".addition_check_in").hide();
        $("#car_check_in").hide();
        BootstrapTable();
    }
    function cancel(e){
        $(".check_increase").removeClass("check_increase_act");
        $("#over_hide").show().siblings().hide();
        $(".check_decrease").show();
        $("#cage_cl").show();
        $("#cage_cl1").hide();
        $("#map_title_innerbox1").hide();
        $("#map_title_innerbox").show();
//        $("#cage_cl").show();
//        $("#over_hide1").show();
//        $("#map_title_innerbox").show();
        BootstrapTable();
    }

    //    地址检索
    $(".addition_check_btn").click(function () {
        $(".check_increase").addClass("check_increase_act");
        $(".check_decrease").hide()
        $(".addition_check_in").show().siblings().hide()
    });

//    危化品检索
    function chemistryCheck() {
        $(".check_increase").addClass("check_increase_act");
        $(".check_decrease").hide()
        $("#chemistry_check_in").show().siblings().hide()
    }

    //    企业检索
    function enterpriseCheck() {
        $(".check_increase").addClass("check_increase_act");
        $(".check_decrease").hide()
        $("#enterprise_check_in").show().siblings().hide()
    }

    //    车辆检索
    function carCheck() {
        $(".check_increase").addClass("check_increase_act");
        $(".check_decrease").hide()
        $("#car_check_in").show().siblings().hide()
    }

    function BootstrapTable() {
        $('#table').bootstrapTable({
            method: "get",
            striped: true,
            singleSelect: false,
            url: "json/DGCar.json",
            dataType: "json",
            pagination: true, //分页
            pageSize: number,
            pageNumber: 1,
            search: false, //显示搜索框
            contentType: "application/x-www-form-urlencoded",
            queryParams: null,
            columns: [
                {
                    title: '公司名称',
                    field: 'company',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '统一社会信用代码',
                    field: 'uscc',
                    width:80,
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '资质等级',
                    field: 'qualification',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '所属行业',
                    field: 'content',
                    align: 'center'
                },
                {
                    title: '工程师数量',
                    field: 'engineernum',
                    width:80,
                    align: 'center'
                },
                {
                    title: '操作',
                    field: 'load',
                    align: 'center',
                    formatter: function (value, row) {
                        var e = '<a  href="javascript:void(0)" title="" onclick="showCarDetai()">查看详情</a> ';
                        var d = '<a  href="javascript:void(0)" title="" onclick="analiysis(\'' + row.id + '\')">公司位置</a> ';
                        return e + d;
                    }
                }

            ]
        });
        $('#table1').bootstrapTable({
            method: "get",
            striped: true,
            singleSelect: false,
            url: "json/note1.json",
            dataType: "json",
            pagination: true, //分页
            pageSize: number,
            pageNumber: 1,
            search: false, //显示搜索框
            contentType: "application/x-www-form-urlencoded",
            queryParams: null,
            columns: [
                {
                    title: "序号",
                    field: 'id',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '姓名',
                    field: 'name',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '类型',
                    field: 'type',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '职位',
                    field: 'title',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '联系方式',
                    field: 'person',
                    align: 'center'
                }
            ]
        });
        $('#table2').bootstrapTable({
            method: "get",
            striped: true,
            singleSelect: false,
            url: "json/note2.json",
            dataType: "json",
            pagination: true, //分页
            pageSize: number,
            pageNumber: 1,
            search: false, //显示搜索框
            contentType: "application/x-www-form-urlencoded",
            queryParams: null,
            columns: [
                {
                    title: "序号",
                    field: 'id',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: "历史工单编号",
                    field: 'workorderId',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '备件名称',
                    field: 'devicename',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '备件型号',
                    field: 'model',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '故障原因',
                    field: 'cause',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '制造商',
                    field: 'manufacture',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '维修人员',
                    field: 'maintainer',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '更换时间',
                    field: 'timestamp',
                    align: 'center',
                    valign: 'middle'
                },
                {
                    title: '更换结果',
                    field: 'result',
                    align: 'center'
                },

            ]
        });
    }

    function Echarts() {
        var myChart = echarts.init($("#container_huan")[0]);
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['自然损坏','产品质量','人为因素','意外损坏','其他情况'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series: [
                {
                    name:'行业数据',
                    type:'pie',
                    center:['80%','50%'],
                    radius: ['50%', '80%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
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
                    data:[
                        {value:335, name:'自然损坏'},
                        {value:310, name:'产品质量'},
                        {value:234, name:'人为因素'},
                        {value:135, name:'意外损坏'},
                        {value:1548, name:'其他情况'}
                    ]
                }
            ]
        };
        myChart.setOption(option);
    }


    function TimeControl(){
        $(".message_scroll_box").animate({marginTop:96},800,
                function(){
                    $(".message_scroll_box").css({marginTop:0});    //把顶部的边界清零
                    $(".message_scroll_box .message_scroll:first").before($(".message_scroll_box .message_scroll:last"));    //在第一个新闻后面插入最后一个新闻

                });
    }
    var T=setInterval(TimeControl,2300);    //开始定时
    $(".message_scroll_box").mouseenter(function(){
        clearInterval(T);    //停止定时
    })
            .mouseleave(function(){
                T=setInterval(TimeControl,2500);    //再次定时
            })

</script>

<!--轨迹回放时间日期选择-->
<script>
    !function(){
        laydate.skin('danlan');//切换皮肤，请查看skins下面皮肤库
        laydate({elem: '#demo'});
        laydate({elem: '#demo1'});//绑定元素
    }();
    //日期范围限制
    var start = {
        elem: '#start',
        format: 'YYYY-MM-DD',
        min: laydate.now(), //设定最小日期为当前日期
        max: '2099-06-16', //最大日期
        istime: true,
        istoday: false,
        choose: function(datas){
            end.min = datas; //开始日选好后，重置结束日的最小日期
            end.start = datas //将结束日的初始值设定为开始日
        }
    };

    var end = {
        elem: '#end',
        format: 'YYYY-MM-DD',
        min: laydate.now(),
        max: '2099-06-16',
        istime: true,
        istoday: false,
        choose: function(datas){
            start.max = datas; //结束日选好后，充值开始日的最大日期
        }
    };
    laydate(start);
    laydate(end);
    function edit() {
        layer.open({
            type: 2,
            title: '存储详情',
            shade: 0.5,
            skin: 'layui-layer-rim',
            area: ['700px', '400px'],
            shadeClose: true,
            closeBtn: 1,
            content: 'saveFindTail.html'
        });
    }
</script>
<script>
    // 百度地图API功能
    var map = new BMap.Map("map");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));
    var mapStyle={
        style:"dark"
    };
    map.setMapStyle(mapStyle);
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);
</script>

</body>
</html>


