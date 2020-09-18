

var layer_vector, layer_image, layer_POI, map,layer_SC;
var layer_RouteLine, layer_RoutePoi;
var graphicLayer_RouteLine;
var redColor, blueColor;
var geoService;

var layerUrl_cd_vector = "http://125.70.9.221:8020/cdmap/rest/services/BASEMAP/Vector/MapServer";
var layerUrl_cd_raster = "http://125.70.9.221:8020/cdmap/rest/services/BASEMAP/Raster/MapServer";
var layerUrl_POI = "http://123.146.170.78:6080/arcgis/rest/services/SCPOI2/MapServer/1";
var layerUrl_SC = "http://123.146.170.78:6080/arcgis/rest/services/SCPOI2/MapServer/";

//维修和巡检消息列表
$(document).ready(function(){
    $.ajax({
        url:'api/alarmMessageList',
        type:'GET',
        data:{
            'pageNum':0,        //第几页
            'pageSize':5,    // 每页数据数
            'workOrderId':'sd',
            'userName':'sd',
            'projectId':'as'
        },
        success:function(dataStr){
            var data=JSON.parse(dataStr)
            var modelView=''
            for(var i=0;i<data.length;i++){
                modelView=modelView+'<div class="message_scroll">'+
                    '<div class="scroll_top">'+
                    '<span class="scroll_title">'+data[i].type+'</span>'+
                    '<span class="scroll_level scroll_level01">'+data[i].level+'</span>'+
                    '<a class="localize" onclick="taskLocation('+data[i].latitude+','+data[i].longitude+')"'+'></a>'+
                    '<span class="scroll_timer">'+data[i].dataTime+'</span>'+
                    '</div>'+
                    '<div class="msg_cage">'+
                    '<a class="localize_title">'+data[i].content+'</a>'+
                    '</div>'+
                    '<div class="msg_cage">'+
                    '<a class="localize_title">'+data[i].corporation+'</a>'+
                    '</div>'+
                    '</div>'
            }
            $("#message_scroll_box_id").empty();
            $("#message_scroll_box_id").append(modelView);
            // <div class="message_scroll">
            //     <div class="scroll_top">
            //         <span class="scroll_title">维修维保工单</span>
            //         <span class="scroll_level scroll_level01">一级</span>
            //         <a class="localize" onclick="taskLocation()"></a>
            //         <span class="scroll_timer">19-12-5/12:52</span>
            //     </div>
            //     <div class="msg_cage">
            //         <a class="localize_title">海淀区西土城路9号，123号摄像机需要维修。</a>
            //     </div>
            //     <div class="msg_cage">
            //         <a class="localize_msg">平安银行-海淀区支行</a>
            //     </div>
            // </div>
        }
    })
})

//服务商列表
$(document).ready(function(){
    $.ajax({
        url:'api/activeFacilitatorList',
        type:'GET',
        data:{
            'pageNum':0,        //第几页
            'pageSize':5,    // 每页数据数
            'level':0
        },
        success:function(dataStr){
            var data=JSON.parse(dataStr)
            var modelView=''
            for(var i=0;i<data.length;i++){
                modelView=modelView+'<tr>'+
                    '<td>'+data[i].facilitatorName+'</td>'+
                    '<td>'+data[i].socialCode+'</td>'+
                    '<td>'+data[i].qualificationLevel+'</td>'+
                    '<td>'+data[i].industrySector+'</td>'+
                    '<td>'+data[i].engineerNum+'</td>'+
                    '<td>'+
                    '<a style="width: 60px;height: 20px;display: block;text-align: center;line-height: 20px;margin: 0;" onclick="showCarDetai()"'+'>查看详情</a>'+
                    '<a style="width: 60px;height: 20px;display: block;text-align: center;line-height: 20px;margin: 0;" onclick="taskLocation('+data[i].latitude+','+data[i].longitude+')"'+'>公司位置</a>'+
                    '</td>'+
                    '</tr>'
            }
            $("#active_facilitator_list").empty();
            $("#active_facilitator_list").append(modelView);
        // <tr>
        //     <td>中国通信建设集团有限公司</td>
        //     <td>91110000100009606Y</td>
        //     <td>安防工程企业设计施工维护能力证书-壹级</td>
        //     <td>通信、信息化</td>
        //     <td>5000</td>
        // </tr>
        }
    })
})


dojoConfig = {
    parseOnLoad: true,
    packages: [{
        name: 'tdlib',
        location: this.location.pathname.replace(/\/[^/]+$/, "") + "/js/tdlib"
    }]
};
require(["esri/map", "tdlib/TDTLayer", "tdlib/TDTRasterLayer", "tdlib/TDTAnnoLayer", "esri/layers/FeatureLayer","esri/InfoTemplate",
    "esri/geometry/Point", "esri/layers/GraphicsLayer", "esri/Color","esri/layers/ArcGISDynamicMapServiceLayer", "dojo/domReady!"],
    function (Map, TDTLayer, TDTRasterLayer, TDTAnnoLayer, FeatureLayer, InfoTemplate, Point, GraphicsLayer, Color, ArcGISDynamicMapServiceLayer) {

        var pt = new Point(104.06464933797728, 30.66198193058378);
        map = new Map("divMap", { logo: false, center: pt, zoom: 7 });

        layer_vector = new TDTLayer();
        layer_vector.id = "tianDiTu_vec";
        layer_vector.visible = false;
        map.addLayer(layer_vector);
        layer_image = new TDTRasterLayer();
        layer_image.id = "tianDiTu_img";
        layer_image.visible = false;
        map.addLayer(layer_image);

        layer_SC = new ArcGISDynamicMapServiceLayer(layerUrl_SC, {
            useMapImage: true,
        });
        layer_SC.setVisibleLayers([]);
        map.addLayer(layer_SC);


        var template_POI = {
            title: "${NAME}",
            content: "<table><tr>" +
                "<td><ul><li>名称：${NAME}</li><li>类型：${CTYPE}</li><li>区域：${CITY}-${DISTRICT}</li><li>电话：${TEL}</li><li>地址：${ADDRESS}</li></ul></td>" +
                "<td><img src='${PIC}' style='width:100%;height:100%' /></td></t></table>"
        };
        var infoTemplate_POI = new InfoTemplate(template_POI);


        layer_POI = new FeatureLayer(layerUrl_POI,{
            definitionExpression: "CTYPE='1'",
            infoTemplate: infoTemplate_POI,
            outFields: ["*"]
        });
        map.addLayer(layer_POI);

        graphicLayer_RouteLine = new GraphicsLayer({ id: "graphicLayer_RouteLine" });
        map.addLayer(graphicLayer_RouteLine);
        map.on('click', function (event) {
            if (isSetBufferCenter) {
                $("#txtBufferX").val(event.mapPoint.x);
                $("#txtBufferY").val(event.mapPoint.y);
                showEventPoint(event.mapPoint.x, event.mapPoint.y);
                isSetBufferCenter = false;
            }
            //var txt = $("#txtCoord").val()+ '['+ event.mapPoint.x + ',' + event.mapPoint.y + ']'
           var txt = event.mapPoint.x + ',' + event.mapPoint.y;
             $("#txtCoord").val(txt);
        });

        showLayer('vector');


        //初始化颜色  
        redColor = new Color([255, 0, 0]);
        blueColor = new Color([0, 0, 255]);

    }
    );


function showLayer(layerType) {

    layer_image.setVisibility(false);
    layer_vector.setVisibility(false);

    switch (layerType) {
        case 'vector':
            layer_vector.setVisibility(true);
            break;
        case 'image':
            layer_image.setVisibility(true);
            break;
    }
}

function addressQuery() {
    var queryValue = $("#txtQuery").val();
    var queryUrl = "http://www.scgis.net.cn/imap/imapserver/defaultrest/services/Newscnamesearch//Search?keyname=" + queryValue + "&typeCode=&DiQuKey=&QuXianKey=&isOnlyName=false&token=i44984NioeS2YQXAEi-NWImtfxFPNSx67E928s7whNAS9nH0uwTuO_YsKaxDdaxtdXi83flyMrcC9oG5S32Duw..&SearchEnvelope=&StartIndex=0&StopIndex=1000&ST=92916&callback=dojo.io.script.jsonp_dojoIoScript4._jsonpCallback";
    $.ajax({
        url: queryUrl,
        success: function (data) {
            data = data.replace('dojo.io.script.jsonp_dojoIoScript4._jsonpCallback(', '');
            data = data.replace(');', '');
            var result = eval('(' + data + ')');
            alert(result.message.features.length);
            var txt = "";
            map.graphics.clear();
            //for (i = 0; i < result.message.features.length; i++) {
            //    txt += result.message.features[i].attributes[3] + ',';
            //    var feature = result.message.features[i];
            //    var attr = { name: feature.attributes[3], type: feature.attributes[4], address: feature.attributes[8], pic: feature.attributes[10] };
            //    addPoint(feature.attributes[1], feature.attributes[2], view.spatialReference, attr);
            //}
            txt = JSON.stringify(result.message.columns);
            txt = txt + JSON.stringify(result.message.features);
            $("#txtCoord").val(txt);
        }
    })

}



//添加点位
function addPointGraphic(x, y, pic) {
    require(["esri/symbols/PictureMarkerSymbol", "esri/symbols/TextSymbol", "esri/geometry/Point", "esri/graphic"], function (PictureMarkerSymbol, TextSymbol, Point, Graphic) {

        var pt = new Point(x,y,map.spatialReference );

        var symbol = new PictureMarkerSymbol(pic,32,32);

        var ptGraphic = new Graphic(pt, symbol );

        map.graphics.add(ptGraphic);

    });
}

//添加显示点
function addPoint(x, y, spatialReference, attri) {

    require(["esri/symbols/PictureMarkerSymbol", "esri/symbols/TextSymbol", "esri/geometry/Point", "esri/graphic", "esri/InfoTemplate"], function (PictureMarkerSymbol, TextSymbol, Point, Graphic, InfoTemplate) {

        var pt = new Point({
            x: x,
            y: y,
            spatialReference: spatialReference
        });

        var symbol = new PictureMarkerSymbol( "images/mapIcon/qiangji32.png",32,32);

        var infoTemplate = new InfoTemplate("${NAME}","名称:${NAME}<br>类型:${TYPE}<br>地址:${ADDRESS}");

        var polylineGraphic = new Graphic(pt,symbol, attri,infoTemplate);

        map.graphics.add(polylineGraphic);

        var textSymbol = new TextSymbol({
            color: "white",
            backgroundColor: "green",
            haloColor: "black",
            haloSize: "1px",
            text: attri.name,
            xoffset: 3,
            yoffset: 3,
            font: {
                size: 12,
                family: "sans-serif",
                weight: "bolder"
            }
        });
        var txtGraphic = new Graphic( pt,  textSymbol );
        map.graphics.add(txtGraphic);

    });
}

//添加显示线
function addLine(pts, spatialReference,color) {
    require(["esri/geometry/Polyline", "esri/symbols/SimpleLineSymbol", "esri/Color", "esri/graphic"], function (Polyline, SimpleLineSymbol, Color,Graphic) {
        var paths = [pts];

        var line = new Polyline({
            paths: paths,
            spatialReference: spatialReference
        });

        var symbol = new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_SOLID,
            color,
            3
          );

        var lineGraphic = new Graphic(line, symbol);

        graphicLayer_RouteLine.add(lineGraphic);
        map.setExtent(line.getExtent().expand(3));

    });
}

//专题图显示
//仓库-1，加油站-2，派出所-3，危化品企业-4，学校-5，医疗卫生-6，应急避难场所-7
$("#layerList li input").change(function (evt) {
    var where = "";
    var layerCheckes = $("#layerList li input");
    for (i = 0; i < layerCheckes.length; i++) {
        if (layerCheckes[i].checked) {
            where += layerCheckes[i].id.replace('zt_', '') + ",";
        }
    }
    if (where == "")
        where = "CTYPEID=-1";
    else
        where = "CTYPEID in (" + where.substring(0, where.length - 1) + ")";

    layer_POI.setDefinitionExpression(where);
});

//轨迹回放
var timer_Route;
var iPoint_Route;
//实际行走险路
var points_Route = [[104.12151233673112, 30.668625259399512], [104.11966697692887, 30.667809867858985], [104.11842243194596, 30.667251968383887], [104.1170062255861, 30.666822814941504], [104.11606208801285, 30.66639366149912], [104.1147746276857, 30.666050338745215], [104.11378757476822, 30.665792846679786], [104.11211387634293, 30.66519203186045], [104.11116973876969, 30.66493453979502], [104.11172763824479, 30.66347541809092], [104.11211387634293, 30.6624454498292], [104.11228553771988, 30.661329650879004], [104.11228553771988, 30.659870529174903], [104.11219970703141, 30.65866889953623], [104.11215679168721, 30.65656604766857], [104.11215679168721, 30.655192756652944], [104.11215679168721, 30.654162788391226], [104.11189929962178, 30.653347396850698], [104.11138431549092, 30.652188682556265], [104.11052600860616, 30.65055789947521], [104.10971061706567, 30.649141693115368], [104.10885231018091, 30.64759674072279], [104.10765068054224, 30.645708465576305], [104.10662071228052, 30.64459266662611], [104.10524742126489, 30.64313354492201], [104.10456077575708, 30.641416931152477], [104.10370246887231, 30.639700317382946], [104.10258666992212, 30.63832702636732], [104.1019000244143, 30.63661041259779], [104.10078422546411, 30.635237121582165], [104.1000975799563, 30.633949661255016], [104.09923927307153, 30.632490539550915], [104.09786598205591, 30.63085975646986], [104.09709350585962, 30.62940063476576], [104.09520523071315, 30.626654052734516], [104.09383193969752, 30.62528076171889], [104.09314529418971, 30.624250793457172], [104.09211532592799, 30.623907470703266], [104.09039871215846, 30.62356414794936], [104.08816711425807, 30.623392486572406], [104.08490554809596, 30.623220825195453], [104.08198730468776, 30.622877502441547], [104.08112899780299, 30.622877502441547], [104.08061401367213, 30.621160888672016], [104.08009902954127, 30.619100952148578], [104.07975570678737, 30.61704101562514], [104.07924072265651, 30.614723587036273], [104.07829658508327, 30.611891174316547], [104.07821075439479, 30.610689544677875], [104.0779532623294, 30.609402084350727], [104.07812492370635, 30.608200454712055], [104.07812492370635, 30.606998825073383], [104.07778160095245, 30.60528221130385], [104.07718078613311, 30.60356559753432], [104.07743827819854, 30.602707290649555], [104.0779532623294, 30.60184898376479], [104.07846824646026, 30.60081901550307], [104.07863990783721, 30.60030403137221], [104.07881156921417, 30.599445724487445], [104.07881156921417, 30.598415756225727], [104.07863990783721, 30.597729110717914], [104.0779532623294, 30.5970424652101]];

//规定运输线路
var points_Route_Must = [[104.1214522489628, 30.668844129226763], [104.12299720135537, 30.669530774734575], [104.12454215374795, 30.670217420242388], [104.12625876751748, 30.671075727127153], [104.1284045347294, 30.672105695388872], [104.13106528607217, 30.673307325027544], [104.13312522259561, 30.674251462600786], [104.13381186810342, 30.674852277420122], [104.13484183636514, 30.675023938797075], [104.13655845013467, 30.673993970535356], [104.13776007977334, 30.67313566365059], [104.13930503216592, 30.672277356765825], [104.14102164593545, 30.671075727127153], [104.14308158245889, 30.670217420242388], [104.1452273496708, 30.66987409748848], [104.14754477825967, 30.670045758865434], [104.14969054547159, 30.67038908161934], [104.15179339733926, 30.670732404373236], [104.15320960369912, 30.670818235061713], [104.15522662487832, 30.67116155781562], [104.15702906933633, 30.67141904988105], [104.1576727994999, 30.67141904988105], [104.15883151379434, 30.671247388504096], [104.15977565136758, 30.670732404373236], [104.16037646618692, 30.66991701283271], [104.16059104290811, 30.668715383194037], [104.16054812756387, 30.667513753555365], [104.16020480480996, 30.665840055130072], [104.15788737622108, 30.660518552444522], [104.15582743969765, 30.655712033889834], [104.15514079418983, 30.650218869827334], [104.15376750317421, 30.648158933303897], [104.15239421215858, 30.644039060257022], [104.15102092114296, 30.64060583271796], [104.14964763012733, 30.637515927932803], [104.14690104809608, 30.633739377639834], [104.14621440258827, 30.630306150100772], [104.14346782055702, 30.62687292256171], [104.1469638285795, 30.63422600206069], [104.14559053756388, 30.631136097275533], [104.14490389205606, 30.628389515244283], [104.14353060104044, 30.625642933213033], [104.14215731002481, 30.62220970567397], [104.14215731002481, 30.61946312364272], [104.13838075973185, 30.616373218857564], [104.13700746871622, 30.612596668564596], [104.1359775004545, 30.610536732041158], [104.13391756393106, 30.608133472763814], [104.13151430465372, 30.60573021348647], [104.12842439986856, 30.605043567978658], [104.12430452682169, 30.60298363145522], [104.12155794479044, 30.601610340439596], [104.11881136275919, 30.60126701768569], [104.11606478072794, 30.599550403916158], [104.11091493941935, 30.599893726670064], [104.10782503463419, 30.599550403916158], [104.10507845260294, 30.598863758408346], [104.10164522506388, 30.59852043565444], [104.09855532027872, 30.59852043565444], [104.09546541549356, 30.59852043565444], [104.09271883346231, 30.59749046739272], [104.09065889693888, 30.59749046739272], [104.08859896041544, 30.59852043565444], [104.08585237838419, 30.59852043565444], [104.08310579635294, 30.599550403916158], [104.08035921432169, 30.599893726670064], [104.07932924605996, 30.600022472702776], [104.07872843124062, 30.60019413407973], [104.0788142619291, 30.599722065293108], [104.07868551589638, 30.598992504441057], [104.07864260055214, 30.598220028244768], [104.07847093917519, 30.597619213425432], [104.07799887038857, 30.597318806015764]];

function showRoute() {
    iPoint_Route = 0;
    map.graphics.clear();
    layer_POI.setDefinitionExpression("CTYPEID=-1");
    //绘制轨迹线 
    addLine(points_Route, map.spatialReference,blueColor);

    //绘制审批线路
    addLine(points_Route_Must, map.spatialReference, redColor);

    //启动车辆
    timer_Route = setInterval(flashRoute, 2000);
}


//刷新轨迹位置
function flashRoute() {
    map.graphics.clear();
    if (iPoint_Route < points_Route.length) {
        addPointGraphic(points_Route[iPoint_Route][0], points_Route[iPoint_Route][1], "images/mapIcon/huoche.png");
        iPoint_Route++;
    } else {
        clearInterval(timer_Route);
    }
}

//全图
function zoomFull() {
    data = {isAutoCenter: true};
    var that = this;
    map.enableAutoResize();
    var FullControl = function () {
        // 默认停靠位置和偏移量
        this.defaultAnchor = data.anchor || BMAP_ANCHOR_BOTTOM_RIGHT;
        if (data.offset && data.offset.x && data.offset.y) {
            this.defaultOffset = new BMap.Size(+data.offset.x, +data.offset.y);
        } else {
            this.defaultOffset = new BMap.Size(20, 81);
        }
    };

    FullControl.prototype = new BMap.Control();
    FullControl.prototype.initialize = function(map) {
        var mapEl = map.getContainer();
        var fullDiv = document.createElement('div');
        var fullDivHtml = '';
        var unfullDivHtml = '';

        if (data.divHtml && Array.isArray(data.divHtml) && data.divHtml.length === 2) {
            fullDivHtml = data.divHtml[0].toString();
            unfullDivHtml = data.divHtml[1].toString();
        } else {
            fullDivHtml =
                '<div class="bmap-ctrl bmap-full">' +
                '<img src=' + 'http://127.0.0.1:8081/jeecg-boot/bigscreen/template3/img/full.png' + ' title="全屏"/>' +
                '</div>';
            unfullDivHtml =
                '<div class="bmap-ctrl bmap-full">' +
                '<img src=' + 'http://127.0.0.1:8081/jeecg-boot/bigscreen/template3/img/unfull.png' + ' title="恢复"/>' +
                '</div>';
        }
        fullDiv.innerHTML = fullDivHtml;
        fullDiv.setAttribute('state', '0'); // 默认关闭全屏
        fullDiv.onclick = function(e) {
            // 为 map 对象添加一个新属性，记录初始化中心点
            if (!map.fullCenter) {
                map.fullCenter = map.getCenter();
            }

            var isToFull = (+fullDiv.getAttribute('state') === 0) ? true : false;
            map.enableAutoResize();

            // 通过添加样式，来更改地图的宽高达到全屏
            var fullCls = ' bmap-fullScreen';
            var cls = document.body.className;
            if (isToFull) {
                if (cls.indexOf(fullCls) === -1) {
                    document.body.className = cls + fullCls;
                }
            } else {
                document.body.className = cls.replace(fullCls, '');
            }

            // 更改按钮
            fullDiv.innerHTML = isToFull ? unfullDivHtml : fullDivHtml;
            fullDiv.setAttribute('state', isToFull ? '1' : '0');

            // 监听百度内置的地图蒙版的尺寸变化，知道其变化完毕后再重新定位中心点
            var mapMask = mapEl.getElementsByClassName('BMap_mask')[0];
            if (data.isAutoCenter && map.fullCenter && mapMask) {
                autoCenter();
            }

            function autoCenter() {
                var firstHeight = mapMask.getBoundingClientRect().height;
                var secondHeight;
                setTimeout(() => {
                    secondHeight = mapMask.getBoundingClientRect().height;
                    // 如地图没有重排完，则延迟重试
                    if (firstHeight !== secondHeight) {
                        setTimeout(() => {
                            autoCenter();
                        }, 200);
                    } else {
                        map.panTo(map.fullCenter);
                        // 回调函数
                        if (data.callback && typeof data.callback === 'function') {
                            data.callback(isToFull);
                        }
                    }
                }, 100);
            }
        };
        mapEl.appendChild(fullDiv);
        return fullDiv;
    };
    var fullCtrl = new FullControl();
    map.addControl(fullCtrl);
}

//放大
function zoomOut() {
    var zm = map.getZoom() + 1;
    if (zm <20)
        map.setZoom(zm);
}

//缩小
function zoomIn() {
    var zm = map.getZoom() - 1;
    if (zm > 4)
        map.setZoom(zm);
}
//倒退视图
function backwardMap(){
    map.panBy(200,0)
}
function forwardMap(){
    map.panBy(-200,0)
}
//专题地图
function topicsMap(){
    var layerList= document.getElementsByClassName("display_type_chose");
    var filterText=[]
    for(var i=0;i<layerList.length;i++){
        if(layerList[i].checked){
            filterText.push(layerList[i].nextSibling.data)
        }
    }
    console.log(filterText)
    //多关键字检索
    var local = new BMap.LocalSearch(map, {
        renderOptions:{map: map}
    });
    local.searchInBounds(filterText, map.getBounds());
}
//城市定位地图
function cityLocationMap(){
    var layerList= document.getElementsByClassName("display_city_chose");
    var cityName=null
    for(var i=0;i<layerList.length;i++){
        if(layerList[i].checked){
            cityName=layerList[i].nextSibling.data
            break
        }
    }
    map.centerAndZoom(cityName,11);
}
//地址检索
function addressSearch(){
    $.ajax({
        url:'api/addressSearch',
        type:'GET',
        data:{
            'pageNum':0,        //第几页
            'pageSize':5,    // 每页数据数
            'addressType':'abc',
            'addressName':'as'
        },
        success:function(dataStr){
            var data=JSON.parse(dataStr)
            var modelView=''
            for(var i=0;i<data.length;i++){
                modelView=modelView+'<ul  class="search_result">'+
                    '<li class="search_result_add">'+data[i].corporation+'</li>'+
                    '<li class="search_location" title="定位" onclick="taskLocation('+data[i].latitude+','+data[i].longitude+')"'+'></li>'+
                    '<li class="search_eddit" title="操作"></li>'+
                    '<li class="search_result_road">'+data[i].locationText+'</li>'+
                    '</ul>'
            }
            $("#address_search_result").empty();
            $("#address_search_result").append(modelView);
        // <#list addressSearchResult as item>
        //     <ul  class="search_result">
        //         <li class="search_result_add">${item.corporation}</li>
        //         <li class="search_location" title="定位" onclick="taskLocation(this,${item.latitude},${item.longitude})"></li>
        //         <li class="search_eddit" title="操作"></li>
        //         <li class="search_result_road">${item.locationText}</li>
        //     </ul>
        // </#list>
        }
    })
}
//危化品检索
function chemicalsSearch (){
    $.ajax({
        url:'api/chemicalSearch',
        type:'GET',
        data:{
            'pageNum':0,        //第几页
            'pageSize':5,    // 每页数据数
            'codeType':'abc',
            'codeValue':'as'
        },
        success:function(dataStr){
            var data=JSON.parse(dataStr)
            var modelView=''
            for(var i=0;i<data.length;i++){
                modelView=modelView+'<ul  class="search_result">'+
                    '<li class="search_result_add danger_result">'+data[i].content+'</li>'+
                    '<li class="danger_level level03">'+data[i].dangerLevel+'</li>'+
                    '<li class="search_location" title="定位" onclick="taskLocation('+data[i].latitude+','+data[i].longitude+')"'+'></li>'+
                    '<li class="search_eddit" title="生命周期" onclick="showLife()"'+'></li>'+
                    '<li class="search_result_car car_personal">'+data[i].corporation+'</li>'+
                    '<li class="search_result_car car_time">'+data[i].locationText+'</li>'+
                    '</ul>'
            }
            $("#chemical_search_result").empty();
            $("#chemical_search_result").append(modelView);
        // <ul  class="search_result">
        //     <li class="search_result_add danger_result">164号摄像机故障</li>
        //     <li class="danger_level level03">三级</li>
        //     <li class="search_location" title="定位"></li>
        //     <li class="search_eddit" title="生命周期" onclick="showLife()"></li>
        //     <li class="search_result_car car_personal">北京金城安防科技有限公司</li>
        //     <li class="search_result_car car_time">日月光鼎好大厦</li>
        //  </ul>
        }
    })
}
//企业检索
function corporationsSearch() {
    $.ajax({
        url:'api/corporationsSearch',
        type:'GET',
        data:{
            'pageNum':0,        //第几页
            'pageSize':5,    // 每页数据数
            'corporationType':'sd',
            'corporationName':'sd',
            'codeValue':'as'
        },
        success:function(dataStr){
            var data=JSON.parse(dataStr)
            var modelView=''
            for(var i=0;i<data.length;i++){
                modelView=modelView+'<ul  class="search_result">'+
                    '<li class="search_result_add">'+data[i].corporation+'</li>'+
                    '<li class="search_location" title="定位" onclick="taskLocation('+data[i].latitude+','+data[i].longitude+')"'+'></li>'+
                    '<li class="search_eddit" title="操作" onclick="people()"'+'></li>'+
                    '<li class="search_result_road">'+data[i].locationText+'</li>'+
                    '</ul>'
            }
            $("#corporation_search_result").empty();
            $("#corporation_search_result").append(modelView);
        // <ul  class="search_result">
        //     <li class="search_result_add">中国银行总部（350298100000405）</li>
        //     <li class="search_location" title="定位"></li>
        //     <li class="search_eddit" onclick="people()" title="操作"></li>
        //     <li class="search_result_road">北京市>西城区>复兴门内大街1号</li>
        // </ul>
        }
    })
}
//工单检索
function workOrdersSearch() {
    $.ajax({
        url:'api/workOrdersSearch',
        type:'GET',
        data:{
            'pageNum':0,        //第几页
            'pageSize':5,    // 每页数据数
            'workOrderId':'sd',
            'userName':'sd',
            'projectId':'as'
        },
        success:function(dataStr){
            var data=JSON.parse(dataStr)
            var modelView=''
            for(var i=0;i<data.length;i++){
                modelView=modelView+'<ul  class="search_result">'+
                    '<li class="search_result_add">'+data[i].content+'</li>'+
                    '<li class="search_location" title="定位" onclick="taskLocation('+data[i].latitude+','+data[i].longitude+')"'+'></li>'+
                    '<li class="search_guiji" title="轨迹回放" onclick="workOrderRoute('+data[i].id+')"'+'></li>'+
                    '<li class="search_result_car car_personal">'+data[i].corporation+'</li>'+
                    '<li class="search_result_car car_time">'+data[i].locationText+'</li>'+
                    '</ul>'
            }
            $("#workOrders_search_result").empty();
            $("#workOrders_search_result").append(modelView);
        // <ul  class="search_result">
        //     <li class="search_result_add">164号摄像机故障（陈浩）</li>
        //     <li class="search_location" title="定位"></li>
        //     <li class="search_guiji"  title="轨迹回放"></li>
        //     <li class="search_result_car car_personal">北京金城安防科技有限公司</li>
        //     <li class="search_result_car car_time">日月光鼎好大厦</li>
        // </ul>
        }
    })
}
function workOrderRoute(workOrderId) {
    $.ajax({
        url:'api/workOrderRoute',
        type:'GET',
        data:{
            'workOrderId':'as'
        },
        success:function(dataStr){
            var data=JSON.parse(dataStr)
            var myP1 = new BMap.Point(data[0].latitude,data[0].longitude);    //起点
            var myP2 = new BMap.Point(data[1].latitude,data[1].longitude);    //终点
            var myIcon = new BMap.Icon("../../img/route.png", new BMap.Size(32, 70), {    //小车图片
                //offset: new BMap.Size(0, -5),    //相当于CSS精灵
                imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
            });
            var driving2 = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});    //驾车实例
            driving2.search(myP1, myP2);    //显示一条公交线路

            window.run = function (){
                var driving = new BMap.DrivingRoute(map);    //驾车实例
                driving.search(myP1, myP2);
                driving.setSearchCompleteCallback(function(){
                    var pts = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组
                    var paths = pts.length;    //获得有几个点

                    var carMk = new BMap.Marker(pts[0],{icon:myIcon});
                    map.addOverlay(carMk);
                    i=0;
                    function resetMkPoint(i){
                        carMk.setPosition(pts[i]);
                        if(i < paths){
                            setTimeout(function(){
                                i++;
                                resetMkPoint(i);
                            },100);
                        }
                    }
                    setTimeout(function(){
                        resetMkPoint(5);
                    },100)

                });
            }
            setTimeout(function(){
                run();
            },1500);
        }
    })
}
//地图菜单栏的搜索按钮
function keyNameSearch(){
    console.log("hello")
    var poi = new BMap.Point(116.307852,40.057031);
    map.centerAndZoom(poi, 16);
    map.enableScrollWheelZoom();

    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
        '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
        '地址：北京市海淀区上地十街10号<br/>电话：(010)59928888<br/>简介：百度大厦位于北京市海淀区西二旗地铁站附近，为百度公司综合研发及办公总部。' +
        '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
    searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
        title  : "北京安防协会",      //标题
        width  : 290,             //宽度
        height : 105,              //高度
        panel  : "panel",         //检索结果面板
        enableAutoPan : true,     //自动平移
        searchTypes   :[
            BMAPLIB_TAB_SEARCH,   //周边检索
            BMAPLIB_TAB_TO_HERE,  //到这里去
            BMAPLIB_TAB_FROM_HERE //从这里出发
        ]
    });
    var marker = new BMap.Marker(poi); //创建marker对象
    marker.enableDragging(); //marker可拖拽
    marker.addEventListener("click", function(e){
        searchInfoWindow.open(marker);
    })
    map.addOverlay(marker); //在地图中添加marker
}
//维修巡检任务工单定位
function taskLocation(latitude,longitude){
    console.log(latitude+" "+longitude)
    var point = new BMap.Point(latitude, longitude);
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
}

//-----------------------------------------城市定位------------------------------

$("#ulCity li").click(function () {
    cityLocation(this.innerText);
});

var cityCenterData = [{ name: '成都市', coordX: 104.06464933797728, coordY: 30.66198193058378 },
{ name: '德阳市', coordX: 104.39616182267683, coordY: 31.128626242838894 },
{ name: '广汉市', coordX: 104.27720050416442, coordY: 30.98125495072465 },
{ name: '什邡市', coordX: 104.16931136018156, coordY: 31.128094096761312 },
{ name: '绵阳市', coordX: 104.71953866976015, coordY: 31.49196533513092 },
{ name: '广元市', coordX: 105.8411551951016, coordY: 32.432445904973584 },
{ name: '巴中市', coordX: 106.7548743597749, coordY: 31.857723620173256 },
{ name: '达州市', coordX: 107.48052099925064, coordY: 31.219486720196677 },
{ name: '自贡市', coordX: 104.77421082761674, coordY: 29.351811088249352 },
{ name: '泸州市', coordX: 105.43799099601415, coordY: 28.875347847910863 },
{ name: '宜宾市', coordX: 104.61442845147651, coordY: 28.77949224084179 },
{ name: '乐山市', coordX: 103.76477383864666, coordY: 29.570748332166442 },
{ name: '眉山市', coordX: 103.8388628847487, coordY: 30.057785987714666 },
{ name: '雅安市', coordX: 103.01869917051499, coordY: 29.994477273989844 },
{ name: '甘孜州', coordX: 101.96085326462626, coordY: 30.036053673370464 },
{ name: '阿坝州', coordX: 102.22195024516553, coordY: 31.90058805220809 },
{ name: '凉山州', coordX: 102.25959586068651, coordY: 27.883986689826066 },
{ name: '攀枝花市', coordX: 101.70856287209915, coordY: 26.581591822882732 },
{ name: '广安市', coordX: 106.6307129347292, coordY: 30.46058945850295 },
{ name: '南充市', coordX: 106.09258885235211, coordY: 30.80133728127757 },
{ name: '内江市', coordX: 105.05860193954454, coordY: 29.595999533171394 },
{ name: '资阳市', coordX: 104.63823762986025, coordY: 30.12372097172833 },
{ name: '遂宁市', coordX: 105.586908738787, coordY: 30.517752717983164 }]


function cityLocation(cityName) {
    for (i = 0; i < cityCenterData.length; i++) {
        if (cityCenterData[i].name == cityName) {
            require(["esri/geometry/Point"], function (Point) {
                var pt = new Point({
                    x: cityCenterData[i].coordX,
                    y: cityCenterData[i].coordY,
                    spatialReference: map.spatialReference
                });
                map.centerAndZoom(pt, 10);
            });
        }
    }
}

//-----------------------------------------城市定位  END------------------------------


//--------------------------------------热力图分析-------------------------------------

function showHeatMap() {
    require([
        "esri/InfoTemplate",
        "esri/layers/FeatureLayer",
        "esri/map",
        "esri/renderers/HeatmapRenderer",
        "dojo/domReady!"
    ],function (InfoTemplate, FeatureLayer, Map, HeatmapRenderer) {

        var infoTemplate = new InfoTemplate("${NAME}", "名称:${NAME}<br>类型:${TYPE}<br>地址:${ADDRESS}");

        var heatmapFeatureLayerOptions = {
            mode: FeatureLayer.MODE_SNAPSHOT,
            infoTemplate: infoTemplate,
            outFields: ["*"],
            definitionExpression: layer_POI.getDefinitionExpression()
        };

        var heatmapFeatureLayer = new FeatureLayer(layerUrl_POI, heatmapFeatureLayerOptions);
        var heatmapRenderer = new HeatmapRenderer();
        heatmapFeatureLayer.setRenderer(heatmapRenderer);
        map.addLayer(heatmapFeatureLayer);

    });
}

//--------------------------------------热力图分析  END-------------------------------------


//--------------------------------------缓冲区分析-------------------------------------

var isSetBufferCenter = false;

function setBufferCenter() {
    isSetBufferCenter = true;
}

function executeBuffer() {
    var dis = $("#txtBufferDis").val();
    var bufferX= $("#txtBufferX").val();
    var bufferY = $("#txtBufferY").val();
    bufferX = parseFloat(bufferX);
    bufferY = parseFloat(bufferY);
    dis = parseFloat(dis);
    bufferAnalyst(bufferX, bufferY, dis);
}

function bufferAnalyst(ptX,ptY, bufferDistance) {

    require(["esri/geometry/Point", "esri/tasks/BufferParameters", "esri/SpatialReference", "dojo/dom", "esri/tasks/GeometryService", "esri/geometry/normalizeUtils" ],
        function (Point, BufferParameters, SpatialReference, dom, GeometryService, normalizeUtils) {

            if (geoService == null) {

                geoService = "init";

                esriConfig.defaults.geometryService = new GeometryService("http://123.146.170.78:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer");
                // proxy 用于跨域
                esriConfig.defaults.io.proxyUrl = "/proxy/";
                esriConfig.defaults.io.alwaysUseProxy = false;
            }


            var params = new BufferParameters();
            var centerPoint = new Point(ptX, ptY, map.spatialReference);
            //params.geometries = [centerPoint];
            params.distances = [bufferDistance/100000];
            params.unit = 9102; //GeometryService.UNIT_SQUARE_FEET;
            params.bufferSpatialReference = map.spatialReference;
            params.outSpatialReference = map.spatialReference;

            normalizeUtils.normalizeCentralMeridian([centerPoint]).then(function (normalizedGeometries) {
                var normalizedGeometry = normalizedGeometries[0];
                if (normalizedGeometry.type === "polygon") {

                    // 规范化多边形几何操作
                    esriConfig.defaults.geometryService.simplify([normalizedGeometry], function (geometries) {
                        params.geometries = geometries;

                        // 进行缓冲操作
                        esriConfig.defaults.geometryService.buffer(params, showBuffResult);// ShowBuffer is callback function
                    });
                } else {
                    params.geometries = [normalizedGeometry];
                    esriConfig.defaults.geometryService.buffer(params, showBuffResult);
                }
            });
        });
}

function showBuffResult(bufferedGeometries) {

    require(["esri/graphic", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/Color", "dojo/_base/array"], function (Graphic, SimpleFillSymbol, SimpleLineSymbol, Color, array) {
        // 设置缓冲区显示样式
        var symbol = new SimpleFillSymbol(
            SimpleFillSymbol.STYLE_SOLID,
            new SimpleLineSymbol(
                SimpleLineSymbol.STYLE_SOLID,
                new Color([255, 0, 0, 0.65]), 2),
            new Color([255, 0, 0, 0.35])
        );
        // dojo 数组遍历
        array.forEach(bufferedGeometries, function (geometry) {
            bufferGeometry = geometry;
            map.setExtent(geometry.getExtent().expand(3));
            // 显示地图绘制样式
            var graphic = new Graphic(geometry, symbol);
            map.graphics.add(graphic);
        });
    });
}


//--------------------------------------缓冲区分析  END-------------------------------------


//--------------------------------------应急事件处置-------------------------------------

function eventHandle() {
    require(["esri/geometry/Point", "esri/tasks/BufferParameters", "esri/SpatialReference", "dojo/dom", "esri/tasks/GeometryService", "esri/geometry/normalizeUtils" ],
        function (Point, BufferParameters, SpatialReference, dom, GeometryService, normalizeUtils) {
            showEventPoint(104.06464933797728, 30.66198193058378);
           var where = "CTYPEID in (11,12,13,14)";
            layer_POI.setDefinitionExpression(where);
            bufferAnalyst(104.06464933797728, 30.66198193058378, 1000);

    });
}

function showEventPoint(ptX, ptY) {
    require(["esri/symbols/PictureMarkerSymbol", "esri/graphic", "esri/geometry/Point"
    ], function (PictureMarkerSymbol, Graphic, Point) {
        map.graphics.clear();
        var centerPoint = new Point(ptX, ptY, map.spatialReference);
        //定位点符号
        var symbol_Point = new PictureMarkerSymbol('images/mapIcon/event.png', 32, 32);
        map.graphics.add(new Graphic(centerPoint, symbol_Point));
    });

}


//--------------------------------------应急事件处置  END-------------------------------------


//-------------------------------------显示危化品生命周期-------------------------------

function showLife() {

    clearAll();
    layer_SC.setVisibleLayers([0, 2]);
    require(["esri/geometry/Point"], function (Point) {
        var pt = new Point({
            x: 104.021,
            y: 30.661,
            spatialReference: map.spatialReference
        });
        map.centerAndZoom(pt, 10);
    });
    clearInterval(timer_Route);
}


function clearAll() {
    layer_SC.setVisibleLayers([]);
    layer_POI.setVisibility(false);
    map.graphics.clear();
}