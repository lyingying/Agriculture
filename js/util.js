/*
* @purpose 用于获取当前日期时间的工具类
* @param 无
* @return DateTool对象
* @exception
*/
DateTool = (function() {
	var _DateTool = function  () {
		var me = this;
	}
	var dateObj = new Date();
	var dayObj ={0 :"星期日", 1 :"星期一", 2 :"星期二", 3 :"星期三",	4 :"星期四", 5 :"星期五", 6 :"星期六" };
	//得到当前年
	function getCurrentYear () {
		return dateObj.getFullYear();
	}
	//得到当前完整月
	function getCurrentFullMonth () {
		var month = dateObj.getMonth()+1;
		if(month < 10){
			return "0"+month;
		}else{
			return month;
		}	
	}
	//得到当前月
	function getCurrentMonth () {
		return dateObj.getMonth()+1;
	}
	//得到当前完整日
	function getCurrentFullDate () {
		var date = dateObj.getDate();
		if(date < 10){
			return "0"+date;
		}else{
			return date;
		}	
	}
	//得到当前日
	function getCurrentDate () {
		return dateObj.getDate();
	}
	//得到当前年月日
	_DateTool.getCurrentYMD = function  () {
		return {
			'year':getCurrentYear(),
			'fullMonth':getCurrentFullMonth(),
			'fullDate':getCurrentFullDate(),
			'month':getCurrentMonth(),
			'date':getCurrentDate(),
		};
	}
	//得到当前天
	_DateTool.getCurrentDay = function  () {
		return dayObj[dateObj.getDay()];
	}
	//得到当前时
	function  getCurrentHours() {
		var dateObj = new Date();
		var hour =  dateObj.getHours();
		return hour > 9 ? hour : "0"+hour;
	}
	//得到当前分
	function  getCurrentMinutes() {
		var dateObj = new Date();
		var minutes =  dateObj.getMinutes();
		return minutes > 9 ? minutes : "0"+minutes;
	}
	//得到当前秒
	function  getCurrentSeconds() {
		var dateObj = new Date();
		var seconds =  dateObj.getSeconds();
		return seconds > 9 ? seconds : "0" + seconds;
	}
	//得到当前时间
	_DateTool.getCurrentTime = function  () {
		var c =":";
		var hour =getCurrentHours() +c;
		var minutes =getCurrentMinutes()+c;
		var seconds =getCurrentSeconds();
		return hour+minutes+seconds;
	}
	return _DateTool;
})();