$(function(){
	$("#phone").blur(function(){
		var reg=/^1\d{10}$/;
		var phone=$("#phone").val();
		var count=0;
		for(var index in localStorage){
			if(index==phone){
				count++;
			}
		}
		if(phone==""){
			$(".phone_r").text("手机号码不能为空！");
			$(".phone_r").css("color","red");
			$("#phone").css("border","2px solid #e2454e");
			$(".Phone").css("border","2px solid #e2454e");
		}else if(!reg.test(phone)){
			$(".phone_r").text("请输入有效电话号码！");
			$(".phone_r").css("color","red");
			$("#phone").css("border","2px solid #e2454e");
			$(".Phone").css("border","2px solid #e2454e");
		}else if(count==1){
			$(".phone_r").text("该号码已注册！");
			$(".phone_r").css("color","red");
			$("#phone").css("border","2px solid #e2454e");
			$(".Phone").css("border","2px solid #e2454e");
		}else{
			$(".phone_r").text("OK！");
			$(".phone_r").css("color","green");
			$("#phone").css("border","2px solid green");
			$(".Phone").css("border","2px solid green");
			// $("#phone").attr("result","true");
		}
	});
	$("#code").blur(function(){
		var code=$("#code").val();
		if(code==""){
			$(".code_r").text("验证码不能为空！");
			$(".code_r").css("color","red");
			$("#code").css("border","2px solid #e2454e");
			$(".Code").css("border","2px solid #e2454e");
		}else if(code!=$("#displayer").text()){
			$(".code_r").text("验证码错误！");
			$(".code_r").css("color","red");
			$("#code").css("border","2px solid #e2454e");
			$(".Code").css("border","2px solid #e2454e");
		}else{
			$(".code_r").text("OK！");
			$(".code_r").css("color","green");
			$("#code").css("border","2px solid green");
			$(".Code").css("border","2px solid green");
			// $("#code").attr("result","true");
		}
	});
	$("#password").blur(function(){
		var password=$("#password").val();
		var reg=/^[\da-z]{6,18}$/;
		if(password==""){
			$(".password_r").text("密码不能为空！");
			$(".password_r").css("color","red");
			$("#password").css("border","2px solid #e2454e");
			$(".Password").css("border","2px solid #e2454e");
		}else if(!reg.test(password)){
			$(".password_r").text("密码只能由数字和字母组成，长度为6-18位！");
			$(".password_r").css("color","red");
			$("#password").css("border","2px solid #e2454e");
			$(".Password").css("border","2px solid #e2454e");
		}else{
			$(".password_r").text("OK！");
			$(".password_r").css("color","green");
			$("#password").css("border","2px solid green");
			$(".Password").css("border","2px solid green");
			// $("#password").attr("result","true");
		}
	});
	$("#password2").blur(function(){
		var password2=$("#password2").val();
		var password=$("#password").val();
		if(password2!=password){
			$(".password2_r").text("两次密码不一致！");
			$(".password2_r").css("color","red");
			$("#password2").css("border","2px solid #e2454e");
			$(".Password2").css("border","2px solid #e2454e");
		}else{
			$(".password2_r").text("OK！");
			$(".password2_r").css("color","green");
			$("#password2").css("border","2px solid green");
			$(".Password2").css("border","2px solid green");
			// $("#password2").attr("result","true");
		}
	});
	var count=60;
	function countDown(){
			$("#btn").val(count+"秒");
			count--;
			if(count<0){
				$("#btn").attr("disabled","false");
				$("#btn").val("获取验证码");
				clearInterval(timer);
			}
	}
	$("#btn").click(function(){
		var codes=[];
		for(var i=48;i<=57;i++){
			codes.push(i);
		}
		for(var i=65;i<=90;i++){
			codes.push(i);
		}
		for(var i=97;i<=122;i++){
			codes.push(i);
		}
		var arr=[];
		for( var i=1;i<=4;i++){
			var index=Math.floor(Math.random()*62);
			arr.push(String.fromCharCode(codes[index]));
		}
		var result=arr.join("");
		$("#displayer").text(result);
		$("#btn").attr("disabled","true");
		var count=60;
		function countDown(){
			$("#btn").val(count+"秒");
			count--;
			if(count<0){
				$("#btn").removeAttr('disabled');
				$("#btn").val("获取验证码");
				clearInterval(timer);
			}
		}
		var timer=setInterval(countDown,1000);
	});
	$(".agree input").click(function(){
		var n=0;
		$(".verification").each(function(){
			if($(this).text()=="OK！"){
				n++;
			}
		});
		if(n==4){
			$("form").submit();
			var data=new Object();
			data.name=$("#phone").val();
			data.password=$("#password").val();
			var str=JSON.stringify(data);
			localStorage.setItem(data.name,str);
		}
	});
});
