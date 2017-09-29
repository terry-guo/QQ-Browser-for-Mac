$(function(){
//记录当前屏幕的索引
    var index=0
    var timer;

    /*显示和隐藏其它元素*/
    ShoworHide(index)
    /* ======  1 监听屏幕的滚动事件=================================*/
    // event.deltaY=-1表示向下滚动，event.deltaY=1表示向上滚动
    $(window).mousewheel(function(event){
    // 清除定时器
        clearInterval(timer)

    //定时器节流
        timer = setTimeout(function(){
            var del=event.deltaY>0?1:-1;

            index=index-del
            // index边界值判断
            if(index<=0){
                index=0
            }else if(index>=$(".gps li").length-1){
                index=$(".gps li").length-1
            }
            // console.log(index);

            // 滚动时候改变小圆点变色
            $(".gps li").eq(index).addClass("current").siblings("li").removeClass("current")



        //    滚动时候屏幕也滚动
            /*
            对应索引的屏幕显示，其他的隐藏

            * */

            $("section").eq(index).show().siblings("section").hide()

            /*显示和隐藏其它元素*/
            ShoworHide(index)


            //删除落空类current
            setTimeout(function(){
                //移除当前的current，给兄弟标签添加current
                $("section").eq(index).removeClass("current").siblings("section").addClass("current")
            },50)

        },500)

    })


    /* ======== 2 监听小圆点的点击事件===============================*/
    $(".gps li").on("click",function(){
        index = $(this).index()
        // alert(index)

        // 点击的时候改变小圆点变色
        $(".gps li").eq(index).addClass("current").siblings("li").removeClass("current")

        // 点击的时候屏幕也滚动
        /*对应索引的屏幕显示，其他的隐藏 */
        $("section").eq(index).show().siblings("section").hide()

        /*显示和隐藏其它元素*/
        ShoworHide(index)

        //删除落空类current
        setTimeout(function(){
               $("section").eq(index).removeClass("current").siblings("section").addClass("current")
        },50)

    })


    /* ======== 3  第1屏和其他屏幕显示的基本内容不一样 =========================*/
       function ShoworHide(index){
           /*第一屏*/
           if(index == 0){
               $(".left_box").hide()
               $(".scroll").show()
           }else{
               $(".left_box").show()
               $(".scroll").hide()

           }
       }

})