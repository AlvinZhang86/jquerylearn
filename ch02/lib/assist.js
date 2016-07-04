/**
 * Created by Administrator on 2016/7/2.
 */
$(document).ready(
    function () {
        $("#reset").click(  // reset点击后清空页面的效果
            function () {
                $("*").removeAttr("style");
                $("div[class=none]").css(
                    {"display":"none"}
                );
            }
        );

        $("input[type=button]").click(function () { // 当button被点击的时候  如果isreset是勾选状态，发生一次reset的点击事件
            if($("#isreset").is(":checked")) {
                $("#reset").click();
            }
        });

        function animateIt() {  // 实现span的动态效果
            $("#mover").slideToggle("slow",animateIt);
        }
        animateIt();
    }
);