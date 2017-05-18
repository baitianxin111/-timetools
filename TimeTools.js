
(function(){
	//类属性（静态属性）：使用类名调用  不需要实例化对象-》属性是共有的
	 function TimeTools (){}
	 //转换星期
	 TimeTools.week = function(timestamp){
	 	var date = new Date(timestamp);
	 	var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		return weeks[date.getDay()];
	 }
	 //转换2017：10：30
	 TimeTools.yymmdd = function(timestamp){
	 	 var date = new Date(timestamp);
        var y = date.getFullYear();
        var m = date.getMonth()+1;
        var d = date.getDate();
//20170517
//      return y + (m<10?"0"+m:m) + (d<10?"0"+d:d);
//2017年05月17日
		return y+"年"+(m<10?"0"+m+"月":m +"月")+(d<10?"0"+d+"日":d +"日")
 		
	 
	 };
	 TimeTools.hhmm = function(timestamp){
	 	var date = new Date(timestamp);
	 	var h = date.getHours();
	 	var minute = date.getMinutes();
	 	return h+minute;
//	 	return h<10?"0"+h:h + minute<10?"0"+minute:minute;
	 }
	 window.TimeTools = TimeTools;
})();
