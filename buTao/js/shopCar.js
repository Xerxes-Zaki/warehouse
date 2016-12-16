$(function() {
	var result = $.cookie("cart")? JSON.parse($.cookie("cart")): {};
//	console.log(JSON.parse($.cookie("cart")));
	
	for(var id in result){
		var goodId = result[id];
		var name = goodId.data;
		var price = goodId.price;
		var imgSrc = goodId.img;
		
//		console.log(goodId)
		$(".shopTable").children().eq(0).append(
			'<tr id="'+id+'">'+
				'<td width=120" class="bdR">'+
					'<input type="checkbox" class="chCart" />'+
					'<a href="goodDetail.html">'+
						'<img src="'+imgSrc+'" style="width:90px;height:57px"/>'+
					'</a>'+
				'</td>'+
				'<td width="500" class="bd_L align_L">'+
					'<span class="mar_R">'+name+'</span>'+
					'<span class="mar_R red">宝蓝@L</span>'+
				'</td>'+
				'<td>'+
					'<div class="select_num clearfix">'+
						'<div class="minus_plus">'+
							'<input type="button" class="reduce btn_ra" value="-" />'+
							'<input type="text" class="input_txt" value="1" />'+
							'<input type="button" class="add btn_ra" value="+" />件'+
						'</div>'+
					'</div>'+
				'</td>'+
				'<td class="price">￥<span>'+price+'</span></td>'+
				'<td>￥0</td>'+
				'<td class="minor">￥<span>'+price+'</span></td>'+
				'<td>'+
					'<a href="##" class="del_min">删除</a>'+
				'</td>'+
			'</tr>'
		
		)
	}
	
	
	
	$(".reduce").click(function() {
		var val = $(this).next().val();
		var total = 0;
		var price = ($(this).parent().parent().parent().next().find("span").text())*100;
		
		if(val == 1){
//		console.log(val)
			return false
		} else {
			val--;
			$(this).next().val(val)
		};
		total = price*val/100
		$(this).parent().parent().parent().parent().find(".minor span").html(total)
	});
	$(".add").click(function(){
		var val = $(this).prev().val();
		var total = 0;
		var price = ($(this).parent().parent().parent().next().find("span").text())*100
		val++;
		$(this).prev().val(val)
//		console.log(val)
		total = price*val/100
		$(this).parent().parent().parent().parent().find(".minor span").html(total)
	});	
	
	$(".del_min").click(function() {
		$(this).parent().parent().remove()
		console.log($(this).parent().parent().attr("id"))
		var id = $(this).parent().parent().attr("id")
		var cart = JSON.parse($.cookie("cart"))
		delete cart[id];
		$.cookie("cart", JSON.stringify(cart), {expires: 10, path: "/"})
	})
	
	
	$(".sh_buy_02").click(function() {
		location.href = "pay.html"
		console.log("dd")
	})
	
	
})
