/**
 * Created by Administrator on 2017/7/26.
 */
$(".sear_ri_top ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
})
//
var winHeight = window.innerHeight;
var wrpHeight = winHeight - 78 - 30;
$(".wrapper").css({"minHeight": wrpHeight});