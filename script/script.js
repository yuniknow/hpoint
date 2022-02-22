$(function(){

    // 로고 클릭시 최상단으로
    $(".logo").on("click",function(){
        $("html, body").stop().animate({scrollTop:0},400);
    });

    // 하단 버튼 클릭시 최상단으로
    $(".btn_top").on("click",function(){
        $("html,body").stop().animate({scrollTop:0},400);
    });

    // 하단 버튼이 스크롤 500px 도달시 나타남
    $(window).scroll(function(){
        if ($(this).scrollTop()>500) {
            $(".btn_top").fadeIn();
        }else {
            $(".btn_top").fadeOut();
        }
    });

    // 메뉴 클릭시 애니메이션으로 위치 이동

    var menu = $(".menu>ul>li");
    var wrap = $("#center>div");
    menu.click(function(){
        var tg = $(this);
        var i = tg.index(); // index 순서
        var section = wrap.eq(i); // eq 선택한 하나의 변수
        var top = section.offset().top;
        $("html,body").stop().animate({scrollTop:top});
    });
});
