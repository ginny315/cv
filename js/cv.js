$(document).ready(function(){
	var deviceHeight = document.documentElement.clientHeight;
	var deviceWidth = document.documentElement.clientWidth;
	var height_width = deviceHeight/deviceWidth;
	$(".page").css("height",deviceHeight);
	console.log(deviceHeight);
	var per = deviceHeight/568;
	$("html").css("font-size",10*per+"px");
	console.log(height_width);
	//$(".secondPage").css("padding-top",height_width*100);
	console.log($("body").height());
	console.log($(".firstPage").height());
	console.log($(".secondPage").height());
	var next_left = (deviceWidth-40)/(deviceWidth*2);
	var secondPage_bar = (deviceWidth-20)/(deviceWidth*2);
	$(".next").css("left",next_left*100+"%");
	$(".second_vertical_bar").css("left",secondPage_bar*100+"%");
	$(".second_round").css("left",next_left*100+"%")
});