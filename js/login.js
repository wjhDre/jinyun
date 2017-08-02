$(function(){
	$("#username").blur(function(){
		var username=$("#username").val();
		var count=0;
		for(var index in localStorage){
			if(index==username){
				count++;
			}
		}
		if(username==""){
			$(".username_r").text("用户名不能为空！");
			$(".username_r").css("color","red");
			$("#username").css("border","2px solid #e2454e");
			$(".Name").css("border","2px solid #e2454e");
		}else if(count==1){
			$(".username_r").text("OK！")
			$(".username_r").css("color","green");
			$("#username").css("border","2px solid green");
			$(".Name").css("border","2px solid green");
		}else{
			$(".username_r").text("用户名不存在！");
			$(".username_r").css("color","red");
			$("#username").css("border","2px solid #e2454e");
			$(".Name").css("border","2px solid #e2454e");
		}
	});
	$("#password").blur(function(){
		var password=$("#password").val();
		var username=$("#username").val();
		var str=localStorage.getItem(username);
		var data=JSON.parse(str);
		if(password==""){
			$(".password_r").text("密码不能为空！");
			$(".password_r").css("color","red");
			$("#password").css("border","2px solid #e2454e");
			$(".Password").css("border","2px solid #e2454e");
		}else if(password!=data.password){
			$(".password_r").text("密码错误！");
			$(".password_r").css("color","red");
			$("#password").css("border","2px solid #e2454e");
			$(".Password").css("border","2px solid #e2454e");
		}else{
			$(".password_r").text("OK！");
			$(".password_r").css("color","green");
			$("#password").css("border","2px solid green");
			$(".Password").css("border","2px solid green");
		}
	});
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
	$("#look").click(function(){
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
		if($("#code").val()!=$("#displayer").text()){
			$(".code_r").text("验证码错误！");
			$(".code_r").css("color","red");
			$("#code").css("border","2px solid #e2454e");
		}
	});
	$("#code").blur(function(){
		var code=$("#code").val();
		if(code==""){
			$(".code_r").text("验证码不能为空！");
			$(".code_r").css("color","red");
			$("#code").css("border","2px solid #e2454e");
		}else if(code!=$("#displayer").text()){
			$(".code_r").text("验证码错误！");
			$(".code_r").css("color","red");
			$("#code").css("border","2px solid #e2454e");
		}else{
			$(".code_r").text("OK！");
			$(".code_r").css("color","green");
			$("#code").css("border","2px solid green");
		}
	});
	$(".login input").click(function(){
		var n=0;
		$(".verification").each(function(){
			if($(this).text()=="OK！"){
				n++;
			}
		});
		if(n==3){
			sessionStorage.setItem("num",1)
			$("form").submit();
		}
	});
});