$(function(){
	
/*框*/
	/*商品数据加载*/
	$.when($.ajax("../html/common/list.html"),$.ajax("../data/goodList/list.json")).done(function(indexHtml,data){//模板数据
		indexHtml = indexHtml[0];
		data = data[0];//商品信息数据
		var index = 0;
		for (var i in data) {
			var html = "";
			html += indexHtml.replace("{id}",data[i].id)
					.replace("{m_price}",data[i].m_price)
					.replace("{m_pay}",data[i].m_pay)
					.replace("{m_discount}",data[i].m_discount)
					.replace("{m_name}",data[i].m_name)
					.replace("{m_img}",data[i].m_img);
			$(".listBox li").eq(index++).append(html);
		};
		$(".listFrame").on("click",function(){
//			var _id = $(this).find("h2").attr("id"),
//				_name = $(this).find("h2").find("a").html(),
//				_price = $(this).find(".goBay").find(".listPrice").find("span").html(),
//				_pay = $(this).find("table").find("tr").find(".listLeft").find("i").html(),
//				_img = $(this).find(".pic").find("img").attr("src");
////				console.log(_img);
//			var goods = $.cookie("carts") ? JSON.parse($.cookie("carts")) : {};
//			if (_id in goods) {
//				goods[_id].num++;
//			} else{
//				goods[_id] = {
//					id : _id,
//					name : _name,
//					price : _price,
//					pay : _pay,
//					img : _img,
//					num : 1
//				}
//			};
//			$.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"});
////			console.log($.cookie("carts"));
			var id = $(this).find("h2").attr("id");
			location.href = "goodDetail.html?id=" + id;
	   	});
	});
	
/*分页*/
	$(".pageDiv").createPage({
        pageCount:9,//总页数
        current:1,//当前页
        turndown:'true',//是否显示跳转框，显示为true，不现实为false,一定记得加上引号...
        backFn:function(p){
            // console.log(p);
        }
  	});
});


