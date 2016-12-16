function loadHtml(url, selector) {
	$.ajax({
		url: url,
		async: false,
		success: function(data) {
			$(selector).html(data);
		}
	});
/*输入提示框*/
	$("#logoText").keyup(function() {
 		$.ajax({
 			url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + $("#logoText").val() + "&json=1&p=3",
 			dataType: "jsonp",
 			jsonp: "cb",
 			success: function(data) {
 				var _data = data.g;
   				$("#tipList").html("");
 				for(var i in _data) {
 					$("#tipList").append($("<li></li>").html(_data[i].q));
 				};
 			}
 		});
 	});
 	
 /*右侧菜单栏*/
	$("#mbar-mod").click(function(){
		if ($("#rightBar").css("right") != "0px") {
			$("#rightBar").animate({right:0},500);
		}else {
			$("#rightBar").animate({right:-264},500);
		}
	});
};

$(function(){		
	var $subblock = $(".subpage"), 
		$head=$subblock.find('h2'), 
		$ul = $("#proinfo"), 
		$lis = $ul.find("li"), 
		inter=false;
		
	$head.click(function(e){
		e.stopPropagation();
		if(!inter){
			$ul.show();
		}else{
			$ul.hide();
		}
		inter=!inter;
	});
	
	$ul.click(function(event){
		event.stopPropagation();
	});
	
	$(document).click(function(){
		$ul.hide();
		inter=!inter;
	});

	$lis.hover(function(){
		if(!$(this).hasClass('nochild')){
			$(this).addClass("prosahover");
			$(this).find(".prosmore").removeClass('hide');
		}
	},function(){
		if(!$(this).hasClass('nochild')){
			if($(this).hasClass("prosahover")){
				$(this).removeClass("prosahover");
			}
			$(this).find(".prosmore").addClass('hide');
		}
	});
	
});

$(function(){
	$("#logoText1").keyup(function() {
 		$.ajax({
 			url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + $("#logoText1").val() + "&json=1&p=3",
 			dataType: "jsonp",
 			jsonp: "cb",
 			success: function(data) {
 				var _data = data.g;
   				$("#tipList1").html("");
 				for(var i in _data) {
 					$("#tipList1").append($("<li></li>").html(_data[i].q));
 				};
 			}
 		});
 	});
 	
 	/*var iFixTop = $(".xiDing").offset().top;
	$(window).scroll(function() {
		var iScrollTop = $(this).scrollTop();
		if(iScrollTop >= iFixTop) {
			$(".xiDing").css({position: "fixed", top: 0});
		} else {
			$(".xiDing").css("position", "static");
		}
	});*/
	
});
