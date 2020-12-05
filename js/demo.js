// 文件就绪事件
$(document).ready(function() {
	/*console.log(123);*/
	/*$(".top_right>ul>li").mouseenter(function() {
		// this代表的是当前的对象，使用this时应用find()方法找到子元素
		$(this).find("ul").show();
	});
	$(".top_right>ul>li").mouseleave(function() {
		// this代表的是当前的对象，使用this时应用find()方法找到子元素
		$(this).find("ul").hide();
	});*/
	$(".top_left>ul>li").hover(function() {
		// this代表的是当前的对象，使用this时应用find()方法找到子元素
		$(this).find("ul").show();
	},function() {
		// this代表的是当前的对象，使用this时应用find()方法找到子元素
		$(this).find("ul").hide();
	});
	$(".top_right>ul>li").hover(function() {
		// this代表的是当前的对象，使用this时应用find()方法找到子元素
		$(this).find("ul").show();
	},function() {
		// this代表的是当前的对象，使用this时应用find()方法找到子元素
	 	$(this).find("ul").hide();
	});
	// 选项卡
	
	$(".center_contain_right_bottom>ul>li").mouseover(function() {
        // $(this).index()
		// console.log($(this).index());
		$(".tab>div").hide().eq($(this).index()).show();
	});
});