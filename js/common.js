import $ from "jquery";
$(function(){
    // 네비게이션 버튼
    $('header .btnNav').on('click', function(e){
        $(this).css('display', 'none')
        $('header nav').stop().animate({left: '0'})
    })

    // 네비게이션 닫기버튼
    $('header .btnNavClose').on('click', function(e){
        $('header .btnNav').css('display', 'flex')
        $('header nav').stop().animate({left: '-100%'})
    })

    //섹션 이동
    $('header .mainNav > li, #submenu > ul li').on('click', function(e){
        let headerHeight = $('header').outerHeight()
        let pos = parseInt($('main > section').eq($(this).index()).offset().top)
        $('html, body').stop().animate({scrollTop: pos - headerHeight}, 500)
        console.log($(this).index())
    })

    // 화면 스크롤시
    let headerFlag = false
    $(document).on('scroll', function(e){
      // 헤더 색상 변경
       if($(this).scrollTop() > $('header').outerHeight() && !headerFlag){
        $('header').addClass('on')
        $('#top').stop().fadeIn()
        headerFlag = true
       }else if($(this).scrollTop() <= $('header').outerHeight() && headerFlag) {
        $('header').removeClass('on')
        $('#top').stop().fadeOut()
        headerFlag = false
       }
    })
    
    // 화면이 980보다 클 경우 네비게이션 레이아웃 수정
    $(window).on('resize', function(){
        if($(this).width() > 980) {
            $('header nav').css('left', '-100%')
            $('header .btnNav').css('display', 'flex')
        }
    })

    // 탑 버튼
    $('#top').on('click', function(e){
      $('html, body').stop().animate({scrollTop: 0},300)
    })

    // 메인 슬라이드
    var swiper = new Swiper("#gallery", {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },  
        speed: 2000,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      })

      // work
      $('#work ul li').on('click', function(e){
        let idx = $(this).index()
        $('#listWrap .all').css('display','none')
        $('#listWrap .all').eq(idx).css('display','flex')
        $(this).addClass('act').siblings().removeClass('act')
      })
})