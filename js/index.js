var MainController = {
    init: function () {
        // $(".right .container").slimScroll({
            // height: 'auto'
        // });
        // 隐藏/显示左侧菜单
        $("#menu-btn").click(function () {
            var closed = $(".left").css("left") === '-250px';
            // 关闭状态
            if (closed) {
                $(".user").animate({
                    width: '250px'
                }, function() {
                    $("#user-name").show();
                    $("#user-description").show();
                });
                $(".left").animate({
                    left: '0px'
                });
                $(".right").animate({
                    left: '250px'
                });
            } else {
                $("#user-name").hide();
                $("#user-description").hide();
                $(".user").animate({
                    width: '120px'
                });
                $(".left").animate({
                    left: '-250px'
                });
                $(".right").animate({
                    left: '0px'
                });
            }
        });
        // 模块关闭事件
        $(".x_btn").click(function () {
            var $img = $(this);
            var $this_panel = $img.parent().parent().parent();
            $img.parent().parent().html("");
            $this_panel.animate({
                width: '0px'
            });
        });
        // 模块向下展示
        $("a.drop-down").click(function() {
            $(this).hide();
            $(this).parent().prev().find(".panel-background-shadow").hide();
            $(this).parent().parent().animate({
                height: '540px'
            });
            $(this).parent().prev().find(".panel-body-content").animate({
                height: '450px'
            });
        });
    }
}
$(document).ready(function () {
    MainController.init();
    // 菜单特效
    $(function(){
        var verNav = $(".left>.menu>ul");
        var line = verNav.siblings(".sideLine");
        var curY = verNav.children("li.selected").position().top;
        verNav.find("li").mouseenter(function(){
            var thisY = $(this).position().top;
            line.stop(true,true).animate({
                top: thisY
            }, 200);
            return false
        }).end().mouseleave(function(){
            line.stop(true,true).animate({
                top: curY
            }, 400)
        }).trigger("mouseleave");
    });
});