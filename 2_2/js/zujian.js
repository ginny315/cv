(function($){
	var defaults = {
		'container':'#container',
		'section':'.section',
		'easing':'ease',
		'duration':1000,
		'pageination':true,//是否显示分页
		'loop':false,//是否循环
		'keyboard':true,
		'direction':'vertical',
		'onpageSwitch':function(pagenum){}
	
	var win = $(window),
		container,sections;

	var opts = {},
		canScroll = true;

	var iIndex = 0;
	var arrElement = [];
 	var SP = $.fn.pageSwitch = function(options){
		var opts = $.entend({},defaults,options || {})
		return this.each(function(){

		});
	}

	//滚轮向上滑动
	SP.moveSectionUp = function(){};
	//滚轮向下滑动
	SP.moveSectionDown = function(){};

//$.fn.switchPage.moveSectionUp();

	function scrollPage(element){
		var dest = element.position();
		if(typeof dest === 'undefined'){return;}
		initEffects(dest,element);
	}

	$(document).on("mousewheel DOMMouseScroll",MouseWheelHandler);
	function MouseWheelHandler(e){
		e.preventDefault();
		var value = e.originalEvent.wheelDelta || -e.originalEvent.detail;
		var delta = Math.max(-1,Math.min(1,value));
		if(canScroll){
			if
		}

	}

	//横向布局初始化
	function initLayout(){

	}
	//初始化分页
	function initPagination(){

	}
	//分页事件
	function paginationHandler(){

	}
	//是否支持css某个属性
	function inSuportCss(property){

	}
	//渲染效果
	function initEffects(dest,element){

	}
	//窗口Resize
	var resizeId;
	win.resize(function(){

	});

	function keyDown(){

	}


})(jQuery);