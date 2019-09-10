require.config({
	baseUrl: "js/",
	paths:{
		"jquery":"jquery/jquery-1.11.1",
		"mui":"mui/mui.min",
		"router":"router/router",
		"cache":"cache/cache"
	}
});

require(["index","common","router","index","login","home","workList","nsgl","mine","xtgl","about","details","resetpassword"], function(index,common,router,index,login,home,workList,nsgl,mine,test,xtgl,about,details,resetpassword){
	var router_mappings = [
		{
			path:"/", resource:"views/login.html", componet:login
		},
		{
			path:"/login", resource:"views/login.html", componet:login
		},
		{
			path:"/home", resource:"views/home.html", componet:home
		},
		{
			path:"/workList", resource:"views/workList.html", componet:workList	
		}
		,
		{
			path:"/nsgl", resource:"views/nsgl.html", componet:nsgl	
		},
		{
			path:"/mine", resource:"views/test.html", componet:mine	
		},
		{
			path:"/xtgl", resource:"views/xtgl.html", componet:xtgl	
		},
		{
			path:"/about", resource:"views/about.html", componet:about	
		},
		{
			path:"/details", resource:"views/details.html", componet:details	
		},
		{
			path:"/resetpassword", resource:"views/resetpassword.html", componet:resetpassword	
		}
	];

	router.render("workcontent");
	router.mapper(router_mappings);
	router.init();
	//�Ƿ��¼��
	if(!common.isLogin()){
		router.go("/login");
		return false;
	}else{
		console.log("Ϊɶ");
		//router.go("/home");
	}
});