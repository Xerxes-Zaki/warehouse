$(function(){

/*吸顶*/
	var iFixTop = $("#nav").offset().top;
	$(window).scroll(function() {
		var iScrollTop = $(this).scrollTop();
		if(iScrollTop >= iFixTop) {
			$(".xiDing").stop().fadeIn(500);
		} else {
			$(".xiDing").stop().fadeOut(500);
		}
	});	

/*搜索框*/
	/*$("#logo-text").focus();*/
	
/*输入框提示*/
 	/*$("#logoText").keyup(function() {
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
 	});*/

/*轮播*/
	var $lis = $("#banner li"),
		len = $lis.length,
		liWidth = $lis.eq(0).outerWidth(),
		index = 2, // 即将显示的图片索引
		html = "",
		timer = null,
		$first = $lis.eq(0).clone(true),
		$last = $lis.eq(len-1).clone(true);
	$("#banner ul").append($first).prepend($last);
	len += 2;
	$("#banner ul").width(len * liWidth);
	// 初始显示的轮播图片
	$("#banner ul").css("left", -liWidth);
	for (var i = 0; i < len - 2; i++) {
		html += "<div></div>";
	}
	$(html).appendTo("#pages").eq(0).addClass("curr").end()
							  .on("click", function(){
							  		index = $(this).index() + 1;
							  		move();
							  });
	// 鼠标移入/移出时停止/开启自动轮播的计时器
	$("#banner").hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(move, 2000);
	}).trigger("mouseleave");
	// 上一页
	$("#prev").on("click", function(){
		if ($("#banner ul").is(":animated")) // 判断 ul 是否正在执行动画
			return;
		index -= 2;
		move();
	});
	// 下一页
	$("#next").on("click", function(){
		if ($("#banner ul").is(":animated"))
			return;
		move();
	});
	function move(){
		var _left = -1 * index * liWidth;
		// 根据图片的索引计算小圆点索引
		var circleIndex = index > len - 2 ? 0 : index - 1;
		$("#pages div").eq(circleIndex).addClass('curr')
					   .siblings().removeClass("curr");
		index++;
		$("#banner ul").animate({left:_left}, function(){
			if (index === len) { // 当 index 增长到最后一张图片之后时，还原初始状态
				$("#banner ul").css("left", -liWidth);
				index = 2;
			} else if (index === 1) {
				$("#banner ul").css("left", -1 * (len - 2) * liWidth);
				index = len - 1;
			}
		});
	};
	$("#banner").hover(function(){
		$("#prev,#next").show();
	},function(){
		$("#prev,#next").hide();
	});
	
/*商品数据加载*/
	$.when($.ajax("../html/common/goods.html"),$.ajax("../data/index/index.json")).done(function(indexHtml,data){//模板数据
		indexHtml = indexHtml[0];
		data = data[0];//商品信息数据
		var index = 0;
		for (var i in data) {
			var html = "";
			html += indexHtml.replace("{m_price}",data[i].m_price)
					.replace("{m_pay}",data[i].m_pay)
					.replace("{m_discount}",data[i].m_discount)
					.replace("{m_name}",data[i].m_name)
					.replace("{m_img}",data[i].m_img);
//			console.log(html);
			$(".m-f-bottom li").eq(index++).append(html);
		};
	});
	
	$(".mainLi").click(function(){
		location.href = "goodDetail.html";
	});
	
/*楼层导航*/
	var winHeight = $(window).height(), // 窗口高度
		headerHeight = $(".header").height(); // 头部布局高度
	$(window).on("scroll", function(){
		var _scrollTop = $(this).scrollTop();// 滚动高度
		// 判断是否显示导航
		if (_scrollTop > headerHeight - winHeight / 2) {
			$("#floor-d").stop().fadeIn();
		} else {
			$("#floor-d").stop().fadeOut();
		}
		// 切换导航中的样式
		$(".floor").each(function(index, element){
			if (_scrollTop > $(element).offset().top - winHeight / 2) {
				$("#floor-d li").eq(index).find("span").show()
				.end().siblings().find("span").hide();
			};
		});
	});
	// 点击楼层导航
	$("#floor-d li:not(:last)").on("click", function(){
		// 获取当前点击 li 的索引
		var index = $(this).index();
		// 让 .floor 滚动
		var _top = $(".floor").eq(index).offset().top;
		$("html,body").animate({"scrollTop":_top});
	}).hover(function(){
		$(this).children('span').show();
	}, function(){
		$(this).children('span').hide();
	});
	// 回到顶部
	$("#floor-d li:last").on("click", function(){
		$(window).scrollTop(0);
	});
	
/*右侧菜单栏*/
	/*$("#mbar-mod").click(function(){
		if ($("#rightBar").css("right")!="0px") {
			$("#rightBar").animate({right:0},0);
			console.log("111")
		}else {
			$("#rightBar").animate({right:-264},0);
			console.log("aaa");
		}
	});*/

});
