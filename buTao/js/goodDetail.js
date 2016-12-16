$(function(){
	
/*放大镜*/
	var popWidth = $(".pop").width(),
		popHeight = $(".pop").height(),
		bigWidth = $(".bannerBig").width(),
		bigHeight = $(".bannerBig").height(),
		mediumWidth = $(".bannerMedium").width(),
		mediumHeight = $(".bannerMedium").height(),
		rateX = bigWidth / popWidth,
		rateY = bigHeight / popHeight;
	$(".bannerBig img").css({
		width:rateX * mediumWidth,
		height:rateY * mediumHeight
	});
	$(".bannerMedium").hover(function(){ // 鼠标移入中图，显示镜头与大图
		$(".pop,.bannerBig").show();
	}, function(){ // 鼠标移出中图，隐藏镜头与大图
		$(".pop,.bannerBig").hide();
	}).on("mousemove", function(e){ // 鼠标在中图上移动，镜头随之移动
		// 获取鼠标在文档中的坐标
		var x = e.pageX,
			y = e.pageY;
		// 根据鼠标在文档中的坐标，设置镜头在文档中坐标
		$(".pop").offset({
			top:y - popHeight / 2,
			left:x - popWidth / 2
		});
		// 获取镜头相对其父元素的坐标
		var cor = $(".pop").position(),
			_top = cor.top,
			_left = cor.left;
		// 判断坐标范围
		if (_top < 0)
			_top = 0;
		else if (_top > mediumHeight - popHeight)
			_top = mediumHeight - popHeight; 
		if (_left < 0)
			_left = 0;
		else if (_left > mediumWidth - popWidth)
			_left = mediumWidth - popWidth;
		// 重新设置镜头相对父元素的坐标
		$(".pop").css({
			top:_top,
			left:_left
		});
		// 移动放大镜中的图片
		$(".bannerBig img").css({
			top:-1 * rateY * _top,
			left:-1 * rateX * _left
		});
	});
	$(".bannerSmall img").hover(function(){
		var index = $(this).index();
		// console.log(index);
		// 	mSrcImg = "images/medium_03" + index + ".jpg",
		// 	bSrcImg = "images/big_800" + index + ".jpg";
		$(".bannerMedium img").eq(index).show().siblings("img").hide();
		// console.log($(".banner_medium img").eq(index));
		$(".bannerBig img").eq(index).show().siblings("img").hide();
	});
	
/*选项卡*/
	$("#tab_T").find("li").bind("click",function(){
		$("li.current").removeClass("current");
		$(this).addClass("current");
		$("box_current").hide();
		var $rel = $(this).attr("rel");
		$("#tab_T" + $rel).show();
		return false;
	});
	$(".d1").on("click",function(){
		$("#tab_T1").show();
		$("#tab_T2,#tab_T3,#tab_T4").hide();
	});
	$(".d2").on("click",function(){
		$("#tab_T2").show();
		$("#tab_T1,#tab_T3,#tab_T4").hide();
	});
	$(".d3").on("click",function(){
		$("#tab_T3").show();
		$("#tab_T2,#tab_T1,#tab_T4").hide();
	});
	$(".d4").on("click",function(){
		$("#tab_T4").show();
		$("#tab_T2,#tab_T3,#tab_T1").hide();
	});


});

$(function(){
	var data = window.location.search;
	id = data.split("=")[1];
//	oData = data.replace(/&/gi,",");
//	oData = oData.replace(/=/gi,":");
//	oData = "{"+oData+"}"
//	oData = JSON.parse(oData)
//	console.log(id);
	$.ajax({
		type:"get",
		url:"../data/goodList/list.json",
		async:false,
		success: function(data) {
			var result = data;
//			console.log(result);
			for(var i = 0; i < result.length; i++){
//				var src = good.id;
//				console.log(src)
				var good = result[i];
//				console.log(good);
				var src = "";
//				console.log(good["goodId"])
				if(good["id"] == id){
//					console.log(good);
					var src = good["m_img"];
//					console.log(src);
					$(".bannerBig").find("img").eq(0).attr({"src":src});
					$(".bannerMedium").find("img").eq(0).attr({"src":src});
					$(".bannerSmall").find("img").eq(0).attr({"src":src});
					var name = good["m_name"];
//					console.log(name);
					$(".detailOption").find("h1").text(name);
//					$(".goodsBig img").attr({"src": src, "rel": src}).next().find("img").attr({"src": src});
					var price = good["m_price"];
					$(".sys_item_price").text(price)
					return false;
				}
			}
		}
	});
	
	$("#addCart").on("click", function() {
		var cart = $.cookie("cart")? JSON.parse($.cookie("cart")): {};
		
		var text = $(this).parents(".detailOption").find("h1").text();
		var nowPrice = $(".sys_item_price").text();
		var imgSrc = $(".bannerBig").find("img").eq(0).attr("src");
		
		if(id in cart) {
			cart[id].num++;
//			alert("已加入购物车")
		} else {
			var num = 0;
			num++;
			cart[id] = {
				id: id,
				data: text,
				price: nowPrice,
				img: imgSrc,
				numb: num
			};
//			alert("已加入购物车")
		}
		$.cookie("cart", JSON.stringify(cart), {expires:7,path:'/'});
		console.log(JSON.parse($.cookie("cart")))
	})
	
});
