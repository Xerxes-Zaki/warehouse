$(function(){
	
/*邮箱/用户名验证*/
	/*$("#login-email").on("blur focus keyup",function(){
		var reg_email =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
			reg_username = /^1[3|4|5|7|8]\d{9}$/;
		if (!reg_email.test($(this).val()) && !reg_username.test($(this).val())) {
			$("#login-email-msg").html("您输入的邮箱/用户名有误");
			$(".tip_icon_email").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
			return false;
		};
		if ($(this).val() === "") {
			$("#login-email-msg").html("请输入邮箱/用户名");
			$(".tip_icon_email").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
			return false;
		};
		if (reg_email.test($(this).val()) || reg_username.test($(this).val())) {
			$(".tip_icon_email").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -182px"});
			$("#login-email-msg").html("");
			return true;
		};
	});*/
/*密码验证*/
	/*$("#login-password").on("blur focus keyup",function(){
		var reg_pwd =  /^[0-9A-Za-z]{6,20}$/;
		if (!reg_pwd.test($(this).val())) {
			$(".tip_icon_pwd").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
			$(".tip_txt1").html("您输入的密码有误");
			return false;
		};
		if ($(this).val() === "") {
			$(".tip_icon_pwd").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
			$(".tip_txt1").html("请输入密码");
			return false;
		};
		if (reg_pwd.test($(this).val())) {
			$(".tip_icon_pwd").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -182px"});
			$(".tip_txt1").html("");
			return true;
		};
	});*/
	
	$("*").on("selectstart",function(e){
		return false;
	});
//	$.cookie.json = true;
//	var User = $.cookie("User");
	var User = $.cookie("User")? JSON.parse($.cookie("User")) : "";
		
	if (User.nane != $("#login-email").val()) {
		$("#login_btn").click(function(e){
			$("#error").show().html("账户名未注册!");
			return false;
		})
	} else {
		location.href = "index.html";
	};
	console.log($("#login-email").val());
	$("#login_btn").click(function(){
		if (!$("#login-email").val()) {
			$("#error").show().html("请输入用户名!");
			return false;
		};
		if (!$("#login-password").val()) {
			$("#error").show().html("请输入密码!");
			return false;
		};
		for (var i = 0; i < User.length; i++) {
			if ($("#login-email").val() == User[i].name && $("#login-pasword").val() == User[i].pwd) {
				location.href = "index.html";
			} else{
				$("#error").show().html("账户名与密码不匹配，请重新输入");
			}
		}
	})
});
