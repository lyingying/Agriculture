/**
 * [view_loadDateInfo 加载基础信息]
 * @return {[type]} [undefined]
 */
var view_loadDateInfo = function () {
	//加载日期
	var date = DateTool.getCurrentYMD();
	$(".info-box  .date").html(date.year+"年"+date.month+"月"+date.date+"日  "+DateTool.getCurrentDay());
	//加载用户名
	$(".username").html(cookiesTool.read('userName'));
}

$(function  () {
	view_loadDateInfo();
});
/**
 * [绑定nav元素点击事件，加载相应页面]
 */
$("a[href='javascript:;']").click(function(event) {
	var mId = $(this).attr("id");
	console.log(mId);
	loadHtmlTool.loadHtml(mId);
});