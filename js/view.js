//加载基础信息
var view_loadInfo = function () {
	//加载日期
	var date = DateTool.getCurrentYMD();
	$(".date").html(date.year+"年"+date.month+"月"+date.date+"日  "+DateTool.getCurrentDay());
	//加载用户名
	$(".userName").html();
}

$(function  () {
	view_loadInfo();
});