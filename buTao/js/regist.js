$(function(){
	
	/*$("#login-email").on("keyup focus blur",function(e) {
		var e = e || window.event;
		checkEmail(e);
	});
	$("#login-username").on("keyup focus blur", function(e) {
		var e = e || window.event;
		checkUsername(e);
	});
	$("#login-password").on("keyup focus blur", function(e) {
		var e = e || window.event;
		checkPassword(e);
	});
	$("#login-password2").on("keyup focus blur", function(e) {
		var e = e || window.event;
		checkPassword2(e);
	});*/
	
/*邮箱验证*/
	/*function checkEmail(_e){
		var type;
		if(_e) {
			type = _e.type;
		};
		$("#login-email").on("blur focus keyup",function(){
			var reg_email =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
			if ($(this).val() === "") {
				$("#login-email-msg").html("请输入邮箱");
				$(".tip_icon_email").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
				return false;
			} else {
				if (!reg_email.test($(this).val())) {
					$("#login-email-msg").html("您输入的邮箱有误");
					$(".tip_icon_email").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
					return false;
				} else {
					$(".tip_icon_email").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -182px"});
					$("#login-email-msg").html("");
					return true;
				};
			};
		});
	};*/
/*邮箱下拉列表补全*/
	//声明所有的电子邮件变量
	var mail=new Array("sina.com.cn","126.com","163.com","gmail.com","qq.com","vip.qq.com","hotmail.com","sohu.com","139.com","vip.sina.com","cuiqingcai.com");
	//生成一个个li，并加入到ul中
	for(var i=0;i<mail.length;i++){
		var liElement=$("<li class=\"autoli\"><span class=\"ex\"></span><span class=\"at\">@</span><span class=\"tail\">"+mail[i]+"</span></li>");
		liElement.appendTo("ul.email_list");
	}
	//首先让list隐藏起来
	$("ul.email_list").hide();
	$("#login-email").keyup(function(event){
		//键入的内容不是上下箭头和回车
		if(event.keyCode!=38&&event.keyCode!=40&&event.keyCode!=13){
			//如果输入的值不是空或者不以空格开头
			if($.trim($(this).val())!=""&& $.trim($(this).val()).match(/^@/)==null){
				$("ul.email_list").show();
				//如果当前有已经高亮的下拉选项卡，那么将其移除
				if($("ul.email_list li:visible").hasClass("lilight")){
					$("ul.email_list li").removeClass("lilight");
				}
				//如果还存在下拉选项卡，那么将其高亮
				if($("ul.email_list li:visible")){
					$("ul.email_list li:visible:eq(0)").addClass("lilight");
				}
			}else{
			//否则不进行显示
				$("ul.email_list").hide();
				$("ul.email_list li").removeClass("lilight");
			}
			//输入的内容还没有包括@符号
			if($.trim($(this).val()).match(/.*@/)==null){
				$(".email_list li .ex").text($(this).val());
			}else{
			//输入的符号已经包含了@
				var str = $(this).val();
				var strs = str.split("@");
				$(".email_list li .ex").text(strs[0]);
				if($(this).val().length>=strs[0].length+1){
					tail=str.substr(strs[0].length+1);
					$(".email_list li .tail").each(function(){
						//如果数组中的元素是以文本中的后缀开头，那么就显示，否则不显示
						if(!($(this).text().match(tail)!=null&&$(this).text().indexOf(tail)==0)){
							//隐藏其他的li
							$(this).parent().hide();
						}else{
							//显示所在的li
							$(this).parent().show();
						}
					});
				}
			}
		}
		//按了回车时，将当前选中的元素写入到文本框中
		if(event.keyCode==13){
			$("#login-email").val($("ul.list li.lilight:visible").text());
			$("ul.list").hide();
		}
	});
	//监听上下方向键
	$("#login-email").keydown(function(event){
		//下方向键按下了
		if(event.keyCode==40){
			if($("ul.email_list li").is(".lilight")){
				if($("ul.email_list li.lilight").nextAll().is("li:visible")){
					$("ul.email_list li.lilight").removeClass("lilight").next("li").addClass("lilight");
				}
			}
		}
		//下方向键按下了
		if(event.keyCode==38){
			if($("ul.email_list li").is(".lilight")){
				if($("ul.email_list li.lilight").prevAll().is("li:visible")){
					$("ul.email_list li.lilight").removeClass("lilight").prev("li").addClass("lilight");
				}
			}
		}
	});
	//当鼠标点击某个下拉项时，选中该项，下拉列表隐藏
	$("ul.email_list li").click(function(){
		$("#login-email").val($(this).text());
		$("ul.email_list").hide();
	});
	
	//当鼠标划过某个下拉项时，选中该项，下拉列表隐藏
	$("ul.email_list li").hover(function(){
		$("ul.email_list li").removeClass("lilight");
		$(this).addClass("lilight");
	});
	//当鼠标点击其他位置，下拉列表隐藏
	$(document).click(function(){
		$("ul.email_list").hide();
	});			
	
/*手机号码验证*/
	/*function checkUsername(_e){
		var type;
		if(_e) {
			type = _e.type;
		};
		$("#login-username").on("blur focus keyup",function(){
			var reg_username =  /^1[3|4|5|7|8]\d{9}$/;
			if ($(this).val() === "") {
				$("#login-username-msg").html("请输入手机号");
				$(".tip_icon_user").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
				return false;
			} else {
				if (!reg_username.test($(this).val())) {
					$("#login-username-msg").html("您输入的手机号有误");
					$(".tip_icon_user").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
					return false;
				} else {
					$("#login-username-msg").html("");
					$(".tip_icon_user").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -182px"});
					return true;
				};
			};
		});
	}*/
	
/*密码验证*/
	/*function checkPassword(_e){
		var type;
		if(_e) {
			type = _e.type;
		};
		$("#login-password").on("blur focus keyup",function(){
			var reg_pwd =  /^[0-9A-Za-z]{6,20}$/;
			if ($(this).val() === "") {
				$(".tip_icon_pwd1").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
				$(".tip_txt1").html("请输入密码");
				return false;
			} else {
				if (!reg_pwd.test($(this).val())) {
					$(".tip_icon_pwd1").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
					$(".tip_txt1").html("您输入的密码有误");
					return false;
				} else {
					$(".tip_icon_pwd1").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -182px"});
					$(".tip_txt1").html("");
					return true;
				};
			};
		});
	};*/
/*再次验证*/
	/*function checkPassword2(_e){
		var type;
		if(_e) {
			type = _e.type;
		};
		$("#login-password2").on("blur focus keyup",function(){
			if ($(this).val() === "") {
				$(".tip_icon_pwd2").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
				$(".tip_txt2").html("请再次输入密码");
				return false;
			} else {
				if ($(this).val() !=  $("#login-password").val()) {
					$(".tip_icon_pwd2").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
					$(".tip_txt2").html("两次密码输入不一致");
					return false;
				} else {
					$(".tip_icon_pwd2").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -182px"});
					$(".tip_txt2").html("");
					return true;
				};
			};
		});
	};*/
/*勾选用户协议*/
	/*$("#submit_btn").click(function(){
		var userName = $("#login-username").val(),
			passWord = $("#login-password").val();
		$.cookie("rememberme", "true", {expires: 7}); // 存储一个带7天期限的 cookie
        $.cookie("user", userName, {expires: 7}); 
        $.cookie("psw", passWord, {expires: 7}); 

		if ($("#remember").prop("checked",true)) {
			if (checkEmail() && checkUsername() && checkPassword() && checkPassword2()) {
				$("#agree").html("");
				console.log(2);
				var User = {};
				User.name = $("#login-username").val();
				User.pwd = $("#login-password").val();
				$.cookie("User", JSON.stringify(User), {path:'/'})
				$("#success").html("注册成功!");
				location.href = "index.html";
			} else{
				return false;
			};
		} else {
			$("#agree").html("请勾选用户协议");
			return false;
		};
	});*/

});



var reg = {
		reg_email : /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
		reg_username : /^1[3|4|5|7|8]\d{9}$/,
		reg_pwd : /^[0-9A-Za-z]{6,20}$/
	}
$(function(){
	$("#login-email").on("keyup focus blur",function(e) {
		var e = e || window.event;
		checkEmail(e);
	});
	$("#login-username").on("keyup focus blur", function(e) {
		var e = e || window.event;
		checkUsername(e);
	});
	$("#login-password").on("keyup focus blur", function(e) {
		var e = e || window.event;
		checkPassword(e);
	});
	$("#login-password2").on("keyup focus blur", function(e) {
		var e = e || window.event;
		checkPassword2(e);
	});
/*邮箱验证*/
	function checkEmail(_e){
		var type;
		if(_e) {
			type = _e.type;
		}
		var emailVal = $("#login-email").val();
		if(type=="focus"){
			if(emailVal == ""){
				$("#login-email-msg").html("请输入邮箱");
				return false;
			}
		}
		if(type=="blur"){
			if(emailVal == ""){
				$("#login-email-msg").html("请输入邮箱");
				$(".tip_icon_email").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
				return false;
			}
		}
		if(emailVal == ""){
			$("#login-email-msg").html("邮箱不能为空");
			$(".tip_icon_email").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
			return false;
		}else if(reg.reg_email.test(emailVal)){
			$("#login-email-msg").html("");
			$(".tip_icon_email").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -182px"});
			return true;
		}else{
			$("#login-email-msg").html("邮箱不能为空");
			$(".tip_icon_email").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
			return false;
		}		
	};
/*手机号验证*/
	function checkUsername(_e){
		var type;
		if(_e) {
			type = _e.type;
		}
		var userVal = $("#login-username").val();
		if(type=="focus"){
			if(userVal == ""){
				$("#login-username-msg").html("请输入手机号");
				return false;
			}
		}
		if(type=="blur"){
			if(userVal == ""){
				$("#login-username-msg").html("请输入手机号");
				$(".tip_icon_user").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
				return false;
			}
		}
		if(userVal == ""){
			$("#login-username-msg").html("手机号不能为空");
			$(".tip_icon_user").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
			return false;
		}else if(reg.reg_username.test(userVal)){
			$("#login-username-msg").html("");
			$(".tip_icon_user").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -182px"});
			return true;
		}else{
			$("#login-username-msg").html("邮箱不能为空");
			$(".tip_icon_user").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
			return false;
		}		
	};
/*密码验证*/
	function checkPassword(_e){
		var type;
		if(_e) {
			type = _e.type;
		}
		var pwdVal1 = $("#login-password").val();
		if(type=="focus"){
			if(pwdVal1 == ""){
				$(".tip_txt1").html("请输入密码");
				return false;
			}
		}
		if(type=="blur"){
			if(pwdVal1 == ""){
				$(".tip_txt1").html("请输入密码");
				$(".tip_icon_pwd1").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
				return false;
			}
		}
		if(pwdVal1 == ""){
			$(".tip_txt1").html("密码不能为空");
			$(".tip_icon_pwd1").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
			return false;
		}else if(reg.reg_pwd.test(pwdVal1)){
			$(".tip_txt1").html("");
			$(".tip_icon_pwd1").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -182px"});
			return true;
		}else{
			$(".tip_txt1").html("密码格式为6-20个字母或数字");
			$(".tip_icon_pwd1").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
			return false;
		}		
	};
/*再次验证*/
	function checkPassword2(_e){
		var type;
		if(_e) {
			type = _e.type;
		}
		var pwdVal2 = $("#login-password2").val();
		if(type=="focus"){
			if(pwdVal2 == ""){
				$(".tip_txt2").html("请再次输入密码");
				return false;
			}
		}
		if(type=="blur"){
			if(pwdVal2 == ""){
				$(".tip_txt2").html("请再次输入密码");
				$(".tip_icon_pwd2").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
				return false;
			}
		}
		if(pwdVal2 == ""){
			$(".tip_txt2").html("密码不能为空");
			$(".tip_icon_pwd2").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
			return false;
		}else if(reg.reg_pwd.test(pwdVal2)){
			$(".tip_txt2").html("");
			$(".tip_icon_pwd2").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -182px"});
			return true;
		}else{
			$(".tip_txt2").html("两次密码输入不一致");
			$(".tip_icon_pwd2").css({"background":"url(../img/regist/R_W.png) no-repeat 0 -222px"});
			return false;
		}		
	};
/*勾选用户协议*/
	$("#submit_btn").click(function(){
		/*var userName = $("#login-username").val(),
			passWord = $("#login-password").val();
		$.cookie("rememberme", "true", {expires: 7}); // 存储一个带7天期限的 cookie
        $.cookie("user", userName, {expires: 7}); 
        $.cookie("psw", passWord, {expires: 7}); */

		if ($("#remember").prop("checked") == true) {
			if (checkEmail() && checkUsername() && checkPassword() && checkPassword2()) {
				$("#agree").html("");
				var User = {};
				User.name = $("#login-username").val();
				User.pwd = $("#login-password").val();
				$.cookie("User", JSON.stringify(User),{expires: 7}, {path:'/'});
			} else{
				return false;
			};
		} else {
			$("#agree").html("请勾选用户协议");
			return false;
		};
		location.href = "index.html";
	});
});
