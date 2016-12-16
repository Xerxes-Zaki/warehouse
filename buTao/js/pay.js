$(function(){

/*省市区三级联*/
	var address = {};
	$.getJSON("../data/pay/address.json",function(data){
		var reg = data.regions;
		for (var i = 0; i < reg.length; i++) {
			var province = reg[i];
			address[province.name] = {};
			var cities = province.regions;
			if (!cities) {
				continue;
			}
			for (var j = 0; j < cities.length; j++) {
				var city = cities[j];
				address[province.name][city.name] = city.regions;
			};
		}
		initProvince();
	})
	function initProvince(){
		var html = "";
		for (var attr in address) {
			html += "<option value='"+attr+"'>"+attr+"</option>";
		}
		$(html).appendTo(":input[name='province']");
		initCity();
	}
	function initCity(){
		var prov = $(":input[name='province']").val(),
			cities = address[prov];
		if ($.isEmptyObject(cities)) {
			$(":input[name='city'],:input[name='district']").empty().hide();
			return;
		};
		var html = "";
		for (var attr in cities) {
			html += "<option value='"+attr+"'>"+attr+"</option>";
		}
		$(":input[name='city']").show().empty().append(html);
		initDistrict();
	}
	function initDistrict(){
		var prov = $(":input[name='province']").val(),
			cit = $(":input[name='city']").val(),
			districts = address[prov][cit];
			html = "";
		for (var i = 0; i < districts.length; i++) {
			html += "<option value='"+districts[i].name+"'>"+districts[i].name+"</option>";
		}
		$(":input[name='district']").show().empty().append(html);
	}
	$(":input[name='province']").on("change",initCity);
	$(":input[name='city']").on("change",initDistrict);

});
