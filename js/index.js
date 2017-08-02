var mySwiper=new Swiper(".swiper-container",{
	direction:"vertical",
	pagination:".swiper-pagination",
	paginationClickable:true,
	mousewheelControl:true,
	onInit:function(swiper){
		swiperAnimateCache(swiper);
		swiperAnimate(swiper);
	},
	onSlideChangeEnd:function(swiper){
		swiperAnimate(swiper);
		$("#topBar").css("animation","slideDown 1s");
	},
	onSlideChangeStart:function(swiper){
		$("#topBar").css("animation","slideUp 1s both");
	}
});
var num=sessionStorage.getItem("num");
if(num==1){
	$(".wrap").html("欢迎您！/<a href='index.html' id='exit'>退出</a>")
	$("#exit").click(function(){
		$(".wrap").html("<a href='login.html'>登录</a>/<a href='register.html'>注册</a>");
		sessionStorage.removeItem("num");
	});
}
