define(["jquery","cache","common","mui"],function($,Cache,common,mui){
	var workList = {
		bindClick:function(){
			$(".mui-scroll ul li").click(function(){
				console.log("点击进入该地块种植信息");
			})
		}
	};
	
	return {
		init:function(){
			console.log("初始化列表");
			mui('.mui-scroll-wrapper').scroll();//触发滚动
			mui(".mui-slider").slider();//这句话必要
			$("footer").hide();
			var offsetHeight= document.body.offsetHeight;
			var height=offsetHeight-52;
			$("#content").height(height);
			workList.bindClick();
		}
	}
});