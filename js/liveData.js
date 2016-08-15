/**
 * [drawDataListRow 生成dataList的一条数据]
 * @param  {[type]} dataObj [数据对象]
 * @return {[type]}         [无]
 */
function drawDataListRow(dataObj) {
	if(!dataObj){
		alert('当前无数据');
		return;
	}else{
		var htmlStr = "<ul>";
		for(var i in dataObj){
			if (dataObj[i]) {
				var name = dataTool.dataName[i]?dataTool.dataName[i]+": ":"";
				htmlStr += "<li class='"+i+"'>"+name+""+dataObj[i]+"</li>";
			}
		}
		$('.data-list').append(htmlStr);
	}
}

(function () {
	$.ajax({
		url: './getDataInfo.action',
		type: 'get',
		dataType: 'json',
		success: function (data) {
			if (data.errorCode="000000") {
				for (var i = 0; i < data.dataInfoList.length; i++) {
					drawDataListRow(new dataTool.dataModel(data.dataInfoList[i]));
				}
			}else{
				alert('errorCode:'+data.errorCode+',errorMsg:'+data.errorMsg);
			}
		},
		error: function (data) {
			console.error(data);
		}
	});	
})();

/**
 * 测试数据
 */
/*drawDataListRow(new dataTool.dataModel({"room":"日光温室1","dataTime":"2016/08/07  14:47","airTemp":"28.6","airHum":"50.3","soilHum":"33.3","soilTemp":"20","light":"28.4","co2":"310"}));
drawDataListRow(new dataTool.dataModel({"room":"日光温室2","dataTime":"2016/08/07  14:47","airTemp":"28.6","airHum":"50.3","soilHum":"33.3","soilTemp":"20","light":"28.4","co2":"310"}));
drawDataListRow(new dataTool.dataModel({"room":"日光温室3","dataTime":"2016/08/07  14:47","airTemp":"28.6","airHum":"50.3","soilHum":"33.3","soilTemp":"20","light":"28.4","co2":"310"}));*/