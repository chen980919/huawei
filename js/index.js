$(function() {
	//顶部广告关闭
	$("#close").click(function() {
		$(this).parent().parent().slideUp();
	})
	//底部广告关闭
	$("#closed").click(function() {
		$(this).parent().parent().slideUp().remove();
		$(".copy").animate({
			paddingBottom: 0
		})
	})
	//底部广告显示/隐藏
	$(document).scroll(function() {
		if($(document).scrollTop() >= 1900) {
			$("#closed").parent().parent().fadeIn();
			$(".right_nav").stop(false, true).animate({
				right: 0
			}, 200);
		} else {
			$("#closed").parent().parent().fadeOut();
			$(".right_nav").stop().animate({
				right: -100
			}, 200);
		}
	})

	//轮播图动画
	var ol = document.createElement("ol");
	var count = 0;
	var interval;
	for(var i = 0; i < $(".banner_scroll ul>li").length; i++) {
		var li = document.createElement("li");
		$(ol).append(li);
	}
	$(".banner_scroll").append($(ol))
	$(".banner_scroll ol>li").eq(0).addClass("active")
	$(".banner_scroll ul>li").eq(0).show().siblings().hide();
	$(".banner_scroll>ol>li").mouseover(function() {
		$(".banner_scroll ul>li").eq($(this).index()).fadeIn().siblings().fadeOut()
		$(this).addClass("active").siblings().removeClass("active")
	})

	function auto() {
		clearInterval(interval);
		interval = setInterval(function() {
			count++;
			if(count >= $(".banner_scroll ul>li").length) {
				count = 0
			}
			$(".banner_scroll ol>li").eq(count).addClass("active").siblings().removeClass("active");
			$(".banner_scroll ul>li").eq(count).fadeIn().siblings().fadeOut();
		}, 1500)
	}
	auto();
	$(".banner_scroll").on({
		mouseenter: function() {
			clearInterval(interval);
		},
		mouseleave: auto
	})

	//鼠标悬浮动画
	$(".mouseAnimate").on({
		mouseenter: function() {
			$(this).stop().animate({
				top: -3,
			}, 150, "linear").addClass("mouseShadow")
		},
		mouseleave: function() {
			$(this).stop().animate({
				top: 0,
			}, 150, "linear").removeClass("mouseShadow")
		}
	})

	//文字广告垂直轮播,无缝
	$(".r_top_fr>ul").append($(".r_top_fr>ul>li").eq($(".r_top_fr>ul").length - 1).clone())
	var intervalTxt, countTxt = 0;

	function autoTxt() {
		clearInterval(intervalTxt);
		intervalTxt = setInterval(function() {
			if(countTxt >= 4) {
				countTxt = 0;
				$(".r_top_fr>ul").css("top", 0)
			}
			countTxt++;
			$(".r_top_fr>ul").animate({
				top: -countTxt * 36
			})
			console.log(countTxt);
		}, 2000)
	}
	autoTxt()
	$(".r_top_fr>ul>li").mouseover(function() {
		clearInterval(intervalTxt);
	});
	$(".r_top_fr>ul>li").mouseout(autoTxt)

	//精品推荐点击事件
	$(".hd .ra").click(function() {
		$(this).next().animate({
			left: -1200
		});
	})
	$(".hd .la").click(function() {
		$(this).next().next().animate({
			left: 0
		});
	})
	//右边楼梯导航
	var scArr = [1900, 2700, 3150, 3850, 5000]
	//点击跳楼
	$(".right_nav_h").click(function() {
		myScrollTo(scArr[$(this).index() / 2]);
		$(this).find("span").css("color", "red").parent().parent().siblings().find("span").css("color", "#999")
	});
	//
	$(".right_nav_h").mouseover(function() {
		$(this).find("span").stop().animate({
			left: -4
		}, 150, "linear").css("color", "red");
	});
	//
	$(".right_nav_h").mouseout(function() {
		$(this).find("span").stop().animate({
			left: 0
		}, 150, "linear").css("color", "#999");
	})
	
	//右下角底部点击事件
	$(".go_top>a").click(function(){
		myScrollTo(0);
		return false;
	})
	
	$(".help").mouseenter(function(){
		$(".help a").eq(1).show().animate({left:0},100);
		$(".help a").eq(2).show().animate({left:0},100);
	})
	$(".help").mouseleave(function(){
		$(".help a").eq(1).hide().animate({left:6},100);;
		$(".help a").eq(2).hide().animate({left:6},100);;
	})
	
	//页面卷曲事件
	$(document).scroll(function() {
		if($(this).scrollTop() >= 5000) {
			$(".right_nav_line").stop(true, false).eq(4).animate({
				left: 0
			}, 200, "linear").siblings().stop(true, false).animate({
				left: 100
			}, 200, "linear");
			$(".right_nav_h").eq(4).find("span").css("color", "red").parent().parent().siblings().find("span").css("color", "#999");
		} else if($(this).scrollTop() >= 3850) {
			$(".right_nav_line").stop(true, false).eq(3).animate({
				left: 0
			}, 200, "linear").siblings().stop(true, false).animate({
				left: 100
			}, 200, "linear");
			$(".right_nav_h").eq(3).find("span").css("color", "red").parent().parent().siblings().find("span").css("color", "#999");

		} else if($(this).scrollTop() >= 3150) {
			$(".right_nav_line").stop(true, false).eq(2).animate({
				left: 0
			}, 200, "linear").siblings().stop(true, false).animate({
				left: 100
			}, 200, "linear");
			$(".right_nav_h").eq(2).find("span").css("color", "red").parent().parent().siblings().find("span").css("color", "#999");

		} else if($(this).scrollTop() >= 2700) {
			$(".right_nav_line").stop(true, false).eq(1).animate({
				left: 0
			}, 200, "linear").siblings().stop(true, false).animate({
				left: 100
			}, 200, "linear");
			$(".right_nav_h").eq(1).find("span").css("color", "red").parent().parent().siblings().find("span").css("color", "#999");

		} else if($(this).scrollTop() >= 1900) {
			$(".right_nav_line").stop(true, false).eq(0).animate({
				left: 0
			}, 200, "linear").siblings().stop(true, false).animate({
				left: 100
			}, 200, "linear");
			$(".right_nav_h").eq(0).find("span").css("color", "red").parent().parent().siblings().find("span").css("color", "#999");
			$(".go_top").fadeIn();
		}else{
			$(".go_top").fadeOut();
		}
	})

	//自定义animate
	function myanimate(element, obj, fn) {
		clearInterval(element.interval);
		element.interval = setInterval(function() {
			var flag = true;
			for(var k in obj) {
				if(k === "opacity") {

					var styleName = k;
					var target = obj[k] * 100;
					var current = getStyle(element, styleName) * 100;
					var step = (target - current) / 10;
					step = step > 0 ? Math.ceil(step) : Math.floor(step);
					current += step;
					element.style[styleName] = current / 100;
					/*if(current === target) {
						clearInterval(element.interval);
					}*/
					if(current != target) {
						flag = false;
					}
				} else if(k === "zIndex") {
					element.style.zindex = obj[k];
				} else {
					var current = parseInt(getStyle(element, k)) || 0;
					var target = obj[k];
					var step = (target - current) / 10;
					step = step > 0 ? Math.ceil(step) : Math.floor(step);
					current += step;
					element.style[k] = current + "px";
					if(current != target) {
						flag = false;
					}
				}
			}
			if(flag) {
				clearInterval(element.interval);
				fn && fn();
				//console.log("执行完了");
			}
			//console.log("正在执行")
		}, 20)
	}

	//跳楼动画
	function myScrollTo(target, ul) {
		clearInterval(interval);
		interval = setInterval(function() {
			var current = myScroll().scrollTop;
			var step = (target - current) / 10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step)
			current += step;
			window.scrollTo(0, current);
			if(current == target) {
				clearInterval(interval);
			}
			console.log(111);
		}, 20)
	}

	function myScroll() {
		return {
			scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
			scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		}
	}

	function getStyle(element, styleName) {
		if(element.currentStyle) {
			return element.currentStyle[styleName];
		} else {
			return getComputedStyle(element)[styleName];
		}
	}
})