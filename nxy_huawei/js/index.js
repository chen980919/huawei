/**
 * Created by 25119 on 2017/11/13.
 */
//顶部广告
    $(function(){
        $(".box_t>.btm").click(function(){
            //alert("1");
            $(this).parent().hide();
            //return false;
        })

//搜索
        $(".w>.nav>.search>input").click(function(){
            $(this).prev().children("a").hide();
        })
//更多精彩

        $(".top>.pic_bott>.left>.lb>li").eq(12).mouseenter(function(){
            $(this).children().eq(0).text("更多精彩▲");
            $(this).children().show();
        })
        $(".top>.pic_bott>.left>.lb>li").eq(12).mouseleave(function(){
            $(this).children().eq(1).hide();
            $(this).children().eq(0).text("更多精彩▼");
        })
    })
//轮播图
$(function(){
    var count = 0;
    var timer = null;
    function autoPlay(){
        count++;
        if(count>=$(".box>li").length){
            count = 0;
        }
        $(".box>li").eq(count).addClass("show").siblings().removeClass("show");
        $(".banner>ul>li").eq(count).fadeIn(1000).siblings().fadeOut(1000);
    }
    timer = setInterval(autoPlay,2000);

    console.log($(".banner"));
    $(".banner").mouseenter(function(){
        clearInterval(timer);
        timer = null;
    })
    $(".banner").mouseleave(function(){
        timer = setInterval(autoPlay,2000);
    });


    $(".banner>.box>li").mouseover(function(){
        count = $(this).index();
        $(".banner>.box>li").eq(count).addClass("show").siblings().removeClass("show");
        $(".banner>ul>li").eq(count).fadeIn(1000).siblings().fadeOut(1000);
    })
})
//手机 笔记本 平板 家居 配件
$(function(){
    $(".nav>.nav_c>.c>li").mouseover(function() {
        count = $(this).index();
        $(this).css("border-bottom","2px solid #990000");
        $(".dy>div").eq(count).removeClass("hide").stop().slideDown();

        $(".nav>.nav_c>.c>li").mouseout(function () {
            $(this).css("border-bottom","0");
            count = $(this).index();
            $(".dy>div").eq(count).addClass("hide").stop().slideUp()
        })

    })
})
//变色
    $(function(){
    $(".nav_p_btm>li>span").mouseover(function(){
        $(this).css("backgroundColor","rgba(142,23,24,0.9)");
    })
    $(".nav_p_btm>li>span").mouseout(function(){
        $(this).css("backgroundColor","");
    })


    $(".box_pic_r_b>li>span").mouseover(function(){
        $(this).css("backgroundColor","rgba(142,23,24,0.9)");
    })
    $(".box_pic_r_b>li>span").mouseout(function(){
        $(this).css("backgroundColor","");
    })

    //$(".nav_picture>.nav_p_top>li").mouseover(function(){
    //    $(this).children().eq(0).animate({
    //     "width":500,
    //     "height":500
    //     },2000,"backIn")
    //})

    $(".nav_picture>.nav_p_top>li").mouseenter(function(){
        $(this).children("span").addClass("show").animate({height:2},100,function(){
        $(this).animate({width:299},1000)
            return false;
        })

    $(".nav_picture>.nav_p_top>li").mouseleave(function(){
        console.log(123);
        $(this).children("span").animate({width:0},1000,function(){
                $(this).animate({height:0},100,function(){
                    $(this).removeClass("show")
                })

            })
            return false;
        })
    })


})